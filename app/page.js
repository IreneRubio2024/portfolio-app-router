"use client";

import { useContext } from "react";
import PortfolioContext from "./Context/PortfolioContext";
import ImageLevitating from "@/components/ImageLevitating";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import TechStackAccordion from "@/components/TechStackAccordion";

export default function Home() {
  const context = useContext(PortfolioContext);

  if (!context) {
    return <p>Loading...</p>;
  }

  const { projects, techSkills } = context;

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen text-white text-center flex flex-col justify-center items-center px-4">
        {/* Círculo centrado */}
        <div className="flex items-center justify-center">
          <div
            className="
              relative flex items-center justify-center
              w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]
              bg-[#070707] rounded-full
              transition-all duration-300
              hover:bg-[#ffffff] hover:text-gray-800
              shadow-[0_0_40px_10px_rgba(255,102,0,0.4)]
              border-2 sm:border-4 border-[#e7e7e7f0]
              p-4 sm:p-6
            "
          >
            <div className="text-center">
              <h1
                className="
                  font-extrabold mb-3 sm:mb-4 leading-tight transition-all duration-300 hover:text-gray-800
                  text-xl sm:text-3xl md:text-5xl lg:text-6xl
                "
              >
                Hello, I am{" "}
                <span style={{ fontFamily: "Aujournuit-Regular" }}>Irene!</span>
              </h1>
              <p
                style={{ fontFamily: "Aujournuit-Regular" }}
                className="text-sm sm:text-lg md:text-xl lg:text-2xl text-slate-200 transition-all duration-300 hover:text-gray-800"
              >
                Creative Frontend Developer <br className="hidden sm:block" />{" "}
                with Backend and UX/UI skills
              </p>
            </div>
          </div>
        </div>

        {/* Imagen levitando */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8">
          <div className="relative group cursor-pointer">
            <div className="relative z-1 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
              <ImageLevitating />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS & STACK */}
      <div className="px-2 sm:px-4 md:px-8">
        <div className="my-8">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-center mb-4">
            Projects
          </h2>
          <ProjectsCarousel
            responsive={{
              superLargeDesktop: {
                breakpoint: { max: 4000, min: 1280 },
                items: 3,
              },
              desktop: { breakpoint: { max: 1280, min: 1024 }, items: 2 },
              tablet: { breakpoint: { max: 1024, min: 640 }, items: 1 },
              mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
            }}
          />
        </div>

        <div className="my-8">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-center mb-4">
            Tech Stack
          </h2>
          <TechStackAccordion />
        </div>
      </div>
    </>
  );
}
