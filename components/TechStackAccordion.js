"use client";

import { useState, useContext } from "react";
import PortfolioContext from "@/app/Context/PortfolioContext";

export default function TechStackAccordion() {
  const { techSkills } = useContext(PortfolioContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="py-10">
      <div className="max-w-4xl mx-auto">
        <div className="border border-gray-300 bg-black rounded-lg shadow-sm max-w-4xl mx-auto">
          <button
            onClick={toggleAccordion}
            className="w-full text-left px-4 py-2 font-semibold text-gray-300 hover:bg-gray-200 hover:text-gray-800 text-2xl "
            style={{ fontFamily: "Aujournuit-Regular"}}
          >
            My Tech Stack
          </button>
          {isOpen && (
            <div className="px-4 py-4 bg-white border-t">
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
                {techSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <img
                      src={skill.src}
                      alt={skill.name}
                      className="h-10 w-10 mb-2"
                    />
                    <p className="text-sm text-gray-600">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

