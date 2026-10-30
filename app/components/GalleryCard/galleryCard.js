function GalleryCard({ tag, title, description }) {
  return (
    <article className="gallery-item">
      <div className="gallery-content">
        <span>{tag}</span>

        <h3>{title}</h3>

        <p>{description}</p>
      </div>
    </article>
  );
}

export default GalleryCard;
