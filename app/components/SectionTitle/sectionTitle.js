function SectionTitle({ tag, title, highlight, children }) {
  return (
    <div className="section-title">
      <span>{tag}</span>

      <h2>
        {title}
        <strong> {highlight}</strong>
      </h2>

      {children && <p>{children}</p>}
    </div>
  );
}

export default SectionTitle;
