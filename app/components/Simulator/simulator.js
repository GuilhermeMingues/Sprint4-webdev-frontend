"use client";

import Section from "../Section/section";
import SectionTitle from "../SectionTitle/sectionTitle";
import OptionGroup from "../OptionGroup/optionGroup";
import Button from "../Button/button";
import useSimulator, { formatarPreco } from "../../hooks/useSimulator";

function Simulator() {
  const {
    storageOptions,
    colorOptions,
    loading,
    error,
    storageId,
    setStorageId,
    colorId,
    setColorId,
    resultado,
    history,
    limparHistorico,
    calcularPreco,
  } = useSimulator();

  return (
    <Section id="simulador" bordered>
      <SectionTitle tag="06 — SIMULADOR" title="Monte o seu" highlight="JOVI.">
        Escolha armazenamento e cor e veja uma simulação de preço. Sua última
        escolha fica salva neste navegador.
      </SectionTitle>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="grid content-start gap-[25px]">
          {loading && <p className="text-sm text-jovi-faint">Carregando opções...</p>}

          {error && <p className="text-sm text-red-400">{error}</p>}

          {!loading && !error && (
            <>
              <OptionGroup
                label="Armazenamento"
                options={storageOptions}
                selected={storageId}
                onSelect={setStorageId}
              />

              <OptionGroup
                label="Cor"
                options={colorOptions}
                selected={colorId}
                onSelect={setColorId}
              />

              <Button
                type="button"
                className="justify-self-start"
                onClick={calcularPreco}
              >
                Calcular preço personalizado
              </Button>
            </>
          )}
        </div>

        <div className="flex flex-col justify-center gap-[15px] border border-jovi-border bg-jovi-bg-alt p-[35px]">
          {resultado === null ? (
            <p className="text-sm text-jovi-faint">
              Escolha as opções e clique em calcular.
            </p>
          ) : (
            <>
              <span className="text-xs tracking-[2px] text-jovi-faint">
                Preço estimado
              </span>
              <strong className="text-[40px] font-bold text-jovi-accent">
                {formatarPreco(resultado.preco)}
              </strong>
              <p className="text-[13px] text-jovi-muted">
                Inclui {resultado.desconto}% de desconto regional simulado.
              </p>
            </>
          )}

          {history.length > 0 && (
            <div className="mt-[15px] border-t border-jovi-border pt-[15px]">
              <div className="mb-2.5 flex items-center justify-between">
                <h4 className="text-[13px] font-bold text-jovi-faint">
                  Últimas simulações
                </h4>
                <button
                  type="button"
                  onClick={limparHistorico}
                  className="cursor-pointer text-xs text-jovi-accent"
                >
                  Limpar
                </button>
              </div>
              <ul className="grid gap-2">
                {history.map((item) => (
                  <li
                    key={item.data + item.preco}
                    className="text-[13px] text-jovi-muted"
                  >
                    {item.storage} · {item.color} — {formatarPreco(item.preco)}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}

export default Simulator;
