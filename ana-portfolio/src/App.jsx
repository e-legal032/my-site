import { LanguageProvider } from "./Shared/LanguageContext";
import Navbar from "./Layout/Navbar";
import LanguageToggle from "./Layout/LanguageToggle";
import HeroIntro from "./Hero/HeroIntro";
import "./App.css";

// import Manifesto from "./Sections/Manifesto";
// ...otras secciones

function App() {
  return (
    <LanguageProvider>
      <div className="app-container">
        <LanguageToggle />
        <Navbar />
        <HeroIntro />
        {/* <Manifesto /> */}
        {/* ...más secciones */}
      </div>
    </LanguageProvider>
  );
}

export default App;
