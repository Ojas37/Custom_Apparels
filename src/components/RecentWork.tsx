import React from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  client: string;
  category: string;
  image: string;
  gridClass: string;
}

export const RecentWork: React.FC = () => {
  const items: GalleryItem[] = [
    {
      id: "work-1",
      title: "Premium Employee Onboarding Kit",
      client: "Prospectoo",
      category: "Corporate Merchandise",
      image: "https://images.unsplash.com/photo-1608155686393-8fdd966d784d?q=80&w=800&auto=format&fit=crop",
      gridClass: "md:col-span-8 md:row-span-1 h-[350px] md:h-[450px]",
    },
    {
      id: "work-2",
      title: "Oversized Streetwear Merch Lineup",
      client: "Whoopers Gaming",
      category: "Creator Merchandise",
      image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=800&auto=format&fit=crop",
      gridClass: "md:col-span-4 md:row-span-2 h-[500px] md:h-[700px]",
    },
    {
      id: "work-3",
      title: "Rigid Brand PR Boxes & Custom Tees",
      client: "Raaviera Hotels",
      category: "Brand Collaborations",
      image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800&auto=format&fit=crop",
      gridClass: "md:col-span-4 md:row-span-1 h-[300px] md:h-[350px]",
    },
    {
      id: "work-4",
      title: "Embroidered Custom Satin Bomber Line",
      client: "Dribblers Football Club",
      category: "Outerwear & Apparel",
      image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=800&auto=format&fit=crop",
      gridClass: "md:col-span-4 md:row-span-1 h-[300px] md:h-[350px]",
    },
  ];

  const handleWhatsAppClick = (title: string) => {
    const message = encodeURIComponent(`Hi! I saw the Recent Work item: "${title}" and want to get mockups/quotes for something similar.`);
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <section id="recent-work" className="w-full py-20 px-6 md:px-12 bg-zinc-950 relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-emerald-400 text-xs font-semibold uppercase tracking-[0.25em] block mb-3">
              Case Studies & Deliveries
            </span>
            <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tight leading-none">
              Delivered Work.
            </h2>
          </div>
          <p className="text-white/60 text-sm md:text-base max-w-sm font-medium">
            See real products and premium merchandise custom manufactured and distributed to our B2B partners, startups, and gaming guilds.
          </p>
        </div>

        {/* Masonry Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {items.map((item) => (
            <motion.div
              key={item.id}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className={`group relative rounded-3xl overflow-hidden border border-white/5 bg-zinc-900 shadow-2xl flex flex-col ${item.gridClass}`}
            >
              {/* Image Layer */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[700ms] ease-carousel z-0"
              />

              {/* Gradient dark mask for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

              {/* Category tag */}
              <div className="absolute top-6 left-6 z-20 px-3 py-1 rounded-full text-[10px] uppercase font-extrabold bg-zinc-950 border border-white/10 text-emerald-400 shadow-md">
                {item.category}
              </div>

              {/* Reveal Hover Details */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 z-20 flex flex-col justify-end gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                
                {/* Title and Client */}
                <div className="text-left">
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-white/50 block mb-1">
                    Client: {item.client}
                  </span>
                  <h3 className="text-white font-display text-2xl md:text-3xl uppercase leading-none tracking-wide">
                    {item.title}
                  </h3>
                </div>

                {/* WhatsApp Trigger */}
                <button
                  onClick={() => handleWhatsAppClick(item.title)}
                  className="flex items-center gap-2 self-start py-2.5 px-5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg shadow-emerald-500/20"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-white" />
                  <span>Enquire Similar Mockup</span>
                </button>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
