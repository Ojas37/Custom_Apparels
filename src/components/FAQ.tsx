import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "Can I order just one piece?",
    a: "Yes. We serve both single-piece and bulk orders.",
  },
  {
    q: "Can I print my own design?",
    a: "Absolutely. You can share your artwork, logo, photos, or custom graphics and we'll bring them to life.",
  },
  {
    q: "Do you offer bulk discounts?",
    a: "Yes. Special pricing is available for larger quantities. Get in touch with our team for a custom quote.",
  },
  {
    q: "Can you help with design?",
    a: "Yes. Our in-house team can assist in creating or refining your design to ensure it looks perfect on the final product.",
  },
  {
    q: "Do you ship across India or globally?",
    a: "Yes. We deliver nationwide across India as well as internationally. Shipping timelines vary by location.",
  },
  {
    q: "Can creators launch merchandise through you?",
    a: "Yes. We handle end-to-end production, fulfillment, and shipping so creators can focus entirely on growing their audience.",
  },
  {
    q: "How long does delivery take?",
    a: "Most orders are delivered within 5–10 business days, depending on customization requirements and order quantity.",
  },
];

const AccordionItem: React.FC<{
  item: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ item, index, isOpen, onToggle }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [item.a]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`border-b transition-colors duration-300 ${
        isOpen ? "border-white/15" : "border-white/8"
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-6 py-6 text-left group cursor-pointer"
      >
        {/* Question */}
        <span
          className={`font-display text-base md:text-lg tracking-tight transition-colors duration-300 ${
            isOpen ? "text-white" : "text-white/70 group-hover:text-white"
          }`}
        >
          {item.q}
        </span>

        {/* Icon */}
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "border-white bg-white text-black"
              : "border-white/15 text-white/50 group-hover:border-white/40 group-hover:text-white"
          }`}
        >
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>

      {/* Answer — animates height */}
      <div
        style={{
          maxHeight: isOpen ? `${height}px` : "0px",
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        <div ref={contentRef} className="pb-6 pr-14">
          <p className="text-white/55 text-sm md:text-base leading-relaxed">
            {item.a}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const FAQ: React.FC = React.memo(() => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="w-full py-20 px-6 md:px-12 relative z-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-zinc-400 text-xs font-semibold uppercase tracking-[0.25em] block mb-3">
            Support
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-white uppercase tracking-tight leading-none">
            Got Questions?<br className="hidden md:block" />{" "}
            <span className="text-white/30">We've Got Answers.</span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="max-w-3xl border-t border-white/8">
          {FAQS.map((item, idx) => (
            <AccordionItem
              key={idx}
              item={item}
              index={idx}
              isOpen={openIndex === idx}
              onToggle={() => toggle(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

FAQ.displayName = "FAQ";
