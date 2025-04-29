"use client";

import { useState } from "react";
import { useContext } from "react";
import PortfolioContext from "@/app/Context/PortfolioContext";
import ImageLevitating from "./ImageLevitating";
const ProjectsAccordion = () => {
  const { projects } = useContext(PortfolioContext);
  const [activeProject, setActiveProject] = useState(null);

  const toggleProject = (id) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <section className="py-10 bg-black text-gray-300 w-full relative">
    
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6"
        style={{ fontFamily: "Aujournuit-Regular" }}>My Projects</h2>
          <div className="absolute top-2 left-2">
            <ImageLevitating />
          </div>
        <ul className="space-y-4">
          {projects.map((project) => (
            <li
              key={project.id}
              className="border border-gray-300 rounded-lg shadow-sm max-w-4xl mx-auto text-2xl"
              style={{ fontFamily: "Aujournuit-Regular" }}
            >
              <button
                onClick={() => toggleProject(project.id)}
                className="w-full text-left px-4 py-2 font-semibold text-gray-00 hover:bg-gray-100 hover:text-gray-800 focus:outline-none"
              >
                {project.name}
              </button>
              {activeProject === project.id && (
                <div className="px-4 py-4 bg-white border-t border-gray-300">
                  <p className="text-sm text-gray-800 mb-2"
                  style={{ fontFamily: "Aujournuit-Regular" }}>
                    {project.description}
                  </p>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-auto rounded-lg shadow-md mb-4"
                  />
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:underline"
                  >
                    Visit Project
                  </a>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
         {/* <div className="absolute top-0 left-0 z-10">
            <ImageLevitating />
          </div>     */}
    </section>
  );
};

export default ProjectsAccordion;
