import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "./Navbar";
import { ArrowRight, MessageSquare } from "lucide-react";

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
  const yImage = useTransform(scrollY, [0, 600], [0, 45]);
  const yWidget1 = useTransform(scrollY, [0, 600], [0, -50]); // Color Picker slides up
  const yWidget2 = useTransform(scrollY, [0, 600], [0, 70]);  // Product Card slides down
  const yWidget3 = useTransform(scrollY, [0, 600], [0, -90]); // Round badge slides up faster
  const opacityBackground = useTransform(scrollY, [0, 400], [0.20, 0.05]); // Fades clothing rack slightly

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'd like to get a free mockup for custom apparel. Can you help me with design requirements?");
    window.open(`https://wa.me/917420852608?text=${message}`, "_blank");
  };

  const handleExploreClick = () => {
    window.open(
      "https://drive.google.com/file/d/1vJjvAqlqpE79xWlpgoIJJgsQBNpHe5rc/view?usp=sharing",
      "_blank"
    );
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

      {/* Main Split Grid Layout */}
      <div className="flex-1 w-full max-w-7xl mx-auto mt-28 md:mt-24 mb-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-20 px-4 md:px-8">
        
        {/* Left Column: Headline and CTAs */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Eyebrow Pill */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full text-[10px] md:text-xs font-semibold bg-white/5 text-white/95 border border-white/10 tracking-widest mb-6"
          >
            <span>PREMIUM CUSTOM MERCHANDISE</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={itemVariants}
            className="font-display text-5xl md:text-7xl lg:text-8xl text-white font-extrabold tracking-tight leading-[0.9] mb-4 md:mb-6"
          >
            Wear What<br />
            <span className="font-serif italic font-normal text-zinc-400 lowercase tracking-normal">matters.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            variants={itemVariants}
            className="text-white/90 text-sm md:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl mb-8"
          >
            From a single custom piece to thousands of branded merchandise units, we handle everything from design to delivery.
          </motion.p>

          {/* Button CTAs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10 pointer-events-auto"
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
            className="grid grid-cols-3 gap-3 sm:gap-6 pt-8 border-t border-white/10 max-w-xl"
          >
            <div>
              <h4 className="text-white font-serif italic text-2xl sm:text-3xl md:text-4xl font-normal">10k+</h4>
              <p className="text-white/40 text-[10px] font-medium tracking-wide mt-2">Order Capacity</p>
            </div>
            <div>
              <h4 className="text-white font-serif italic text-xl sm:text-2xl md:text-4xl font-normal whitespace-nowrap">Pan India</h4>
              <p className="text-white/40 text-[10px] font-medium tracking-wide mt-2">Direct Delivery</p>
            </div>
            <div>
              <h4 className="text-white font-serif italic text-2xl sm:text-3xl md:text-4xl font-normal">Free</h4>
              <p className="text-white/40 text-[10px] font-medium tracking-wide mt-2">Design Assistance</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Floating Visual Cards Mockup (Themed Black & White) */}
        <div className="lg:col-span-5 relative w-full flex justify-center items-center py-8 lg:py-0 select-none">
          <motion.div 
            initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 65, damping: 15, delay: 0.45 }}
            style={{ y: yImage }}
            className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px] h-[360px] sm:h-[400px] md:h-[420px] rounded-[3rem] border border-white/10 bg-zinc-900/40 p-3 shadow-2xl"
          >
            
            {/* Background Glow Ring */}
            <div className="absolute -inset-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_60%)] -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full border border-white/5 -z-10" />

            {/* Main Portrait Lifestyle Image */}
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop"
                alt="Premium apparel custom streetwear mockup model"
                className="w-full h-full object-cover filter grayscale contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating Color Picker Widget */}
            <motion.div 
              style={{ y: yWidget1 }}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 75, damping: 13 }}
              className="absolute top-12 -right-4 md:-right-8 bg-zinc-950/90 border border-white/10 rounded-2xl p-3 shadow-2xl flex flex-col gap-2 w-32 pointer-events-auto"
            >
              <span className="text-[9px] uppercase tracking-wider font-extrabold text-white/50 text-left block">Colors</span>
              <div className="flex gap-2 items-center justify-start">
                <span className="w-4.5 h-4.5 rounded-full bg-black border border-white/20 shadow-inner block" />
                <span className="w-4.5 h-4.5 rounded-full bg-zinc-500 shadow-inner block" />
                <span className="w-4.5 h-4.5 rounded-full bg-zinc-300 shadow-inner block" />
                <span className="w-4.5 h-4.5 rounded-full bg-white shadow-inner flex items-center justify-center text-black text-[9px] font-bold">✓</span>
              </div>
            </motion.div>

            {/* Floating Mini Product Card */}
            <motion.div 
              style={{ y: yWidget2 }}
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.95, type: "spring", stiffness: 75, damping: 13 }}
              className="absolute bottom-6 -left-6 md:-left-10 bg-zinc-950/95 border border-white/10 rounded-2xl p-2.5 shadow-2xl flex items-center gap-3 w-48 pointer-events-auto hover:scale-102 transition-transform duration-300"
            >
              <img
                src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=150&auto=format&fit=crop"
                alt="Custom Tee Thumbnail"
                className="w-10 h-10 rounded-xl object-cover bg-zinc-900 border border-white/5 filter grayscale"
              />
              <div className="text-left">
                <span className="text-[9px] font-extrabold text-white block">Custom Organic Tee</span>
                <span className="text-[8px] font-semibold text-zinc-400 block mt-0.5">Premium Quality</span>
              </div>
            </motion.div>

            {/* Floating Circular Badge Overlay */}
            <motion.div 
              style={{ y: yWidget3 }}
              initial={{ opacity: 0, scale: 0.6, rotate: -25 }}
              animate={{ opacity: 1, scale: 1, rotate: 6 }}
              transition={{ delay: 1.1, type: "spring", stiffness: 85, damping: 11 }}
              className="absolute bottom-16 -right-4 md:-right-8 w-16 h-16 rounded-full bg-white text-black font-extrabold flex flex-col items-center justify-center text-center text-[8px] uppercase tracking-wider leading-none shadow-2xl hover:rotate-0 transition-transform duration-300 cursor-default"
            >
              <span>Create</span>
              <span className="mt-0.5">Your</span>
              <span className="mt-0.5 text-[7px] font-black">Own</span>
            </motion.div>

          </motion.div>
        </div>

      </div>

      {/* Footer Details */}
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pt-4 border-t border-white/10 z-20 mt-4 lg:mt-0">
        {/* Bottom Left Label */}
        <div className="max-w-xs text-left">
          <span className="text-white/40 text-[9px] uppercase tracking-[0.25em] font-bold block mb-0.5">
            Top 1% Choice
          </span>
          <p className="text-white/70 text-[11px] leading-snug">
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
