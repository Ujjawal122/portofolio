import AboutMeMain from "./components/aboutMeSection/AboutMeMain.jsx";
import ContactMeMain from "./components/contactMeSection/ContactMeMain.jsx";
import ExperienceMain from "./components/experienceSection/ExperienceMain.jsx";
import FooterMain from "./components/footer/FooterMain.jsx";
import HeroGradient from "./components/heroSection/HeroGradient.jsx";
import HeroMain from "./components/heroSection/HeroMain.jsx";
import NavbarMain from "./components/navbar/NavBarMain.jsx";
import ProjectsMain from "./components/projectsSection/ProjectsMain.jsx";
import SkillsMain from "./components/skillsSection/SkillsMain.jsx";
import SubSkills from "./components/skillsSection/SubSkills.jsx";
import SubHeroMain from "./components/subHeroSection/SubHeroMain.jsx";

function App() {
  return (
    <main className="font-body text-white relative overflow-hidden">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroMain />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain />
    </main>
  );
}

export default App;