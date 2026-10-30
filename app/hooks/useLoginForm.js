"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import useAuth from "./useAuth";

function useLoginForm() {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [entrando, setEntrando] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!email || !senha) {
      setErro("Informe e-mail e senha.");
      return;
    }

    setEntrando(true);
    setErro("");

    try {
      await login(email, senha);
      router.push("/minha-conta");
    } catch (err) {
      setErro(err.message || "Não foi possível entrar agora.");
      setEntrando(false);
    }
  }

  return { email, setEmail, senha, setSenha, erro, entrando, handleSubmit };
}

export default useLoginForm;
