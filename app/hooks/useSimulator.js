"use client";

import { useState } from "react";
import useFetch from "./useFetch";
import useLocalStorage from "./useLocalStorage";

function useSimulator() {
  const { data: config, loading, error } = useFetch("/api/configuracoes");

  const [storageId, setStorageId] = useLocalStorage("jovi:storage", "128gb");
  const [colorId, setColorId] = useLocalStorage("jovi:color", "ebony");
  const [history, setHistory] = useLocalStorage("jovi:history", []);

  const [resultado, setResultado] = useState(null);

  function calcularPreco() {
    if (!config) return;

    const storage =
      config.armazenamentos.find((s) => s.id === storageId) ??
      config.armazenamentos[0];
    const color = config.cores.find((c) => c.id === colorId) ?? config.cores[0];

    const precoBase = config.precoBase * storage.multiplicador + color.adicional;
    const descontoAleatorio = Math.random() * (0.15 - 0.05) + 0.05;
    const precoFinal =
      Math.round(precoBase * (1 - descontoAleatorio) * 100) / 100;

    setResultado({
      preco: precoFinal,
      desconto: Math.round(descontoAleatorio * 100),
    });

    const novoRegistro = {
      storage: storage.label,
      color: color.label,
      preco: precoFinal,
      data: new Date().toLocaleString("pt-BR"),
    };

    setHistory((anterior) => [novoRegistro, ...anterior].slice(0, 5));
  }

  return {
    storageOptions: config?.armazenamentos ?? [],
    colorOptions: config?.cores ?? [],
    loading,
    error,
    storageId,
    setStorageId,
    colorId,
    setColorId,
    resultado,
    history,
    limparHistorico: () => setHistory([]),
    calcularPreco,
  };
}

export function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default useSimulator;
