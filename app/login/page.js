"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "../components/Header/header";
import useAuth from "../hooks/useAuth";
import useLoginForm from "../hooks/useLoginForm";

export default function LoginPage() {
  const { autenticado, pronto } = useAuth();
  const router = useRouter();
  const { email, setEmail, senha, setSenha, erro, entrando, handleSubmit } =
    useLoginForm();

  useEffect(() => {
    if (pronto && autenticado) router.replace("/minha-conta");
  }, [pronto, autenticado, router]);

  return (
    <>
      <Header />

      <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-5 pt-28 pb-16 sm:px-0">
        <span className="text-xs tracking-[3px] text-jovi-faint">ÁREA DO CLIENTE</span>

        <h1 className="mt-4 mb-3 text-4xl leading-none font-bold tracking-tight sm:text-5xl">
          Entre na sua <strong className="text-jovi-accent">conta JOVI.</strong>
        </h1>

        <p className="mb-10 text-sm text-jovi-muted">
          Acompanhe suas simulações e consulte a entrega na sua região.
        </p>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="grid gap-5 rounded-2xl border border-jovi-border bg-jovi-bg-alt p-6 sm:p-8"
        >
          <label className="grid gap-2 text-sm text-jovi-faint">
            E-mail
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="voce@email.com"
              autoComplete="email"
              className="rounded-lg border border-jovi-border bg-jovi-bg px-4 py-3 text-white outline-none transition focus:border-jovi-accent"
            />
          </label>

          <label className="grid gap-2 text-sm text-jovi-faint">
            Senha
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
              className="rounded-lg border border-jovi-border bg-jovi-bg px-4 py-3 text-white outline-none transition focus:border-jovi-accent"
            />
          </label>

          {erro && <p className="text-sm text-red-400">{erro}</p>}

          <button
            type="submit"
            disabled={entrando}
            className="rounded-full bg-jovi-accent px-6 py-3 text-sm font-bold text-white transition hover:bg-jovi-accent-hover disabled:opacity-60"
          >
            {entrando ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <Link href="/" className="mt-8 text-sm text-jovi-muted hover:text-white">
          ← Voltar para a página inicial
        </Link>
      </main>
    </>
  );
}
