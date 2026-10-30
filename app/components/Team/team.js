import SectionTitle from "../SectionTitle/sectionTitle";
import MemberCard from "../MemberCard/memberCard";
import { team } from "../../data/landing";

function Team() {
  return (
    <section id="equipe" className="section team">
      <SectionTitle
        tag="04 — NOSSA EQUIPE"
        title="Quem desenvolveu"
        highlight="a Eletric Minds?"
      >
        Conheça os integrantes responsáveis pelo desenvolvimento do projeto.
      </SectionTitle>

      <div className="team-grid">
        {team.map((member, index) => (
          <MemberCard
            key={member.rm}
            number={String(index + 1).padStart(2, "0")}
            name={member.name}
            rm={member.rm}
          />
        ))}
      </div>
    </section>
  );
}

export default Team;
