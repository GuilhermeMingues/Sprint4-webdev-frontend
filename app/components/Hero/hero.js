"use client";

import Button from "../Button/button";

function Hero() {
  return (
    <section
      id="inicio"
      className="mx-auto grid min-h-screen max-w-[1200px] grid-cols-1 items-center gap-[60px] px-5 pt-[120px] pb-[70px] text-center sm:px-[30px] sm:pt-[140px] sm:pb-20 lg:grid-cols-[1.2fr_0.8fr] lg:text-left"
    >
      <div className="mx-auto max-w-[650px] lg:mx-0">
        <span className="mb-5 inline-block text-xs tracking-[3px] text-jovi-muted">
          SMARTPHONE BRASIL
        </span>

        <h1 className="mb-[30px] text-[52px] leading-[0.95] font-bold tracking-[-3px] sm:text-[length:clamp(50px,7vw,90px)] sm:tracking-[-4px]">
          Tecnologia pensada
          <span className="block text-jovi-accent">para o Brasil.</span>
        </h1>

        <p className="mx-auto mb-[35px] max-w-[560px] text-[15px] text-jovi-muted sm:text-[17px] lg:mx-0">
          A JOVI apresenta uma nova proposta de smartphone, desenvolvida para
          aproximar tecnologia e necessidades do público brasileiro.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-[15px] lg:justify-start">
        <Button href="#solucao">Conheça a solução</Button>

        <Button href="#galeria" variant="secondary">
          Ver projeto
        </Button>
      </div>
    </section>
  );
}

export default Hero;
