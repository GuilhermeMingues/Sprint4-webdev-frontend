"use client";

import { useState } from "react";

const prazosPorRegiao = [
  { estados: ["SP"], dias: 2, frete: 0 },
  { estados: ["RJ", "MG", "ES"], dias: 3, frete: 19.9 },
  { estados: ["PR", "SC", "RS"], dias: 4, frete: 24.9 },
  { estados: ["DF", "GO", "MT", "MS"], dias: 5, frete: 29.9 },
  {
    estados: ["BA", "SE", "AL", "PE", "PB", "RN", "CE", "PI", "MA"],
    dias: 6,
    frete: 34.9,
  },
  { estados: ["TO", "PA", "AP", "RR", "AM", "AC", "RO"], dias: 8, frete: 39.9 },
];

function formatarCep(valor) {
  const numeros = valor.replace(/\D/g, "").slice(0, 8);
  return numeros.length > 5 ? `${numeros.slice(0, 5)}-${numeros.slice(5)}` : numeros;
}

function useCep() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState(null);
  const [entrega, setEntrega] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  function alterarCep(valor) {
    setCep(formatarCep(valor));
  }

  async function consultar(event) {
    event?.preventDefault();

    const numeros = cep.replace(/\D/g, "");
    if (numeros.length !== 8) {
      setErro("O CEP precisa ter 8 números.");
      return;
    }

    setCarregando(true);
    setErro("");
    setEndereco(null);
    setEntrega(null);

    try {
      const resposta = await fetch(`https://viacep.com.br/ws/${numeros}/json/`);
      const dados = await resposta.json();

      if (dados.erro) throw new Error("CEP não encontrado.");

      setEndereco(dados);
      setEntrega(prazosPorRegiao.find((r) => r.estados.includes(dados.uf)));
    } catch (err) {
      setErro(
        err.message === "CEP não encontrado."
          ? err.message
          : "Não foi possível consultar o CEP agora."
      );
    } finally {
      setCarregando(false);
    }
  }

  return { cep, alterarCep, consultar, endereco, entrega, carregando, erro };
}

export default useCep;
