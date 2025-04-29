"use client";

import { useContext, useState } from "react";
import PortfolioContext from "./Context/PortfolioContext";
import Link from "next/link";
import ImageLevitating from "@/components/ImageLevitating";
import ProjectsAccordion from "@/components/ProjectAccordion";
import TechStackAccordion from "@/components/TechStackAccordion";

export default function Home() {
  const context = useContext(PortfolioContext);

  if (!context) {
    return <p>Loading...</p>;
  }

  const { projects, techSkills } = context;

  return (
    <div>
      {/* <section className="relative py-20 text-white text-center bg-[radial-gradient(circle_at_center,_#0f172a,_#1e3a8a,_#312e81,_#0b1120)]">
        <div className="max-w-3xl mx-auto flex flex-col items-center relative">
          <img
            src="/Irene.jpg"
            alt="Irene's Profile"
            className="w-40 h-40 mx-auto rounded-full border-4 border-white object-cover aspect-square"
          />
         

          <h1 className="text-4xl font-extrabold tracking-tight mt-6 text-white drop-shadow-lg">
            ¡Hello, I am Irene!
          </h1>

          <p className="text-xl mt-3 text-slate-200 drop-shadow">
            Frontend Developer with Backend and UX/UI skills
          </p>
        </div>
       
      </section> */}
      <div>
        {/* <section className="relative h-screen text-white text-center bg-gray-950">

          <div className="absolute top-0 left-0 z-10">
            <ImageLevitating />
          </div>

          <div className="h-screen flex flex-col items-center justify-center text-center">
           <h1 style={{fontFamily: "Aujournuit-Regular"}}className="text-6xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
              Hello, I am Irene!
            </h1>

            <p style={{fontFamily: "Aujournuit-Regular"}}className="text-xl mt-3 text-slate-200 drop-shadow">
              Creative Frontend Developer with Backend and UX/UI skills
            </p>
          </div>
        </section> */}
       <section
  className="relative h-screen text-white text-center"
>
  <div className="h-screen flex items-center justify-center">
    <div className="relative flex items-center justify-center w-[500px] h-[500px] bg-[#070707] rounded-full transition-all duration-300 hover:bg-[#ffffff] hover:text-gray-800 shadow-[0_0_40px_10px_rgba(255,102,0,0.4)] border-4 border-[#e7e7e7f0]">
      <div className="text-center px-8">
        <h1
          className="text-6xl font-extrabold mb-6 leading-tight transition-all duration-300 hover:text-gray-800"
        >
          Hello, I am <span style={{ fontFamily: "Aujournuit-Regular" }}>Irene!</span>
        </h1>
        <p
          style={{ fontFamily: "Aujournuit-Regular" }}
          className="text-2xl text-slate-200 transition-all duration-300 hover:text-gray-800"
        >
          Creative Frontend Developer with Backend and UX/UI skills
        </p>
      </div>
    </div>
  </div>
</section>
      </div>
      
      <ProjectsAccordion></ProjectsAccordion>
      <TechStackAccordion></TechStackAccordion>
    </div>
  );
}
