import React, { useState, useContext } from "react";
import { LanguageContext } from "../Shared/LanguageContext";
import { texts } from "../Shared/texts";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { language } = useContext(LanguageContext);
  const navItems = texts[language].navbar;

  return (
    <div className="navbar-container">
      <button
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label={navItems.ariaLabel}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {open && (
        <nav className="navbar-menu">
          <ul>
            <li><a href="#manifiesto">{navItems.manifiesto}</a></li>
            <li><a href="#proyectos">{navItems.proyectos}</a></li>
            <li><a href="#soluciones">{navItems.soluciones}</a></li>
            <li><a href="#sobre-mi">{navItems.sobreMi}</a></li>
            <li><a href="#contacto">{navItems.contacto}</a></li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
