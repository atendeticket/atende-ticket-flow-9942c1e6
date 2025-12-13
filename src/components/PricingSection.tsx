import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfeito para pequenas empresas começarem",
    price: { monthly: 97, yearly: 77 },
    features: [
      "3 atendentes",
      "1 número de WhatsApp",
      "Chatbot básico",
      "Relatórios simples",
      "Suporte por email",
    ],
    popular: false,
  },
  {
    name: "Professional",
    description: "Para empresas em crescimento",
    price: { monthly: 197, yearly: 157 },
    features: [
      "10 atendentes",
      "3 números de WhatsApp",
      "Chatbot avançado com IA",
      "Relatórios completos",
      "Integrações via API",
      "Suporte prioritário",
      "App mobile",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Para grandes operações",
    price: { monthly: 397, yearly: 317 },
    features: [
      "Atendentes ilimitados",
      "Números ilimitados",
      "IA personalizada",
      "Relatórios customizados",
      "API completa",
      "Suporte 24/7",
      "Gerente dedicado",
      "SLA garantido",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="precos" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Preços
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Planos que cabem no seu{" "}
            <span className="text-gradient">bolso</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Escolha o plano ideal para sua empresa. Sem taxas ocultas, cancele quando quiser.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 p-1.5 rounded-full bg-secondary">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                !isYearly
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                isYearly
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Anual
              <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl transition-all duration-500 hover-lift ${
                plan.popular
                  ? "bg-card border-2 border-primary shadow-glow"
                  : "bg-card border border-border/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    <Star className="w-4 h-4" />
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    R$ {isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                {isYearly && (
                  <p className="text-sm text-primary mt-1">
                    Economia de R$ {(plan.price.monthly - plan.price.yearly) * 12}/ano
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "heroOutline"}
                className="w-full"
                size="lg"
              >
                {plan.popular && <Zap className="w-4 h-4" />}
                Começar Agora
              </Button>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Pagamento seguro via Mercado Pago
          </p>
          <div className="flex items-center justify-center gap-4 opacity-60">
            <div className="h-8 w-16 bg-muted rounded" />
            <div className="h-8 w-16 bg-muted rounded" />
            <div className="h-8 w-16 bg-muted rounded" />
            <div className="h-8 w-16 bg-muted rounded" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
