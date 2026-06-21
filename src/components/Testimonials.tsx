import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TestimonialCard {
  image: string;
  alt: string;
}

const TESTIMONIALS: TestimonialCard[] = [
  {
    image: "/reviews/Bhoomika Review.png",
    alt: "Bhoomika Review",
  },
  {
    image: "/reviews/HARITA REVIEW.png",
    alt: "Harita Review",
  },
  {
    image: "/reviews/Royal Wealth Review.png",
    alt: "Royal Wealth Review",
  },
  {
    image: "/reviews/Smriti review.png",
    alt: "Smriti Review",
  },
];

export const Testimonials: React.FC = React.memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const gap = 32; // gap-8 is 32px

  // Monitor responsive column changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Measure container size dynamically
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const totalItems = TESTIMONIALS.length;
  const maxIndex = Math.max(0, totalItems - visibleCount);

  // Auto adjust index when resizing window
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCount, maxIndex]);

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Infinite loop back to beginning
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(maxIndex); // Infinite loop to the end
    }
  };

  // Drag snapping calculations
  const handleDragEnd = (_event: any, info: any) => {
    const swipeThreshold = 55;
    const swipeVelocity = 0.5;
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -swipeThreshold || velocity < -swipeVelocity) {
      if (currentIndex < maxIndex) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    } else if (offset > swipeThreshold || velocity > swipeVelocity) {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else {
        setCurrentIndex(maxIndex);
      }
    }
  };

  const cardWidth = (containerWidth - (visibleCount - 1) * gap) / visibleCount;
  const slideOffset = -currentIndex * (cardWidth + gap);

  return (
    <section id="testimonials" className="w-full py-20 px-6 md:px-12 bg-zinc-950/40 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <span className="text-zinc-400 text-xs font-semibold uppercase tracking-[0.25em] block mb-3">
            Client Reviews
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-white uppercase tracking-tight leading-none">
            Loved by Brands & Creators.
          </h2>
        </div>

        {/* Carousel Wrapper Container with Absolute Arrows */}
        <div className="relative w-full">
          {/* Left Arrow Button */}
          {maxIndex > 0 && (
            <button
              onClick={handlePrev}
              aria-label="Previous reviews"
              className="absolute left-[-12px] md:left-[-24px] top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 hover:border-white/30 bg-zinc-900/85 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 shadow-lg backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Right Arrow Button */}
          {maxIndex > 0 && (
            <button
              onClick={handleNext}
              aria-label="Next reviews"
              className="absolute right-[-12px] md:right-[-24px] top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 hover:border-white/30 bg-zinc-900/85 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 shadow-lg backdrop-blur-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Swipeable Carousel Track Container */}
          <div ref={containerRef} className="w-full overflow-hidden relative cursor-grab active:cursor-grabbing py-4 select-none">
            <motion.div
              drag={maxIndex > 0 ? "x" : false}
              dragConstraints={{
                left: -maxIndex * (cardWidth + gap),
                right: 0,
              }}
              dragElastic={0.15}
              onDragEnd={handleDragEnd}
              animate={{ x: slideOffset }}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 22,
              }}
              className="flex gap-8 w-full"
              style={{ width: containerWidth ? "auto" : "100%" }}
            >
              {TESTIMONIALS.map((test, idx) => (
                <div
                  key={idx}
                  style={{ width: cardWidth ? `${cardWidth}px` : "100%" }}
                  className="flex-shrink-0 rounded-3xl overflow-hidden border border-white/5 bg-zinc-950/30 shadow-xl hover:border-white/10 transition-colors duration-300"
                >
                  <img
                    src={test.image}
                    alt={test.alt}
                    className="w-full h-auto block pointer-events-none"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Pagination Dots */}
        {maxIndex > 0 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial page ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? "bg-white w-6" : "bg-white/20 hover:bg-white/40 w-2"
                }`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
});

Testimonials.displayName = "Testimonials";

