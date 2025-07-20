import { LanguageProvider } from "./Shared/LanguageContext";
//import Navbar from "./Layout/Navbar";
import LanguageToggle from "./Layout/LanguageToggle";
import HeroIntro from "./Hero/HeroIntro";
//import OrbitalMenu from "./Hero/OrbitalMenu";
//import Manifesto from "./Sections/Manifesto";
// ...otras secciones

function App() {
  return (
    <LanguageProvider>
      <LanguageToggle />
      {/* <Navbar /> */}
      <HeroIntro />
      {/* <OrbitalMenu /> */}
      {/* <Manifesto /> */}
      {/* ...más secciones */}
    </LanguageProvider>
  );
}

export default App;
