"use client";

import { useContext } from "react";

import { Button } from "@/components/ui/button";
import PortfolioContext from "@/app/Context/PortfolioContext";

const ProjectsCarousel = ({ dark = false }) => {
  const { projects } = useContext(PortfolioContext);
  const exjobbPreview = {
    label: "Exjobb / Degree Project",
    title: "Kompetensprofilen",
    summary:
      "Quality assurance and UX validation project completed during LIA at Arbetsformedlingen for Min kompetensprofil, a new Angular service for job seekers.",
    sections: [
      {
        title: "Problem",
        body: "The team needed reliable QA coverage for a critical transition from the legacy profile flow to Min kompetensprofil, with focus on real user journeys and release quality.",
      },
      {
        title: "What I delivered",
        body: "I designed and executed 100+ test cases, documented bugs and UX inconsistencies in Jira/Xray with clear reproduction steps, and implemented an initial Playwright E2E validation flow.",
      },
      {
        title: "Outcome",
        body: "I surfaced and communicated high-priority cases (PRPO-345, PRPO-263, PRPO-313, PRPO-268), enabling clearer prioritization and improving release confidence from a user perspective.",
      },
    ],
  };

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
        <article
          className={`mb-6 overflow-hidden border shadow-sm ${dark ? "border-[#263247]/12 bg-white" : "border-black/8 bg-[#fffdfa]"}`}
        >
          <div
            className={`grid gap-8 p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-10 ${dark ? "text-[#263247]" : "text-[#171717]"}`}
          >
            <div>
              <img
                src="/ArbetsLogo.png"
                alt="Arbetsformedlingen"
                className="h-auto w-full max-w-[22rem]"
              />
              <p
                className={`font-body mt-5 text-xs uppercase tracking-[0.2em] ${dark ? "text-[#263247]/62" : "text-[#171717]/55"}`}
              >
                {exjobbPreview.label}
              </p>
              <h3 className="font-display mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                {exjobbPreview.title}
              </h3>
              <p
                className={`font-body mt-2 text-sm uppercase tracking-[0.16em] ${dark ? "text-[#263247]/62" : "text-[#171717]/58"}`}
              >
                Testing and evaluating the app experience
              </p>
              <p
                className={`font-body mt-5 max-w-2xl text-lg leading-9 ${dark ? "text-[#263247]/78" : "text-[#171717]/72"}`}
              >
                {exjobbPreview.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Public service QA",
                  "Angular frontend",
                  "Playwright E2E",
                  "Jira / Xray",
                ].map((tag) => (
                  <span
                    key={tag}
                    className={`font-body border px-3 py-1 text-xs uppercase tracking-[0.16em] ${dark ? "border-[#263247]/14 text-[#263247]/75" : "border-black/10 text-[#171717]/68"}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div
              className={`border p-6 ${dark ? "border-[#263247]/10 bg-[#f7f8f4]" : "border-black/8 bg-white"}`}
            >
              <p
                className={`font-display text-sm uppercase tracking-[0.18em] ${dark ? "text-[#263247]/65" : "text-[#171717]/55"}`}
              >
                Case study snapshot
              </p>
              <div className="mt-5 space-y-5">
                {exjobbPreview.sections.map((item) => (
                  <div key={item.title}>
                    <p
                      className={`font-display text-sm uppercase tracking-[0.14em] ${dark ? "text-[#263247]/72" : "text-[#171717]/62"}`}
                    >
                      {item.title}
                    </p>
                    <p
                      className={`font-body mt-2 text-base leading-8 ${dark ? "text-[#263247]/78" : "text-[#171717]/72"}`}
                    >
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`group overflow-hidden border shadow-sm transition duration-300 hover:shadow-md ${dark ? "bg-[#fbfcf8] border-[#263247]/12 hover:bg-[#f5f6f2]" : "bg-white border-black/8 hover:bg-[#f5f5f0]"}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className={`h-full w-full object-cover grayscale transition duration-700 group-hover:scale-[1.02] ${project.imagePosition === "top" ? "object-top" : "object-center"} ${dark ? "brightness-[0.8] contrast-125" : "brightness-[0.92] contrast-110"}`}
                />
                <div
                  className={`absolute inset-0 ${dark ? "bg-gradient-to-t from-black/75 via-black/35 to-black/10" : "bg-gradient-to-t from-[#1f1712]/55 via-[#33241a]/18 to-transparent"}`}
                />
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
                {project.mobileOnly ? (
                  <div className="mt-6">
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
                    <div className="mt-5 flex items-center gap-4">
                      <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=88x88&data=${encodeURIComponent(project.url)}&bgcolor=ffffff&color=000000&margin=2`}
                        alt={`QR code to open ${project.name} on mobile`}
                        className="h-[88px] w-[88px] flex-shrink-0"
                      />
                      <div>
                        <p className={`font-body text-xs uppercase tracking-[0.16em] ${dark ? "text-[#263247]/65" : "text-[#171717]/60"}`}>
                          Scan to view on mobile
                        </p>
                        <button
                          type="button"
                          onClick={() => window.open(project.url, "_blank", "noopener,noreferrer")}
                          aria-label={`Open ${project.name} in a new tab`}
                          className={`font-body mt-2 text-xs uppercase tracking-[0.12em] underline underline-offset-2 ${dark ? "text-[#263247]/45" : "text-[#171717]/40"}`}
                        >
                          Open anyway
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
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
                      onClick={() => window.open(project.url, "_blank", "noopener,noreferrer")}
                      aria-label={`Open ${project.name} in a new tab`}
                    >
                      Open project
                    </Button>
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
