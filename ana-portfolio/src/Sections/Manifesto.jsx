import React, { useEffect } from "react";
import "./Manifesto.css";
import startBitRain from "../effects/bitRain";

function Manifesto() {
  useEffect(() => {
    startBitRain("bitRainCanvas");
  }, []);
  return (
    <section id="manifiesto" className="manifesto-section">
      <canvas id="bitRainCanvas" className="bit-rain-canvas"></canvas>

      <div className="manifesto-icono">
        <img
          src="/src/assets/icons/manifiesto.svg"
          alt="Icono Manifiesto"
          className="icono-svg"
        />
      </div>

      <div className="manifesto-texto">
        <h2 className="manifesto-titulo">Manifiesto</h2>
        <h3 className="manifesto-frase">
          No diseño interfaces. Escribo atmósferas editoriales navegables.
        </h3>
        <p>
          Cada proyecto es una obra narrativa: estructura, ritmo, identidad.  
          Cada decisión visual y técnica responde a una intención.  
          No hay parches. No hay adornos. Hay síntesis.
        </p>
        <p>
          Trabajo con precisión modular, control total y respeto por el tiempo.  
          Valido cada ícono, cada línea, cada transición.  
          Lo que no aporta atmósfera, sobra.
        </p>
        <p>
          Mi portfolio no muestra lo que sé hacer.  
          Muestra cómo pienso, cómo decido, cómo construyo.
        </p>
        <p className="manifesto-cierre">
          Este manifiesto no se lee. Se respira.
        </p>
      </div>
    </section>
  );
}

export default Manifesto;
