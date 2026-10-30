function MemberCard({ number, name, rm }) {
  return (
    <article className="member">
      <div className="member-number">{number}</div>

      <h3>{name}</h3>

      <span>RM {rm}</span>
    </article>
  );
}

export default MemberCard;
