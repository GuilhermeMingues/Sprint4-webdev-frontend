import SectionTitle from "../SectionTitle/sectionTitle";
import SolutionCard from "../SolutionCard/solutionCard";
import { solutions } from "../../data/landing";

function Solution() {
  return (
    <section id="solucao" className="section solution">
      <SectionTitle
        tag="01 — A SOLUÇÃO"
        title="Uma proposta criada"
        highlight="para o Brasil."
      >
        A JOVI busca apresentar uma alternativa de smartphone alinhada ao
        contexto brasileiro, unindo tecnologia, praticidade e uma experiência
        pensada para seus usuários.
      </SectionTitle>

      <div className="solution-grid">
        {solutions.map((item, index) => (
          <SolutionCard
            key={item.title}
            number={String(index + 1).padStart(2, "0")}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Solution;
