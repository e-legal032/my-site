import React from "react";
import "./HeroIntro.css";
import OrbitalMenu from "./OrbitalMenu";
import firma from "/src/assets/images/firma.png";

function HeroIntro() {
  return (
    <section className="hero-intro">
      <div className="hero-left">
        <img src={firma} alt="Firma visual" className="firma-img" />
        <h2 className="rol">Web & Graphic Dev · Soft Arch Composer</h2>
      </div>

      <div className="hero-right">
        <OrbitalMenu />
      </div>
    </section>
  );
}

export default HeroIntro;
