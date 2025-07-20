import React from "react";
import "./HeroIntro.css";
import firma from "../assets/images/firma.png";

function HeroIntro() {
  return (
    <section className="hero-intro">
      <img src={firma} alt="Firma Ana" className="firma-img" />
      <h2 className="rol">Creadora digital & desarrolladora frontend</h2>
    </section>
  );
}

export default HeroIntro;
