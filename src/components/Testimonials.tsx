import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
  productImage: string;
  productLabel: string;
  initial: string;
  accentColor: string;
  isException?: boolean;
  width: number;
  height: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Bhoomika",
    role: "Custom Graphic Tees",
    rating: 5,
    quote:
      "Loved the quality, print everything about the tshirt. Probably will buy it again and again 😍",
    productImage: "/testimonials/graphic-tees.webp",
    productLabel: "Graphic Tees",
    initial: "B",
    accentColor: "#e63946",
    width: 1071,
    height: 1428,
  },
  {
    id: "t2",
    name: "Harita Dadu",
    role: "Premium Gift Kit",
    rating: 5,
    quote: "One of the best for the customized merch",
    productImage: "/testimonials/redbull-kit.webp",
    productLabel: "Custom Gift Box",
    initial: "H",
    accentColor: "#3a86ff",
    isException: true,
    width: 1080,
    height: 756,
  },
  {
    id: "t3",
    name: "Daniel Roy",
    role: "Corporate Polo Shirts",
    rating: 5,
    quote: "Great tshirt quality loved it",
    productImage: "/testimonials/royal-wealth-polos.webp",
    productLabel: "Corporate Polos",
    initial: "D",
    accentColor: "#2dc653",
    width: 899,
    height: 1198,
  },
  {
    id: "t4",
    name: "Yashvi Mehta",
    role: "Custom Graphic Tees",
    rating: 5,
    quote:
      "the quality of tshirts was very good and their delivery and service was on point",
    productImage: "/testimonials/rocking-idiots.webp",
    productLabel: "Custom Printed Tees",
    initial: "Y",
    accentColor: "#ff9f1c",
    width: 693,
    height: 920,
  },
  {
    id: "t5",
    name: "Indian Thali House",
    role: "Corporate Polo Shirts",
    rating: 5,
    quote:
      "Would like to give 5 star for their management & customer services. Ordering polo printed t-shirts for our restaurant staffs was a great success.",
    productImage: "/testimonials/ith-polo.webp",
    productLabel: "Corporate Polo Shirts",
    initial: "I",
    accentColor: "#8338ec",
    width: 1042,
    height: 1390,
  },
  {
    id: "t6",
    name: "Shloka Sawant",
    role: "Custom Mousepad",
    rating: 5,
    quote:
      "Got this mouse pad customized. Quality + timely response from the team has ensured that I will be reaching out to custom apparel all the time for all my customised needs!",
    productImage: "/testimonials/mousepad.webp",
    productLabel: "Custom Mousepad",
    initial: "S",
    accentColor: "#ff006e",
    width: 1199,
    height: 1600,
  },
];

export const Testimonials: React.FC = React.memo(() => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = TESTIMONIALS.length;

  const goTo = useCallback((idx: number, dir: 1 | -1) => {
    setDirection(dir);
    setCurrent((idx + total) % total);
  }, [total]);

  const handlePrev = () => goTo(current - 1, -1);
  const handleNext = () => goTo(current + 1, 1);

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      goTo(current + 1, 1);
    }, 6000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const testimonial = TESTIMONIALS[current];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <section
      id="testimonials"
      className="w-full py-20 px-6 md:px-12 bg-zinc-950/40 relative z-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <span className="text-zinc-400 text-xs font-semibold uppercase tracking-[0.25em] block mb-3">
              Client Reviews
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-white uppercase tracking-tight leading-none">
              Loved by Brands<br className="hidden md:block" /> &amp; Creators.
            </h2>
          </div>

          {/* Navigation arrows - visible on all screens beside header */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous review"
              className="w-12 h-12 rounded-full border border-white/10 hover:border-white/30 bg-zinc-900/85 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 shadow-lg backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-white/60 text-sm font-mono">
              {String(current + 1).padStart(2, "0")}&nbsp;/&nbsp;{String(total).padStart(2, "0")}
            </span>
            <button
              onClick={handleNext}
              aria-label="Next review"
              className="w-12 h-12 rounded-full border border-white/10 hover:border-white/30 bg-zinc-900/85 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 shadow-lg backdrop-blur-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Testimonial Card */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative overflow-hidden rounded-3xl border border-white/8 bg-zinc-900/60 backdrop-blur-sm md:h-[480px]"
          style={{ minHeight: "480px" }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={testimonial.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={testimonial.isException ? "grid grid-cols-1 md:grid-cols-[2fr_3fr] h-full" : "flex flex-col md:flex-row h-full"}
            >
              {/* Left: Product Image */}
              <div 
                className={testimonial.isException 
                  ? "relative overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-r-none bg-zinc-950/60"
                  : "relative aspect-[3/4] w-full h-auto md:w-auto md:h-full flex-shrink-0 overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-r-none bg-zinc-950/60"}
                style={testimonial.isException ? { minHeight: "340px" } : {}}
              >
                {/* Blurred duplicate background to fill space beautifully */}
                <div
                  className="absolute inset-0 bg-cover bg-center filter blur-xl scale-110 opacity-30 select-none pointer-events-none"
                  style={{ backgroundImage: `url(${testimonial.productImage})` }}
                />
                {/* Main product image, fitted and centered without cropping */}
                <img
                  src={testimonial.productImage}
                  alt={testimonial.productLabel}
                  width={testimonial.width}
                  height={testimonial.height}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-contain z-10 p-4 md:p-6"
                  draggable={false}
                />
                {/* Dark overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-zinc-900/40 z-20 pointer-events-none" />
              </div>

              {/* Right: Review Content */}
              <div className={testimonial.isException ? "flex flex-col justify-between p-8 md:p-10 lg:p-14" : "flex flex-col justify-between p-8 md:p-10 lg:p-14 flex-grow"}>
                {/* Top: Stars + Quote */}
                <div>
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5"
                        style={{ fill: "#fbbf24", color: "#fbbf24" }}
                      />
                    ))}
                  </div>

                  {/* Big quote icon */}
                  <Quote
                    className="w-8 h-8 mb-4 opacity-20"
                    style={{ color: testimonial.accentColor }}
                  />

                  {/* Review text */}
                  <p className="text-white/85 text-lg md:text-xl lg:text-2xl leading-relaxed font-light tracking-tight">
                    {testimonial.quote}
                  </p>
                </div>

                {/* Bottom: Reviewer info */}
                <div className="flex items-center gap-4 pt-8 mt-8 border-t border-white/8">
                  {/* Initial avatar */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                    style={{ background: `${testimonial.accentColor}33`, border: `1.5px solid ${testimonial.accentColor}66` }}
                  >
                    <span style={{ color: testimonial.accentColor }}>
                      {testimonial.initial}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base tracking-wide">
                      {testimonial.name}
                    </h4>
                    <p className="text-white/65 text-xs mt-0.5 uppercase tracking-widest">
                      {testimonial.role}
                    </p>
                  </div>


                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx, idx > current ? 1 : -1)}
              aria-label={`Go to review ${idx + 1}`}
              className="group py-4 px-2.5 cursor-pointer relative"
            >
              <div
                className={`h-1.5 rounded-full transition-all duration-400 ${current === idx
                    ? "bg-white w-8"
                    : "bg-white/20 group-hover:bg-white/40 w-2"
                  }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
});

Testimonials.displayName = "Testimonials";
