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

const HERO_A_PHOTO_SRC = "/Erea2.png";

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
      <Hero
        heroVersion={heroVersion}
        onToggleVersion={toggleHeroVersion}
        photoSrc={HERO_A_PHOTO_SRC}
      />

      <ProjectsCarousel dark={false} />
      <TechStackAccordion dark={true} />
      <AboutSection dark={!darkHero} />
      <section
        id="contact"
        className="px-4 py-24 sm:px-6 lg:px-8 bg-[#191b1e] text-[#F5F7FC]"
      >
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 rounded-3xl border border-[#263247]/12 bg-[#fffef6] p-6 text-[#263247] shadow-sm md:flex-row md:items-end md:p-8 md:gap-0">
          <div>
            <p className="font-body text-lg uppercase tracking-[0.28em] text-[#263247]/70">
              Available for opportunities
            </p>
            <h2 className="font-display mt-4 text-xl font-medium tracking-[0.04em] sm:text-2xl">
              Every screen is a playwright. What's your story?
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              className="font-body bg-[#191b1e] text-[#F5F7FC] hover:bg-[#15171d]"
            >
              <a href="mailto:rubio.hernandez.irene@gmail.com">
                <Mail className="h-4 w-4" /> Email
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="font-body bg-transparent border-[#191b1e]/38 text-[#191b1e]/88 hover:bg-[#191b1e] hover:text-[#F5F7FC]"
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
