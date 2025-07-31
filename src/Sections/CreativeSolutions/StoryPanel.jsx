import React, { useContext } from "react";
import { texts } from "../../Shared/texts";
import { LanguageContext } from "../../Shared/LanguageContext";

function StoryPanel({ data }) {
  const { language } = useContext(LanguageContext);

  return (
    <div className="story-panel">
      <img
        src={data.resultImg}
        alt={`Resultado del caso ${texts[language][data.titleKey]}`}
        className="story-result-img"
      />
      <div className="story-text">
        <h4>{texts[language].caseSolucionTitle}</h4>
        <p>{texts[language][data.solucionKey]}</p>
      </div>
    </div>
  );
}

export default StoryPanel;
