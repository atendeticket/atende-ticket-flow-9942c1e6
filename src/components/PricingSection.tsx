import { motion } from "framer-motion";
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
      <motion.div 
        className="absolute top-40 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 right-0 w-96 h-96 bg-cyan-300/15 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass-card text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-foreground tracking-tight">Oferta Especial</span>
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Acesso{" "}
            <span className="gradient-text-animated">Vitalício</span>
          </h2>
          <p className="text-lg text-muted-foreground tracking-tight">
            Pague uma única vez e tenha acesso para sempre. Sem mensalidades, sem surpresas.
          </p>
        </motion.div>

        {/* Single Lifetime Plan Card */}
        <motion.div 
          className="max-w-lg mx-auto perspective-1000"
          initial={{ opacity: 0, y: 50, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.div 
            className="relative p-8 rounded-3xl liquid-glass-card border-2 border-primary/50 shadow-iridescent transform-gpu card-3d"
            whileHover={{ 
              scale: 1.03, 
              rotateY: 3, 
              rotateX: 3,
              boxShadow: "0 30px 80px hsl(270 100% 65% / 0.2), 0 0 100px hsl(199 89% 48% / 0.15)"
            }}
            transition={{ duration: 0.4 }}
          >
            {/* Gradient background */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-cyan-300/20 opacity-50" />
            
            {/* Badge */}
            <motion.div 
              className="absolute -top-4 left-1/2 -translate-x-1/2"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.div 
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-glow"
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <Crown className="w-4 h-4 fill-current" />
                Acesso Vitalício
              </motion.div>
            </motion.div>

            <div className="relative z-10">
              <div className="mb-6 text-center">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2 tracking-tight">
                  Plano Completo
                </h3>
                <p className="text-muted-foreground text-sm tracking-tight">Tudo que você precisa para sempre</p>
              </div>

              <div className="mb-6 text-center">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-lg text-muted-foreground line-through">R$ 497</span>
                </div>
                <motion.div 
                  className="flex items-baseline justify-center gap-1"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                >
                  <span className="text-5xl font-bold text-foreground tracking-tight">
                    R$ 229,90
                  </span>
                </motion.div>
                <p className="text-sm text-primary mt-2 font-medium tracking-tight">
                  Pagamento único • Acesso vitalício
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {features.map((feature, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-center gap-3 group/item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                  >
                    <motion.div 
                      className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary/20 transition-all duration-300"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                    >
                      <Check className="w-3 h-3 text-primary" />
                    </motion.div>
                    <span className="text-sm text-foreground group-hover/item:text-primary transition-colors duration-300 tracking-tight">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <a
                href="https://pay.kiwify.com.br/UcJKaJp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="hero"
                    className="w-full shadow-glow animate-iridescent-glow"
                    size="lg"
                  >
                    <Zap className="w-4 h-4" />
                    Garantir Meu Acesso
                  </Button>
                </motion.div>
              </a>

              <p className="text-xs text-muted-foreground text-center mt-4 tracking-tight">
                Garantia de 7 dias ou seu dinheiro de volta
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
