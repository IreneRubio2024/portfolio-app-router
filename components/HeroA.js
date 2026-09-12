"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CVModal from "@/components/CVModal";
import HeroNav from "@/components/HeroNav";

export default function HeroA({
  onToggleVersion,
  photoSrc = "/images/actriz 4.png",
}) {
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <>
      <section
        id="top"
        className="relative min-h-screen overflow-hidden bg-[#f2eee8]"
      >
        <div className="absolute inset-y-0 left-0 w-full lg:w-[55%] overflow-hidden">
          <Image
            src={photoSrc}
            alt="Irene Rubio"
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="scale-[1.55] object-cover object-[center_top] origin-top"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#e8edf6]/78 via-[#e8edf6]/38 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-[#e8edf6]/80" />
        <div className="absolute inset-y-0 right-0 hidden w-[45%] bg-gradient-to-r from-transparent to-white/55 lg:block" />

        <div className="relative flex min-h-screen flex-col px-4 pb-10 pt-5 sm:px-8 sm:pb-14 sm:pt-8 lg:px-14 xl:px-20">
          <HeroNav
            dark={false}
            onToggleVersion={onToggleVersion}
            onOpenCV={() => setCvOpen(true)}
          />
          <div className="flex flex-1 items-center justify-end">
            <div className="w-full max-w-[30rem] rounded-2xl border border-white/45 bg-[#fffaf2]/42 p-4 shadow-[0_8px_20px_rgba(20,27,38,0.1)] backdrop-blur-[2.5px] lg:border-none lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-0">
              <p className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-[#263247]/80 sm:text-base">
                Frontend Developer · UX · Accessibility
              </p>
              <h1 className="mt-2 text-4xl leading-[0.98] sm:text-6xl lg:text-7xl">
                <span className="font-display block font-bold text-4xl leading-none text-[#263247] sm:text-6xl lg:text-7xl">
                  Irene Rubio
                </span>
              </h1>
              <p className="font-display mt-5 max-w-md text-2xl font-medium leading-tight text-[#263247] sm:mt-6 sm:text-3xl">
                I build thoughtful digital products that make complex things
                feel simple.
              </p>
              <p className="mt-5 max-w-md text-xl leading-9 text-[#263247]/84 sm:mt-6 sm:text-xl sm:leading-10">
                I'm a frontend developer with a background in creative
                production, UX and accessibility. I combine technical thinking
                with a strong understanding of people and how they use digital
                products.
              </p>
              <p className="mt-6 text-sm font-medium tracking-[0.08em] text-[#263247]/80 sm:text-base">
                React · TypeScript · Angular · Next.js · JavaScript
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
                  <a href="mailto:rubio.hernandez.irene@gmail.com">
                    Contact me
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {cvOpen && <CVModal onClose={() => setCvOpen(false)} />}
    </>
  );
}
