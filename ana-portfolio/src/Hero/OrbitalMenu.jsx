import React, { useEffect } from "react";
import "./OrbitalMenu.css";

function OrbitalMenu() {
  useEffect(() => {
    const icons = document.querySelectorAll(".orbital-icon");

    const radius = 180;
    const centerX = 250; // ajusta para centrar mejor
    const centerY = 250; // sube el menú orbital
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
      <a href="#manifiesto" className="orbital-icon">
        <img src="/src/assets/icons/manifiesto.svg" alt="Icono Manifiesto" />
      </a>
      <a href="#proyectos" className="orbital-icon">
        <img src="/src/assets/icons/proyectos.svg" alt="Icono Proyectos" />
      </a>
      <a href="#soluciones" className="orbital-icon">
        <img src="/src/assets/icons/soluciones.svg" alt="Icono Soluciones" />
      </a>
      <a href="#stack" className="orbital-icon">
        <img src="/src/assets/icons/stack.svg" alt="Icono Stack técnico" />
      </a>
      <a href="#sobre-mi" className="orbital-icon">
        <img src="/src/assets/icons/sobre-mi.svg" alt="Icono Sobre mí" />
      </a>
      <a href="#contacto" className="orbital-icon">
        <img src="/src/assets/icons/contacto.svg" alt="Icono Contacto" />
      </a>
    </div>
  );
}

export default OrbitalMenu;
