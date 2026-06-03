"use client";

import { Button } from "@/components/ui/button";
import { Clapperboard, MapPin, PenLine } from "lucide-react";

export default function HeroB({ heroVersion = "B", onToggleVersion }) {
  const isCinematic = heroVersion === "B";

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Background photo */}
      <img
        src="/sombra.png"
        alt="Irene Rubio"
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          objectPosition: "center right",
          filter:
            "brightness(1.1) saturate(0.72) contrast(0.86) hue-rotate(-10deg)",
        }}
      />

      {/* Bright veil for a lightly burned, high-key cinematic look */}
      <div className="absolute inset-0 bg-[#fff8f0]/50 mix-blend-screen" />
      <div className="absolute inset-0 bg-white/14" />

      {/* All content on top */}
      <div className="relative flex min-h-screen flex-col">
        {/* Nav — top right */}
        <nav className="flex justify-end px-4 pt-5 sm:px-8 sm:pt-8 lg:px-14">
          <div className="flex flex-wrap items-center justify-end gap-x-3 gap-y-2 text-[11px] tracking-[0.1em] text-[#171717]/75 sm:gap-4 sm:text-base sm:tracking-[0.18em]">
            <a
              className="rounded-sm transition hover:text-[#171717] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="rounded-sm transition hover:text-[#171717] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              href="#stack"
            >
              Stack
            </a>
            <a
              className="rounded-sm transition hover:text-[#171717] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              href="#about"
            >
              About
            </a>
            <a
              className="rounded-sm transition hover:text-[#171717] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              href="#contact"
            >
              Contact
            </a>
            <Button
              variant="outline"
              size="sm"
              className="group h-8 border-[#191b1e]/38 bg-transparent px-2.5 text-[11px] text-[#191b1e]/88 hover:bg-[#191b1e] hover:text-[#F5F7FC] sm:h-9 sm:px-3 sm:text-sm"
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

        {/* Text — bottom left */}
        <div className="flex flex-1 items-end px-4 pb-10 sm:px-8 sm:pb-16 lg:px-14 lg:pb-20">
          <div className="max-w-lg">
            <h1>
              <span className="font-display block font-bold tracking-[0.04em] text-4xl leading-none text-[#191b1e]/88 sm:text-6xl lg:text-7xl">
                Irene Rubio
              </span>
              <span className="font-display mt-4 block text-base font-medium tracking-[0.14em] text-[#171717]/75 sm:mt-5 sm:text-xl sm:tracking-[0.22em]">
                Expressive web experiences
              </span>
            </h1>
            <p className="mt-6 max-w-sm text-base leading-8 text-[#171717]/70 sm:mt-8 sm:text-xl sm:leading-9">
              Frontend Developer with a background in film and visual
              storytelling. I work on the visible side of digital experiences,
              where design, structure, and testing shape how things look, feel
              and work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
              <Button
                asChild
                variant="outline"
                className="h-11 w-full border-[#191b1e]/60 bg-transparent px-5 text-[#191b1e] hover:bg-[#191b1e] hover:text-white sm:w-auto"
              >
                <a href="#projects">View projects</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 w-full border-[#191b1e]/60 bg-transparent px-5 text-[#191b1e] hover:bg-[#191b1e] hover:text-white sm:w-auto"
              >
                <a href="mailto:rubio.hernandez.irene@gmail.com">Contact me</a>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm tracking-[0.18em] text-[#171717]/68">
              <MapPin className="h-3.5 w-3.5" />
              Frontend Developer · Sweden
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
