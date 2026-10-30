function AudienceItem({ number, title, description }) {
  return (
    <div>
      <strong>{number}</strong>

      <div>
        <h3>{title}</h3>

        <p>{description}</p>
      </div>
    </div>
  );
}

export default AudienceItem;
