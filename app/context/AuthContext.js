"use client";

import { createContext, useSyncExternalStore } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const AuthContext = createContext(null);

const inscreverNada = () => () => {};

export function AuthProvider({ children }) {
  const [sessao, setSessao] = useLocalStorage("jovi:sessao", null);

  const pronto = useSyncExternalStore(
    inscreverNada,
    () => true,
    () => false
  );

  async function login(email, senha) {
    const resposta = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });
    const dados = await resposta.json();

    if (!resposta.ok) throw new Error(dados.erro);

    setSessao(dados);
    return dados.usuario;
  }

  function logout() {
    setSessao(null);
  }

  return (
    <AuthContext.Provider
      value={{
        usuario: sessao?.usuario ?? null,
        autenticado: Boolean(sessao?.token),
        pronto,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
