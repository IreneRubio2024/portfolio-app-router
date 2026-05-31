"use client";

import { useContext } from "react";
import PortfolioContext from "@/app/Context/PortfolioContext";

export default function TechStackAccordion() {
  const { techSkills } = useContext(PortfolioContext);

  return (
    <section
      id="stack"
      className="bg-[#FFFEF6] px-4 py-16 text-[#171717] sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[#3686A0]">
              Toolkit
            </p>
            <h2 className="font-displaymt-2 text-3xl font-bold sm:text-4xl">
              Frontend, backend, testing, and AI tools
            </h2>
            <p className="font-bodymax-w-xl text-sm leading-6 text-[#4d4a45] sm:text-base">
            Tools I use to build interfaces, connect services, test user flows,
            and ship projects that are easy to maintain.
          </p>
          </div>
         
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {techSkills.map((skill, index) => (
            <div
              key={index}
              className="flex min-h-28 flex-col items-center justify-center rounded-lg border border-black/10 bg-white/70 p-4 text-center transition hover:border-[#c04825]/40 hover:bg-white"
            >
              <img
                src={skill.src}
                alt={skill.name}
                className="mb-3 h-10 w-10 object-contain"
              />
              <p className="text-sm text-[#171717]/78">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
