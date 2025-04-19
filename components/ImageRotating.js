"use client";
import { useState } from "react";

function ImageRotating() {
  const [girando, setGirando] = useState(true);
  const [mostrarCV, setMostrarCV] = useState(false);

  const toggleRotacion = () => {
    setGirando(!girando);
    setMostrarCV(!mostrarCV);
  };

  const cerrarCV = () => {
    setMostrarCV(false);
    setGirando(true);
  };

  return (
    <div className="relative z-10 flex flex-col items-center">
      <div className="relative flex items-center gap-4 cursor-pointer" onClick={toggleRotacion}>
       
        {/* Imagen */}
        <img
          src="/MeraBild1.png"
          alt="Imagen rotando"
          className={`w-48 transition-all duration-300 ${
            girando ? "medium-rotation" : ""
          }`}
        />
      </div>

      {/* Ventana flotante del CV */}
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

export default ImageRotating;
