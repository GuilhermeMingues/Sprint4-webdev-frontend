import AudienceItem from "../AudienceItem/audienceItem";
import { audiences } from "../../data/landing";

function Audience() {
  return (
    <section id="publico" className="section audience">
      <div className="audience-image">
        <div className="mini-phone">
          <div></div>
        </div>
      </div>

      <div className="audience-content">
        <span>02 — PÚBLICO-ALVO</span>

        <h2>
          Para quem é a <strong>JOVI?</strong>
        </h2>

        <p>
          A solução é direcionada a usuários que buscam uma experiência de
          smartphone adequada à realidade brasileira, valorizando tecnologia,
          praticidade e acessibilidade.
        </p>

        <div className="audience-items">
          {audiences.map((item, index) => (
            <AudienceItem
              key={item.title}
              number={String(index + 1).padStart(2, "0")}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Audience;
