"use client";

import { useEffect, useRef } from "react";

export default function StarCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const media = window.matchMedia("(pointer: fine)");
    if (!media.matches) return;

    let rafId = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let visible = false;

    const update = () => {
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      cursor.style.opacity = visible ? "1" : "0";
      rafId = 0;
    };

    const schedule = () => {
      if (!rafId) rafId = window.requestAnimationFrame(update);
    };

    const handleMove = (event) => {
      x = event.clientX;
      y = event.clientY;
      visible = true;
      schedule();
    };

    const handleLeave = () => {
      visible = false;
      schedule();
    };

    const handleEnter = () => {
      visible = true;
      schedule();
    };

    const handleDown = () => {
      cursor.dataset.pressed = "true";
    };

    const handleUp = () => {
      cursor.dataset.pressed = "false";
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseenter", handleEnter);
    window.addEventListener("mouseleave", handleLeave);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseenter", handleEnter);
      window.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-[4.5rem] w-[4.5rem] items-center justify-center opacity-0 transition-[opacity,transform] duration-150 ease-out will-change-transform [data-pressed=true]:scale-90 [data-pressed=false]:scale-100 md:flex"
    >
      <svg
        viewBox="0 0 96 96"
        className="h-[4.5rem] w-[4.5rem] drop-shadow-[0_0_20px_rgba(224,201,139,0.58)]"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="cursorGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fffdf3" stopOpacity="1" />
            <stop offset="55%" stopColor="#e9dca8" stopOpacity="0.98" />
            <stop offset="100%" stopColor="#c9b06a" stopOpacity="0.95" />
          </radialGradient>
          <radialGradient id="cursorHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fffdf2" stopOpacity="0.55" />
            <stop offset="55%" stopColor="#f3e8bc" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#f3e8bc" stopOpacity="0" />
          </radialGradient>
        </defs>
        <path
          d="M48 8 55.2 32.1 80 33.5 60.7 49.2 67.4 73 48 59.1 28.6 73l6.7-23.8L16 33.5l24.8-1.4L48 8Z"
          fill="url(#cursorHalo)"
        />
        <path
          d="M48 12 54.2 33.2 76 34.4 59 47.8 65 68.7 48 57.1 31 68.7 37 47.8 20 34.4l21.8-1.2L48 12Z"
          fill="url(#cursorGlow)"
        />
        <path
          d="M48 12.2c1.1 0 2 .8 2.3 1.8l5.9 20.2c.4 1.4 1.5 2.5 2.9 2.9l20.2 5.9c1 .3 1.8 1.2 1.8 2.3s-.8 2-1.8 2.3l-20.2 5.9c-1.4.4-2.5 1.5-2.9 2.9l-5.9 20.2c-.3 1-1.2 1.8-2.3 1.8s-2-.8-2.3-1.8l-5.9-20.2c-.4-1.4-1.5-2.5-2.9-2.9l-20.2-5.9c-1-.3-1.8-1.2-1.8-2.3s.8-2 1.8-2.3l20.2-5.9c1.4-.4 2.5-1.5 2.9-2.9l5.9-20.2c.3-1 1.2-1.8 2.3-1.8Z"
          fill="none"
          stroke="#fff8e8"
          strokeOpacity="0.55"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
