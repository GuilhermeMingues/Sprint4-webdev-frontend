"use client";

import useCep from "../../hooks/useCep";
import { formatarPreco } from "../../hooks/useSimulator";

function DeliveryCheck() {
  const { cep, alterarCep, consultar, endereco, entrega, carregando, erro } =
    useCep();

  return (
    <section className="rounded-2xl border border-jovi-border bg-jovi-bg-alt p-6 sm:p-8">
      <h2 className="text-lg font-bold">Entrega na sua região</h2>
      <p className="mt-2 text-sm text-jovi-faint">
        Digite seu CEP para ver o prazo e o frete do seu JOVI.
      </p>

      <form onSubmit={consultar} className="mt-6 flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          inputMode="numeric"
          value={cep}
          onChange={(e) => alterarCep(e.target.value)}
          placeholder="00000-000"
          aria-label="CEP"
          className="flex-1 rounded-lg border border-jovi-border bg-jovi-bg px-4 py-3 text-white outline-none transition focus:border-jovi-accent"
        />

        <button
          type="submit"
          disabled={carregando}
          className="rounded-full bg-jovi-accent px-6 py-3 text-sm font-bold text-white transition hover:bg-jovi-accent-hover disabled:opacity-60"
        >
          {carregando ? "Consultando..." : "Consultar"}
        </button>
      </form>

      {erro && <p className="mt-4 text-sm text-red-400">{erro}</p>}

      {endereco && entrega && (
        <div className="mt-6 grid gap-4 border-t border-jovi-border pt-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <span className="text-xs tracking-[2px] text-jovi-faint">ENDEREÇO</span>
            <p className="mt-1 text-sm text-jovi-muted">
              {[endereco.logradouro, endereco.bairro].filter(Boolean).join(", ")}
              {endereco.logradouro || endereco.bairro ? " — " : ""}
              {endereco.localidade}/{endereco.uf}
            </p>
          </div>

          <div>
            <span className="text-xs tracking-[2px] text-jovi-faint">PRAZO</span>
            <p className="mt-1 text-2xl font-bold">
              {entrega.dias} dias úteis
            </p>
          </div>

          <div>
            <span className="text-xs tracking-[2px] text-jovi-faint">FRETE</span>
            <p className="mt-1 text-2xl font-bold text-jovi-accent">
              {entrega.frete === 0 ? "Grátis" : formatarPreco(entrega.frete)}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default DeliveryCheck;
