import { motion } from "framer-motion";
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
        <motion.div 
          className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        
        {/* Floating elements */}
        <motion.div
          className="absolute top-10 left-10"
          animate={{ y: [-10, 10, -10], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Sparkles className="w-8 h-8 text-primary-foreground/30" />
        </motion.div>
        <motion.div
          className="absolute bottom-10 right-10"
          animate={{ y: [-15, 15, -15], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <MessageSquare className="w-12 h-12 text-primary-foreground/20" />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/4"
          animate={{ y: [-8, 8, -8], scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
        >
          <Star className="w-6 h-6 text-primary-foreground/25 fill-current" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/4"
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <Zap className="w-8 h-8 text-primary-foreground/20" />
        </motion.div>

        {/* Decorations */}
        <motion.div 
          className="absolute top-1/2 left-10 w-24 h-24 border-2 border-white/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-1/4 right-10 w-16 h-16 bg-white/5 rounded-2xl rotate-45"
          animate={{ y: [-10, 10, -10], rotate: [45, 55, 45] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <motion.div 
            className="inline-flex items-center justify-center mb-8"
            whileHover={{ scale: 1.1 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-white/30 rounded-2xl blur-xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.img 
                src={logo} 
                alt="AtendeTicket" 
                className="w-16 h-16 rounded-2xl relative z-10"
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-xl border border-primary-foreground/20 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-primary-foreground animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground tracking-tight">
              Comece em menos de 5 minutos
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2 
            className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Pronto para revolucionar seu atendimento?
          </motion.h2>

          {/* Subheading */}
          <motion.p 
            className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Junte-se a mais de <span className="font-bold text-primary-foreground">5.000+</span> empresas que já transformaram a experiência 
            dos seus clientes com a AtendeTicket.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <a href="https://painel.atendeticket.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="xl"
                  className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all duration-300 shadow-xl group"
                >
                  <span className="relative z-10 tracking-tight">Começar Teste Grátis</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </a>
            <a href="https://wa.me/5519995828860" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="xl"
                  className="w-full border-2 border-primary-foreground/30 bg-primary-foreground/10 backdrop-blur-xl text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300"
                >
                  <span className="tracking-tight">Falar com Consultor</span>
                </Button>
              </motion.div>
            </a>
          </motion.div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/80 text-sm">
            {[
              "7 dias grátis",
              "Sem cartão de crédito",
              "Cancele quando quiser"
            ].map((text, i) => (
              <motion.div 
                key={i} 
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-5 h-5 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="tracking-tight">{text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
