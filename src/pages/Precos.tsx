import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";

const Precos = () => {
  return (
    <>
      <Helmet>
        <title>Preços | AtendeTicket - Planos e Valores</title>
        <meta name="description" content="Escolha o plano ideal para sua empresa. Teste grátis por 7 dias. Sem compromisso." />
      </Helmet>

      <main className="min-h-screen bg-background scroll-smooth">
        <Navbar />
        
        {/* Hero */}
        <section className="pt-32 pb-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto animate-slide-up">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Preços Transparentes
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Planos que{" "}
                <span className="text-gradient">cabem no seu bolso</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Escolha o melhor plano para sua empresa. Teste gratuitamente por 7 dias.
              </p>
            </div>
          </div>
        </section>

        <PricingSection />
        <Footer />
      </main>
    </>
  );
};

export default Precos;
