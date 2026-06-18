import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  image: string;
  color: string;
}

const IMAGES = [
  {
    name: "Oversized Tee",
    src: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop",
    bg: "#F4845F",
    description: "Premium heavy-weight 240+ GSM cotton, loose comfort fit.",
  },
  {
    name: "Custom Hoodie",
    src: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop",
    bg: "#6BBF7A",
    description: "Warm, cozy brushed fleece, double-needle stitched cuffs.",
  },
  {
    name: "Polo T-Shirt",
    src: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=800&auto=format&fit=crop",
    bg: "#6EB5FF",
    description: "Pique knit collar, premium embroidery for executive styling.",
  },
  {
    name: "Canvas Tote Bag",
    src: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    bg: "#DBC2A4",
    description: "Heavy-duty canvas, printed logo, box-stitched handles.",
  },
  {
    name: "Premium Cap",
    src: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    bg: "#7E6EB5",
    description: "Structured panels, metallic buckle strap, premium stitching.",
  },
  {
    name: "Bomber Jacket",
    src: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
    bg: "#F4C95D",
    description: "Satin lining, high-density embroidered patch graphics.",
  },
  {
    name: "Regular T-Shirt",
    src: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop",
    bg: "#E882B4",
    description: "Premium combed cotton, regular retail fit, double-needle stitched.",
  },
];

