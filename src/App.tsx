import React from "react";
import { Hero } from "./components/Hero";
import { CarouselSection } from "./components/CarouselSection";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { TrustBar } from "./components/TrustBar";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { AboutUs } from "./components/AboutUs";
import { ProductShowcase } from "./components/ProductShowcase";
import { HowItWorks } from "./components/HowItWorks";
import { RecentWork } from "./components/RecentWork";
import { CollabsSection } from "./components/CollabsSection";
import { Testimonials } from "./components/Testimonials";
import { FooterCTA } from "./components/FooterCTA";

const App: React.FC = () => {
  return (
    <div id="carousel" className="w-full min-h-screen relative overflow-x-hidden scroll-smooth">
      {/* 1. Hero Section */}
      <Hero />

      {/* 1.5. Standalone Rotating Product Carousel Section */}
      <CarouselSection />

      {/* 2. Client Logos Marquee */}
      <TrustBar />

      {/* 3. Why Choose Us (Value propositions) */}
      <WhyChooseUs />

      {/* 3.5. Impressive About Us Section */}
      <AboutUs />

      {/* 4. Products (What Can We Customize?) */}
      <ProductShowcase />

      {/* 5. How It Works (Timeline process) */}
      <HowItWorks />

      {/* 6. Recent Work (Masonry portfolio gallery - largest section) */}
      <RecentWork />

      {/* 7. Clients & Collaborations (B2B kits & Influencer/Celebrity drops) */}
      <CollabsSection />

      {/* 8. Testimonials */}
      <Testimonials />

      {/* 9. Final CTA Footer Section */}
      <FooterCTA />

      {/* Floating Sticky Contact Badge */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
