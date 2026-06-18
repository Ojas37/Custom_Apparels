import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageSquare } from "lucide-react";

interface ShowcaseItem {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  color: string;
}

const ProductCard: React.FC<{
  item: ShowcaseItem;
  variants: any;
  onEnquire: (productName: string) => void;
}> = ({ item, variants, onEnquire }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll tracking to calculate active parallax offset inside individual card bounds
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Shifts image vertically to simulate depth as viewport moves
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <motion.div
      ref={containerRef}
      variants={variants}
      whileHover={{ y: -6 }}
      className="group flex flex-col rounded-3xl border border-white/5 bg-zinc-950/50 hover:bg-zinc-950 hover:border-white/10 transition-all duration-300 overflow-hidden shadow-2xl relative"
    >
      {/* Product Category Pill */}
      <div className="absolute top-4 left-4 z-30 px-3 py-1 rounded-full text-[10px] uppercase font-bold bg-black/60 border border-white/10 text-white/80">
        {item.category}
      </div>

      {/* Product Image Area */}
      <div className="h-64 md:h-72 w-full relative overflow-hidden bg-zinc-950">
        {/* Background radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] group-hover:scale-110 transition-transform duration-500 z-10" />
        
        <motion.img
          src={item.image}
          alt={item.name}
          style={{ y, scale: 1.15 }}
          className="w-full h-full object-cover group-hover:scale-[1.18] transition-transform duration-[500ms] ease-carousel origin-center"
        />
      </div>

      {/* Product Details Area */}
      <div className="p-6 flex flex-col justify-between flex-1 gap-6 border-t border-white/5">
        <div>
          <h3 className="text-white font-bold text-xl mb-2 flex items-center justify-between">
            <span>{item.name}</span>
          </h3>
          <p className="text-white/50 text-xs md:text-sm leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* WhatsApp Enquiry Quick Link */}
        <button
          onClick={() => onEnquire(item.name)}
          className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-400 text-xs uppercase font-bold tracking-wider transition-all duration-300 cursor-pointer"
        >
          <MessageSquare className="w-3.5 h-3.5 fill-emerald-400/20" />
          <span>Enquire for {item.name}</span>
        </button>
      </div>
    </motion.div>
  );
};

export const ProductShowcase: React.FC = () => {
  const items: ShowcaseItem[] = [
    {
      id: "oversized",
      name: "Oversized Tees",
      category: "Apparel",
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop",
      description: "Premium heavy-weight 240+ GSM cotton, loose comfort fit.",
      color: "bg-slide-oversized/10 border-slide-oversized/20 text-slide-oversized",
    },
    {
      id: "hoodie",
      name: "Custom Hoodies",
      category: "Apparel",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop",
      description: "Warm, cozy brushed fleece, double-needle stitched cuffs.",
      color: "bg-slide-hoodie/10 border-slide-hoodie/20 text-slide-hoodie",
    },
    {
      id: "polo",
      name: "Classic Polo Tees",
      category: "Apparel",
      image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=800&auto=format&fit=crop",
      description: "Pique knit collar, premium embroidery for executive styling.",
      color: "bg-slide-polo/10 border-slide-polo/20 text-slide-polo",
    },
    {
      id: "bomber",
      name: "Bomber Jackets",
      category: "Outerwear",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
      description: "Satin lining, high-density embroidered patch graphics.",
      color: "bg-slide-bomber/10 border-slide-bomber/20 text-slide-bomber",
    },
    {
      id: "cap",
      name: "Premium Caps",
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
      description: "Structured panels, metallic buckle strap, premium stitching.",
      color: "bg-slide-cap/10 border-slide-cap/20 text-slide-cap",
    },
    {
      id: "tote",
      name: "Canvas Tote Bags",
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
      description: "Heavy-duty canvas, printed logo, box-stitched handles.",
      color: "bg-slide-tote/10 border-slide-tote/20 text-slide-tote",
    },
    {
      id: "corp-kit",
      name: "Employee Kits",
      category: "Corporate Packages",
      image: "https://images.unsplash.com/photo-1608155686393-8fdd966d784d?q=80&w=800&auto=format&fit=crop",
      description: "Curated welcome onboarding kits containing hoodies, diaries, and bottles.",
      color: "bg-zinc-800/20 border-zinc-700/20 text-emerald-400",
    },
    {
      id: "pr-box",
      name: "PR & Welcome Boxes",
      category: "Corporate Packages",
      image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800&auto=format&fit=crop",
      description: "Custom printed rigid boxes, personalized sleeve tags, and fillers.",
      color: "bg-zinc-800/20 border-zinc-700/20 text-emerald-400",
    },
    {
      id: "stickers",
      name: "Custom Stickers",
      category: "Creator Merch",
      image: "/products/stickers.png",
      description: "Die-cut waterproof vinyl sticker packs, matte and gloss finishes.",
      color: "bg-zinc-800/20 border-zinc-700/20 text-emerald-400",
    },
  ];

  const handleWhatsAppEnquiry = (productName: string) => {
    const message = encodeURIComponent(`Hi! I'd like to get a quote and design mockup for custom ${productName}.`);
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 35, opacity: 0, scale: 0.96 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 85,
        damping: 15,
      },
    },
  } as const;

  return (
    <section id="products" className="w-full py-20 px-6 md:px-12 bg-black relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-emerald-400 text-xs font-semibold uppercase tracking-[0.25em] block mb-3">
              Custom Merch Catalog
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-white uppercase tracking-tight leading-none">
              What Can We Customize?
            </h2>
          </div>
          <p className="text-white/60 text-sm md:text-base max-w-sm font-medium">
            Explore our core products. From streetwear apparel to corporate swag, we brand it exactly the way you imagine.
          </p>
        </div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {items.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              variants={cardVariants}
              onEnquire={handleWhatsAppEnquiry}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
};
