"use client";

import { useContext } from "react";
import { motion } from "framer-motion";
import PortfolioContext from "@/app/Context/PortfolioContext";
import ImageLevitating from "./ImageLevitating";

import { Button } from "@/components/ui/button";

const ProjectsCarousel = () => {
  const { projects } = useContext(PortfolioContext);

  return (
    <section className="py-20 bg-black text-gray-300 w-full relative">
      <div className="max-w-6xl mx-auto">
        {/* <h2
          className="text-4xl font-bold text-center mb-6"
          style={{ fontFamily: "Aujournuit-Regular" }}
        >
          My Projects
        </h2> */}
        <div className="flex overflow-x-auto space-x-6 py-4 px-2 scrollbar-hide">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="min-w-[300px] bg-white text-black shadow-md p-4 flex-shrink-0 overflow-hidden rounded-md"
              whileHover={{
                scale: 1.05,
                borderRadius: "10%", // el contenedor se redondea un poco
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <motion.img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover mb-4 rounded-sm"
                //  whileHover={{ borderRadius: "40%" }} // la imagen sí cambia bastante
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
              <p className="text-sm mb-2">{project.description}</p>

              <Button
                variant="outline"
                onClick={() => window.open(project.url, "_blank")}
                className="border-black text-black hover:bg-black hover:text-white"
              >
                See more
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
