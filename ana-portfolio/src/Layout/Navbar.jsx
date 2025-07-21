import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar-container">
      <button
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {open && (
        <nav className="navbar-menu">
          <ul>
            <li><a href="#manifiesto">Manifiesto</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#soluciones">Soluciones</a></li>
            <li><a href="#sobre-mi">Sobre mí</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
