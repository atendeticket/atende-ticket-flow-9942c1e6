import { Helmet } from "react-helmet";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      // Trigger sticky animations
      sectionsRef.current.forEach((section, index) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate visibility progress
        const visibilityProgress = 1 - Math.max(0, Math.min(1, rect.top / windowHeight));
        section.style.setProperty('--visibility-progress', String(visibilityProgress));
        
        // Add revealed class when in view
        if (rect.top < windowHeight * 0.8) {
          section.classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) sectionsRef.current[index] = el;
  };

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
        className="scroll-progress-bar"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      <main className="min-h-screen bg-background overflow-x-hidden">
        <Navbar />
        
        {/* Hero - Sticky with Parallax */}
        <div 
          ref={(el) => addToRefs(el, 0)}
          className="sticky-section bg-background text-reveal-stagger"
          style={{ zIndex: 10 }}
        >
          <HeroSection />
        </div>

        {/* Features - Card Stack Effect */}
        <div 
          ref={(el) => addToRefs(el, 1)}
          className="sticky-section bg-background sticky-animate-up"
          style={{ zIndex: 20 }}
        >
          <FeaturesSection />
        </div>

        {/* Pricing - Scale Animation */}
        <div 
          ref={(el) => addToRefs(el, 2)}
          className="sticky-section bg-background sticky-animate-scale"
          style={{ zIndex: 30 }}
        >
          <PricingSection />
        </div>

        {/* Testimonials - Rotate Reveal */}
        <div 
          ref={(el) => addToRefs(el, 3)}
          className="sticky-section bg-background sticky-animate-rotate"
          style={{ zIndex: 40 }}
        >
          <TestimonialsSection />
        </div>

        {/* CTA - Zoom Effect */}
        <div 
          ref={(el) => addToRefs(el, 4)}
          className="sticky-section bg-background sticky-animate-zoom"
          style={{ zIndex: 50 }}
        >
          <CTASection />
        </div>

        {/* Footer */}
        <div 
          ref={(el) => addToRefs(el, 5)}
          className="relative bg-background"
          style={{ zIndex: 60 }}
        >
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Index;
