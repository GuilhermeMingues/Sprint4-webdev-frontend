function Section({ id, bordered = false, className = "", children }) {
  const border = bordered ? "border-t border-jovi-border" : "";

  return (
    <section
      id={id}
      className={`mx-auto max-w-[1200px] px-5 py-20 sm:px-[30px] sm:py-[120px] ${border} ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;
