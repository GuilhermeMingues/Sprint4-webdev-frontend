import Section from "../Section/section";
import SectionTitle from "../SectionTitle/sectionTitle";
import AudienceItem from "../AudienceItem/audienceItem";
import { audiences } from "../../data/landing";

function Audience() {
  return (
    <Section
      id="publico"
      className="grid grid-cols-1 items-center gap-20 lg:grid-cols-[0.8fr_1.2fr]"
    >
      <div className="grid min-h-[350px] place-items-center border border-jovi-border bg-jovi-bg-alt sm:min-h-[400px] lg:min-h-[550px]">
        <div className="grid h-[380px] w-[190px] place-items-center rounded-[30px] border-[7px] border-device-600 bg-device-800 shadow-[0_30px_70px_rgba(0,0,0,0.6)]">
          <div className="size-[60px] rounded-full border-2 border-jovi-accent"></div>
        </div>
      </div>

      <div>
        <SectionTitle
          compact
          tag="02 — PÚBLICO-ALVO"
          title="Para quem é a"
          highlight="JOVI?"
        >
          A solução é direcionada a usuários que buscam uma experiência de
          smartphone adequada à realidade brasileira, valorizando tecnologia,
          praticidade e acessibilidade.
        </SectionTitle>

        <div className="mt-[45px]">
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
    </Section>
  );
}

export default Audience;
