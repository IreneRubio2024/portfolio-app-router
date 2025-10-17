"use client";
import { useState } from "react";

function ImageLevitating() {
  const [mostrarCV, setMostrarCV] = useState(false);

  const toggleCV = () => setMostrarCV(!mostrarCV);
  const cerrarCV = () => setMostrarCV(false);

  return (
    <div className="relative z-10 flex flex-col items-center">
      <div
        className="
    relative flex items-center gap-6 cursor-pointer
    ml-4 sm:ml-8 md:ml-12 lg:ml-20
  "
        onClick={toggleCV}
      >
        <div
          className="
      flex items-center justify-center
      w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-52 lg:h-52
    "
        >
          <img
            src="/retrato1.png"
            alt="Imagen levitando"
            className="
        w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-48 lg:h-48
        object-cover rounded-full
      "
          />
        </div>
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
              src="Irene Rubio CV2026.pdf"
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
