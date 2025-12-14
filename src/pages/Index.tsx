import { Helmet } from "react-helmet";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const sections = [
  { id: "hero", Component: HeroSection, bg: "bg-background" },
  { id: "features", Component: FeaturesSection, bg: "bg-background" },
  { id: "pricing", Component: PricingSection, bg: "bg-background" },
  { id: "testimonials", Component: TestimonialsSection, bg: "bg-background" },
  { id: "cta", Component: CTASection, bg: "bg-transparent" },
];

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollTop = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (scrollTop / totalHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      // Calculate which section is active based on scroll position
      const sectionHeight = window.innerHeight;
      const currentSection = Math.floor(scrollTop / sectionHeight);
      setActiveSection(Math.min(currentSection, sections.length - 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>AtendeTicket - Plataforma de Multiatendimento | WhatsApp, Instagram, Facebook</title>
        <meta 
          name="description" 
          content="Centralize WhatsApp, Instagram, Facebook e e-mail em uma única plataforma. Chatbot inteligente, múltiplos atendentes e relatórios em tempo real. Teste grátis por 7 dias!" 
        />
        <meta name="keywords" content="multiatendimento, whatsapp business, chatbot, atendimento ao cliente, helpdesk" />
      </Helmet>

      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress-bar fixed top-0 left-0 h-1 z-[9999]"
        style={{ 
          transform: `scaleX(${scrollProgress / 100})`,
          background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--cyan-400)))',
          transformOrigin: 'left'
        }}
      />

      {/* Section Indicators */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col gap-3">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => {
              window.scrollTo({
                top: index * window.innerHeight,
                behavior: 'smooth'
              });
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === index 
                ? 'bg-primary scale-125 shadow-glow' 
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            aria-label={`Ir para seção ${section.id}`}
          />
        ))}
      </div>

      <Navbar />

      <main ref={containerRef} className="relative bg-background">
        {/* Sticky Sections Container */}
        <div className="sticky-card-stack">
          {sections.map((section, index) => {
            const { Component } = section;
            return (
              <div
                key={section.id}
                className={`sticky-card-item ${section.bg}`}
                style={{
                  zIndex: 10 + index,
                  '--card-index': index,
                } as React.CSSProperties}
              >
                <div className="sticky-card-content">
                  <Component />
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer - Separate from sticky sections */}
        <footer className="relative bg-foreground" style={{ zIndex: 100 }}>
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default Index;
