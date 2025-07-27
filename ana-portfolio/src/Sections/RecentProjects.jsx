import './RecentProjects.css';
import React from 'react';
import IconProjects from '../assets/icons/proyectos.svg'; 
import RotatingGallery from './RotatingGallery';

function RecentProjects() {
  return (
    <section id="proyectos" className="recent-wrapper">
      <div className="recent-header">
        <img src={IconProjects} alt="Proyectos recientes" className="recent-icon" />
        <h2 className="recent-title">Proyectos recientes</h2>
      </div>
      <div className="recent-gallery">
        <RotatingGallery />
      </div>

    </section>
  );
}

export default RecentProjects;
