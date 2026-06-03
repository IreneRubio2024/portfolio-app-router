"use client";

import { useContext, useEffect, useState } from "react";
import PortfolioContext from "@/app/Context/PortfolioContext";

function MarqueeRow({ skills, reverse = false, dark = false, paused = false }) {
  const items = [...skills, ...skills];

  return (
    <div className="overflow-hidden">
      <div
        className="flex w-max gap-10"
        style={{
          animation: `marquee${reverse ? "Reverse" : ""} 90s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {items.map((skill, i) => (
          <SkillItem key={i} skill={skill} dark={dark} />
        ))}
      </div>
    </div>
  );
}

function SkillItem({ skill, dark }) {
  return (
    <div className="flex items-center gap-4 py-4">
      {skill.src ? (
        <img
          src={skill.src}
          alt=""
          aria-hidden="true"
          className="h-9 w-9 object-contain opacity-70"
        />
      ) : (
        <span
          aria-hidden="true"
          className={`text-xl ${dark ? "text-white/20" : "text-[#171717]/20"}`}
        >
          ·
        </span>
      )}
      <span
        className={`font-display text-xl font-medium whitespace-nowrap ${dark ? "text-white/75" : "text-[#171717]/75"}`}
      >
        {skill.name}
      </span>
    </div>
  );
}

export default function TechStackAccordion({ dark = false }) {
  const { techSkills } = useContext(PortfolioContext);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const row1 = techSkills.slice(0, Math.ceil(techSkills.length / 2));
  const row2 = techSkills.slice(Math.ceil(techSkills.length / 2));

  return (
    <section
      id="stack"
      className={`px-4 pt-14 pb-24 sm:px-6 lg:px-8 ${dark ? "bg-[#191E1E] text-[#FFFEF6]" : "bg-[#FFFEF6] text-[#171717]"}`}
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <h2
            className={`font-display text-xl font-semibold uppercase tracking-[0.28em] sm:text-2xl ${dark ? "text-white/75" : "text-[#171717]/75"}`}
          >
            Stack
          </h2>
        </div>
      </div>

      <div
        className={`border-y py-6 ${dark ? "border-white/8" : "border-black/8"}`}
      >
        <ul className="sr-only">
          {techSkills.map((skill) => (
            <li key={skill.name}>{skill.name}</li>
          ))}
        </ul>

        {reducedMotion ? (
          /* Static list for users with prefers-reduced-motion */
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {techSkills.map((skill) => (
                <SkillItem key={skill.name} skill={skill} dark={dark} />
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-2" aria-hidden="true">
            <MarqueeRow
              skills={row1}
              reverse={false}
              dark={dark}
              paused={isPaused}
            />
            <MarqueeRow
              skills={row2}
              reverse={true}
              dark={dark}
              paused={isPaused}
            />
          </div>
        )}

        {!reducedMotion && (
          <div className="mx-auto mt-5 flex max-w-6xl justify-end px-1">
            <button
              type="button"
              className={`rounded-sm border px-3 py-1 text-xs uppercase tracking-[0.16em] transition ${dark ? "border-white/25 text-white/80 hover:bg-white hover:text-[#171717]" : "border-black/20 text-[#171717]/80 hover:bg-[#171717] hover:text-white"}`}
              onClick={() => setIsPaused((current) => !current)}
              aria-pressed={isPaused}
            >
              {isPaused ? "Play animation" : "Pause animation"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
