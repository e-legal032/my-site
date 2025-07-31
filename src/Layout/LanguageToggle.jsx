import { useContext } from "react";
import { LanguageContext } from "../Shared/LanguageContext";

function LanguageToggle() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="language-toggle">
      <button onClick={() => setLanguage("es")}>ES</button>
      <button onClick={() => setLanguage("en")}>EN</button>
    </div>
   );
}


export default LanguageToggle;
