"use client";
import { useState } from "react";

function ImageLevitating() {
  const [mostrarCV, setMostrarCV] = useState(false);

  const toggleCV = () => setMostrarCV(!mostrarCV);
  const cerrarCV = () => setMostrarCV(false);

  return (
    <div className="relative z-10 flex flex-col items-center justify-center w-full">
      <div
        className="
        relative flex flex-col items-center cursor-pointer group
        transition-transform duration-300
      "
        onClick={toggleCV}
      >
        {/* Imagen centrada y flotante */}
        <div
          className="
          flex items-center justify-center
          w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-42 lg:h-42
          rounded-full shadow-xl overflow-hidden
          transition-transform duration-500 ease-in-out
          hover:-translate-y-2 hover:scale-105 ml-10 
        "
        >
          <img
            src="/irene.png"
            alt="Irene portrait"
            className="
            w-full h-full object-cover rounded-full
            transition-transform duration-500 ease-in-out
          "
          />
        </div>

        {/* Texto flotante permanente */}
        <span
          className="
          mt-4 text-sm sm:text-base md:text-lg
          text-black font-semibold tracking-wide
          animate-bounce-slow ml-10
        "
        >
          My CV
        </span>
      </div>

      {mostrarCV && (
        <div
          onClick={cerrarCV}
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/40"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              relative w-[95vw] sm:w-[90vw] md:max-w-5xl h-[80vh]
              bg-white shadow-xl rounded-xl p-4 border border-gray-300
              overflow-hidden
            "
          >
            <button
              onClick={cerrarCV}
              className="absolute top-2 right-4 text-gray-700 text-xl font-bold hover:text-red-600"
            >
              ×
            </button>

            <embed
              src="CV26.pdf"
              type="application/pdf"
              width="100%"
              height="100%"
              className="rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageLevitating;
