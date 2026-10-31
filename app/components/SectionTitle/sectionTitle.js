function SectionTitle({ tag, title, highlight, compact = false, children }) {
  return (
    <div className={`max-w-[750px] ${compact ? "" : "mb-[45px] sm:mb-[70px]"}`}>
      <span className="text-xs tracking-[3px] text-jovi-faint">{tag}</span>

      <h2 className="mt-[18px] mb-[25px] text-[42px] leading-none font-bold tracking-[-2px] sm:text-[length:clamp(40px,5vw,65px)]">
        {title}
        <strong className="text-jovi-accent"> {highlight}</strong>
      </h2>

      {children && <p className="max-w-[650px] text-jovi-muted">{children}</p>}
    </div>
  );
}

export default SectionTitle;
