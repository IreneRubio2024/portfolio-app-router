import { getHeroVersion } from "@/lib/theme";
import { projects } from "@/lib/data/projects";
import { techSkills } from "@/lib/data/techSkills";
import ModeTransitionShell from "@/components/ModeTransitionShell";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import TechStackAccordion from "@/components/TechStackAccordion";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default async function Home() {
  const heroVersion = await getHeroVersion();
  const darkHero = heroVersion === "B";

  return (
    <ModeTransitionShell heroVersion={heroVersion} darkHero={darkHero}>
      <ProjectsCarousel dark={darkHero} projects={projects} />
      <TechStackAccordion dark={darkHero} techSkills={techSkills} />
      <AboutSection dark={darkHero} />
      <ContactSection dark={darkHero} />
    </ModeTransitionShell>
  );
}
