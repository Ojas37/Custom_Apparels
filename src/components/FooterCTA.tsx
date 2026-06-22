import React from "react";
import { MessageSquare, PhoneCall, Mail, MapPin, Clock } from "lucide-react";

const handleWhatsAppClick = () => {
  const message = encodeURIComponent("Hi! I am ready to start my custom merchandise project. I want a free mockup and pricing details.");
  window.open("https://wa.me/919004490995?text=" + message, "_blank");
};

const handleCallClick = () => {
  window.open("tel:+919004490995");
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
            Reach out to our B2B design specialists. Get your free photorealistic mockups and price quotations within 24 hours.
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
          <p className="text-white/30 text-[10px] uppercase tracking-widest mt-6">
            No obligation mockups • Pan India Shipping • Enterprise Invoicing
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
              CUSTOM APPARELS
            </h3>
            
            <div className="flex flex-col gap-3.5 text-xs text-white/60">
              <a
                href="mailto:team@customapparels.co.in"
                className="flex items-center gap-2.5 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-4 h-4 text-white/40" />
                <span>team@customapparels.co.in</span>
              </a>

              <a
                href="tel:+919004490995"
                className="flex items-center gap-2.5 hover:text-white transition-colors duration-200"
              >
                <PhoneCall className="w-4 h-4 text-white/40" />
                <span>(+91) 90044 90995</span>
              </a>

              <a
                href="tel:+917420852608"
                className="flex items-center gap-2.5 hover:text-white transition-colors duration-200"
              >
                <PhoneCall className="w-4 h-4 text-white/40" />
                <span>(+91) 74208 52608</span>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white/40 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">
                  Office 642, 6th Floor, Intelligentia Business Park,<br />Sector 24, Vashi, Navi Mumbai, Maharashtra 400703
                </span>
              </div>

              <div className="flex items-center gap-2.5 pt-1.5 border-t border-white/5">
                <Clock className="w-4 h-4 text-white/40" />
                <span>10 AM to 7 PM (Mon - Sat)</span>
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
            <p className="text-xs text-white/50 leading-relaxed">
              Stay up to date with our latest product launches, design releases, and corporate merchandise trends.
            </p>
            
            {/* Social Icons Stack */}
            <div className="flex items-center gap-3.5 mt-2">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 hover:border-white/30 text-white/70 hover:text-white hover:bg-white/5 hover:scale-105 transition-all duration-300"
                aria-label="YouTube Channel"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 hover:border-white/30 text-white/70 hover:text-white hover:bg-white/5 hover:scale-105 transition-all duration-300"
                aria-label="Instagram Page"
              >
                <svg className="w-4 h-4 text-current" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 hover:border-white/30 text-white/70 hover:text-white hover:bg-white/5 hover:scale-105 transition-all duration-300"
                aria-label="Facebook Page"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* 3. Bottom Copyright Bar */}
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <span>
            © 2026 Custom Apparels — Your Trusted Merchandise Partner
          </span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/50 transition-colors duration-200">Sitemap</a>
            <span>•</span>
            <a href="#" className="hover:text-white/50 transition-colors duration-200">Credits</a>
          </div>
        </div>
      </section>
    </footer>
  );
});

FooterCTA.displayName = "FooterCTA";

