import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Cpu, Package } from "lucide-react";

export const AboutUs: React.FC = React.memo(() => {
  return (
    <section id="about" className="w-full py-24 px-6 md:px-12 bg-zinc-950 border-t border-white/5 relative z-20 overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.015)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Brand Story & Mission */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            className="lg:col-span-5 text-left flex flex-col justify-center"
          >
            <span className="text-zinc-400 text-xs font-semibold uppercase tracking-[0.25em] block mb-3">
              Craft & Vision
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-white uppercase tracking-tight leading-[0.95] mb-6 font-extrabold">
              Where Ideas<br />Become Merchandise.
            </h2>
            <div className="flex flex-col gap-4 text-white/70 text-sm md:text-base font-normal leading-relaxed">
              <p>
                Custom Apparels was founded in Navi Mumbai with a singular focus: to elevate custom merchandise from generic placeholders to premium retail-quality clothing. We don’t just print; we manufacture.
              </p>
              <p>
                Every piece in our catalog is crafted from scratch—selecting the finest long-staple cotton, tailoring fits for everyday comfort, and executing prints with computer-guided precision.
              </p>
              <p className="text-white/40 text-xs border-l-2 border-white/15 pl-4 mt-2 italic">
                From concept development and design to production and fulfillment, we bring merchandise projects to life at any scale.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Features/Highlights Grid */}
          <div className="lg:col-span-7 flex flex-col gap-6 w-full">
            
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 70, damping: 14 }}
              className="p-6 md:p-8 rounded-3xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-white/10 transition-all duration-300 flex gap-6 items-start text-left"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-white">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2 font-display uppercase tracking-wide">
                  Sourcing Premium Fabrics
                </h3>
                <p className="text-white/50 text-xs md:text-sm leading-relaxed">
                  We source high-quality apparel and merchandise that offer superior comfort, durability, and a retail-ready finish—ensuring your brand looks its best.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 70, damping: 14, delay: 0.1 }}
              className="p-6 md:p-8 rounded-3xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-white/10 transition-all duration-300 flex gap-6 items-start text-left"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-white">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2 font-display uppercase tracking-wide">
                  Precision Print & Embroidery
                </h3>
                <p className="text-white/50 text-xs md:text-sm leading-relaxed">
                  From sharp logo embroidery to vibrant DTF and screen printing, we ensure every detail is reproduced with precision and consistency.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 70, damping: 14, delay: 0.2 }}
              className="p-6 md:p-8 rounded-3xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-white/10 transition-all duration-300 flex gap-6 items-start text-left"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-white">
                <Package className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2 font-display uppercase tracking-wide">
                  Integrated Packing & Shipping
                </h3>
                <p className="text-white/50 text-xs md:text-sm leading-relaxed">
                  We handle folding, custom packaging boxes, sleeve wraps, and individual parcel dispatching directly to employees, clients, or customers across India. Zero logistics hassle.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
});
