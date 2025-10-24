import React from "react";

export const Header = () => {
  return (
    <header className="w-full bg-primary-600 text-black flex items-center gap-16 px-8 py-4 fixed top-0 left-0 z-50">
      <a href="/">
        <img
          src="/images/logo_gg.png"
          alt="Logo"
          className="w-20 h-auto"
        />
      </a>

      <nav>
        <ul className="flex gap-15 text-lg font-poppins tracking-wide">
          <li><a href="/" className="hover:text-muted">Home</a></li>
          <li><a href="/about" className="hover:text-muted">Nuestra Firma</a></li>
          <li><a href="/contact" className="hover:text-muted">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};
