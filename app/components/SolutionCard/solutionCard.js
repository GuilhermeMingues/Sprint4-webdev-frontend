function SolutionCard({ number, title, description }) {
  return (
    <article className="solution-card">
      <div className="card-number">{number}</div>

      <h3>{title}</h3>

      <p>{description}</p>
    </article>
  );
}

export default SolutionCard;
