"use client";

import { useEffect, useRef, useState } from "react";
import HeroA from "@/components/HeroA";
import HeroB from "@/components/HeroB";
import { setHeroVersion } from "@/app/actions/theme-actions";

const HERO_A_PHOTO_SRC = "/images/actriz.jpg";

export default function ModeTransitionShell({ heroVersion, darkHero, children }) {
  const [isSwitching, setIsSwitching] = useState(false);
  const [liveAnnouncement, setLiveAnnouncement] = useState("");
  const hasMounted = useRef(false);
  const hasAnnounced = useRef(false);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    setIsSwitching(true);
    const timer = setTimeout(() => setIsSwitching(false), 640);
    return () => clearTimeout(timer);
  }, [heroVersion]);

  useEffect(() => {
    if (!hasAnnounced.current) {
      hasAnnounced.current = true;
      return;
    }

    const currentMode = heroVersion === "B" ? "Cinematic" : "Editorial";
    setLiveAnnouncement(`Visual mode changed to ${currentMode}.`);
    const timer = setTimeout(() => setLiveAnnouncement(""), 1200);

    return () => clearTimeout(timer);
  }, [heroVersion]);

  async function handleToggleVersion() {
    await setHeroVersion(heroVersion === "A" ? "B" : "A");
  }

  const Hero = darkHero ? HeroB : HeroA;

  return (
    <main
      className={`mode-transition min-h-screen ${darkHero ? "bg-[#1e1e1e]" : "bg-[#f2eee8]"} text-[#171717] font-body ${isSwitching ? "mode-switching" : ""}`}
    >
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {liveAnnouncement}
      </p>
      {isSwitching && (
        <div
          className={`mode-wipe ${darkHero ? "mode-wipe-dark" : "mode-wipe-light"}`}
          aria-hidden="true"
        />
      )}
      <Hero onToggleVersion={handleToggleVersion} photoSrc={HERO_A_PHOTO_SRC} />

      {children}
    </main>
  );
}
