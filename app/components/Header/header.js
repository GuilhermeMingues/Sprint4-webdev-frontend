"use client";

import Link from "next/link";
import useAuth from "../../hooks/useAuth";
import { navLinks } from "../../data/landing";

function Header() {
  const { autenticado } = useAuth();

  return (
    <header className="header">
      <nav className="navbar">
        <Link href="/" className="logo">
          <img src="/Jovi-icon.jpeg" alt="JOVI" className="logo-icon" />
        </Link>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <Link
          href={autenticado ? "/minha-conta" : "/login"}
          className="nav-button"
        >
          {autenticado ? "Minha conta" : "Entrar"}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
