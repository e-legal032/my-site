import React, { useContext } from "react";
import sobreMiIcon from "../assets/icons/sobre-mi.svg";
import aboutVideo from "../assets/video/about.mp4";
import "./AboutMe.css";
import { LanguageContext } from "../Shared/LanguageContext";
import { texts } from "../Shared/texts";

export default function AboutMe() {
  const { language } = useContext(LanguageContext);
  const t = texts[language];

  return (
    <section id="sobre-mi" className="about-me-section">
      <h2 className="about-me-title">
        <img
          src={sobreMiIcon}
          alt={`Icono ${t.aboutTitle}`}
          className="about-me-icon"
        />
        {t.aboutTitle}
      </h2>

      <div className="about-me-content">
        <video
          src={aboutVideo}
          autoPlay
          loop
          muted
          playsInline
          className="about-me-video"
        />

        <div className="about-me-text">
          <p style={{ textIndent: "1.5em", marginBottom: "1rem" }}>{t.aboutText1}</p>
          <p style={{ textIndent: "1.5em", marginBottom: "1rem" }}>{t.aboutText2}</p>
          <p style={{ textIndent: "1.5em", marginBottom: "2rem" }}>{t.aboutText3}</p>

          <div className="about-me-skills">
            <h3 className="skills-title">{t.aboutSkillsTitle}</h3>
            <ul className="skills-list">
              {t.aboutSkillsList.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
