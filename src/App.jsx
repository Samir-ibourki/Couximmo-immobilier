import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Lenis from "lenis";
import { TooltipProvider } from "@/components/ui/tooltip.jsx";
import { ScrollTrigger } from "./lib/gsap.js";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import CategoryStrip from "./components/CategoryStrip.jsx";
import StatsSection from "./components/StatsSection.jsx";
import FeaturedProperties from "./components/FeaturedProperties.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import CollectionSection from "./components/CollectionSection.jsx";
import AreasSection from "./components/AreasSection.jsx";
import ProcessSection from "./components/ProcessSection.jsx";
import WhyInvestAgadir from "./components/WhyInvestAgadir.jsx";
import CTASection from "./components/CTASection.jsx";
import ContactFormModal from "./components/ContactFormModal.jsx";
import Footer from "./components/Footer.jsx";

const queryClient = new QueryClient();

function AppContent() {
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);

    let frame;
    function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-background text-foreground overflow-hidden font-sans">
      <Header onContactClick={() => setContactOpen(true)} />
      <main>
        <Hero onContactClick={() => setContactOpen(true)} />
        <CategoryStrip />
        <StatsSection />
        <FeaturedProperties />
        <ServicesSection />
        <CollectionSection />
        <AreasSection />
        <ProcessSection />
        <WhyInvestAgadir />
        <CTASection onContactClick={() => setContactOpen(true)} />
      </main>
      <Footer />
      <ContactFormModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AppContent />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
