import React from "react";
import { MessageSquare } from "lucide-react";

const handleWhatsAppClick = () => {
  const message = encodeURIComponent("Hi! I am interested in custom merchandise for my brand. Let's discuss design mockups!");
  window.open(`https://wa.me/917420852608?text=${message}`, "_blank");
};

export const FloatingWhatsApp: React.FC = React.memo(() => {
  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
      {/* Subtle white pulse effect */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-10 animate-ping" />

      <button
        onClick={handleWhatsAppClick}
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-zinc-900 hover:bg-zinc-800 text-white rounded-full border border-white/20 hover:border-white/40 shadow-[0_10px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_30px_rgba(255,255,255,0.08)] hover:-translate-y-1 transition-all duration-300 active:scale-95 group cursor-pointer"
      >
        {/* WhatsApp Icon */}
        <MessageSquare className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12 fill-white" />

        {/* Tooltip text */}
        <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-200 origin-right whitespace-nowrap bg-zinc-950 text-white text-xs font-semibold py-2 px-4 rounded-lg shadow-lg border border-zinc-800 pointer-events-none">
          Get Free Mockup
        </span>
      </button>
    </div>
  );
});

FloatingWhatsApp.displayName = "FloatingWhatsApp";
