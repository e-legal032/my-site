import React, { useEffect, useContext } from "react";
import "./Manifesto.css";
import startBitRain from "../effects/bitRain";
import { LanguageContext } from "../Shared/LanguageContext";
import manifiestoIcon from "../assets/icons/manifiesto.svg";
import { texts } from "../Shared/texts";

function Manifesto() {
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    startBitRain("bitRainCanvas");
  }, []);

  return (
    <section id="manifiesto" className="manifesto-section">
      <canvas id="bitRainCanvas" className="bit-rain-canvas"></canvas>

      <div className="manifesto-icono">
        <img
          src={manifiestoIcon}
          alt="Icono Manifiesto"
          className="icono-svg"
        />
      </div>

      <div className="manifesto-texto">
        <h2 className="manifesto-titulo">{texts[language].manifiestoTitulo}</h2>
        <h3 className="manifesto-frase">{texts[language].manifiestoFrase}</h3>
        <p>{texts[language].manifiestoParrafo1}</p>
        <p>{texts[language].manifiestoParrafo2}</p>
        <p>{texts[language].manifiestoParrafo3}</p>
        <p className="manifesto-cierre">{texts[language].manifiestoCierre}</p>
      </div>
    </section>
  );
}

export default Manifesto;
