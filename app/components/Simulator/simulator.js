"use client";

import SectionTitle from "../SectionTitle/sectionTitle";
import OptionGroup from "../OptionGroup/optionGroup";
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
    <section id="simulador" className="section simulator">
      <SectionTitle tag="06 — SIMULADOR" title="Monte o seu" highlight="JOVI.">
        Escolha armazenamento e cor e veja uma simulação de preço. Sua última
        escolha fica salva neste navegador.
      </SectionTitle>

      <div className="simulator-grid">
        <div className="simulator-options">
          {loading && (
            <p className="simulator-placeholder">Carregando opções...</p>
          )}

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

              <button
                type="button"
                className="button primary"
                onClick={calcularPreco}
              >
                Calcular preço personalizado
              </button>
            </>
          )}
        </div>

        <div className="simulator-result">
          {resultado === null ? (
            <p className="simulator-placeholder">
              Escolha as opções e clique em calcular.
            </p>
          ) : (
            <>
              <span>Preço estimado</span>
              <strong>{formatarPreco(resultado.preco)}</strong>
              <p>Inclui {resultado.desconto}% de desconto regional simulado.</p>
            </>
          )}

          {history.length > 0 && (
            <div className="simulator-history">
              <div className="simulator-history-header">
                <h4>Últimas simulações</h4>
                <button type="button" onClick={limparHistorico}>
                  Limpar
                </button>
              </div>
              <ul>
                {history.map((item) => (
                  <li key={item.data + item.preco}>
                    {item.storage} · {item.color} — {formatarPreco(item.preco)}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Simulator;
