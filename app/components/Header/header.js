"use client";

import Link from "next/link";
import Image from "next/image";
import useAuth from "../../hooks/useAuth";
import { navLinks } from "../../data/landing";

function Header() {
  const { autenticado } = useAuth();

  return (
    <header className="fixed top-0 z-[1000] w-full border-b border-jovi-border bg-jovi-bg/92 backdrop-blur-[10px]">
      <nav className="mx-auto grid min-h-[65px] max-w-[1200px] grid-cols-[1fr_auto] items-center gap-[35px] px-5 sm:min-h-20 sm:px-[30px] lg:grid-cols-[1fr_auto_auto]">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[25px] font-black tracking-[5px] sm:text-[32px]"
        >
          <Image
            src="/Jovi-icon.jpeg"
            alt="JOVI"
            width={32}
            height={32}
            className="size-8 rounded-lg"
          />
        </Link>

        <ul className="hidden gap-[25px] lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-jovi-muted transition duration-300 hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={autenticado ? "/minha-conta" : "/login"}
          className="rounded-full border border-jovi-accent px-3 py-2 text-[11px] text-white transition duration-300 hover:bg-jovi-accent sm:px-[18px] sm:py-2.5 sm:text-[13px]"
        >
          {autenticado ? "Minha conta" : "Entrar"}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
