import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Sparkles, Crown } from "lucide-react";

const features = [
  "Atendentes ilimitados",
  "Números de WhatsApp ilimitados",
  "Chatbot avançado com IA",
  "Relatórios completos e customizados",
  "Integrações via API completa",
  "Suporte prioritário 24/7",
  "App mobile incluído",
  "Gerente de sucesso dedicado",
  "Atualizações vitalícias",
  "Sem mensalidades futuras",
];

const PricingSection = () => {
  return (
    <section id="precos" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      <div className="absolute top-40 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-cyan-300/15 rounded-full blur-[100px] animate-pulse-glow stagger-3" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-foreground">Oferta Especial</span>
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Acesso{" "}
            <span className="gradient-text-animated">Vitalício</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Pague uma única vez e tenha acesso para sempre. Sem mensalidades, sem surpresas.
          </p>
        </div>

        {/* Single Lifetime Plan Card */}
        <div className="max-w-lg mx-auto perspective-1000">
          <div className="relative p-8 rounded-3xl glass-strong border-2 border-primary/50 shadow-glow-lg transform-gpu transition-all duration-500 hover:rotate-y-3 hover:rotate-x-3 hover:scale-105 card-3d">
            {/* Gradient background */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-cyan-300/20 opacity-50" />
            
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-glow animate-bounce-subtle">
                <Crown className="w-4 h-4 fill-current" />
                Acesso Vitalício
              </div>
            </div>

            <div className="relative z-10">
              <div className="mb-6 text-center">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  Plano Completo
                </h3>
                <p className="text-muted-foreground text-sm">Tudo que você precisa para sempre</p>
              </div>

              <div className="mb-6 text-center">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-lg text-muted-foreground line-through">R$ 497</span>
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-foreground">
                    R$ 229,90
                  </span>
                </div>
                <p className="text-sm text-primary mt-2 font-medium">
                  Pagamento único • Acesso vitalício
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 group/item">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary/20 group-hover/item:scale-110 transition-all duration-300">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground group-hover/item:text-primary transition-colors duration-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://pay.kiwify.com.br/jMab2jA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  variant="hero"
                  className="w-full shadow-glow"
                  size="lg"
                >
                  <Zap className="w-4 h-4" />
                  Garantir Meu Acesso
                </Button>
              </a>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Garantia de 7 dias ou seu dinheiro de volta
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
