import React, { useContext } from "react";
import "./RotatingGallery.css";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";
import image6 from "../assets/images/image6.png";
import image7 from "../assets/images/image7.png";
import image8 from "../assets/images/image8.png";
import { LanguageContext } from "../Shared/LanguageContext";
import { texts } from "../Shared/texts";

const RotatingGallery = () => {
  const { language } = useContext(LanguageContext);

  const galleryItems = [
    { title: texts[language].galeriaCrypto, image: image1, link: "https://cotizador-crypto5.netlify.app" },
    { title: texts[language].galeriaBitcoin, image: image2, link: "https://cotizador-crypto5.netlify.app" },
    { title: texts[language].galeriaOutfits, image: image3, link: "https://codigo-ba.github.io/Outfits_public" },
    { title: texts[language].galeriaCheckit, image: image4, link: "https://checkit-anna.netlify.app" },
    { title: texts[language].galeriaCheckit, image: image5, link: "https://checkit-anna.netlify.app" },
    { title: texts[language].galeriaDolar, image: image6, link: "https://cotizador-ana.netlify.app" },
    { title: texts[language].galeriaMonedas, image: image7, link: "https://cotizador-ana.netlify.app" },
    { title: texts[language].galeriaSite, image: image8, link: "https://codigo-ba.github.io/site/" }
  ];

  return (
    <section className="gallery-wrapper">
      <div className="gallery-box">
        {galleryItems.map((item, index) => (
          <span key={index} style={{ "--i": index + 1 }}>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="gallery-info">
              <img src={item.image} alt={item.title} />
              <div className="gallery-caption">{item.title}</div>
            </a>
          </span>
        ))}
      </div>
    </section>
  );
};

export default RotatingGallery;
