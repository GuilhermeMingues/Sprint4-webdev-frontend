import SectionTitle from "../SectionTitle/sectionTitle";
import GalleryCard from "../GalleryCard/galleryCard";
import { concepts } from "../../data/landing";

function Gallery() {
  return (
    <section id="galeria" className="section gallery">
      <SectionTitle tag="03 — GALERIA" title="Conheça o conceito" highlight="JOVI.">
        Uma representação visual da proposta do projeto Smartphone Brasil.
      </SectionTitle>

      <div className="gallery-grid">
        <article className="gallery-item large">
          <div className="gallery-phone">
            <div className="camera"></div>

            <div className="gallery-logo">JOVI</div>
          </div>

          <div className="gallery-caption">
            <span>CONCEITO 01</span>
            <h3>Design do Smartphone</h3>
          </div>
        </article>

        {concepts.map((item) => (
          <GalleryCard
            key={item.tag}
            tag={item.tag}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