export const CarouselSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const N = IMAGES.length;

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Preload Images
  useEffect(() => {
    IMAGES.forEach((item) => {
      const img = new Image();
      img.src = item.src;
    });
  }, []);

  // Navigation Logic
  const navigate = (direction: "next" | "prev") => {
    if (isAnimating) return;
    setIsAnimating(true);

    if (direction === "next") {
      setActiveIndex((prev) => (prev + 1) % N);
    } else {
      setActiveIndex((prev) => (prev + N - 1) % N);
    }

    setTimeout(() => {
      setIsAnimating(false);
    }, 650);
  };

  // Autoplay Logic (3.5 second intervals)
  useEffect(() => {
    if (isAnimating) return;

    const timer = setInterval(() => {
      navigate("next");
    }, 3500);

    return () => clearInterval(timer);
  }, [activeIndex, isAnimating]);

  const handleWhatsAppEnquiry = () => {
    const currentProduct = IMAGES[activeIndex];
    const message = encodeURIComponent(`Hi! I'm interested in custom ${currentProduct.name} and would like to get a quote and mockup.`);
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  // Derive roles
  const centerIdx = activeIndex;
  const leftIdx = (activeIndex + N - 1) % N;
  const rightIdx = (activeIndex + 1) % N;
  const backIdx = (activeIndex + 2) % N;

  const getRoleStyle = (role: "center" | "left" | "right" | "back" | "hidden") => {
    switch (role) {
      case "center":
        return {
          transform: `translateX(-50%) scale(${isMobile ? 1.1 : 1.25})`,
          filter: "blur(0px)",
          opacity: 1,
          zIndex: 20,
          left: "50%",
          height: isMobile ? "45%" : "55%",
          bottom: isMobile ? "22%" : "12%",
        };
      case "left":
        return {
          transform: "translateX(-50%) scale(0.9)",
          filter: "blur(2px)",
          opacity: 0.7,
          zIndex: 10,
          left: isMobile ? "15%" : "22%",
          height: isMobile ? "32%" : "40%",
          bottom: isMobile ? "26%" : "18%",
        };
      case "right":
        return {
          transform: "translateX(-50%) scale(0.9)",
          filter: "blur(2px)",
          opacity: 0.7,
          zIndex: 10,
          left: isMobile ? "85%" : "78%",
          height: isMobile ? "32%" : "40%",
          bottom: isMobile ? "26%" : "18%",
        };
      case "back":
        return {
          transform: "translateX(-50%) scale(0.75)",
          filter: "blur(4px)",
          opacity: 0.4,
          zIndex: 5,
          left: "50%",
          height: isMobile ? "24%" : "30%",
          bottom: isMobile ? "28%" : "22%",
        };
      case "hidden":
        return {
          transform: "translateX(-50%) scale(0.5)",
          filter: "blur(8px)",
          opacity: 0,
          zIndex: 0,
          left: "50%",
          height: isMobile ? "20%" : "25%",
          bottom: isMobile ? "28%" : "22%",
        };
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden transition-colors duration-[650ms]"
      style={{
        backgroundColor: IMAGES[activeIndex].bg,
        fontFamily: "'Inter', sans-serif",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div className="relative w-full h-screen overflow-hidden">
        {/* 1. Grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-50 opacity-40 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        {/* 2. Giant ghost text "WEAR WHAT MATTERS" */}
        <div
          className="absolute inset-x-0 flex items-center justify-center pointer-events-none select-none z-[2]"
          style={{
            top: "18%",
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(60px, 14vw, 240px)",
            fontWeight: 900,
            color: "#ffffff",
            opacity: 0.1,
            lineHeight: 1,
            letterSpacing: "0.05em",
            whiteSpace: "nowrap",
          }}
        >
          WEAR WHAT MATTERS
        </div>

        {/* 3. Top-left brand label */}
        <div className="absolute top-6 left-4 sm:left-8 z-[60] text-xs font-semibold uppercase text-white opacity-90 tracking-[0.18em]">
          CUSTOM APPARELS
        </div>

        {/* 4. Carousel Items container */}
        <div className="absolute inset-0 z-[3]">
          {IMAGES.map((item, idx) => {
            let role: "center" | "left" | "right" | "back" | "hidden";
            if (idx === centerIdx) role = "center";
            else if (idx === leftIdx) role = "left";
            else if (idx === rightIdx) role = "right";
            else if (idx === backIdx) role = "back";
            else role = "hidden";

            const roleStyle = getRoleStyle(role);

            return (
              <div
                key={idx}
                className="absolute overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl bg-zinc-950/40"
                style={{
                  aspectRatio: "0.6 / 1",
                  willChange: "transform, filter, opacity",
                  transition: "transform 650ms cubic-bezier(0.4, 0, 0.2, 1), filter 650ms cubic-bezier(0.4, 0, 0.2, 1), opacity 650ms cubic-bezier(0.4, 0, 0.2, 1), left 650ms cubic-bezier(0.4, 0, 0.2, 1), bottom 650ms cubic-bezier(0.4, 0, 0.2, 1), height 650ms cubic-bezier(0.4, 0, 0.2, 1)",
                  ...roleStyle,
                }}
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-full object-cover select-none"
                  draggable={false}
                />
              </div>
            );
          })}
        </div>

        {/* 5. Bottom-left text + nav buttons */}
        <div
          className="absolute bottom-6 left-4 sm:bottom-20 sm:left-24 z-[60]"
          style={{ maxWidth: "320px" }}
        >
          <p className="text-white opacity-[0.95] font-bold uppercase tracking-wider mb-2 sm:mb-3 text-base sm:text-[22px] leading-tight font-display">
            {IMAGES[activeIndex].name}
          </p>
          <p className="hidden sm:block text-white opacity-[0.85] text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 font-normal">
            {IMAGES[activeIndex].description}
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("prev")}
              className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full border-2 border-white bg-transparent text-white hover:scale-108 hover:bg-white/12 active:scale-98 transition-all duration-150 cursor-pointer"
              aria-label="Previous product"
            >
              <ArrowLeft className="w-6 h-6 stroke-[2.25]" />
            </button>
            <button
              onClick={() => navigate("next")}
              className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full border-2 border-white bg-transparent text-white hover:scale-108 hover:bg-white/12 active:scale-98 transition-all duration-150 cursor-pointer"
              aria-label="Next product"
            >
              <ArrowRight className="w-6 h-6 stroke-[2.25]" />
            </button>
          </div>
        </div>

        {/* 6. Bottom-right link */}
        <div className="absolute bottom-6 right-4 sm:bottom-20 sm:right-10 z-[60]">
          <button
            onClick={handleWhatsAppEnquiry}
            className="flex items-center gap-1.5 sm:gap-2 text-white opacity-95 hover:opacity-100 transition-opacity duration-200 uppercase tracking-[-0.02em] leading-none cursor-pointer"
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(20px, 4vw, 56px)",
            }}
          >
            <span>ENQUIRE NOW</span>
            <ArrowRight className="w-5 h-5 sm:w-8 sm:h-8 stroke-[2.25] flex-shrink-0" />
          </button>
        </div>
      </div>
    </div>
  );
};
