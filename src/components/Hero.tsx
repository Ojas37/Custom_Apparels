import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "./Navbar";
import { ArrowRight, MessageSquare } from "lucide-react";
import { config, getWhatsAppLink } from "../config";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 85,
      damping: 14,
    },
  },
} as const;

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();

  // Scroll-linked parallax transforms for creative float effects
  const opacityBackground = useTransform(scrollY, [0, 400], [0.20, 0.05]); // Fades clothing rack slightly

  const handleWhatsAppClick = () => {
    window.open(
      getWhatsAppLink("Hi! I'd like to get a free mockup for custom apparel. Can you help me with design requirements?"),
      "_blank"
    );
  };

  const handleExploreClick = () => {
    window.open(config.catalogLink, "_blank");
  };

  return (
    <div
      className="relative w-full min-h-screen lg:h-screen lg:overflow-hidden bg-[#0c0c0e] bg-grain select-none flex flex-col justify-between p-4 md:p-8"
    >
      {/* 1. Ghost Clothing Rack Background cover */}
      <motion.div
        style={{
          opacity: opacityBackground,
          backgroundImage: "url('/rack-bg.png')",
        }}
        className="absolute inset-0 bg-cover bg-center pointer-events-none transition-all duration-700"
      />

      {/* Header / Navbar */}
      <Navbar />

      {/* Main Center Layout */}
      <div className="flex-1 w-full max-w-4xl mx-auto mt-28 md:mt-24 mb-8 flex flex-col justify-center items-center z-20 px-4 md:px-8 text-center">
        
        {/* Headline and CTAs */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center items-center text-center w-full"
        >
          {/* Eyebrow Pill */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 self-center px-4 py-1.5 rounded-full text-[10px] md:text-xs font-semibold bg-white/5 text-white/95 border border-white/10 tracking-widest mb-6"
          >
            <span>PREMIUM CUSTOM MERCHANDISE</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={itemVariants}
            className="font-display text-5xl md:text-7xl lg:text-8xl text-white font-extrabold tracking-tight leading-[0.9] mb-4 md:mb-6 text-center"
          >
            Wear What<br />
            <span className="font-serif italic font-normal text-zinc-400 lowercase tracking-normal">matters.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            variants={itemVariants}
            className="text-white/90 text-sm md:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl mb-8 text-center mx-auto"
          >
            From a single custom piece to thousands of branded merchandise units, we handle everything from design to delivery.
          </motion.p>

          {/* Button CTAs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-10 pointer-events-auto w-full max-w-md sm:max-w-none"
          >
            {/* Primary Button (Solid White) */}
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center justify-center gap-3 bg-white hover:bg-zinc-100 text-black font-bold py-4 px-8 rounded-full shadow-[0_4px_20px_rgba(255,255,255,0.05)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.1)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 fill-black text-black" />
              <span className="text-xs md:text-sm tracking-wider font-semibold">Get Free Mockup</span>
            </button>

            {/* Secondary Button (Bordered Black/White) */}
            <button
              onClick={handleExploreClick}
              className="flex items-center justify-center border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-full hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <span className="text-xs md:text-sm tracking-wider">Explore Catalog</span>
            </button>
          </motion.div>

          {/* Stat Row */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-[auto_auto_auto] justify-between gap-3 sm:gap-6 pt-8 border-t border-white/10 w-full max-w-xl mx-auto"
          >
            <div>
              <h4 className="text-white font-serif italic text-3xl md:text-4xl font-normal">10k+</h4>
              <p className="text-white/40 text-[10px] font-medium tracking-wide mt-2">Order Capacity</p>
            </div>
            <div>
              <h4 className="text-white font-serif italic text-2xl md:text-4xl font-normal whitespace-nowrap">Pan India</h4>
              <p className="text-white/40 text-[10px] font-medium tracking-wide mt-2">Direct Delivery</p>
            </div>
            <div>
              <h4 className="text-white font-serif italic text-3xl md:text-4xl font-normal">Free</h4>
              <p className="text-white/40 text-[10px] font-medium tracking-wide mt-2">Design Assistance</p>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Footer Details */}
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pt-4 border-t border-white/10 z-20 mt-4 lg:mt-0">
        {/* Bottom Left Label */}
        <div className="max-w-xs text-left">
          <span className="text-white/40 text-[11px] sm:text-[9px] uppercase tracking-[0.25em] font-bold block mb-0.5">
            Top 1% Choice
          </span>
          <p className="text-white/70 text-[13px] sm:text-[11px] leading-snug">
            Trusted by startups, creators, institutions and brands across India.
          </p>
        </div>

        {/* Bottom Right Label */}
        <button
          onClick={handleExploreClick}
          className="group flex items-center gap-2 font-display text-xl md:text-2xl text-white uppercase tracking-wider hover:text-white/80 transition-colors duration-200 cursor-pointer"
        >
          <span>Discover More</span>
          <ArrowRight className="w-5 h-5 md:w-6 h-6 group-hover:translate-y-1.5 transition-transform duration-300 ease-carousel" />
        </button>
      </div>
    </div>
  );
};
