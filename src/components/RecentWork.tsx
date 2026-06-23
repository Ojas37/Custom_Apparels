import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { getWhatsAppLink } from "../config";

interface GalleryItem {
  id: string;
  title: string;
  client: string;
  image: string;
  video?: string;
  gridClass: string;
}

const items: GalleryItem[] = [
  {
    id: "work-1",
    title: "MERCH CRAFTED FOR CLIENTS",
    client: "",
    image: "/recent/IMG_7285_thumb.webp",
    video: "/IMG_7285.MP4",
    gridClass: "md:col-span-8 md:row-span-1 h-[350px] md:h-[450px]",
  },
  {
    id: "work-2",
    title: "EVENT MERCHANDISE FOR PIER POP",
    client: "THE BALLARD PIER",
    image: "/recent/custom_thumb.webp",
    video: "/custom.MP4",
    gridClass: "md:col-span-4 md:row-span-2 h-[500px] md:h-[700px]",
  },
  {
    id: "work-3",
    title: "BULK CORPORATE DIARIES",
    client: "L&T VYOMA",
    image: "/recent/raaviera.webp",
    gridClass: "md:col-span-4 md:row-span-1 h-[300px] md:h-[350px]",
  },
  {
    id: "work-4",
    title: "MERCH MADE FOR STARTUPS",
    client: "PROSPECTOO",
    image: "/recent/dribblers.webp",
    gridClass: "md:col-span-4 md:row-span-1 h-[300px] md:h-[350px]",
  },
];

const RecentWorkCard: React.FC<{
  item: GalleryItem;
  onEnquire: (title: string) => void;
}> = ({ item, onEnquire }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Load video 200px before entering viewport
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Track scroll progression relative to this card to shift the image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Shifts the image within its clipped boundaries to create a parallax window mask effect
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ y: 45, opacity: 0, scale: 0.97 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 75, damping: 15 }}
      className={`group relative rounded-3xl overflow-hidden border border-white/5 bg-zinc-900 shadow-2xl flex flex-col ${item.gridClass}`}
    >
      {/* Video or Image Layer with Parallax */}
      {item.video && isInView ? (
        <video
          src={item.video}
          poster={item.image}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover origin-center z-0"
        />
      ) : (
        <motion.img
          src={item.image}
          alt={item.title}
          width={960}
          height={1280}
          loading="lazy"
          style={{ y, scale: 1.2 }}
          className="absolute inset-0 w-full h-full object-cover origin-center z-0"
        />
      )}

      {/* Gradient dark mask for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10 opacity-75 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />



      {/* Reveal Hover Details */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 z-20 flex flex-col justify-end gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        
        {/* Title and Client */}
        <div className="text-left">
          {item.client && (
            <span className="text-[10px] uppercase tracking-widest font-semibold text-white/70 block mb-1">
              Client: {item.client}
            </span>
          )}
          <h3 className="text-white font-display text-2xl md:text-3xl uppercase leading-none tracking-wide">
            {item.title}
          </h3>
        </div>

        {/* WhatsApp Trigger */}
        <button
          onClick={() => onEnquire(item.title)}
          className="flex items-center gap-2 self-start py-2.5 px-5 rounded-full bg-white hover:bg-zinc-100 text-black text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg"
        >
          <MessageSquare className="w-3.5 h-3.5 fill-black" />
          <span>Explore Similar Merch</span>
        </button>

      </div>
    </motion.div>
  );
};

export const RecentWork: React.FC = React.memo(() => {
  const handleWhatsAppClick = (title: string) => {
    window.open(
      getWhatsAppLink(`Hi! I saw the Recent Work item: "${title}" and want to get mockups/quotes for something similar.`),
      "_blank"
    );
  };

  return (
    <section id="recent-work" className="w-full py-20 px-6 md:px-12 bg-zinc-950 relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-zinc-400 text-xs font-semibold uppercase tracking-[0.25em] block mb-3">
              Case Studies & Deliveries
            </span>
            <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tight leading-none">
              Delivered Work.
            </h2>
          </div>
          <p className="text-white/60 text-sm md:text-base max-w-sm font-medium">
            MERCH CRAFTED FOR CLIENTS
          </p>
        </div>

        {/* Masonry Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {items.map((item) => (
            <RecentWorkCard
              key={item.id}
              item={item}
              onEnquire={handleWhatsAppClick}
            />
          ))}
        </div>

      </div>
    </section>
  );
});
