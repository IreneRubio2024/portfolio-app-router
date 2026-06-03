"use client";

import { useContext } from "react";
import { Github, Mail } from "lucide-react";
import PortfolioContext from "./Context/PortfolioContext";
import Hero from "@/components/HeroA"; // ← cambia HeroA por HeroB para el otro diseño
import { Button } from "@/components/ui/button";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import TechStackAccordion from "@/components/TechStackAccordion";
import AboutSection from "@/components/AboutSection";

const darkHero = false; // ← false = HeroA (claro), true = HeroB (oscuro)

export default function Home() {
  const context = useContext(PortfolioContext);

  if (!context) {
    return <p>Loading...</p>;
  }

  return (
    <main className="min-h-screen bg-[#F5FBF9] text-[#171717] font-body">
      <Hero />

      <ProjectsCarousel dark={!darkHero} />
      <TechStackAccordion dark={darkHero} />
      <AboutSection dark={!darkHero} />
      <section
        id="contact"
        className={`px-4 py-24 sm:px-6 lg:px-8 ${darkHero ? "bg-[#191E1E] text-[#FFFEF6]" : "bg-[#FFFEF6] text-[#171717]"}`}
      >
        <div
          className={`mx-auto flex max-w-6xl flex-col justify-between gap-8 rounded-3xl border p-6 shadow-sm md:flex-row md:items-end md:p-8 md:gap-0 ${darkHero ? "border-white/10 bg-white/5" : "border-white/10 bg-[#191E1E] text-[#FFFEF6]"}`}
        >
          <div>
            <p className="font-body text-lg uppercase tracking-[0.28em] text-white/45">
              Available for opportunities
            </p>
            <h2 className="font-display mt-4 text-xl font-medium tracking-[0.04em] sm:text-2xl">
              Every screen is a playwright. What's your story?
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              className="font-body bg-white text-[#171717] hover:bg-white/90"
            >
              <a href="mailto:rubio.hernandez.irene@gmail.com">
                <Mail className="h-4 w-4" /> Email
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="font-body bg-transparent border-white/50 text-white hover:bg-white hover:text-[#171717]"
            >
              <a
                href="https://github.com/IreneRubio2024"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
