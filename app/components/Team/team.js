import Section from "../Section/section";
import SectionTitle from "../SectionTitle/sectionTitle";
import MemberCard from "../MemberCard/memberCard";
import { team } from "../../data/landing";

function Team() {
  return (
    <Section id="equipe" bordered>
      <SectionTitle
        tag="04 — NOSSA EQUIPE"
        title="Quem desenvolveu"
        highlight="a Eletric Minds?"
      >
        Conheça os integrantes responsáveis pelo desenvolvimento do projeto.
      </SectionTitle>

      <div className="grid grid-cols-1 gap-[15px] sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member, index) => (
          <MemberCard
            key={member.rm}
            number={String(index + 1).padStart(2, "0")}
            name={member.name}
            rm={member.rm}
          />
        ))}
      </div>
    </Section>
  );
}

export default Team;
