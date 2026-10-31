function MemberCard({ number, name, rm }) {
  return (
    <article className="flex min-h-[180px] flex-col justify-between border border-jovi-border p-[25px] transition duration-300 hover:-translate-y-[5px] hover:border-jovi-accent hover:bg-jovi-bg-alt sm:min-h-[220px]">
      <div className="text-xs text-jovi-accent">{number}</div>

      <h3 className="text-[17px] font-bold">{name}</h3>

      <span className="text-xs text-jovi-faint">RM {rm}</span>
    </article>
  );
}

export default MemberCard;
