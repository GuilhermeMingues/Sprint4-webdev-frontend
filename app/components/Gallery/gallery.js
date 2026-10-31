import Section from "../Section/section";
import SectionTitle from "../SectionTitle/sectionTitle";
import GalleryCard from "../GalleryCard/galleryCard";
import { concepts } from "../../data/landing";

function Gallery() {
  return (
    <Section id="galeria" bordered>
      <SectionTitle tag="03 — GALERIA" title="Conheça o conceito" highlight="JOVI.">
        Uma representação visual da proposta do projeto Smartphone Brasil.
      </SectionTitle>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[2fr_1fr] lg:grid-rows-[300px_300px]">
        <article className="relative grid min-h-[450px] place-items-center overflow-hidden border border-jovi-border bg-jovi-bg-alt p-[30px] sm:min-h-[500px] lg:row-span-2 lg:min-h-0">
          <div className="relative grid h-[290px] w-[150px] -rotate-8 place-items-center rounded-[30px] border-[6px] border-device-600 bg-device-700 sm:h-[350px] sm:w-[180px]">
            <div className="absolute top-3 h-[18px] w-[55px] rounded-[20px] bg-[#050505]"></div>

            <div className="text-[25px] font-bold tracking-[4px] text-jovi-accent">
              JOVI
            </div>
          </div>

          <div className="absolute bottom-[25px] left-[30px]">
            <span className="text-[10px] tracking-[2px] text-jovi-faint">
              CONCEITO 01
            </span>
            <h3 className="mt-[5px] text-[1.17em] font-bold">Design do Smartphone</h3>
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
    </Section>
  );
}

export default Gallery;
