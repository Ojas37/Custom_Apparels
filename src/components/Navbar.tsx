import React, { useState, useEffect } from "react";
import { MessageSquare, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { config, getWhatsAppLink } from "../config";

export const Navbar: React.FC = React.memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  const handleWhatsAppClick = () => {
    window.open(
      getWhatsAppLink("Hi! I'd like to make an enquiry for custom merchandise for my brand."),
      "_blank"
    );
  };

  return (
    <>
    {/* ─── MOBILE header: single row ☰ MENU · LOGO (center) · ENQUIRE NOW ─── */}
    <header className="w-full absolute top-0 left-0 z-50 pointer-events-auto">
      <nav className="w-full">
        {/* Mobile single-row header */}
        <div className="flex md:hidden items-center justify-between px-4 py-4 relative">

          {/* Left – hamburger */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-1.5 text-white/80 hover:text-white text-xs font-bold uppercase tracking-widest cursor-pointer transition-colors duration-200 shrink-0 p-3 -m-3"
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5 text-white" />
            <span>Menu</span>
          </button>

          {/* Center – logo (absolutely centered so it ignores button widths) */}
          <a
            href="#"
            aria-label="Custom Apparels Homepage"
            className="absolute left-1/2 -translate-x-1/2 flex items-center group"
          >
            <img
              src="/logo.webp"
              alt="CUSTOM APPARELS"
              width={65}
              height={20}
              className="h-5 object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Right – Enquire Now */}
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center gap-1 px-4 py-2 rounded-full border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 cursor-pointer shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5 text-white" />
            <span>Enquire Now</span>
          </button>
        </div>

        {/* ─── DESKTOP header: original layout unchanged ─── */}
        <div className="hidden md:flex items-center justify-between px-12 py-8">

          {/* Logo */}
          <a href="#" aria-label="Custom Apparels Homepage" className="flex items-center gap-2 group">
            <img
              src="/logo.webp"
              alt="CUSTOM APPARELS"
              width={104}
              height={32}
              className="h-8 object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Center Nav Links */}
          <div className="flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-white/70">
            <a href="#about" className="hover:text-white transition-colors duration-200">About Us</a>
            <a href="#carousel-showcase" className="hover:text-white transition-colors duration-200">Products</a>
            <a href="#products" className="hover:text-white transition-colors duration-200">Catalog</a>
            <a href="#recent-work" className="hover:text-white transition-colors duration-200">Clients</a>
          </div>

          {/* Desktop Enquire Now */}
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <MessageSquare className="w-3 h-3 text-white" />
            <span>Enquire Now</span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col p-6 md:hidden pointer-events-auto"
          >
            {/* Header row in mobile menu: Menu Label and Close Button */}
            <div className="flex items-center justify-between py-4 border-b border-white/10">
              <div className="flex items-center gap-2 text-white font-bold text-lg uppercase tracking-widest">
                <Menu className="w-5 h-5 text-white" />
                <span>Menu</span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-white/5 rounded-full text-white/70 hover:text-white transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation links list */}
            <div className="flex-1 flex flex-col justify-center gap-8 py-8 px-2">
              {[
                { name: "About Us", href: "#about" },
                { name: "Products", href: "#carousel-showcase" },
                { name: "Catalog", href: "#products" },
                { name: "Clients", href: "#recent-work" },
                { name: "Contact", href: "#footer" },
              ].map((link, idx) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06 }}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    // Smooth scroll trigger
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-white hover:text-zinc-400 text-3xl font-display uppercase tracking-wide transition-colors duration-300 font-bold text-left pl-2"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Bottom info row in drawer */}
            <div className="py-6 border-t border-white/5 text-left flex flex-col gap-2">
              <span className="text-[10px] uppercase font-bold text-white/60 tracking-widest">
                Get in Touch
              </span>
              <a
                href={`tel:${config.primaryPhone.replace(/\s+/g, "")}`}
                className="text-white/60 hover:text-white text-xs transition-colors"
              >
                Call: {config.primaryPhone}
              </a>

              <a
                href={`mailto:${config.email}`}
                className="text-white/60 hover:text-white text-xs transition-colors"
              >
                Email: {config.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </>
  );
});

Navbar.displayName = "Navbar";

