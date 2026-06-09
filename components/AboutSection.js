"use client";

import { useState } from "react";

export default function AboutSection({ dark = false }) {
  const [reelPlaying, setReelPlaying] = useState(false);
  return (
    <>
      <style>{`
        .photo-item {
          overflow: hidden;
          position: relative;
        }
        .photo-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%);
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.7s ease;
        }
        .photo-item:hover img {
          transform: scale(1.05);
          filter: grayscale(0%);
        }
        .about-tag {
          border: 1px solid rgba(23,23,23,0.12);
          background: rgba(255,255,255,0.6);
          padding: 6px 12px;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(23,23,23,0.55);
          font-family: "Roundo-Variable"
        }

        .about-top-collage {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 300px 300px 280px;
          gap: 0;
        }

        .top-item-1 { grid-column: 1; grid-row: 1; }
        .top-item-2 { grid-column: 2; grid-row: 1 / 3; }
        .top-item-3 { grid-column: 1; grid-row: 2; }
        .top-item-4 { grid-column: 1; grid-row: 3; }
        .top-item-5 { grid-column: 2; grid-row: 3; }

        .about-bottom-collage {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 0;
          height: 500px;
        }

        @media (max-width: 1023px) {
          .about-top-collage {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 240px 240px 220px;
            gap: 6px;
            overflow: hidden !important;
          }

          .about-top-collage .photo-item img {
            object-fit: cover !important;
          }

          .about-top-collage .top-item-1 img { object-position: center 18% !important; }
          .about-top-collage .top-item-2 img { object-position: center 24% !important; }
          .about-top-collage .top-item-3 img { object-position: center 18% !important; }
          .about-top-collage .top-item-4 img { object-position: center 32% !important; }
          .about-top-collage .top-item-5 img { object-position: center 16% !important; }

          .about-bottom-collage {
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 230px;
            height: auto;
            gap: 6px;
            overflow: hidden !important;
          }

          .about-bottom-collage .bottom-item-1,
          .about-bottom-collage .bottom-item-2,
          .about-bottom-collage .bottom-item-3 {
            grid-column: auto !important;
            grid-row: auto !important;
          }

          .about-bottom-collage .photo-item img {
            object-fit: cover !important;
          }

          .about-bottom-collage .bottom-item-1 img { object-position: center 16% !important; }
          .about-bottom-collage .bottom-item-2 img { object-position: center 20% !important; }
          .about-bottom-collage .bottom-item-3 img { object-position: center 18% !important; }
        }
      `}</style>

      <section
        id="about"
        className={`px-4 py-24 sm:px-6 lg:px-8 ${dark ? "bg-[#262626] text-[#F5F7FC]" : "bg-[#FAFAF8] text-[#171717]"}`}
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-16">
            <h2
              className={`font-display text-xl font-semibold uppercase tracking-[0.28em] sm:text-2xl ${dark ? "text-white/70" : "text-[#171717]/75"}`}
            >
              About
            </h2>
          </div>
          {/* Top — photos left, text right */}
          <div className="mb-0 grid items-start gap-8 lg:grid-cols-[1fr_1.2fr]">
            {/* LEFT — photo collage */}
            <div className="about-top-collage overflow-hidden rounded-[28px]">
              {/* Image 1 */}
              <div className="photo-item top-item top-item-1">
                <img
                  src="/actriz 4.png"
                  alt="Irene Rubio"
                  style={{ objectPosition: "center top" }}
                />
              </div>

              {/* Image 2 */}
              <div className="photo-item top-item top-item-2">
                <img
                  src="/cordelia9.jpg"
                  alt="Theatre production"
                  style={{ objectPosition: "center center" }}
                />
              </div>

              {/* Image 3 */}
              <div className="photo-item top-item top-item-3">
                <img
                  src="/modelo.png"
                  alt="Cordelia Vintage"
                  style={{ objectPosition: "center top" }}
                />
              </div>

              {/* Image 4 */}
              <div className="photo-item top-item top-item-4">
                <img src="/cordelia 5.jpg" alt="Cordelia Vintage" />
              </div>

              {/* Image 5 */}
              <div className="photo-item top-item top-item-5">
                <img
                  src="/Ana.png"
                  alt="Costume design"
                  style={{ objectPosition: "center top" }}
                />
              </div>
            </div>

            {/* RIGHT — text only */}
            <div className="flex flex-col gap-10 lg:sticky lg:top-24">
              <div className="space-y-6">
                <h3
                  className={`font-display text-3xl font-semibold leading-tight sm:text-4xl ${dark ? "text-[#F5F7FC]" : "text-[#171717]"}`}
                >
                  Before the code,
                  <br />
                  <span className="text-[#095859]">there was the stage.</span>
                </h3>

                <p
                  className={`font-body text-lg leading-9 ${dark ? "text-white/70" : "text-[#171717]/70"}`}
                >
                  I spent over two decades in the creative industries — acting,
                  directing costume and casting for theatre and film, building a
                  fashion brand from scratch, Cordelia. I learned how to tell
                  stories visually, how to collaborate under pressure, and adapt
                  fast to very different roles, environments and people.
                </p>

                <p
                  className={`font-body text-lg leading-9 ${dark ? "text-white/70" : "text-[#171717]/70"}`}
                >
                  Art history was part of that formation too. Studying how
                  images carry meaning, how objects hold memory, and how
                  institutions decide what gets preserved and how it gets seen
                  gave me a framework I still use every day — for thinking about
                  context, intention, and what it means to make something
                  genuinely accessible.
                </p>

                <p
                  className={`font-body text-lg leading-9 ${dark ? "text-white/70" : "text-[#171717]/70"}`}
                >
                  When I moved into tech, I didn&apos;t leave that behind. I
                  brought it with me. Today I build interfaces the same way I
                  used to direct a shoot — with intention, clear communication,
                  and an eye for the details that make the difference between
                  something that works and something that feels right.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {[
                    "Film & Theatre acting",
                    "Costume and casting Direction",
                    "Brand Building",
                    "Visual Storytelling",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className={`border px-3 py-2 text-sm uppercase tracking-[0.15em] ${dark ? "border-white/12 bg-white/[0.04] text-white/65" : "border-black/10 bg-black/[0.03] text-[#171717]/75"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Bottom row */}
          <div className="about-bottom-collage mt-10 overflow-hidden rounded-[28px]">
            <div className="photo-item bottom-item-1">
              <img
                src="/maggieyyo2.png"
                alt="Cordelia Vintage"
                style={{ objectPosition: "center top" }}
              />
            </div>
            <div className="photo-item bottom-item-2">
              <img
                src="/cordelia 8.jpg"
                alt="Cordelia Vintage"
                style={{ objectPosition: "center top" }}
              />
            </div>
            <div className="photo-item bottom-item-3">
              <img
                src="/Ireneyyo.png"
                alt="Irene Rubio"
                style={{ objectPosition: "center top" }}
              />
            </div>
          </div>

          {/* Reel — full width below all photos */}
          <div className="mt-16 space-y-3">
            <p
              className={`font-body text-sm uppercase tracking-[0.25em] ${dark ? "text-white/55" : "text-[#171717]/65"}`}
            >
              Cordelia — reel
            </p>
            <div
              className="relative w-full shadow-2xl"
              style={{ paddingBottom: "56.25%" }}
            >
              {reelPlaying ? (
                <iframe
                  className="absolute inset-0 h-full w-full rounded-[20px]"
                  src="https://www.youtube.com/embed/Ewn5TyA-QX4?autoplay=1"
                  title="Cordelia Reel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  onClick={() => setReelPlaying(true)}
                  className="absolute inset-0 w-full h-full group"
                  aria-label="Play Cordelia Reel"
                >
                  <img
                    src={`https://img.youtube.com/vi/Ewn5TyA-QX4/maxresdefault.jpg`}
                    alt="Cordelia Reel"
                    className="h-full w-full object-cover rounded-[20px]"
                  />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition group-hover:bg-white/30 group-hover:scale-110">
                      <svg
                        className="h-6 w-6 translate-x-0.5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
