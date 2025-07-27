// Hero/OrbitalMenu.jsx
import React, { useEffect } from "react";
import "./OrbitalMenu.css";

function OrbitalMenu() {
  useEffect(() => {
    const icons = document.querySelectorAll(".icono-con-nota");
    const radius = 180;
    const centerX = 250; // ajusta para centrar mejor
    const centerY = 230; // sube el menú orbital
    const total = icons.length;

    icons.forEach((icon, i) => {
      // Ángulo de π/2 a 3π/2 para semicírculo cóncavo hacia la izquierda
      const angle = Math.PI / 2 + (Math.PI * (total - 1 - i)) / (total - 1);
      const x = centerX - radius * Math.cos(angle); // curva hacia la izquierda
      const y = centerY + radius * Math.sin(angle); // arco vertical

      icon.style.left = `${x}px`;
      icon.style.top = `${y}px`;
    });
  }, []);

  return (
  <div className="orbital-menu">
    <div className="icono-con-nota">
      <a href="#manifiesto" className="orbital-icon">
        <img src="/src/assets/icons/manifiesto.svg" alt="Icono Manifiesto" className="icono-svg manifiesto-flota" />
      </a>
      <span className="nota-icono">Manifiesto</span>
    </div>

    <div className="icono-con-nota">
      <a href="#proyectos" className="orbital-icon">
        <img src="/src/assets/icons/proyectos.svg" alt="Icono Proyectos" className="icono-svg proyectos-flota" />
      </a>
      <span className="nota-icono">Proyectos</span>
    </div>

    <div className="icono-con-nota">
      <a href="#soluciones" className="orbital-icon">
        <img src="/src/assets/icons/soluciones.svg" alt="Icono Soluciones" className="icono-svg soluciones-flota" />
      </a>
      <span className="nota-icono">Soluciones</span>
    </div>

    <div className="icono-con-nota">
      <a href="#stack" className="orbital-icon">
        <img src="/src/assets/icons/stack.svg" alt="Icono Stack técnico" className="icono-svg stack-flota" />
      </a>
      <span className="nota-icono">Stack técnico</span>
    </div>

    <div className="icono-con-nota">
      <a href="#sobre-mi" className="orbital-icon">
        <img src="/src/assets/icons/sobre-mi.svg" alt="Icono Sobre mí" className="icono-svg sobre-flota" />
      </a>
      <span className="nota-icono">Sobre mí</span>
    </div>

    <div className="icono-con-nota">
      <a href="#contacto" className="orbital-icon">
        <img src="/src/assets/icons/contacto.svg" alt="Icono Contacto" className="icono-svg contacto-flota" />
      </a>
      <span className="nota-icono">Contacto</span>
    </div>
  </div>
);

}

export default OrbitalMenu;
