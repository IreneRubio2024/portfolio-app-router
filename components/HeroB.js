"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CVModal from "@/components/CVModal";
import HeroNav from "@/components/HeroNav";

export default function HeroB({ onToggleVersion }) {
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <>
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Background photo */}
      <Image
        src="/images/Irene_117.jpg"
        alt="Irene Rubio"
        fill
        priority
        sizes="100vw"
        className="scale-[1.02] object-cover object-[center_20%] lg:object-[center_20%]"
        style={{ filter: "saturate(0) brightness(0.92) contrast(1.08)" }}
      />

      {/* Bright veil for a lightly burned, high-key cinematic look */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Scrim behind the text block so it stays readable over any part of the photo */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[75%] bg-gradient-to-t from-black/85 via-black/50 to-transparent" />

      {/* All content on top */}
      <div className="relative flex min-h-screen flex-col">
        <HeroNav
          dark={true}
          onToggleVersion={onToggleVersion}
          onOpenCV={() => setCvOpen(true)}
          className="px-4 pt-5 sm:px-8 sm:pt-8 lg:px-14"
        />

        {/* Text — bottom left */}
        <div className="flex flex-1 items-end px-4 pb-10 sm:px-8 sm:pb-16 lg:px-14 lg:pb-20">
          <div className="max-w-lg">
            <p className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-white/90 sm:text-base">
              Frontend Developer · UX · Accessibility
            </p>
            <h1 className="mt-2">
              <span className="font-display block font-bold tracking-[0.04em] text-4xl leading-none text-white sm:text-6xl lg:text-7xl">
                Irene Rubio
              </span>
            </h1>
            <p className="font-display mt-5 max-w-sm text-2xl font-medium leading-tight text-white sm:mt-6 sm:text-3xl">
              I build thoughtful digital products that make complex things
              feel simple.
            </p>
            <p className="mt-5 max-w-sm text-lg leading-9 text-white/88 sm:mt-6 sm:text-xl sm:leading-9">
              I&apos;m a frontend developer with a background in creative
              production, UX and accessibility. I combine technical thinking
              with a strong understanding of people and how they use digital
              products.
            </p>
            <p className="mt-6 text-sm font-medium tracking-[0.08em] text-white/88 sm:text-base">
              React · TypeScript · Angular · Next.js · JavaScript
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
    {cvOpen && <CVModal onClose={() => setCvOpen(false)} />}
    </>
  );
}
