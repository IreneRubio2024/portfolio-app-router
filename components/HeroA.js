"use client";

import { Button } from "@/components/ui/button";
import { Clapperboard, MapPin, PenLine } from "lucide-react";

export default function HeroA({ heroVersion = "A", onToggleVersion }) {
  const isCinematic = heroVersion === "B";

  return (
    <section
      id="top"
      className="relative grid min-h-screen bg-[#fbfaf7] lg:grid-cols-2"
    >
      {/* Photo — full bleed left */}
      <div className="relative hidden overflow-hidden lg:block">
        <img
          src="/actriz 4.png"
          alt="Irene Rubio"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center top" }}
        />
      </div>

      {/* Text content — right side, nav included */}
      <div className="flex flex-col px-8 pb-14 pt-8 lg:px-14 xl:px-20">
        <nav className="flex justify-end">
          <div className="flex items-center gap-4 text-base tracking-[0.12em] text-[#171717]/68">
            <a
              className="rounded-sm transition hover:text-[#171717] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:ring-offset-2"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="rounded-sm transition hover:text-[#171717] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:ring-offset-2"
              href="#stack"
            >
              Stack
            </a>
            <a
              className="rounded-sm transition hover:text-[#171717] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:ring-offset-2"
              href="#about"
            >
              About
            </a>
            <a
              className="rounded-sm transition hover:text-[#171717] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:ring-offset-2"
              href="#contact"
            >
              Contact
            </a>
            <Button
              variant="outline"
              size="sm"
              className="group h-9 border-[#171717]/30 bg-transparent px-3 text-[#363333]/80 hover:bg-[#363333] hover:text-white"
              onClick={onToggleVersion}
              aria-pressed={isCinematic}
              aria-label={`Switch visual mode. Current mode: ${isCinematic ? "Cinematic" : "Editorial"}. Activate to switch to ${isCinematic ? "Editorial" : "Cinematic"}.`}
            >
              {heroVersion === "A" ? (
                <Clapperboard className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-6" />
              ) : (
                <PenLine className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-6" />
              )}
              Switch mode
            </Button>
          </div>
        </nav>
        <div className="flex flex-1 items-center">
          <div className="w-full">
            <h1 className="text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">
              <span className="font-display block font-bold text-5xl leading-none text-[#363333] sm:text-6xl lg:text-7xl">
                Irene Rubio
              </span>
              <span className="font-display mt-6 block text-xl font-medium tracking-[0.18em] text-[#171717]/76 sm:text-2xl">
                Expressive web experiences
              </span>
            </h1>
            <p className="mt-10 max-w-md text-lg leading-10 text-[#34302b]/76 sm:text-xl">
              Frontend Developer with a background in film and visual
              storytelling. I work on the visible side of digital experiences,
              where design, structure, and testing shape how things look, feel
              and work.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button
                asChild
                variant="outline"
                className="h-11 border-[#363333] bg-transparent px-5 text-[#363333] hover:bg-[#363333] hover:text-white"
              >
                <a href="#projects">View projects</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 border-[#363333] bg-transparent px-5 text-[#363333] hover:bg-[#363333] hover:text-white"
              >
                <a href="mailto:rubio.hernandez.irene@gmail.com">Contact me</a>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm tracking-[0.18em] text-[#171717]/65">
              <MapPin className="h-3.5 w-3.5" />
              Frontend Developer · Sweden
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
