import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Sparkles, Zap, Star } from "lucide-react";
import logo from "@/assets/logo.png";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-cyan-500 to-primary" />
      
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        
        {/* Glowing orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl animate-pulse-glow stagger-2" />
        
        {/* Floating elements */}
        <Sparkles className="absolute top-10 left-10 w-8 h-8 text-primary-foreground/30 animate-float" />
        <MessageSquare className="absolute bottom-10 right-10 w-12 h-12 text-primary-foreground/20 animate-float-slow" />
        <Star className="absolute top-1/3 right-1/4 w-6 h-6 text-primary-foreground/25 fill-current animate-float-delayed" />
        <Zap className="absolute bottom-1/3 left-1/4 w-8 h-8 text-primary-foreground/20 animate-bounce-subtle" />

        {/* Decorations */}
        <div className="absolute top-1/2 left-10 w-24 h-24 border-2 border-white/10 rounded-full animate-rotate-slow" />
        <div className="absolute top-1/4 right-10 w-16 h-16 bg-white/5 rounded-2xl rotate-45 animate-float" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="inline-flex items-center justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-white/30 rounded-2xl blur-xl animate-pulse" />
              <img 
                src={logo} 
                alt="AtendeTicket" 
                className="w-16 h-16 rounded-2xl relative z-10 animate-bounce-subtle"
              />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-xl border border-primary-foreground/20 mb-6 animate-scale-in-bounce">
            <Sparkles className="w-4 h-4 text-primary-foreground animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground">
              Comece em menos de 5 minutos
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Pronto para revolucionar seu atendimento?
          </h2>

          {/* Subheading */}
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Junte-se a mais de <span className="font-bold text-primary-foreground">5.000+</span> empresas que já transformaram a experiência 
            dos seus clientes com a AtendeTicket.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button
              size="xl"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-2xl group"
            >
              <span className="relative z-10">Começar Teste Grátis</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="xl"
              className="border-2 border-primary-foreground/30 bg-primary-foreground/10 backdrop-blur-xl text-primary-foreground hover:bg-primary-foreground/20 hover:-translate-y-1 transition-all duration-300"
            >
              Falar com Consultor
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/80 text-sm">
            {[
              "7 dias grátis",
              "Sem cartão de crédito",
              "Cancele quando quiser"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2 animate-fade-in-up opacity-0" style={{ animationDelay: `${i * 0.1 + 0.5}s`, animationFillMode: 'forwards' }}>
                <div className="w-5 h-5 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
