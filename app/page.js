"use client";

import { useContext } from "react";
import { ArrowRight, Github, Mail, MapPin } from "lucide-react";
import PortfolioContext from "./Context/PortfolioContext";
import ImageLevitating from "@/components/ImageLevitating";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import TechStackAccordion from "@/components/TechStackAccordion";
import { Button } from "@/components/ui/button";
import AboutSection from "@/components/AboutSection";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  const context = useContext(PortfolioContext);

  if (!context) {
    return <p>Loading...</p>;
  }

  const { projects, techSkills } = context;

  return (
    <main className="min-h-screen bg-[#F5FBF9] text-[#171717] font-body">
      <nav className="fixed left-0 right-0 top-0 z-30 border-b border-black/10 bg-[#fbfaf7]/86 px-4 backdrop-blur sm:px-6 lg:px-8">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-end">
          <div className="hidden items-center gap-6 text-sm text-[#171717]/68 sm:flex">
            <a className="transition hover:text-[#171717]" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-[#171717]" href="#stack">
              Stack
            </a>
            <a className="transition hover:text-[#171717]" href="#about">
              About
            </a>
            <a className="transition hover:text-[#171717]" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section
        id="top"
        className="relative flex min-h-screen items-center bg-[#fbfaf7] px-4 pb-14 pt-24 sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 border border-black/10 bg-white/60 px-4 py-2 text-sm text-[#171717]/68 font-body">
              <MapPin className="h-4 w-4 text-[#D6CEF6]" />
              Frontend Developer based in Sweden
            </div>
            <h1 className="max-w-4xl text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">
              <span className="font-ClashDisplay  block text-6xl leading-none text-[#171717] sm:text-7xl lg:text-8xl">
                Irene Rubio
              </span>
              <span className="font-display mt-3 block text-2xl font-medium leading-tight text-[#171717]/76 sm:text-3xl lg:text-4xl">
                expressive web experiences
              </span>
            </h1>
            <p className="font-body mt-6 max-w-2xl text-base leading-8 text-[#34302b]/76 sm:text-lg">
              Frontend Developer with a background in film and visual
              storytelling. I work on the visible side of digital experiences,
              where design, structure, and testing shape how things looks, feels
              and works.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className="h-11 bg-[#171717] px-5 text-white hover:bg-[#34302b] font-body"
              >
                <a href="#projects">
                  View projects <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 border-black/20 bg-transparent px-5 text-[#171717] hover:bg-[#171717] hover:text-white font-body"
              >
                <a href="mailto:rubio.hernandez.irene@gmail.com">
                  Contact me <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="mt-10 flex max-w-2xl flex-wrap items-center gap-4 text-sm text-[#171717]/68 font-body">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-2xl font-semibold text-[#171717]">
                  {projects.length}+
                </span>
                <span className="uppercase tracking-[0.18em]">Projects</span>
              </div>
              <span className="hidden h-4 w-px bg-black/10 sm:block" />
              <div className="flex items-baseline gap-2">
                <span className="font-display text-2xl font-semibold text-[#171717]">
                  {techSkills.length}
                </span>
                <span className="uppercase tracking-[0.18em]">Tools</span>
              </div>
              <span className="hidden h-4 w-px bg-black/10 sm:block" />
              <div className="flex items-baseline gap-2">
                <span className="font-display text-2xl font-semibold text-[#171717]">
                  UX
                </span>
                <span className="uppercase tracking-[0.18em]">Focus</span>
              </div>
            </div>
          </div>

          {/* Moon — pushed right */}
          <div className="flex flex-col items-center gap-4 lg:translate-x-16">
            <div className="relative w-full max-w-lg">
              <ImageLevitating className="relative animate-levitate" />
            </div>
            <p className="font-body text-xs uppercase tracking-[0.28em] text-[#506786]/50 text-center w-full">
              the visible side of the unseen work
            </p>
          </div>
        </div>
      </section>

      <ProjectsCarousel />
      <TechStackAccordion />
      <AboutSection />
      <CustomCursor />
      <section
        id="contact"
        className="bg-[#FFFEF6] px-4 py-16 text-[#171717] sm:px-6 lg:px-8"
      >
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 rounded-3xl border border-black/10 bg-white p-6 shadow-sm md:flex-row md:items-center md:p-8 md:gap-0">
          <div>
            <p className="font-body text-sm uppercase tracking-[0.28em] text-[#095859]">
              Available for opportunities
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl">
              Let's do something good together
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-black text-white hover:bg-[#2b2b2b] font-body"
            >
              <a href="mailto:rubio.hernandez.irene@gmail.com">
                <Mail className="h-4 w-4" /> Email
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-black font-body"
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
