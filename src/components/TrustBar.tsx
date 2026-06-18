import React, { useState } from "react";

interface LogoItem {
  name: string;
  path: string;
}

export const TrustBar: React.FC = () => {
  const [clickedLogoIndex, setClickedLogoIndex] = useState<number | null>(null);

  const logos: LogoItem[] = [
    { name: "Prospectoo", path: "/logos/prospectoo.png" },
    { name: "Raaviera Hotels", path: "/logos/raaviera.png" },
    { name: "Indian Thali House", path: "/logos/ith.png" },
    { name: "NMPA", path: "/logos/nmpa.png" },
    { name: "Kepchaki Momo", path: "/logos/momo.png" },
    { name: "Dribblers FC", path: "/logos/dribblers.png" },
    { name: "Royal Wealth", path: "/logos/wealth.png" },
    { name: "Whoopers", path: "/logos/whoopers.png" },
  ];

  // Triplicate the logos array to guarantee continuous looping on large viewports
  const marqueeLogos = [...logos, ...logos, ...logos];

  const handleLogoClick = (idx: number) => {
    if (clickedLogoIndex === idx) {
      setClickedLogoIndex(null);
    } else {
      setClickedLogoIndex(idx);
    }
  };

  return (
    <section
      id="clients"
      onClick={() => setClickedLogoIndex(null)}
      className="w-full py-16 bg-white border-y border-zinc-200 relative z-20 overflow-hidden select-none"
    >
      <div className="w-full flex flex-col items-center gap-6">
        {/* Section Title */}
        <h3 className="text-zinc-500 text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-center">
          Trusted By Leading Brands
        </h3>

        {/* Scrolling Marquee Container */}
        <div className="relative w-full overflow-hidden bg-zinc-50/30 py-8 md:py-10">
          {/* Subtle gradient overlays to fade the edges for premium DTC look */}
          <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div
            className="flex gap-20 md:gap-24 w-max animate-marquee items-center"
            style={{
              animationPlayState: clickedLogoIndex !== null ? "paused" : "running",
            }}
          >
            {marqueeLogos.map((logo, idx) => {
              const isClicked = clickedLogoIndex === idx;
              const isAnyClicked = clickedLogoIndex !== null;

              let styleClasses = "";
              if (isClicked) {
                styleClasses = "bg-white border border-zinc-100 shadow-[0_20px_50px_rgba(0,0,0,0.12)] -translate-y-3 scale-115 z-30 opacity-100 px-6 py-4 rounded-2xl";
              } else if (isAnyClicked) {
                styleClasses = "opacity-35 scale-95 z-10 blur-[0.5px]";
              } else {
                styleClasses = "opacity-80 hover:opacity-100 hover:scale-105 hover:-translate-y-1 z-10";
              }

              return (
                <div
                  key={`${logo.name}-${idx}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLogoClick(idx);
                  }}
                  className={`h-14 w-36 md:h-18 md:w-48 flex items-center justify-center transition-all duration-500 ease-out cursor-pointer ${styleClasses}`}
                >
                  <img
                    src={logo.path}
                    alt={`${logo.name} logo`}
                    className="max-h-full max-w-full object-contain pointer-events-none"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
