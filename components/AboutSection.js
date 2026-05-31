"use client";

export default function AboutSection() {
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
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.7s ease;
        }
        .photo-item:hover img {
          transform: scale(1.05);
          filter: grayscale(0%) !important;
        }
        .photo-item.always-bw img {
          filter: grayscale(100%) !important;
        }
        .photo-item.always-bw:hover img {
          filter: grayscale(100%) !important;
          transform: scale(1.05);
        }
        .about-tag {
          border: 1px solid rgba(23,23,23,0.12);
          background: rgba(255,255,255,0.6);
          padding: 6px 12px;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(23,23,23,0.55);
          font-family: "Roundo", Arial, sans-serif;
        }
      `}</style>

      <section
        id="about"
        className="bg-[#f7f3ec] px-4 py-24 text-[#171717] sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          {/* Section label */}
          <div className="mb-16 flex items-center gap-4">
            <h2 className="font-display text-xs uppercase tracking-[0.28em] text-[#171717]/40">
              About
            </h2>
            <div className="h-px flex-1 bg-black/8" />
          </div>

          {/* Top — photos left, text right */}
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start mb-0">
            {/* Left — photo collage grid */}
            <div
              className="grid"
              style={{
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "300px 300px 280px",
                gap: "0px",
              }}
            >
              <div
                className="photo-item"
                style={{ gridColumn: "1", gridRow: "1" }}
              >
                <img
                  src="/actriz 4.png"
                  alt="Irene Rubio"
                  style={{
                    filter: "grayscale(20%)",
                    objectPosition: "center top",
                  }}
                />
              </div>

              <div
                className="photo-item"
                style={{ gridColumn: "2", gridRow: "1 / 3" }}
              >
                <img
                  src="/cordelia9.jpg"
                  alt="Theatre production"
                  style={{
                    filter: "grayscale(20%)",
                    objectPosition: "center center",
                  }}
                />
              </div>

              <div
                className="photo-item"
                style={{ gridColumn: "1", gridRow: "2" }}
              >
                <img
                  src="/modelo.png"
                  alt="Cordelia Vintage"
                  style={{
                    filter: "grayscale(40%)",
                    objectPosition: "center top",
                  }}
                />
              </div>

              <div
                className="photo-item"
                style={{ gridColumn: "1", gridRow: "3" }}
              >
                <img
                  src="/cordelia 5.jpg"
                  alt="Cordelia Vintage"
                  style={{ filter: "grayscale(30%)" }}
                />
              </div>

              <div
                className="photo-item"
                style={{ gridColumn: "2", gridRow: "3" }}
              >
                <img
                  src="/Ana.png"
                  alt="Costume design"
                  style={{
                    filter: "grayscale(0%)",
                    objectPosition: "center top",
                  }}
                />
              </div>
            </div>

            {/* Right — text + reel */}
            <div className="flex flex-col gap-10 lg:sticky lg:top-24">
              <div className="space-y-6">
                <h2 className="font-display text-4xl font-semibold leading-tight text-[#171717] sm:text-5xl">
                  Before the code,
                  <br />
                  <span className="text-[#095859]/40">
                    there was the stage.
                  </span>
                </h2>

                <p className="font-body text-base leading-8 text-[#34302b]/70">
                  I spent over two decades in the creative industries — acting,
                  directing costume and casting for theatre and film, building a
                  fashion brand from scratch, Cordelia. I learned how to tell
                  stories visually, how to collaborate under pressure, and adapt
                  fast to very different roles, environments and people.
                </p>

                <p className="font-body text-base leading-8 text-[#34302b]/70">
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
                    <span key={tag} className="about-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* YouTube reel */}
              <div className="space-y-1 mt-auto">
                <p className="font-body text-xs uppercase tracking-[0.25em] text-[#171717]/40">
                  Cordelia — reel
                </p>
                <div className="overflow-hidden rounded-sm shadow-lg">
                  <div
                    className="relative w-full"
                    style={{ paddingBottom: "56.25%" }}
                  >
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src="https://www.youtube.com/embed/Ewn5TyA-QX4"
                      title="Cordelia Reel"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div
            className="grid mt-10"
            style={{
              gridTemplateColumns: "1fr 1fr 1fr",
              height: "500px",
              gap: "0px",
            }}
          >
            <div className="photo-item">
              <img
                src="/maggieyyo.png"
                alt="Cordelia Vintage"
                style={{
                  filter: "grayscale(100%)",
                  objectPosition: "center top",
                }}
              />
            </div>
            <div className="photo-item">
              <img
                src="/cordelia 8.jpg"
                alt="Cordelia Vintage"
                style={{
                  filter: "grayscale(20%)",
                  objectPosition: "center top",
                }}
              />
            </div>
            <div className="photo-item">
              <img
                src="/Ireneyyo.png"
                alt="Irene Rubio"
                style={{
                  filter: "grayscale(0%)",
                  objectPosition: "center top",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
