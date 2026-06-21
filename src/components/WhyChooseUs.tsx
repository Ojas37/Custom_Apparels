import React from "react";
import { motion } from "framer-motion";
import { Layers, Palette, Truck, Building2, CheckCircle, Zap } from "lucide-react";

interface CardItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const cards: CardItem[] = [
  {
    title: "No Minimum Order Qty",
    desc: "Order from a single custom piece to test print quality, or scale up to thousands of units seamlessly.",
    icon: <Layers className="w-6 h-6 text-white/80" />,
  },
  {
    title: "Free Mockup & Design",
    desc: "Get expert design assistance and high-fidelity photorealistic mockups within 24 hours.",
    icon: <Palette className="w-6 h-6 text-white/80" />,
  },
  {
    title: "Pan India Delivery",
    desc: "Reliable door-to-door distribution to offices, event venues, or individual employees' homes across India.",
    icon: <Truck className="w-6 h-6 text-white/80" />,
  },
  {
    title: "Bulk Corporate Orders",
    desc: "End-to-end custom merchandise execution for onboarding kits, brand events, and promotional campaigns.",
    icon: <Building2 className="w-6 h-6 text-white/80" />,
  },
  {
    title: "Premium Print Quality",
    desc: "State-of-the-art direct-to-garment (DTG), screen printing, premium DTF, and high-density embroidery.",
    icon: <CheckCircle className="w-6 h-6 text-white/80" />,
  },
  {
    title: "Fast Turnaround Time",
    desc: "Streamlined production and express logistics pipelines to meet your urgent event and launch deadlines.",
    icon: <Zap className="w-6 h-6 text-white/80" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.95, rotate: -2 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 75, damping: 15 },
  },
} as const;

export const WhyChooseUs: React.FC = React.memo(() => {
  return (
    <section id="why-choose-us" className="w-full py-20 px-6 md:px-12 bg-zinc-950/40 relative z-20">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-left mb-16">
          <span className="text-zinc-400 text-xs font-semibold uppercase tracking-[0.25em] block mb-3">
            Why Partner With Us
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-white uppercase tracking-tight leading-none mb-4">
            Quality You Can Feel.<br />Service You Can Trust.
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-xl font-medium">
            End-to-end merchandise solutions for businesses, events, and teams.
          </p>
        </div>

        {/* 6-Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between min-h-[200px] hover:border-white/15 shadow-lg"
            >
              <div className="flex flex-col gap-4">
                {/* Card Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/[0.03] group-hover:bg-white/[0.07] transition-colors duration-300">
                  {card.icon}
                </div>

                {/* Card Text */}
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {card.title}
                  </h3>
                  <p className="text-white/50 text-xs md:text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
});
