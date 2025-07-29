import { useContext } from "react";
import { LanguageContext } from "../Shared/LanguageContext";
import { texts } from "../Shared/texts";
import "./Footer.css";

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const year = new Date().getFullYear();
  const footerText = texts[language].footer.replace("{year}", year);

  return (
    <footer className="footer">
      <p>{footerText}</p>
    </footer>
  );
};

export default Footer;
