"use client";

import { useContext, useEffect, useState } from "react";
import PortfolioContext from "@/app/Context/PortfolioContext";

function MarqueeRow({ skills, reverse = false, dark = false }) {
  const items = [...skills, ...skills];

  return (
    <div className="overflow-hidden">
      <div
        className="flex w-max gap-10"
        style={{
          animation: `marquee${reverse ? "Reverse" : ""} 90s linear infinite`,
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
        <img src={skill.src} alt="" aria-hidden="true" className="h-9 w-9 object-contain opacity-70" />
      ) : (
        <span aria-hidden="true" className={`text-xl ${dark ? "text-white/20" : "text-[#171717]/20"}`}>·</span>
      )}
      <span className={`font-display text-xl font-medium whitespace-nowrap ${dark ? "text-white/75" : "text-[#171717]/75"}`}>
        {skill.name}
      </span>
    </div>
  );
}

export default function TechStackAccordion({ dark = false }) {
  const { techSkills } = useContext(PortfolioContext);
  const [reducedMotion, setReducedMotion] = useState(false);

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
          <h2 className={`font-display text-xl font-semibold uppercase tracking-[0.28em] sm:text-2xl ${dark ? "text-white/60" : "text-[#171717]/60"}`}>
            Stack
          </h2>
        </div>
      </div>

      <div className={`border-y py-6 ${dark ? "border-white/8" : "border-black/8"}`}>
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
          <div className="space-y-2">
            <MarqueeRow skills={row1} reverse={false} dark={dark} />
            <MarqueeRow skills={row2} reverse={true} dark={dark} />
          </div>
        )}
      </div>
    </section>
  );
}
