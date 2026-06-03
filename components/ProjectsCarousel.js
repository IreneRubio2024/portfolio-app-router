"use client";

import { useContext } from "react";

import { Button } from "@/components/ui/button";
import PortfolioContext from "@/app/Context/PortfolioContext";

const ProjectsCarousel = ({ dark = false }) => {
  const { projects } = useContext(PortfolioContext);

  return (
    <section
      id="projects"
      className={`w-full px-4 py-24 sm:px-6 lg:px-8 ${dark ? "bg-[#fffef6] text-[#263247]" : "bg-[#FAFAF8] text-[#171717]"}`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <h2
            className={`font-display text-xl font-semibold uppercase tracking-[0.28em] sm:text-2xl ${dark ? "text-[#263247]/75" : "text-[#171717]/75"}`}
          >
            Projects
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`group overflow-hidden border shadow-sm transition duration-300 hover:shadow-md ${dark ? "bg-[#fbfcf8] border-[#263247]/12 hover:bg-[#f5f6f2]" : "bg-white border-black/8 hover:bg-[#f5f5f0]"}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className={`h-full w-full object-cover grayscale transition duration-700 group-hover:scale-[1.02] ${dark ? "brightness-[0.8] contrast-125" : "brightness-[0.92] contrast-110"}`}
                />
                <div
                  className={`absolute inset-0 ${dark ? "bg-gradient-to-t from-black/75 via-black/35 to-black/10" : "bg-gradient-to-t from-[#1f1712]/55 via-[#33241a]/18 to-transparent"}`}
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                  <p
                    className={`font-body text-xs uppercase tracking-[0.18em] ${dark ? "text-white/80" : "text-[#F8EFE6]/90"}`}
                  >
                    Selected Work
                  </p>
                  <p
                    className={`font-display text-sm tracking-[0.18em] ${dark ? "text-white/90" : "text-[#F8EFE6]/95"}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
              </div>
              <div
                className={`flex min-h-[220px] flex-col border-t p-8 ${dark ? "border-[#263247]/10" : "border-black/10"}`}
              >
                <h3
                  className={`font-display text-xl font-semibold ${dark ? "text-[#263247]" : "text-[#171717]"}`}
                >
                  {project.name}
                </h3>
                <p
                  className={`font-body mt-4 flex-1 text-lg leading-9 ${dark ? "text-[#263247]/78" : "text-[#171717]/70"}`}
                >
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
                  {project.stack && (
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className={`font-body border px-2 py-0.5 text-sm uppercase tracking-[0.12em] ${dark ? "border-[#263247]/18 text-[#263247]/80" : "border-black/10 text-[#171717]/70"}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  <Button
                    type="button"
                    variant="outline"
                    size="default"
                    className={`font-body bg-transparent gap-2 transition-colors ${dark ? "border-[#263247]/28 text-[#263247]/85 hover:bg-[#263247] hover:text-white hover:border-[#263247]" : "border-black/20 text-[#171717]/80 hover:bg-[#171717] hover:text-white hover:border-[#171717]"}`}
                    onClick={() =>
                      window.open(project.url, "_blank", "noopener,noreferrer")
                    }
                    aria-label={`Open ${project.name} in a new tab`}
                  >
                    Open project
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
