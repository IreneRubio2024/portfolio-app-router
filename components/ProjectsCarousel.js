"use client";

import { useContext } from "react";
import { ExternalLink } from "lucide-react";
import PortfolioContext from "@/app/Context/PortfolioContext";

const ProjectsCarousel = () => {
  const { projects } = useContext(PortfolioContext);

  return (
    <section
      id="projects"
      className="w-full bg-[#191E1E] px-4 py-16 text-[#FFFEF6] sm:px-6 lg:px-8"
    >
      {" "}
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-2">
          <p className="font-body text-sm uppercase tracking-[0.28em] text-[#3686A0]">
            Selected work
          </p>

          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Projects with product thinking
          </h2>

          <p className="font-body max-w-xl text-sm leading-6 text-white/50 sm:text-base">
            A mix of frontend, API work, AI experiments, and media interfaces,
            built with attention to flow, responsiveness, and visual detail.
          </p>
        </div>
        {/* Projects grid */}
        <div className="grid gap-px md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden bg-[#141818] transition duration-300 hover:bg-[#1e2424]"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                  style={{
                    filter: "grayscale(100%) contrast(1.1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = "grayscale(0%) contrast(1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter =
                      "grayscale(100%) contrast(1.1)";
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex min-h-[220px] flex-col border-t border-white/5 p-6">
                {/* Title + link */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold text-white/90">
                    {project.name}
                  </h3>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 text-white/30 transition hover:text-[#3686A0]"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                {/* Description */}
                <p className="font-body mt-3 flex-1 text-sm leading-6 text-white/45">
                  {project.description}
                </p>

                {/* Stack */}
                {project.stack && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-body border border-white/10 px-2 py-0.5 text-xs uppercase tracking-[0.12em] text-white/35"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
