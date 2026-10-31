function SolutionCard({ number, title, description }) {
  return (
    <article className="min-h-[220px] border border-jovi-border p-[35px] transition duration-300 hover:-translate-y-2 hover:border-jovi-accent sm:min-h-[260px]">
      <div className="mb-[70px] text-[13px] text-jovi-accent">{number}</div>

      <h3 className="mb-3 text-[25px] font-bold">{title}</h3>

      <p className="text-sm text-jovi-muted">{description}</p>
    </article>
  );
}

export default SolutionCard;
