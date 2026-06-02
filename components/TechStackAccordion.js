"use client";

import { useContext } from "react";
import PortfolioContext from "@/app/Context/PortfolioContext";

export default function TechStackAccordion({ dark = false }) {
  const { techSkills } = useContext(PortfolioContext);

  return (
    <section
      id="stack"
      className={`px-4 py-24 sm:px-6 lg:px-8 ${dark ? "bg-[#191E1E] text-[#FFFEF6]" : "bg-[#FFFEF6] text-[#171717]"}`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <h2 className={`font-display text-xl font-semibold uppercase tracking-[0.28em] sm:text-2xl ${dark ? "text-white/60" : "text-[#171717]/60"}`}>
            Stack
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {techSkills.map((skill, index) => (
            <div
              key={index}
              className={`flex min-h-28 flex-col items-center justify-center rounded-lg border p-4 text-center transition hover:border-[#c04825]/40 ${dark ? "border-white/10 bg-white/5 hover:bg-white/10" : "border-black/10 bg-white/70 hover:bg-white"}`}
            >
              <img src={skill.src} alt={skill.name} className="mb-3 h-10 w-10 object-contain" />
              <p className={`text-sm ${dark ? "text-white/70" : "text-[#171717]/78"}`}>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
