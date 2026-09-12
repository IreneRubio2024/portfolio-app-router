"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./AboutSection.module.css";

export default function AboutSection({ dark = false }) {
  const [reelPlaying, setReelPlaying] = useState(false);
  return (
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

          <div className="mb-0 grid items-start gap-8 lg:grid-cols-[1fr_1.2fr]">

            <div className={`${styles.aboutTopCollage} overflow-hidden rounded-[28px]`}>

              <div className={`${styles.photoItem} ${styles.topItem1}`}>
                <Image
                  src="/images/actriz 4.png"
                  alt="Irene Rubio"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  style={{ objectPosition: "center top" }}
                />
              </div>


              <div className={`${styles.photoItem} ${styles.topItem2}`}>
                <Image
                  src="/images/cordelia9.jpg"
                  alt="Theatre production"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  style={{ objectPosition: "center center" }}
                />
              </div>

              <div className={`${styles.photoItem} ${styles.topItem3}`}>
                <Image
                  src="/images/modelo.png"
                  alt="Cordelia Vintage"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  style={{ objectPosition: "center top" }}
                />
              </div>


              <div className={`${styles.photoItem} ${styles.topItem4}`}>
                <Image
                  src="/images/cordelia 5.jpg"
                  alt="Cordelia Vintage"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </div>

              {/* Image 5 */}
              <div className={`${styles.photoItem} ${styles.topItem5}`}>
                <Image
                  src="/images/Ana.png"
                  alt="Costume design"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  style={{ objectPosition: "center top" }}
                />
              </div>
            </div>


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

          <div className={`${styles.aboutBottomCollage} mt-10 overflow-hidden rounded-[28px]`}>
            <div className={`${styles.photoItem} ${styles.bottomItem1}`}>
              <Image
                src="/images/maggieyyo2.png"
                alt="Cordelia Vintage"
                fill
                sizes="(min-width: 1024px) 33vw, 33vw"
                style={{ objectPosition: "center top" }}
              />
            </div>
            <div className={`${styles.photoItem} ${styles.bottomItem2}`}>
              <Image
                src="/images/cordelia 8.jpg"
                alt="Cordelia Vintage"
                fill
                sizes="(min-width: 1024px) 33vw, 33vw"
                style={{ objectPosition: "center top" }}
              />
            </div>
            <div className={`${styles.photoItem} ${styles.bottomItem3}`}>
              <Image
                src="/images/Ireneyyo.png"
                alt="Irene Rubio"
                fill
                sizes="(min-width: 1024px) 33vw, 33vw"
                style={{ objectPosition: "center top" }}
              />
            </div>
          </div>


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
  );
}
