import React, { useEffect, useContext } from "react";
import "./OrbitalMenu.css";
import { LanguageContext } from "../Shared/LanguageContext";
import manifiestoIcon from '../assets/icons/manifiesto.svg';
import proyectosIcon from '../assets/icons/proyectos.svg';
import solucionesIcon from '../assets/icons/soluciones.svg';
import stackIcon from '../assets/icons/stack.svg';
import sobreMiIcon from '../assets/icons/sobre-mi.svg';
import contactoIcon from '../assets/icons/contacto.svg';
import { texts } from "../Shared/texts";

function OrbitalMenu() {
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const icons = document.querySelectorAll(".icono-con-nota");
    const isMobile = window.innerWidth < 768;
    const radius = isMobile ? 90 : 180;
    const centerX = isMobile ? window.innerWidth / 2 : 250;
    const centerY = isMobile ? 120 : 230;
    const total = icons.length;

    icons.forEach((icon, i) => {
      const angle = Math.PI / 2 + (Math.PI * (total - 1 - i)) / (total - 1);
      const x = centerX - radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      icon.style.left = `${x}px`;
      icon.style.top = `${y}px`;
    });
  }, []);

  return (
    <div className="orbital-menu">
      <div className="icono-con-nota">
        <a href="#manifiesto" className="orbital-icon">
          <img src={manifiestoIcon} alt="Icono Manifiesto" className="icono-svg manifiesto-flota" />
        </a>
        <span className="nota-icono">{texts[language].notaManifiesto}</span>
      </div>

      <div className="icono-con-nota">
        <a href="#proyectos" className="orbital-icon">
          <img src={proyectosIcon} alt="Icono Proyectos" className="icono-svg proyectos-flota" />
        </a>
        <span className="nota-icono">{texts[language].notaProyectos}</span>
      </div>

      <div className="icono-con-nota">
        <a href="#soluciones" className="orbital-icon">
          <img src={solucionesIcon} alt="Icono Soluciones" className="icono-svg soluciones-flota" />
        </a>
        <span className="nota-icono">{texts[language].notaSoluciones}</span>
      </div>

      <div className="icono-con-nota">
        <a href="#stack" className="orbital-icon">
          <img src={stackIcon} alt="Icono Stack técnico" className="icono-svg stack-flota" />
        </a>
        <span className="nota-icono">{texts[language].notaStack}</span>
      </div>

      <div className="icono-con-nota">
        <a href="#sobre-mi" className="orbital-icon">
          <img src={sobreMiIcon} alt="Icono Sobre mí" className="icono-svg sobre-flota" />
        </a>
        <span className="nota-icono">{texts[language].notaSobreMi}</span>
      </div>

      <div className="icono-con-nota">
        <a href="#contacto" className="orbital-icon">
          <img src={contactoIcon} alt="Icono Contacto" className="icono-svg contacto-flota" />
        </a>
        <span className="nota-icono">{texts[language].notaContacto}</span>
      </div>
    </div>
  );
}

export default OrbitalMenu;
