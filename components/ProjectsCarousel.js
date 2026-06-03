"use client";

import { useContext } from "react";

import { Button } from "@/components/ui/button";
import PortfolioContext from "@/app/Context/PortfolioContext";

const ProjectsCarousel = ({ dark = false }) => {
  const { projects } = useContext(PortfolioContext);

  return (
    <section
      id="projects"
      className={`w-full px-4 py-24 sm:px-6 lg:px-8 ${dark ? "bg-[#191E1E] text-[#FFFEF6]" : "bg-[#FFFEF6] text-[#171717]"}`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <h2
            className={`font-display text-xl font-semibold uppercase tracking-[0.28em] sm:text-2xl ${dark ? "text-white/75" : "text-[#171717]/75"}`}
          >
            Projects
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`group overflow-hidden border shadow-sm transition duration-300 hover:shadow-md ${dark ? "bg-[#1e2424] border-white/8 hover:bg-[#252c2c]" : "bg-white border-black/8 hover:bg-[#f5f5f0]"}`}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                  style={{ filter: "grayscale(100%) contrast(1.1)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = "grayscale(0%) contrast(1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter =
                      "grayscale(100%) contrast(1.1)";
                  }}
                />
              </div>
              <div
                className={`flex min-h-[220px] flex-col border-t p-8 ${dark ? "border-white/5" : "border-black/10"}`}
              >
                <h3
                  className={`font-display text-xl font-semibold ${dark ? "text-white/90" : "text-[#171717]"}`}
                >
                  {project.name}
                </h3>
                <p
                  className={`font-body mt-4 flex-1 text-lg leading-9 ${dark ? "text-white/70" : "text-[#171717]/70"}`}
                >
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
                  {project.stack && (
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className={`font-body border px-2 py-0.5 text-sm uppercase tracking-[0.12em] ${dark ? "border-white/10 text-white/70" : "border-black/10 text-[#171717]/70"}`}
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
                    className={`font-body bg-transparent gap-2 transition-colors ${dark ? "border-white/30 text-white/85 hover:bg-white hover:text-[#171717] hover:border-white" : "border-black/20 text-[#171717]/80 hover:bg-[#171717] hover:text-white hover:border-[#171717]"}`}
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
