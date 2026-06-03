"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { Github, Mail } from "lucide-react";
import PortfolioContext from "./Context/PortfolioContext";
import HeroA from "@/components/HeroA";
import HeroB from "@/components/HeroB";
import { Button } from "@/components/ui/button";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import TechStackAccordion from "@/components/TechStackAccordion";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  const context = useContext(PortfolioContext);

  if (!context) {
    return <p>Loading...</p>;
  }

  const { heroVersion, toggleHeroVersion } = context;
  const darkHero = heroVersion === "B";
  const Hero = darkHero ? HeroB : HeroA;
  const [isSwitching, setIsSwitching] = useState(false);
  const [liveAnnouncement, setLiveAnnouncement] = useState("");
  const hasMounted = useRef(false);
  const hasAnnounced = useRef(false);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    setIsSwitching(true);
    const timer = setTimeout(() => setIsSwitching(false), 640);
    return () => clearTimeout(timer);
  }, [heroVersion]);

  useEffect(() => {
    if (!hasAnnounced.current) {
      hasAnnounced.current = true;
      return;
    }

    const currentMode = heroVersion === "B" ? "Cinematic" : "Editorial";
    setLiveAnnouncement(`Visual mode changed to ${currentMode}.`);
    const timer = setTimeout(() => setLiveAnnouncement(""), 1200);

    return () => clearTimeout(timer);
  }, [heroVersion]);

  return (
    <main
      className={`mode-transition min-h-screen bg-[#F5FBF9] text-[#171717] font-body ${isSwitching ? "mode-switching" : ""}`}
    >
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {liveAnnouncement}
      </p>
      {isSwitching && (
        <div
          className={`mode-wipe ${darkHero ? "mode-wipe-dark" : "mode-wipe-light"}`}
          aria-hidden="true"
        />
      )}
      <Hero heroVersion={heroVersion} onToggleVersion={toggleHeroVersion} />

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
            <p className="font-body text-lg uppercase tracking-[0.28em] text-white/70">
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
