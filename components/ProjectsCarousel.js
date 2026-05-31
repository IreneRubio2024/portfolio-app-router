"use client";

import { useContext } from "react";
import { ExternalLink } from "lucide-react";
import PortfolioContext from "@/app/Context/PortfolioContext";

import { Button } from "@/components/ui/button";

const ProjectsCarousel = () => {
  const { projects } = useContext(PortfolioContext);

  return (
    <section
      id="projects"
      className="w-full bg-[#191E1E] px-4 py-16 text-[#FFFEF6] sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[#3686A0]">
              Selected work
            </p>
            <h2
              className="font-display mt-2 text-3xl font-bold sm:text-4xl"
             
            >
              Projects with product thinking
            </h2>
            <p className="font-body max-w-xl text-sm leading-6 text-white/70 sm:text-base">
            A mix of frontend, API work, AI experiments, and media interfaces,
            built with attention to flow, responsiveness, and visual detail.
          </p>
          </div>
         
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-lg border border-white/10 bg-[#f7f3ec] text-[#171717] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#171717]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex min-h-[220px] flex-col p-5">
                <h3 className="text-2xl font-semibold">{project.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-[#4d4a45]">
                  {project.description}
                </p>

                <Button
                  asChild
                  variant="outline"
                  className="mt-6 w-fit border-black text-black hover:bg-black hover:text-white"
                >
                  <a href={project.url} target="_blank" rel="noreferrer">
                    View project <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
