import Link from "next/link";
import { navLinks } from "../../data/landing";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <Link href="/" className="logo">
          <img src="/Jovi-icon.jpeg" alt="JOVI" className="logo-icon" />
        </Link>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <a href="/#solucao" className="nav-button">
          Conheça a JOVI
        </a>
      </nav>
    </header>
  );
}

export default Header;
