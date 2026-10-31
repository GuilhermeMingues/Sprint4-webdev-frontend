function GalleryCard({ tag, title, description }) {
  return (
    <article className="relative min-h-[250px] overflow-hidden border border-jovi-border bg-jovi-bg-alt p-[30px] lg:min-h-0">
      <div className="flex h-full flex-col justify-center">
        <span className="text-[10px] tracking-[2px] text-jovi-faint">{tag}</span>

        <h3 className="my-2.5 text-[28px] font-bold">{title}</h3>

        <p className="max-w-[300px] text-[13px] text-jovi-muted">{description}</p>
      </div>
    </article>
  );
}

export default GalleryCard;
