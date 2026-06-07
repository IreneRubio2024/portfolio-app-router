"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Menu, X } from "lucide-react";

export default function HeroB({ heroVersion = "B", onToggleVersion }) {
  const isCinematic = heroVersion === "B";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <section
      id="top"
      className="relative min-h-screen min-h-dvh overflow-hidden bg-black"
    >
      {/* Background photo */}
      <img
        src="/cine2.png"
        alt="Irene Rubio"
        className="absolute inset-0 h-full w-full scale-[1.02] object-cover object-center lg:object-right"
        style={{
          filter: "saturate(0) brightness(0.92) contrast(1.08)",
        }}
      />

      {/* Bright veil for a lightly burned, high-key cinematic look */}
      <div className="absolute inset-0 bg-black/20" />

      {/* All content on top */}
      <div className="relative flex min-h-screen flex-col">
        {/* Nav — top right */}
        <nav className="relative z-20 flex items-center justify-end px-4 pt-5 sm:px-8 sm:pt-8 lg:px-14">
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="h-9 border-[#191b1e]/35 bg-white/70 px-3 text-[#191b1e]/92 backdrop-blur-[2px] hover:bg-[#191b1e] hover:text-[#F5F7FC] lg:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-expanded={isMenuOpen}
            aria-controls="hero-b-mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>

          <div className="hidden flex-wrap items-center justify-end gap-x-3 gap-y-2 text-[11px] tracking-[0.1em] text-white/80 lg:flex lg:gap-4 lg:text-base lg:tracking-[0.18em]">
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
              className="group h-8 border-white/40 bg-transparent px-2.5 text-[11px] text-white/88 hover:bg-white hover:text-[#191b1e] sm:h-9 sm:px-3 sm:text-sm"
              onClick={onToggleVersion}
              aria-pressed={isCinematic}
              aria-label="Switch to light mode"
            >
              <Sun className="h-3.5 w-3.5" />
              Light mode
            </Button>
          </div>

          {isMenuOpen && (
            <div
              id="hero-b-mobile-menu"
              className="absolute right-4 top-16 w-52 rounded-xl border border-white/12 bg-[#1e1e1e]/95 p-3 shadow-lg backdrop-blur-sm lg:hidden"
            >
              <div className="flex flex-col gap-1 text-sm tracking-[0.1em] text-white/80">
                <a
                  className="rounded-md px-2 py-2 transition hover:bg-white/8"
                  href="#projects"
                  onClick={closeMenu}
                >
                  Projects
                </a>
                <a
                  className="rounded-md px-2 py-2 transition hover:bg-white/8"
                  href="#stack"
                  onClick={closeMenu}
                >
                  Stack
                </a>
                <a
                  className="rounded-md px-2 py-2 transition hover:bg-white/8"
                  href="#about"
                  onClick={closeMenu}
                >
                  About
                </a>
                <a
                  className="rounded-md px-2 py-2 transition hover:bg-white/8"
                  href="#contact"
                  onClick={closeMenu}
                >
                  Contact
                </a>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2 h-9 justify-start border-white/30 bg-transparent px-2.5 text-sm text-white/85 hover:bg-white hover:text-[#191b1e]"
                  onClick={() => {
                    onToggleVersion?.();
                    closeMenu();
                  }}
                  aria-pressed={isCinematic}
                  aria-label="Switch to light mode"
                >
                  <Sun className="h-3.5 w-3.5" />
                  Light mode
                </Button>
              </div>
            </div>
          )}
        </nav>

        {/* Text — bottom left */}
        <div className="flex flex-1 items-end px-4 pb-10 sm:px-8 sm:pb-16 lg:px-14 lg:pb-20">
          <div className="max-w-lg">
            <h1>
              <span className="font-display block font-bold tracking-[0.04em] text-4xl leading-none text-white sm:text-6xl lg:text-7xl">
                Irene Rubio
              </span>
              <span className="font-display mt-4 block text-base font-medium tracking-[0.14em] text-white/72 sm:mt-5 sm:text-xl sm:tracking-[0.22em]">
                Expressive web experiences
              </span>
            </h1>
            <p className="mt-6 max-w-sm text-base leading-8 text-white/68 sm:mt-8 sm:text-xl sm:leading-9">
              Frontend Developer with a background in film and visual
              storytelling. I work on the visible side of digital experiences,
              where design, structure, and testing shape how things look, feel
              and work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
              <Button
                asChild
                variant="outline"
                className="h-11 w-full border-white/55 bg-transparent px-5 text-white hover:bg-white hover:text-[#191b1e] sm:w-auto"
              >
                <a href="#projects">View projects</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 w-full border-white/55 bg-transparent px-5 text-white hover:bg-white hover:text-[#191b1e] sm:w-auto"
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
