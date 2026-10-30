"use client";

import { useSyncExternalStore } from "react";

const ouvintes = new Set();

function inscrever(callback) {
  ouvintes.add(callback);
  window.addEventListener("storage", callback);

  return () => {
    ouvintes.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function converter(bruto, valorInicial) {
  if (bruto === null) return valorInicial;

  try {
    return JSON.parse(bruto);
  } catch {
    return valorInicial;
  }
}

function useLocalStorage(chave, valorInicial) {
  const bruto = useSyncExternalStore(
    inscrever,
    () => window.localStorage.getItem(chave),
    () => null
  );

  const valor = converter(bruto, valorInicial);

  function setValor(novoValor) {
    const atual = converter(window.localStorage.getItem(chave), valorInicial);
    const proximo =
      typeof novoValor === "function" ? novoValor(atual) : novoValor;

    if (proximo === null) {
      window.localStorage.removeItem(chave);
    } else {
      window.localStorage.setItem(chave, JSON.stringify(proximo));
    }

    ouvintes.forEach((callback) => callback());
  }

  return [valor, setValor];
}

export default useLocalStorage;
