import React from "react";

function StoryPanel({ data }) {
  return (
    <div className="story-panel">
      <img
        src={data.resultImg}
        alt={`Resultado del caso ${data.title}`}
        className="story-result-img"
      />
      <div className="story-text">
        <h4>Solución</h4>
        <p>{data.solucion}</p>
      </div>
    </div>
  );
}

export default StoryPanel;
