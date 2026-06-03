"use client";

import { Button } from "@/components/ui/button";
import { Clapperboard, MapPin, PenLine } from "lucide-react";

export default function HeroA({
  heroVersion = "A",
  onToggleVersion,
  photoSrc = "/actriz 4.png",
}) {
  const isCinematic = heroVersion === "B";

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-[#f2eee8]"
    >
      <img
        src={photoSrc}
        alt="Irene Rubio"
        className="absolute inset-0 h-full w-full object-cover object-[38%_center] sm:object-[58%_center] lg:object-right"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#e8edf6]/72 via-[#e8edf6]/30 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-[#e8edf6]/80" />

      <div className="relative flex min-h-screen flex-col px-4 pb-10 pt-5 sm:px-8 sm:pb-14 sm:pt-8 lg:px-14 xl:px-20">
        <nav className="flex justify-end">
          <div className="flex flex-wrap items-center justify-end gap-x-3 gap-y-2 text-[11px] tracking-[0.1em] text-[#263247]/78 sm:gap-4 sm:text-base sm:tracking-[0.12em]">
            <a
              className="rounded-sm transition hover:text-[#263247] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263247] focus-visible:ring-offset-2"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="rounded-sm transition hover:text-[#263247] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263247] focus-visible:ring-offset-2"
              href="#stack"
            >
              Stack
            </a>
            <a
              className="rounded-sm transition hover:text-[#263247] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263247] focus-visible:ring-offset-2"
              href="#about"
            >
              About
            </a>
            <a
              className="rounded-sm transition hover:text-[#263247] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263247] focus-visible:ring-offset-2"
              href="#contact"
            >
              Contact
            </a>
            <Button
              variant="outline"
              size="sm"
              className="group h-8 border-[#263247]/35 bg-transparent px-2.5 text-[11px] text-[#263247]/85 hover:bg-[#263247] hover:text-white sm:h-9 sm:px-3 sm:text-sm"
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
        <div className="flex flex-1 items-center justify-end">
          <div className="w-full max-w-[30rem]">
            <h1 className="text-4xl leading-[0.98] sm:text-6xl lg:text-7xl">
              <span className="font-display block font-bold text-4xl leading-none text-[#263247] sm:text-6xl lg:text-7xl">
                Irene Rubio
              </span>
              <span className="font-display mt-4 block text-base font-medium tracking-[0.14em] text-[#263247]/84 sm:mt-6 sm:text-2xl sm:tracking-[0.18em]">
                Expressive web experiences
              </span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-8 text-[#263247]/84 sm:mt-10 sm:text-xl sm:leading-10">
              Frontend Developer with a background in film and visual
              storytelling. I work on the visible side of digital experiences,
              where design, structure, and testing shape how things look, feel
              and work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
              <Button
                asChild
                variant="outline"
                className="h-11 w-full border-[#263247] bg-transparent px-5 text-[#263247] hover:bg-[#263247] hover:text-white sm:w-auto"
              >
                <a href="#projects">View projects</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 w-full border-[#263247] bg-transparent px-5 text-[#263247] hover:bg-[#263247] hover:text-white sm:w-auto"
              >
                <a href="mailto:rubio.hernandez.irene@gmail.com">Contact me</a>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm tracking-[0.18em] text-[#263247]/70">
              <MapPin className="h-3.5 w-3.5" />
              Frontend Developer · Sweden
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
