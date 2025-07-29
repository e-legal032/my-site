import { LanguageProvider } from "./Shared/LanguageContext";
import Navbar from "./Layout/Navbar";
import LanguageToggle from "./Layout/LanguageToggle";
import HeroIntro from "./Hero/HeroIntro";
import "./App.css";
import Manifesto from "./Sections/Manifesto";
import RecentProjects from "./Sections/RecentProjects";
import CreativeSolutions from "./Sections/CreativeSolutions/CreativeSolutions";
import Stack from "./Sections/Stack";
import AboutMe from "./Sections/AboutMe";
import Contacto from "./Sections/Contacto";
import Footer from "./Layout/Footer";
// ...otras secciones

function App() {
  return (
    <LanguageProvider>
      <div className="app-container">
        <LanguageToggle />
        <Navbar />
        <HeroIntro />
        <Manifesto />
        <RecentProjects />
        <CreativeSolutions />
        <Stack />
        <AboutMe />
        <Contacto />
        <Footer />

        {/* ...más secciones */}
      </div>
    </LanguageProvider>
  );
}

export default App;
