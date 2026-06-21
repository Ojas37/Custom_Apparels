import React from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

interface ShowcaseItem {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  color: string;
}

const items: ShowcaseItem[] = [
  {
    id: "regular-tee",
    name: "Classic Crewneck Tees",
    category: "Apparel",
    image: "/products/1.png",
    description: "Premium 180 GSM combed cotton crewnecks, perfect for everyday team wear.",
    color: "",
  },
  {
    id: "oversized-tee",
    name: "Oversized Streetwear Tees",
    category: "Apparel",
    image: "/products/2.png",
    description: "Heavy-weight 240+ GSM cotton boxy fit with dropped shoulders for premium brand merch.",
    color: "",
  },
  {
    id: "polo-tee",
    name: "Classic Polo Shirts",
    category: "Apparel",
    image: "/products/3.png",
    description: "Pique knit double-stitched polo collared shirts with high-density brand embroidery.",
    color: "",
  },
  {
    id: "pullover-hoodie",
    name: "Custom Pullover Hoodies",
    category: "Apparel",
    image: "/products/4.png",
    description: "Super soft 320+ GSM brushed fleece pullover hoodies with double-lined hoods.",
    color: "",
  },
  {
    id: "zip-hoodie",
    name: "Premium Zip-Up Hoodies",
    category: "Apparel",
    image: "/products/5.png",
    description: "Versatile heavy fleece hoodies with high-quality metal zippers and kangaroo pockets.",
    color: "",
  },
  {
    id: "sweatshirt",
    name: "Crewneck Sweatshirts",
    category: "Apparel",
    image: "/products/6.png",
    description: "Comfortable and thick fleece sweatshirts, rib-knit collar and cuffs for a clean look.",
    color: "",
  },
  {
    id: "cap",
    name: "Structured Baseball Caps",
    category: "Accessories",
    image: "/products/7.png",
    description: "Premium structured 6-panel caps with adjustable metallic buckle and customized front stitching.",
    color: "",
  },
  {
    id: "tote-bag",
    name: "Canvas Tote Bags",
    category: "Accessories",
    image: "/products/8.png",
    description: "Heavy-duty eco-friendly canvas tote bags with cross-stitched handles and screen-printed logos.",
    color: "",
  },
  {
    id: "apron",
    name: "Custom Work Aprons",
    category: "Accessories",
    image: "/products/9.png",
    description: "Durable canvas utility aprons with adjustable straps and front pockets for cafes and studios.",
    color: "",
  },
  {
    id: "welcome-kit",
    name: "Onboarding Welcome Sets",
    category: "Corporate Packages",
    image: "/products/10.png",
    description: "Curated kits featuring personalized bottles, diaries, keychains, and lanyards for new hires.",
    color: "",
  },
  {
    id: "phone-case",
    name: "Custom Brand Phone Cases",
    category: "Accessories",
    image: "/products/11.png",
    description: "Impact-resistant matte and glossy phone covers customized with high-res brand artwork.",
    color: "",
  },
  {
    id: "pr-box",
    name: "Executive Brand Gift Boxes",
    category: "Corporate Packages",
    image: "/products/12.png",
    description: "Premium rigid gift packages containing luxury custom items for clients and VIP partners.",
    color: "",
  },
];

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
      type: "spring" as const,
      stiffness: 85,
      damping: 15,
    },
  },
} as const;

const ProductCard: React.FC<{
  item: ShowcaseItem;
  variants: any;
  onEnquire: (productName: string) => void;
}> = ({ item, variants, onEnquire }) => {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -6 }}
      className="group flex flex-col rounded-2xl sm:rounded-3xl border border-white/5 bg-zinc-950/50 hover:bg-zinc-950 hover:border-white/10 transition-all duration-300 overflow-hidden shadow-2xl relative"
    >
      {/* Product Category Pill */}
      <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 z-30 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[8px] sm:text-[10px] uppercase font-bold bg-black/60 border border-white/10 text-white/80">
        {item.category}
      </div>

      {/* Product Image Area */}
      <div className="aspect-square w-full relative overflow-hidden bg-zinc-950">
        {/* Background radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] group-hover:scale-110 transition-transform duration-500 z-10" />
        
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-carousel origin-center"
        />
      </div>

      {/* Product Details Area */}
      <div className="p-3 sm:p-5 md:p-6 flex flex-col justify-between flex-1 gap-3 sm:gap-4 md:gap-6 border-t border-white/5">
        <div>
          <h3 className="text-white font-bold text-sm sm:text-lg md:text-xl mb-1 sm:mb-2 flex items-center justify-between">
            <span>{item.name}</span>
          </h3>
          <p className="text-white/50 text-[10px] sm:text-xs md:text-sm leading-relaxed line-clamp-2 sm:line-clamp-none">
            {item.description}
          </p>
        </div>

        {/* WhatsApp Enquiry Quick Link */}
        <button
          onClick={() => onEnquire(item.name)}
          className="flex items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-3 px-3 sm:px-5 rounded-lg sm:rounded-xl border border-white/10 hover:border-white/25 bg-white/[0.03] hover:bg-white/[0.07] text-white/70 hover:text-white text-[10px] sm:text-xs uppercase font-bold tracking-wider transition-all duration-300 cursor-pointer"
        >
          <MessageSquare className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-white/20" />
          <span className="hidden sm:inline">Enquire for {item.name}</span>
          <span className="inline sm:hidden">Enquire</span>
        </button>
      </div>
    </motion.div>
  );
};

export const ProductShowcase: React.FC = React.memo(() => {
  const handleWhatsAppEnquiry = (productName: string) => {
    const message = encodeURIComponent(`Hi! I'd like to get a quote and design mockup for custom ${productName}.`);
    window.open(`https://wa.me/917420852608?text=${message}`, "_blank");
  };

  return (
    <section id="products" className="w-full py-20 px-4 md:px-12 bg-black relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-zinc-400 text-xs font-semibold uppercase tracking-[0.25em] block mb-3">
              Custom Merch Catalog
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-white uppercase tracking-tight leading-none">
              What Can We Customize?
            </h2>
          </div>
          <p className="text-white/60 text-sm md:text-base max-w-sm font-medium">
            Whether you're building a brand, outfitting a team, or creating something personal, discover products designed to make an impact.
          </p>
        </div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8"
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
});
