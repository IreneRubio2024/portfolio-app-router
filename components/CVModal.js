"use client";

import { useEffect } from "react";
import { X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CVModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/85 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Irene Rubio CV"
    >
      {/* Top bar */}
      <div className="flex shrink-0 items-center justify-between border-b border-white/10 bg-[#0d0d0d] px-4 py-3 sm:px-6">
        <span className="font-display text-xs tracking-[0.22em] uppercase text-white/55 sm:text-sm">
          Irene Rubio — CV
        </span>
        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="h-8 border-white/25 bg-transparent px-3 text-xs text-white/80 hover:bg-white hover:text-[#0d0d0d]"
          >
            <a href="/Irene_Rubio_CV_EN.pdf" download="Irene_Rubio_CV.pdf">
              <Download className="mr-1.5 h-3.5 w-3.5" />
              Download
            </a>
          </Button>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-md text-white/55 transition hover:bg-white/10 hover:text-white"
            aria-label="Close CV"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* PDF viewer */}
      <div className="flex flex-1 overflow-hidden p-4 sm:p-6">
        <div className="mx-auto flex w-full max-w-3xl flex-col">
          <iframe
            src="/Irene_Rubio_CV_EN.pdf"
            className="h-full w-full flex-1 rounded-lg shadow-2xl"
            title="Irene Rubio CV"
          />
          <p className="mt-3 text-center text-xs text-white/35 sm:hidden">
            If the PDF doesn&apos;t load,{" "}
            <a
              href="/Irene_Rubio_CV_EN.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-white/55"
            >
              open it in a new tab
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
