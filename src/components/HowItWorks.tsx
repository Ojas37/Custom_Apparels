import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Lightbulb, Eye, CheckCircle, Hammer, Truck } from "lucide-react";

interface Step {
  step: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    step: "01",
    title: "Share Your Idea",
    desc: "Send us your branding guidelines, custom logo, sketches, or ideas. Select your products, colors, and estimated quantities.",
    icon: <Lightbulb className="w-5 h-5 text-emerald-400" />,
  },
  {
    step: "02",
    title: "Receive Free Mockup",
    desc: "Our design team creates high-fidelity digital mockups showing logo positions, sizes, and print rendering within 24 hours.",
    icon: <Eye className="w-5 h-5 text-emerald-400" />,
  },
  {
    step: "03",
    title: "Approve Design",
    desc: "Review colors, request modifications, and approve the final digital sample sheets to lock in printing templates.",
    icon: <CheckCircle className="w-5 h-5 text-emerald-400" />,
  },
  {
    step: "04",
    title: "Production Begins",
    desc: "We print, embroider, stitch, pack, and run rigorous quality checks on every item inside our production facilities.",
    icon: <Hammer className="w-5 h-5 text-emerald-400" />,
  },
  {
    step: "05",
    title: "Delivered to Your Doorstep",
    desc: "Premium items are packed and shipped directly to your corporate HQ, event venue, or distributed to employees' homes.",
    icon: <Truck className="w-5 h-5 text-emerald-400" />,
  },
];

export const HowItWorks: React.FC = React.memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progression over the timeline container to draw the active line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section id="how-it-works" className="w-full py-20 px-6 md:px-12 bg-zinc-950/20 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left mb-20">
          <span className="text-emerald-400 text-xs font-semibold uppercase tracking-[0.25em] block mb-3">
            Simple Process
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-white uppercase tracking-tight leading-none mb-4">
            From Design To Delivery.
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-xl font-medium">
            Ordering custom apparel doesn't have to be complicated. We streamline the entire cycle so you can focus on building your brand.
          </p>
        </div>

        {/* Timeline Track */}
        <div ref={containerRef} className="relative w-full flex flex-col items-center">
          
          {/* Vertical Background Track Line (Desktop & Mobile) */}
          <div className="absolute top-4 bottom-4 left-4 md:left-1/2 w-[2px] bg-white/10 -translate-x-1/2 z-0" />

          {/* Active Colored Progress Line filled on scroll */}
          <motion.div
            style={{
              scaleY: scrollYProgress,
              transformOrigin: "top",
            }}
            className="absolute top-4 bottom-4 left-4 md:left-1/2 w-[2px] bg-emerald-500 -translate-x-1/2 z-0"
          />

          {/* Steps List */}
          <div className="w-full flex flex-col gap-16 relative z-10">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className="w-full flex flex-col md:flex-row items-stretch justify-start md:justify-between relative pl-10 md:pl-0"
                >
                  {/* Step Bullet Dot */}
                  <div className="absolute left-4 md:left-1/2 top-4 w-6 h-6 rounded-full bg-zinc-950 border-2 border-emerald-500 -translate-x-1/2 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>

                  {/* Left Column (Desktop) */}
                  <div className="w-full md:w-[45%] text-left md:text-right hidden md:block">
                    {isEven && (
                      <motion.div
                        initial={{ x: -40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ type: "spring", stiffness: 80, damping: 15 }}
                        className="flex flex-col md:items-end gap-2"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center border border-white/5 mb-2">
                          {step.icon}
                        </div>
                        <span className="text-[10px] tracking-[0.2em] font-extrabold text-emerald-400 uppercase">
                          Step {step.step}
                        </span>
                        <h3 className="text-white font-bold text-xl uppercase tracking-wider">
                          {step.title}
                        </h3>
                        <p className="text-white/50 text-xs md:text-sm leading-relaxed max-w-md">
                          {step.desc}
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Middle Spacer Column (for desktop layout centering) */}
                  <div className="w-0 md:w-[5%] hidden md:block" />

                  {/* Right Column (Desktop) */}
                  <div className="w-full md:w-[45%] text-left flex flex-col gap-2">
                    {(!isEven || true) && (
                      <motion.div
                        initial={{ x: 40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ type: "spring", stiffness: 80, damping: 15 }}
                        className={`flex flex-col items-start gap-2 ${isEven ? "md:hidden" : ""}`}
                      >
                        <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center border border-white/5 mb-2">
                          {step.icon}
                        </div>
                        <span className="text-[10px] tracking-[0.2em] font-extrabold text-emerald-400 uppercase">
                          Step {step.step}
                        </span>
                        <h3 className="text-white font-bold text-xl uppercase tracking-wider">
                          {step.title}
                        </h3>
                        <p className="text-white/50 text-xs md:text-sm leading-relaxed max-w-md">
                          {step.desc}
                        </p>
                      </motion.div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
});
