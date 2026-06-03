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
        src="/cine.jpg"
        alt="Irene Rubio"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "center center" }}
      />

      {/* Subtle dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/30" />

      {/* All content on top */}
      <div className="relative flex h-screen flex-col">
        {/* Nav — top right */}
        <nav className="flex justify-end px-8 pt-8 lg:px-14">
          <div className="flex items-center gap-4 text-base tracking-[0.18em] text-white/75">
            <a
              className="rounded-sm transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="rounded-sm transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              href="#stack"
            >
              Stack
            </a>
            <a
              className="rounded-sm transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              href="#about"
            >
              About
            </a>
            <a
              className="rounded-sm transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              href="#contact"
            >
              Contact
            </a>
            <Button
              variant="outline"
              size="sm"
              className="group h-9 border-white/50 bg-transparent px-3 text-white hover:bg-white hover:text-[#171717]"
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
        <div className="flex flex-1 items-end px-8 pb-16 lg:px-14 lg:pb-20">
          <div className="max-w-lg">
            <h1>
              <span className="font-display block font-bold tracking-[0.04em] text-5xl leading-none text-white sm:text-6xl lg:text-7xl">
                Irene Rubio
              </span>
              <span className="font-display mt-5 block text-lg font-medium tracking-[0.22em] text-white/75 sm:text-xl">
                Expressive web experiences
              </span>
            </h1>
            <p className="mt-8 max-w-sm text-lg leading-9 text-white/65 sm:text-xl">
              Frontend Developer with a background in film and visual
              storytelling. I work on the visible side of digital experiences,
              where design, structure, and testing shape how things look, feel
              and work.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button
                asChild
                variant="outline"
                className="h-11 border-white/70 bg-transparent px-5 text-white hover:bg-white hover:text-[#171717]"
              >
                <a href="#projects">View projects</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 border-white/70 bg-transparent px-5 text-white hover:bg-white hover:text-[#171717]"
              >
                <a href="mailto:rubio.hernandez.irene@gmail.com">Contact me</a>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm tracking-[0.18em] text-white/70">
              <MapPin className="h-3.5 w-3.5" />
              Frontend Developer · Sweden
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
