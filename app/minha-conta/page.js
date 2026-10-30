"use client";

import Link from "next/link";
import Header from "../components/Header/header";
import PrivateRoute from "../components/PrivateRoute/privateRoute";
import DeliveryCheck from "../components/DeliveryCheck/deliveryCheck";
import useAuth from "../hooks/useAuth";
import useLocalStorage from "../hooks/useLocalStorage";
import { formatarPreco } from "../hooks/useSimulator";

function Painel() {
  const { usuario, logout } = useAuth();
  const [historico] = useLocalStorage("jovi:history", []);

  return (
    <main className="mx-auto max-w-6xl px-5 pt-32 pb-20 sm:px-8">
      <div className="flex flex-col gap-6 border-b border-jovi-border pb-10 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="text-xs tracking-[3px] text-jovi-faint">MINHA CONTA</span>
          <h1 className="mt-4 text-4xl leading-none font-bold tracking-tight sm:text-6xl">
            Olá, <strong className="text-jovi-accent">{usuario.nome}.</strong>
          </h1>
          <p className="mt-4 text-sm text-jovi-muted">{usuario.email}</p>
        </div>

        <button
          type="button"
          onClick={logout}
          className="self-start rounded-full border border-jovi-border px-5 py-2 text-sm transition hover:border-jovi-accent md:self-auto"
        >
          Sair
        </button>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-jovi-border bg-jovi-bg-alt p-6 sm:p-8">
          <h2 className="text-lg font-bold">Suas simulações</h2>

          {historico.length === 0 ? (
            <p className="mt-4 text-sm text-jovi-faint">
              Você ainda não simulou nenhum aparelho.{" "}
              <Link href="/#simulador" className="text-jovi-accent hover:underline">
                Fazer uma simulação
              </Link>
            </p>
          ) : (
            <ul className="mt-6 grid gap-3">
              {historico.map((item) => (
                <li
                  key={item.data + item.preco}
                  className="flex flex-col gap-1 border-t border-jovi-border pt-3 text-sm sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="text-jovi-muted">
                    {item.storage} · {item.color}
                    <small className="block text-xs text-jovi-faint">{item.data}</small>
                  </span>
                  <strong className="text-jovi-accent">{formatarPreco(item.preco)}</strong>
                </li>
              ))}
            </ul>
          )}
        </section>

        <DeliveryCheck />
      </div>
    </main>
  );
}

export default function MinhaContaPage() {
  return (
    <>
      <Header />
      <PrivateRoute>
        <Painel />
      </PrivateRoute>
    </>
  );
}
