import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
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

      <Navbar />

      <main className="bg-background">
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
