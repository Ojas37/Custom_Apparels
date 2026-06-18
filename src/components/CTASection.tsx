import React from "react";
import { MessageSquare, Layers, Truck, Palette } from "lucide-react";

export const CTASection: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'd like to get a free mockup for custom apparel. Can you help me with design requirements?");
    window.open(`https://wa.me/917420852608?text=${message}`, "_blank");
  };

  const handleExploreClick = () => {
    const element = document.getElementById("carousel-showcase");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full mt-4 md:mt-6 pointer-events-auto">
      {/* CTA Button Row */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
        {/* Primary CTA (WhatsApp) */}
        <button
          onClick={handleWhatsAppClick}
          className="flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 px-8 rounded-full shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_8px_30px_rgba(16,185,129,0.5)] hover:-translate-y-1 active:translate-y-0 active:scale-98 transition-all duration-300 cursor-pointer"
        >
          <MessageSquare className="w-5 h-5 fill-white" />
          <span className="text-sm uppercase tracking-wider">Get Free Mockup on WhatsApp</span>
        </button>

        {/* Secondary CTA */}
        <button
          onClick={handleExploreClick}
          className="flex items-center justify-center border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white font-bold py-4 px-8 rounded-full hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all duration-300 cursor-pointer"
        >
          <span className="text-sm uppercase tracking-wider">Explore Products</span>
        </button>
      </div>

      {/* Conversion Badges (Trust-builders) */}
      <div className="flex flex-wrap items-center gap-3 mt-1">
        {/* Badge 1 */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-white/70">
          <Layers className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-[11px] font-medium tracking-wide">1 to 10,000+ Units</span>
        </div>

        {/* Badge 2 */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-white/70">
          <Truck className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-[11px] font-medium tracking-wide">Pan India Delivery</span>
        </div>

        {/* Badge 3 */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-white/70">
          <Palette className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-[11px] font-medium tracking-wide">Free Design Assistance</span>
        </div>
      </div>
    </div>
  );
};
