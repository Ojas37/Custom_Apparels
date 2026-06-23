import React from "react";
import { MessageSquare, PhoneCall, Mail, MapPin, Clock } from "lucide-react";
import { config, getWhatsAppLink } from "../config";

const handleWhatsAppClick = () => {
  window.open(
    getWhatsAppLink("Hi! I am ready to start my custom merchandise project. I want a free mockup and pricing details."),
    "_blank"
  );
};

const handleCallClick = () => {
  window.open(`tel:${config.primaryPhone.replace(/\s+/g, "")}`);
};

export const FooterCTA: React.FC = React.memo(() => {
  return (
    <footer id="footer" className="w-full bg-black relative z-20 overflow-hidden border-t border-white/10">
      {/* 1. Slogan Banner CTA Block */}
      <section id="footer-cta" className="w-full py-24 px-6 md:px-12 relative overflow-hidden">
        {/* Background abstract ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8 relative z-10">
          {/* Slogan Label */}
          <span className="text-white/60 text-xs font-semibold uppercase tracking-[0.3em] block">
            Get Started Today
          </span>

          {/* Headline */}
          <h2 className="font-display text-4xl md:text-6xl text-white uppercase tracking-tight leading-none font-bold">
            Ready To Bring Your<br />Ideas To Life?
          </h2>

          {/* Subheadline */}
          <p className="text-white/50 text-sm md:text-base max-w-lg leading-relaxed">
            Reach out to our merchandise specialists. Get your free mockups and price quotation within 24 hours.
          </p>

          {/* Dual CTA Button Stack */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
            {/* WhatsApp Primary */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white hover:bg-zinc-200 text-black font-extrabold py-4 px-8 rounded-full shadow-[0_4px_20px_rgba(255,255,255,0.05)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer text-sm uppercase tracking-wider"
            >
              <MessageSquare className="w-5 h-5 fill-black text-black" />
              <span>Chat on WhatsApp</span>
            </button>

            {/* Phone Call Secondary */}
            <button
              onClick={handleCallClick}
              className="w-full sm:w-auto flex items-center justify-center gap-3 border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white font-extrabold py-4 px-8 rounded-full hover:-translate-y-0.5 transition-all duration-300 cursor-pointer text-sm uppercase tracking-wider"
            >
              <PhoneCall className="w-5 h-5 text-white" />
              <span>Call Our Team</span>
            </button>
          </div>

          {/* Footer legalities */}
          <p className="text-white/60 text-[10px] uppercase tracking-widest mt-6">
            Delivering across India & Beyond
          </p>
        </div>
      </section>

      <hr className="w-full border-t border-white/5" />

      {/* 2. Brand Footer Block (3 Columns Layout) */}
      <section className="w-full py-16 px-6 md:px-12 bg-[#08080a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          
          {/* Col 1: Contact Info */}
          <div className="flex flex-col gap-5">
            <h3 className="font-display text-xl font-bold tracking-wider text-white">
              {config.companyName.toUpperCase()}
            </h3>
            
            <div className="flex flex-col gap-3.5 text-xs text-white/60">
              <a
                href={`mailto:${config.email}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-4 h-4 text-white/65" />
                <span>{config.email}</span>
              </a>

              <a
                href={`tel:${config.primaryPhone.replace(/\s+/g, "")}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors duration-200"
              >
                <PhoneCall className="w-4 h-4 text-white/65" />
                <span>{config.primaryPhone}</span>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white/65 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">
                  {config.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5 pt-1.5 border-t border-white/5">
                <Clock className="w-4 h-4 text-white/65" />
                <span>10 AM to 7 PM (All Days)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Information */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white text-[11px] font-bold uppercase tracking-[0.2em]">
              Information
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-white/60">
              <li>
                <a href="#about" className="hover:text-white transition-colors duration-200">About Us</a>
              </li>
              <li>
                <a href="#carousel-showcase" className="hover:text-white transition-colors duration-200">Products</a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors duration-200">Merch Catalog</a>
              </li>
              <li>
                <a href="#recent-work" className="hover:text-white transition-colors duration-200">Case Studies</a>
              </li>
              <li>
                <a href="#footer-cta" className="hover:text-white transition-colors duration-200">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Stay Connected */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white text-[11px] font-bold uppercase tracking-[0.2em]">
              Stay Connected
            </h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Follow us on Instagram for our latest product launches, design releases, and corporate merchandise trends.
            </p>
            
            {/* Social Icons Stack */}
            <div className="flex items-center gap-3.5 mt-2">
              <a
                href="https://www.instagram.com/customapparels.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 hover:border-white/30 text-white/70 hover:text-white hover:bg-white/5 hover:scale-105 transition-all duration-300"
                aria-label="Instagram Page"
              >
                <svg className="w-4 h-4 text-current" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* 3. Bottom Copyright Bar */}
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex items-center justify-center text-xs text-white/60 text-center">
          <span>
            © 2026 Custom Apparels
          </span>
        </div>
      </section>
    </footer>
  );
});

FooterCTA.displayName = "FooterCTA";

