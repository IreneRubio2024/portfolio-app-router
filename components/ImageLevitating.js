"use client";

function ImageLevitating({ className = "" }) {
  return (
    <div className={`relative aspect-square w-full ${className}`}>
      <div className="absolute -inset-16 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(251,250,247,0.86)_34%,rgba(251,250,247,0)_72%)] blur-3xl" />
      <div className="absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.86)_0%,rgba(251,250,247,0.46)_44%,rgba(251,250,247,0)_74%)] blur-md" />
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-[#fbfaf7] shadow-[0_0_120px_rgba(255,255,255,0.82)]">
        <img
          src="/pngtree-full-moon-isolated-on-transparent-background-png-image_21201561.png"
          alt="Moon"
          className="h-full w-full object-cover"
          style={{
            filter: "brightness(0.9) contrast(0.75) saturate(0.7) sepia(0.15)",
          }}
        />
      </div>
    </div>
  );
}

export default ImageLevitating;
