import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, ShieldCheck, Check } from "lucide-react";

interface CollabCard {
  title: string;
  project: string;
  badge: string;
  description: string;
  image: string;
  features: string[];
}

export const CollabsSection: React.FC = () => {
  const collabs: CollabCard[] = [
    {
      title: "Shiv Thakare Collection",
      project: "Celebrity Activewear Line",
      badge: "Celebrity Merch",
      description: "Co-designed and manufactured a custom streetwear-activewear line for Bigg Boss fame star Shiv Thakare, prioritizing high-breathability mesh fabrics and premium rubberized typography prints.",
      image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=800&auto=format&fit=crop",
      features: ["Custom Rubber Branding", "Heavyweight Mesh Interlock", "Custom Poly-bag Packaging"],
    },
    {
      title: "Netflix 'Mismatched' Cast",
      project: "Promo Merch & Hoodies",
      badge: "Creator Merch",
      description: "Produced limited-edition custom printed hoodies and promotional goodies for the main cast of Netflix India's popular young-adult show 'Mismatched' to support launch campaign events.",
      image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=800&auto=format&fit=crop",
      features: ["380 GSM Organic Cotton", "Satin Lining Prints", "Premium Embroidered Emblems"],
    },
    {
      title: "Corporate Swag & Welcome Kits",
      project: "Prospectoo & Startup Cohorts",
      badge: "B2B Projects",
      description: "Developed and packed fully integrated employee kit boxes containing hoodies, notebook binders, and branded mugs for Prospectoo HQ and high-growth enterprise cohorts.",
      image: "https://images.unsplash.com/photo-1608155686393-8fdd966d784d?q=80&w=800&auto=format&fit=crop",
      features: ["Curated Box Packing", "Custom Sleeve Sleeving", "Individual Employee Dispatch"],
    },
  ];

  const handleWhatsAppClick = (collabTitle: string) => {
    const message = encodeURIComponent(`Hi! I am looking to build a premium collection similar to the "${collabTitle}" collaboration.`);
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <section id="collabs" className="w-full py-20 px-6 md:px-12 bg-black relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <span className="text-emerald-400 text-xs font-semibold uppercase tracking-[0.25em] block mb-3">
            Premium Collaborations
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-white uppercase tracking-tight leading-none mb-4">
            Trusted By Stars & Enterprises.
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-xl font-medium">
            From celebrity merchandise drops to corporate onboarding kits for hyper-growth startups, we deliver apparel that stands out.
          </p>
        </div>

        {/* Editorial Split Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Brand Statement Card (Col: 4) */}
          <div className="lg:col-span-4 bg-zinc-950/60 border border-white/5 rounded-3xl p-8 text-left flex flex-col justify-between min-h-[400px]">
            <div className="flex flex-col gap-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-white font-display text-2xl uppercase tracking-wider leading-tight">
                Enterprise Grade Merchandise Execution
              </h3>
              <p className="text-white/50 text-xs md:text-sm leading-relaxed">
                We handle the end-to-end pipeline. From material selection, mockup review sessions, and design iterations to production and individual home dispatches, we maintain a 99.8% quality delivery score.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold text-white/40 tracking-widest">
                Enquire B2B Kits
              </span>
              <button
                onClick={() => handleWhatsAppClick("B2B Corporate Kits")}
                className="py-2.5 px-5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg"
              >
                Let's Connect
              </button>
            </div>
          </div>

          {/* Right Side: Showcase Cards List (Col: 8) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {collabs.map((collab, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-6 md:p-8 rounded-3xl border border-white/5 bg-zinc-950/20 hover:bg-zinc-950/50 hover:border-white/10 transition-all duration-300 flex flex-col md:flex-row gap-6 md:gap-8 items-stretch"
              >
                {/* Visual Thumbnail */}
                <div className="w-full md:w-48 h-48 rounded-2xl overflow-hidden relative border border-white/5 flex-shrink-0">
                  <img
                    src={collab.image}
                    alt={collab.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-carousel"
                  />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-zinc-950/80 text-[8px] font-bold text-emerald-400 uppercase tracking-widest border border-white/5">
                    {collab.badge}
                  </div>
                </div>

                {/* Card Text details */}
                <div className="flex-1 flex flex-col justify-between text-left gap-4">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-emerald-400 tracking-wider">
                      {collab.project}
                    </span>
                    <h4 className="text-white font-bold text-xl uppercase tracking-wide mt-1">
                      {collab.title}
                    </h4>
                    <p className="text-white/50 text-xs md:text-sm mt-2 leading-relaxed">
                      {collab.description}
                    </p>
                  </div>

                  {/* Bullet features list */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    {collab.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-1.5 text-white/70 text-[11px] font-medium">
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Action Call */}
                <div className="flex md:flex-col justify-end items-end">
                  <button
                    onClick={() => handleWhatsAppClick(collab.title)}
                    className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white/5 group-hover:bg-emerald-500 text-white rounded-full transition-all duration-300 hover:scale-110 cursor-pointer shadow-md group-hover:shadow-[0_4px_15px_rgba(16,185,129,0.3)] border border-white/10 group-hover:border-transparent"
                  >
                    <MessageSquare className="w-4 h-4 md:w-5 md:h-5 fill-white/20 group-hover:fill-white" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
