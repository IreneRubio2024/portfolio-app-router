"use client";

import { Button } from "@/components/ui/button";

export default function HeroB() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-black">

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
          <div className="flex items-center gap-8 text-sm tracking-[0.18em] text-white/75">
            <a className="transition hover:text-white" href="#projects">Projects</a>
            <a className="transition hover:text-white" href="#stack">Stack</a>
            <a className="transition hover:text-white" href="#about">About</a>
            <a className="transition hover:text-white" href="#contact">Contact</a>
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
            <p className="mt-8 max-w-sm text-base leading-9 text-white/65">
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
          </div>
        </div>

      </div>
    </section>
  );
}
