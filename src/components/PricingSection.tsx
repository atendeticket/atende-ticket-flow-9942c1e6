import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Sparkles } from "lucide-react";

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
    gradient: "from-secondary/50 to-muted/50",
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
    gradient: "from-primary/20 to-cyan-300/20",
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
    gradient: "from-purple-500/10 to-violet-300/10",
  },
];

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(true);

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
            <span className="text-foreground">Preços Transparentes</span>
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Planos que cabem no seu{" "}
            <span className="gradient-text-animated">bolso</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Escolha o plano ideal para sua empresa. Sem taxas ocultas, cancele quando quiser.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-1 p-1.5 rounded-full glass-strong">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-500 ${
                !isYearly
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-500 flex items-center gap-2 ${
                isYearly
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Anual
              <span className="px-2 py-0.5 bg-primary-foreground/20 text-primary-foreground text-xs rounded-full font-bold">
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
              className={`relative p-8 rounded-3xl transition-all duration-500 interactive-card ${
                plan.popular
                  ? "glass-strong border-2 border-primary/50 shadow-glow-lg scale-105"
                  : "glass-card"
              }`}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${plan.gradient} opacity-50`} />
              
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-glow animate-bounce-subtle">
                    <Star className="w-4 h-4 fill-current" />
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-foreground">
                      R$ {isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="text-muted-foreground">/mês</span>
                  </div>
                  {isYearly && (
                    <p className="text-sm text-primary mt-2 font-medium">
                      Economia de R$ {(plan.price.monthly - plan.price.yearly) * 12}/ano
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 group/item">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary/20 group-hover/item:scale-110 transition-all duration-300">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground group-hover/item:text-primary transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "hero" : "heroOutline"}
                  className={`w-full ${plan.popular ? "shadow-glow" : ""}`}
                  size="lg"
                >
                  {plan.popular && <Zap className="w-4 h-4" />}
                  Começar Agora
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Pagamento seguro via <span className="text-primary font-semibold">Mercado Pago</span>
          </p>
          <div className="flex items-center justify-center gap-4">
            {["Visa", "Master", "Pix", "Boleto"].map((method) => (
              <div key={method} className="glass-subtle px-4 py-2 rounded-lg">
                <span className="text-xs font-medium text-muted-foreground">{method}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
