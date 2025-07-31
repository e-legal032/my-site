import React, { useState, useContext } from 'react';
import './Contacto.css';
import contactoIcon from '../assets/icons/contacto.svg';
import instagramIcon from '../assets/icons/redes-ico-ig.svg';
import githubIcon from '../assets/icons/redes-ico-gitHub.svg';
import mailIcon from '../assets/icons/redes-ico-mail.svg';
import { LanguageContext } from '../Shared/LanguageContext';
import { texts } from '../Shared/texts';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const [errorEnvio, setErrorEnvio] = useState(false);

  const { language } = useContext(LanguageContext);
  const t = texts[language];

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formElement = e.target;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'contacto',
        ...formData,
      }).toString(),
    })
      .then(() => {
        setMensajeEnviado(true);
        setErrorEnvio(false);
        formElement.reset();
      })
      .catch(() => {
        setErrorEnvio(true);
      });
  };

  return (
    <section id="contacto" className="contacto-section">
      <div className="contacto-header">
        <img src={contactoIcon} alt={t.contactoTitulo} className="contacto-icon" />
        <h2>{t.contactoTitulo}</h2>
      </div>

      <form
        name="contacto"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="contacto-form"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contacto" />
        <input type="hidden" name="bot-field" />

        <input
          type="text"
          name="nombre"
          placeholder={t.contactoPlaceholderNombre}
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder={t.contactoPlaceholderEmail}
          required
          onChange={handleChange}
        />
        <textarea
          name="mensaje"
          placeholder={t.contactoPlaceholderMensaje}
          required
          onChange={handleChange}
        />
        <button type="submit">{t.contactoBotonEnviar}</button>

        {mensajeEnviado && (
          <p className="mensaje-confirmacion">{t.contactoConfirmacion}</p>
        )}
        {errorEnvio && (
          <p className="mensaje-error">{t.contactoError}</p>
        )}
      </form>

      <div className="contacto-redes">
        <a href="https://www.instagram.com/ana_0key" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://github.com/e-legal032" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="mailto:e.legal032@gmail.com">
          <img src={mailIcon} alt="Email" />
        </a>
      </div>
    </section>
  );
};

export default Contacto;
