"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Menu, X } from "lucide-react";

export default function HeroA({
  heroVersion = "A",
  onToggleVersion,
  photoSrc = "/actriz 4.png",
}) {
  const isCinematic = heroVersion === "B";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

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
      <div className="absolute inset-0 backdrop-blur-[2.5px] sm:backdrop-blur-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#e8edf6]/78 via-[#e8edf6]/38 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-[#e8edf6]/80" />
      <div className="absolute inset-y-0 right-0 hidden w-[46%] bg-white/50 backdrop-blur-[4px] lg:block" />

      <div className="relative flex min-h-screen flex-col px-4 pb-10 pt-5 sm:px-8 sm:pb-14 sm:pt-8 lg:px-14 xl:px-20">
        <nav className="relative z-20 flex items-center justify-end">
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="h-9 border-[#263247]/35 bg-[#f2eee8]/80 px-3 text-[#263247]/90 backdrop-blur-[2px] hover:bg-[#263247] hover:text-white lg:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-expanded={isMenuOpen}
            aria-controls="hero-a-mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>

          <div className="hidden flex-wrap items-center justify-end gap-x-3 gap-y-2 text-[11px] tracking-[0.1em] text-[#263247]/78 lg:flex lg:gap-4 lg:text-base lg:tracking-[0.12em]">
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
              aria-label="Switch to dark mode"
            >
              <Moon className="h-3.5 w-3.5" />
              Dark mode
            </Button>
          </div>

          {isMenuOpen && (
            <div
              id="hero-a-mobile-menu"
              className="absolute right-0 top-12 w-52 rounded-xl border border-[#263247]/16 bg-[#f8f4ec]/95 p-3 shadow-lg backdrop-blur-[2px] lg:hidden"
            >
              <div className="flex flex-col gap-1 text-sm tracking-[0.1em] text-[#263247]/85">
                <a
                  className="rounded-md px-2 py-2 transition hover:bg-[#263247]/8"
                  href="#projects"
                  onClick={closeMenu}
                >
                  Projects
                </a>
                <a
                  className="rounded-md px-2 py-2 transition hover:bg-[#263247]/8"
                  href="#stack"
                  onClick={closeMenu}
                >
                  Stack
                </a>
                <a
                  className="rounded-md px-2 py-2 transition hover:bg-[#263247]/8"
                  href="#about"
                  onClick={closeMenu}
                >
                  About
                </a>
                <a
                  className="rounded-md px-2 py-2 transition hover:bg-[#263247]/8"
                  href="#contact"
                  onClick={closeMenu}
                >
                  Contact
                </a>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2 h-9 justify-start border-[#263247]/35 bg-transparent px-2.5 text-sm text-[#263247]/90 hover:bg-[#263247] hover:text-white"
                  onClick={() => {
                    onToggleVersion?.();
                    closeMenu();
                  }}
                  aria-pressed={isCinematic}
                  aria-label="Switch to dark mode"
                >
                  <Moon className="h-3.5 w-3.5" />
                  Dark mode
                </Button>
              </div>
            </div>
          )}
        </nav>
        <div className="flex flex-1 items-center justify-end">
          <div className="w-full max-w-[30rem] rounded-2xl border border-white/45 bg-[#fffaf2]/42 p-4 shadow-[0_8px_20px_rgba(20,27,38,0.1)] backdrop-blur-[2.5px] lg:border-none lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-0">
            <h1 className="text-4xl leading-[0.98] sm:text-6xl lg:text-7xl">
              <span className="font-display block font-bold text-4xl leading-none text-[#263247] sm:text-6xl lg:text-7xl">
                Irene Rubio
              </span>
              <span className="font-display mt-4 block text-[0.9rem] font-medium tracking-[0.1em] text-[#263247]/84 sm:mt-6 sm:text-[1.35rem] sm:tracking-[0.14em]">
                Expressive Frontend Developer
              </span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-8 text-[#263247]/84 sm:mt-10 sm:text-xl sm:leading-10">
              Developer with a background in visual storytelling. I build
              accessible digital products across frontend and full-stack
              environments, with strong attention to architecture, testing, and
              performance.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
              <Button
                asChild
                variant="outline"
                className="relative z-30 h-11 w-full border border-[#263247] bg-transparent px-5 text-[#263247] shadow-sm hover:bg-[#263247] hover:text-white sm:w-auto"
              >
                <a href="#projects">View projects</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="relative z-30 h-11 w-full border border-[#263247] bg-transparent px-5 text-[#263247] shadow-sm hover:bg-[#263247] hover:text-white sm:w-auto"
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
