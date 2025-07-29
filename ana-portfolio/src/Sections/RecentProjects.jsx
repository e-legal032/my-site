import './RecentProjects.css';
import React, { useContext } from 'react';
import IconProjects from '../assets/icons/proyectos.svg'; 
import RotatingGallery from './RotatingGallery';
import { LanguageContext } from '../Shared/LanguageContext';
import { texts } from '../Shared/texts';

function RecentProjects() {
  const { language } = useContext(LanguageContext);

  return (
    <section id="proyectos" className="recent-wrapper">
      <div className="recent-header">
        <img src={IconProjects} alt="Proyectos recientes" className="recent-icon" />
        <h2 className="recent-title">{texts[language].recentProjectsTitulo}</h2>
      </div>
      <div className="recent-gallery">
        <RotatingGallery />
      </div>
    </section>
  );
}

export default RecentProjects;
