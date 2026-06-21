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
    name: "Round Neck T-shirt",
    src: "/products/1.png",
    bg: "#cbcbcb",
  },
  {
    name: "Oversized T-shirt",
    src: "/products/2.png",
    bg: "#b8b8b8",
  },
  {
    name: "Polo T-shirt",
    src: "/products/3.png",
    bg: "#b7b5b5",
  },
  {
    name: "Pullover Hoodie",
    src: "/products/4.png",
    bg: "#b3b0b0",
  },
  {
    name: "Zipper Hoodie",
    src: "/products/5.png",
    bg: "#b9b6b7",
  },
  {
    name: "Sweatshirt",
    src: "/products/6.png",
    bg: "#afadae",
  },
  {
    name: "Caps",
    src: "/products/7.png",
    bg: "#b3b0b1",
  },
  {
    name: "Tote Bag",
    src: "/products/8.png",
    bg: "#b3b0b1",
  },
  {
    name: "Apron",
    src: "/products/9.png",
    bg: "#adaaab",
  },
  {
    name: "Merch Kit",
    src: "/products/12.png",
    bg: "#cbcbcb",
  },
  {
    name: "Phone Case",
    src: "/products/11.png",
    bg: "#cbcbcb",
  },
  {
    name: "Other Accessories",
    src: "/products/10.png",
    bg: "#adaaab",
  },
];

const getRoleStyle = (role: "center" | "left" | "right" | "back" | "hidden", isMobile: boolean) => {
  // On mobile: images sit at 42% (not 50%) so they're visible as soon as
  // the section scrolls into view — avoids the blank-top-of-section problem.
  const TOP = isMobile ? "42%" : "50%";

  switch (role) {
    case "center":
      return {
        transform: `translateX(-50%) translateY(-50%) scale(${isMobile ? 1.05 : 1.25})`,
        filter: "blur(0px)",
        opacity: 1,
        zIndex: 20,
        left: "50%",
        top: TOP,
        height: isMobile ? "40%" : "55%",
      };
    case "left":
      return {
        transform: "translateX(-50%) translateY(-50%) scale(0.9)",
        filter: "blur(2px)",
        opacity: 0.7,
        zIndex: 10,
        left: isMobile ? "15%" : "22%",
        top: TOP,
        height: isMobile ? "28%" : "40%",
      };
    case "right":
      return {
        transform: "translateX(-50%) translateY(-50%) scale(0.9)",
        filter: "blur(2px)",
        opacity: 0.7,
        zIndex: 10,
        left: isMobile ? "85%" : "78%",
        top: TOP,
        height: isMobile ? "28%" : "40%",
      };
    case "back":
      return {
        transform: "translateX(-50%) translateY(-50%) scale(0.75)",
        filter: "blur(4px)",
        opacity: 0.4,
        zIndex: 5,
        left: "50%",
        top: TOP,
        height: isMobile ? "20%" : "30%",
      };
    case "hidden":
      return {
        transform: "translateX(-50%) translateY(-50%) scale(0.5)",
        filter: "blur(8px)",
        opacity: 0,
        zIndex: 0,
        left: "50%",
        top: TOP,
        height: isMobile ? "16%" : "25%",
      };
  }
};

export const CarouselSection: React.FC = React.memo(() => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // ── Touch / swipe state ──────────────────────────────────────────
  const touchStartX = React.useRef<number | null>(null);
  const touchStartY = React.useRef<number | null>(null);
  const isSwiping   = React.useRef<boolean>(false);
  const SWIPE_THRESHOLD = 50; // px needed to trigger navigation

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
    window.open(`https://wa.me/917420852608?text=${message}`, "_blank");
  };

  // ── Touch handlers ───────────────────────────────────────────────
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isSwiping.current   = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.touches[0].clientX - touchStartX.current;
    const dy = e.touches[0].clientY - touchStartY.current;

    // Lock to horizontal swipe; let vertical scroll pass through
    if (!isSwiping.current) {
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 8) {
        isSwiping.current = true;
      } else if (Math.abs(dy) > 8) {
        // Vertical — reset so we don't accidentally trigger
        touchStartX.current = null;
        touchStartY.current = null;
        return;
      }
    }

    if (isSwiping.current) {
      e.preventDefault(); // prevent page scroll during horizontal swipe
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || !isSwiping.current) {
      touchStartX.current = null;
      touchStartY.current = null;
      return;
    }
    const dx = e.changedTouches[0].clientX - touchStartX.current;

    if (Math.abs(dx) >= SWIPE_THRESHOLD) {
      navigate(dx < 0 ? "next" : "prev");
    }

    touchStartX.current = null;
    touchStartY.current = null;
    isSwiping.current   = false;
  };

  // Derive roles
  const centerIdx = activeIndex;
  const leftIdx = (activeIndex + N - 1) % N;
  const rightIdx = (activeIndex + 1) % N;
  const backIdx = (activeIndex + 2) % N;

  return (
    <div
      id="carousel-showcase"
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: "#0c0c0e",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        className="relative w-full overflow-hidden"
        style={{
          /* svh = small viewport height: actual visible area excluding
             mobile browser chrome (address bar, tab bar). Falls back to
             100vh on older browsers which is still acceptable. */
          height: "100svh",
          touchAction: "pan-y",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
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
            top: "50%",
            transform: "translateY(-50%)",
            fontFamily: "'Anton', sans-serif",
            /* 
             * Anton is ~0.58em wide per char.
             * "WEAR WHAT MATTERS" = 18 chars + 2 spaces ≈ 11.5× the font-size in width.
             * Target: fill ~95vw → font-size ≈ 95vw / 11.5 ≈ 8.26vw
             * clamp: min 14px (tiny phones) → 8.5vw → max 160px (4K screens)
             */
            fontSize: "clamp(14px, 8.5vw, 160px)",
            fontWeight: 900,
            color: "#ffffff",
            opacity: 0.1,
            lineHeight: 1,
            letterSpacing: "0.04em",
            whiteSpace: "nowrap",
          }}
        >
          WEAR WHAT MATTERS
        </div>

        {/* 3. Top-left brand label — hidden on mobile (navbar already shows it) */}
        <div className="hidden sm:block absolute top-6 left-4 sm:left-8 z-[60] text-xs font-semibold uppercase text-white opacity-90 tracking-[0.18em]">
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

            const roleStyle = getRoleStyle(role, isMobile);

            return (
              <div
                key={idx}
                className="absolute overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl"
                style={{
                  aspectRatio: "0.6 / 1",
                  willChange: "transform, filter, opacity",
                  transition: "transform 650ms cubic-bezier(0.4, 0, 0.2, 1), filter 650ms cubic-bezier(0.4, 0, 0.2, 1), opacity 650ms cubic-bezier(0.4, 0, 0.2, 1), left 650ms cubic-bezier(0.4, 0, 0.2, 1), bottom 650ms cubic-bezier(0.4, 0, 0.2, 1), height 650ms cubic-bezier(0.4, 0, 0.2, 1)",
                  backgroundColor: item.bg,
                  ...roleStyle,
                }}
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-full object-contain select-none"
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
          <p className="text-white opacity-[0.95] font-bold uppercase tracking-wider mb-4 sm:mb-5 text-base sm:text-[22px] leading-tight font-display">
            {IMAGES[activeIndex].name}
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
});

CarouselSection.displayName = "CarouselSection";

