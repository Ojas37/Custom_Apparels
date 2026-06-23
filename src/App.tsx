import React, { useEffect, Suspense, lazy } from "react";
import Lenis from "lenis";
import { Hero } from "./components/Hero";

// Lazy load below-the-fold components
const CarouselSection = lazy(() => import("./components/CarouselSection").then(m => ({ default: m.CarouselSection })));
const TrustBar = lazy(() => import("./components/TrustBar").then(m => ({ default: m.TrustBar })));
const WhyChooseUs = lazy(() => import("./components/WhyChooseUs").then(m => ({ default: m.WhyChooseUs })));
const AboutUs = lazy(() => import("./components/AboutUs").then(m => ({ default: m.AboutUs })));
const ProductShowcase = lazy(() => import("./components/ProductShowcase").then(m => ({ default: m.ProductShowcase })));
const HowItWorks = lazy(() => import("./components/HowItWorks").then(m => ({ default: m.HowItWorks })));
const RecentWork = lazy(() => import("./components/RecentWork").then(m => ({ default: m.RecentWork })));
const Testimonials = lazy(() => import("./components/Testimonials").then(m => ({ default: m.Testimonials })));
const FAQ = lazy(() => import("./components/FAQ").then(m => ({ default: m.FAQ })));
const FooterCTA = lazy(() => import("./components/FooterCTA").then(m => ({ default: m.FooterCTA })));
const FloatingWhatsApp = lazy(() => import("./components/FloatingWhatsApp").then(m => ({ default: m.FloatingWhatsApp })));

const App: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div id="carousel" className="w-full min-h-screen relative overflow-x-hidden">
      {/* 1. Hero Section (includes header/navbar) */}
      <Hero />

      {/* Main Landmark wrapper */}
      <main>
        {/* 1.5. Standalone Rotating Product Carousel Section */}
        <Suspense fallback={<div className="min-h-[400px] bg-[#0c0c0e]" />}>
          <CarouselSection />
        </Suspense>

        {/* 2. Client Logos Marquee */}
        <Suspense fallback={<div className="min-h-[180px] bg-white" />}>
          <TrustBar />
        </Suspense>

        {/* 3. Why Choose Us (Value propositions) */}
        <Suspense fallback={<div className="min-h-[300px] bg-zinc-950/40" />}>
          <WhyChooseUs />
        </Suspense>

        {/* 3.5. Impressive About Us Section */}
        <Suspense fallback={<div className="min-h-[300px] bg-zinc-950" />}>
          <AboutUs />
        </Suspense>

        {/* 4. Products (What Can We Customize?) */}
        <Suspense fallback={<div className="min-h-[400px] bg-black" />}>
          <ProductShowcase />
        </Suspense>

        {/* 5. How It Works (Timeline process) */}
        <Suspense fallback={<div className="min-h-[400px] bg-zinc-950/20" />}>
          <HowItWorks />
        </Suspense>

        {/* 6. Recent Work (Masonry portfolio gallery) */}
        <Suspense fallback={<div className="min-h-[500px] bg-zinc-950" />}>
          <RecentWork />
        </Suspense>

        {/* 8. Testimonials */}
        <Suspense fallback={<div className="min-h-[400px] bg-zinc-950/40" />}>
          <Testimonials />
        </Suspense>

        {/* 9. FAQ */}
        <Suspense fallback={<div className="min-h-[300px] bg-black" />}>
          <FAQ />
        </Suspense>
      </main>

      {/* 10. Final CTA Footer Section */}
      <Suspense fallback={<div className="min-h-[300px] bg-black" />}>
        <FooterCTA />
      </Suspense>

      {/* Floating Sticky Contact Badge */}
      <Suspense fallback={null}>
        <FloatingWhatsApp />
      </Suspense>
    </div>
  );
};

export default App;
