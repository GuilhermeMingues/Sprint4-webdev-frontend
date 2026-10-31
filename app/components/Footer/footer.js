"use client";

function Footer() {
  return (
    <footer className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-5 border-t border-jovi-border px-5 py-[30px] text-center sm:px-[30px] sm:py-10 lg:grid-cols-[1fr_1fr_auto] lg:text-left">
      <div className="text-[25px] font-bold tracking-[4px]">Eletric Minds</div>

      <p className="text-[13px] text-jovi-faint">Smartphone Brasil · 2026</p>

      <a href="#inicio" className="text-[13px] text-jovi-muted">
        Voltar ao topo ↑
      </a>
    </footer>
  );
}

export default Footer;
