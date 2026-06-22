import React, { useState, useRef, useEffect } from "react";
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
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Bhoomika",
    role: "Custom Graphic Tees",
    rating: 5,
    quote:
      "Loved the quality, print everything about the tshirt. Probably will buy it again and again 😍",
    productImage: "/testimonials/graphic-tees.jpeg",
    productLabel: "Graphic Tees",
    initial: "B",
    accentColor: "#e63946",
  },
  {
    id: "t2",
    name: "Harita Dadu",
    role: "Premium Gift Kit",
    rating: 5,
    quote: "One of the best for the customized merch",
    productImage: "/testimonials/redbull-kit.jpeg",
    productLabel: "Custom Gift Box",
    initial: "H",
    accentColor: "#3a86ff",
  },
  {
    id: "t3",
    name: "Daniel Roy",
    role: "Corporate Polo Shirts",
    rating: 5,
    quote: "Great tshirt quality loved it",
    productImage: "/testimonials/royal-wealth-polos.jpeg",
    productLabel: "Corporate Polos",
    initial: "D",
    accentColor: "#2dc653",
  },
  {
    id: "t4",
    name: "Yashvi Mehta",
    role: "Custom Graphic Tees",
    rating: 5,
    quote:
      "the quality of tshirts was very good and their delivery and service was on point",
    productImage: "/testimonials/rocking-idiots.jpeg",
    productLabel: "Custom Printed Tees",
    initial: "Y",
    accentColor: "#ff9f1c",
  },
];

export const Testimonials: React.FC = React.memo(() => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = TESTIMONIALS.length;

  const goTo = (idx: number, dir: 1 | -1) => {
    setDirection(dir);
    setCurrent((idx + total) % total);
  };

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
  }, [current]);

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
              className="w-11 h-11 rounded-full border border-white/10 hover:border-white/30 bg-zinc-900/85 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 shadow-lg backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-white/30 text-sm font-mono">
              {String(current + 1).padStart(2, "0")}&nbsp;/&nbsp;{String(total).padStart(2, "0")}
            </span>
            <button
              onClick={handleNext}
              aria-label="Next review"
              className="w-11 h-11 rounded-full border border-white/10 hover:border-white/30 bg-zinc-900/85 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 shadow-lg backdrop-blur-sm"
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
          className="relative overflow-hidden rounded-3xl border border-white/8 bg-zinc-900/60 backdrop-blur-sm"
          style={{ minHeight: "420px" }}
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
              className="grid grid-cols-1 md:grid-cols-[2fr_3fr] h-full"
            >
              {/* Left: Product Image */}
              <div className="relative overflow-hidden rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl rounded-br-none md:rounded-tr-none md:rounded-bl-3xl bg-zinc-950/60"
                style={{ minHeight: "280px" }}>
                {/* Blurred duplicate background to fill space beautifully */}
                <div
                  className="absolute inset-0 bg-cover bg-center filter blur-xl scale-110 opacity-30 select-none pointer-events-none"
                  style={{ backgroundImage: `url(${testimonial.productImage})` }}
                />
                {/* Main product image, fitted and centered without cropping */}
                <img
                  src={testimonial.productImage}
                  alt={testimonial.productLabel}
                  className="absolute inset-0 w-full h-full object-contain z-10 p-4 md:p-6"
                  draggable={false}
                />
                {/* Dark overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-zinc-900/40 z-20 pointer-events-none" />
              </div>

              {/* Right: Review Content */}
              <div className="flex flex-col justify-between p-8 md:p-10 lg:p-14">
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
                    <p className="text-white/40 text-xs mt-0.5 uppercase tracking-widest">
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
              className={`h-1.5 rounded-full transition-all duration-400 cursor-pointer ${current === idx
                  ? "bg-white w-8"
                  : "bg-white/20 hover:bg-white/40 w-2"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

Testimonials.displayName = "Testimonials";
