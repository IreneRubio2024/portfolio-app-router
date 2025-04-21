"use client";

import { useContext, useState } from "react";
import PortfolioContext from "./Context/PortfolioContext";
import Link from "next/link";
import ImageLevitating from "@/components/ImageLevitating";

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
        <section className="relative py-20 text-white text-center bg-[radial-gradient(circle_at_center,_#0f172a,_#1e3a8a,_#312e81,_#0b1120)]">
          {/* Posiciona el componente en la esquina superior izquierda */}
          <div className="absolute top-0 left-0 z-10">
            <ImageLevitating />
          </div>

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
              Creative Frontend Developer with Backend and UX/UI skills
            </p>
          </div>
        </section>
      </div>

      <section className="py-15 bg-gradient-to-b from-[#1e293b] to-[#312e81]">
        <h2 className="text-4xl text-white font-bold text-center py-4">
          {" "}
          My Tech Stack
        </h2>
        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          {techSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md px-6 py-4 rounded-xl shadow-md text-sm text-white flex flex-col items-center"
            >
              <img className="h-10 w-10" src={skill.src} alt={skill.alt} />
              {skill.name}
            </div>
          ))}
        </div>
      </section>

      <section
        className="bg-gray-100 py-15 px-6 bg-gradient-to-b from-[#1e293b] to-[#312e81]


"
      >
        <div className="flex justify-center">
          <h2 className="text-white text-4xl font-bold text-center">
            My Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 px-6 ">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-5 shadow-md hover:shadow-xl transition-shadow flex flex-col items-center rounded-3xl ]
              "
            >
              <h2 className="text-whitetext-2xl font-bold">{project.name}</h2>
              <p className="text-gray-700">{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-blue-500 hover:underline"
              >
                <img
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                  src={project.image}
                  alt={project.alt}
                />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
