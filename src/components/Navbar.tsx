import React from "react";
import { MessageSquare } from "lucide-react";

export const Navbar: React.FC = React.memo(() => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'd like to make an enquiry for custom merchandise for my brand.");
    window.open(`https://wa.me/917021012952?text=${message}`, "_blank");
  };

  return (
    <nav className="w-full absolute top-0 left-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 md:py-8 pointer-events-auto">
      {/* Top Left Logo */}
      <a href="#" aria-label="Custom Apparels Homepage" className="flex items-center gap-2 group">
        <img
          src="/logo.png"
          alt="CUSTOM APPARELS"
          className="h-6 md:h-8 object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-105"
        />
      </a>

      {/* Center Nav Links - Desktop only (Premium street look) */}
      <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-white/70">
        <a href="#about" className="hover:text-white transition-colors duration-200">About Us</a>
        <a href="#carousel-showcase" className="hover:text-white transition-colors duration-200">Products</a>
        <a href="#products" className="hover:text-white transition-colors duration-200">Catalog</a>
        <a href="#recent-work" className="hover:text-white transition-colors duration-200">Clients</a>
      </div>

      {/* Top Right Quick WhatsApp Link */}
      <button
        onClick={handleWhatsAppClick}
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 cursor-pointer"
      >
        <MessageSquare className="w-3 h-3 text-white" />
        <span>Enquire Now</span>
      </button>
    </nav>
  );
});
