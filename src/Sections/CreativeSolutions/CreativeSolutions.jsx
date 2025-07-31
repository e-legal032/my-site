import solucionesIcon from "../../assets/icons/soluciones.svg";
import "./CreativeSolutions.css";
import CaseCard from "./CaseCard";
import cases from "./CaseData";
import { LanguageContext } from "../../Shared/LanguageContext";
import { texts } from "../../Shared/texts";
import { useContext } from "react";

function CreativeSolutions() {
  const { language } = useContext(LanguageContext);

  return (
    <section id="soluciones" className="creative-solutions">
      <div className="cs-header">
        <img
          src={solucionesIcon}
          alt="Ícono sección"
          className="cs-section-icon"
        />
        <h2>{texts[language].solucionesTitulo}</h2>
      </div>

      <div className="cs-cards-row">
        {cases.map((caso) => (
          <CaseCard key={caso.id} data={caso} />
        ))}
      </div>
    </section>
  );
}

export default CreativeSolutions;
