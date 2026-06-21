import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCard {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

const TESTIMONIALS: TestimonialCard[] = [
  {
    quote: "Ordering 1,500 onboarding kit boxes felt completely hands-off. Custom Apparels handled packaging and dispatched them directly to remote employee homes in 18 states. The hoodie fabric is thick and the print detail is immaculate.",
    name: "Rohan Deshmukh",
    role: "VP of People Operations",
    company: "Prospectoo",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120",
  },
  {
    quote: "Our fans are absolutely obsessed with the heavy-weight oversized tees. The 240GSM cotton quality and high-density screen printing are equivalent to global streetwear brands. The enquirer process was super quick.",
    name: "Sneha Nair",
    role: "Creator Merchandise Director",
    company: "Whoopers Gaming",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120",
  },
  {
    quote: "We required custom embroidered polo shirts for our hospitality staff across hotel branches. The embroidery lines are sharp, and the pique fabric maintains color brightness even after continuous industrial washes.",
    name: "Vikram Sen",
    role: "General Manager",
    company: "Raaviera Hotels",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120",
  },
];

const springTransition = {
  type: "spring" as const,
  stiffness: 70,
  damping: 14,
};

export const Testimonials: React.FC = React.memo(() => {
  return (
    <section id="testimonials" className="w-full py-20 px-6 md:px-12 bg-zinc-950/40 relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <span className="text-zinc-400 text-xs font-semibold uppercase tracking-[0.25em] block mb-3">
            Client Reviews
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-white uppercase tracking-tight leading-none mb-4">
            Loved by Brands & Creators.
          </h2>
        </div>

        {/* Testimonials Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...springTransition, delay: idx * 0.1 }}
              className="p-8 rounded-3xl border border-white/5 bg-zinc-950/30 flex flex-col justify-between text-left gap-8 shadow-xl hover:border-white/10 transition-colors duration-300"
            >
              {/* Quote Block */}
              <div>
                {/* 5-Star Row */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-white/80 text-white/80" />
                  ))}
                </div>
                
                <p className="text-white/80 text-sm md:text-base italic leading-relaxed">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Info block */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <img
                  src={test.avatar}
                  alt={`${test.name} avatar`}
                  className="w-12 h-12 rounded-full object-cover border border-white/10"
                />
                <div className="text-left">
                  <h4 className="text-white font-bold text-sm tracking-wide">
                    {test.name}
                  </h4>
                  <p className="text-white/40 text-xs mt-0.5">
                    {test.role}, <span className="text-white/70">{test.company}</span>
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
});

Testimonials.displayName = "Testimonials";

