"use client";

import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export default function HeroA() {
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
          <div className="flex items-center gap-6 text-base tracking-[0.12em] text-[#171717]/68">
            <a className="transition hover:text-[#171717]" href="#projects">Projects</a>
            <a className="transition hover:text-[#171717]" href="#stack">Stack</a>
            <a className="transition hover:text-[#171717]" href="#about">About</a>
            <a className="transition hover:text-[#171717]" href="#contact">Contact</a>
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
                className="h-11 border-[#171717] bg-transparent px-5 text-[#171717] hover:bg-[#171717] hover:text-white"
              >
                <a href="#projects">View projects</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 border-[#171717] bg-transparent px-5 text-[#171717] hover:bg-[#171717] hover:text-white"
              >
                <a href="mailto:rubio.hernandez.irene@gmail.com">Contact me</a>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm tracking-[0.18em] text-[#171717]/45">
              <MapPin className="h-3.5 w-3.5" />
              Frontend Developer · Sweden
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
