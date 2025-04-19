"use client";
import { useState } from "react";

function ImageLevitating() {
  const [mostrarCV, setMostrarCV] = useState(false);

  const toggleCV = () => {
    setMostrarCV(!mostrarCV);
  };

  const cerrarCV = () => {
    setMostrarCV(false);
  };

  return (
    <div className="relative z-10 flex flex-col items-center">
      <div
        className="relative flex items-center gap-4 cursor-pointer"
        onClick={toggleCV}
      >
        <img
          src="/MyCV2.png"
          alt="Imagen levitando"
          className="w-48 animate-levitate"
        />
      </div>

      {mostrarCV && (
        <div
          onClick={cerrarCV}
          className="fixed inset-0 z-40 flex items-center justify-center bg-transparent"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-[90vw] max-w-5xl h-[80vh] bg-white shadow-xl rounded-xl p-4 border border-gray-300 overflow-hidden"
          >
            <button
              onClick={cerrarCV}
              className="absolute top-2 right-4 text-gray-700 text-xl font-bold hover:text-red-600"
            >
              ×
            </button>

            <embed
              src="/IreneCV.pdf#toolbar=0&navpanes=0&scrollbar=0"
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
