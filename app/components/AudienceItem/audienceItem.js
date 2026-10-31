function AudienceItem({ number, title, description }) {
  return (
    <div className="grid grid-cols-[45px_1fr] gap-[15px] border-t border-jovi-border py-5">
      <strong className="font-bold text-jovi-accent">{number}</strong>

      <div>
        <h3 className="mb-[5px] text-[17px] font-bold">{title}</h3>

        <p className="text-[13px] text-jovi-muted">{description}</p>
      </div>
    </div>
  );
}

export default AudienceItem;
