"use client";

import { useState } from "react";

const camposVazios = { nome: "", email: "", mensagem: "" };

function validar(valores) {
  const erros = {};

  if (valores.nome.trim().length < 3) erros.nome = "Digite seu nome completo.";
  if (!/^\S+@\S+\.\S+$/.test(valores.email)) erros.email = "E-mail inválido.";
  if (valores.mensagem.trim().length < 10)
    erros.mensagem = "Escreva pelo menos 10 caracteres.";

  return erros;
}

function useContactForm() {
  const [valores, setValores] = useState(camposVazios);
  const [erros, setErros] = useState({});
  const [enviando, setEnviando] = useState(false);
  const [retorno, setRetorno] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setValores((anterior) => ({ ...anterior, [name]: value }));
    setErros((anterior) => ({ ...anterior, [name]: undefined }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const novosErros = validar(valores);
    setErros(novosErros);
    if (Object.keys(novosErros).length > 0) return;

    setEnviando(true);
    setRetorno(null);

    try {
      const resposta = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(valores),
      });
      const dados = await resposta.json();

      if (!resposta.ok) throw new Error(dados.erro);

      setRetorno({
        tipo: "sucesso",
        texto: `${dados.mensagem} Protocolo: ${dados.protocolo}`,
      });
      setValores(camposVazios);
    } catch (err) {
      setRetorno({
        tipo: "erro",
        texto: err.message || "Não foi possível enviar agora.",
      });
    } finally {
      setEnviando(false);
    }
  }

  return { valores, erros, enviando, retorno, handleChange, handleSubmit };
}

export default useContactForm;
