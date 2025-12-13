import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-cyan-500 to-primary" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

      {/* Floating elements */}
      <div className="absolute top-10 left-10 animate-float">
        <Sparkles className="w-8 h-8 text-primary-foreground/30" />
      </div>
      <div className="absolute bottom-10 right-10 animate-float-slow">
        <MessageSquare className="w-12 h-12 text-primary-foreground/20" />
      </div>
      <div className="absolute top-1/2 left-1/4 animate-pulse-glow">
        <div className="w-4 h-4 rounded-full bg-primary-foreground/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">
              Comece em menos de 5 minutos
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Pronto para revolucionar seu atendimento?
          </h2>

          {/* Subheading */}
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Junte-se a mais de 5.000 empresas que já transformaram a experiência 
            dos seus clientes com a AtendeTicket.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button
              size="xl"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              Começar Teste Grátis
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="border-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:-translate-y-1 transition-all duration-300"
            >
              Falar com Consultor
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/70 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              7 dias grátis
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Sem cartão de crédito
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Cancele quando quiser
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
