import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, MessageCircle, Users, Zap, CheckCircle, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden flex items-center">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main glow */}
        <motion.div 
          className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-300/30 rounded-full blur-[100px]"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        {/* Floating orbs */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary/60 rounded-full blur-sm"
          animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/3 left-1/3 w-3 h-3 bg-cyan-400/50 rounded-full"
          animate={{ y: [-15, 15, -15], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-primary/40 rounded-full"
          animate={{ y: [-20, 20, -20], scale: [1, 1.2, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        
        {/* Morphing shape */}
        <motion.div 
          className="absolute top-1/2 left-10 w-64 h-64 bg-gradient-to-br from-primary/10 to-cyan-300/10"
          animate={{ 
            borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "30% 60% 70% 40% / 50% 60% 30% 60%", "60% 40% 30% 70% / 60% 30% 70% 40%"],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Extra decorative elements */}
        <motion.div 
          className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-primary/20 rounded-2xl rotate-45"
          animate={{ y: [-10, 10, -10], rotate: [45, 55, 45] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass-card mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <div className="absolute inset-0 bg-primary/30 blur-md animate-pulse" />
              </div>
              <span className="text-sm font-medium text-foreground tracking-tight">
                Novo: Integração com IA Avançada
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Atendimento ao cliente{" "}
              <span className="gradient-text-animated">unificado</span> em uma só plataforma
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Centralize todos os seus atendimentos do WhatsApp em um único painel. 
              Múltiplos atendentes, chatbot inteligente e relatórios em tempo real.
            </motion.p>

            {/* Features list */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {["Múltiplos atendentes", "Chatbot inteligente", "Relatórios em tempo real"].map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-2 liquid-glass-btn px-3 py-2 rounded-full"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground tracking-tight">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <a href="https://painel.atendeticket.com" target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="hero" size="xl" className="group shadow-iridescent w-full sm:w-auto relative overflow-hidden">
                    <span className="relative z-10">Começar Teste Grátis</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 relative z-10" />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    />
                  </Button>
                </motion.div>
              </a>
              <a href="https://wa.me/5519995828860" target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="glass" size="xl" className="group w-full sm:w-auto liquid-glass-btn">
                    <Play className="w-5 h-5 text-primary" />
                    Falar com Consultor
                  </Button>
                </motion.div>
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-sm text-muted-foreground mb-4 tracking-tight">
                Mais de <span className="text-primary font-semibold">5.000+</span> empresas já confiam em nós
              </p>
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div 
                    key={i} 
                    className="h-8 w-20 liquid-glass-btn rounded-lg"
                    whileHover={{ scale: 1.1, y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + i * 0.1 }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Glow behind dashboard */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-primary/30 to-cyan-300/30 rounded-3xl blur-3xl transform rotate-3"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Main Dashboard Card */}
            <motion.div 
              className="relative"
              whileHover={{ y: -8, rotateY: 2, rotateX: 2 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative liquid-glass-card overflow-hidden">
                {/* Dashboard Header */}
                <div className="bg-secondary/30 p-4 flex items-center gap-3 border-b border-border/30">
                  <div className="flex gap-2">
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-destructive/70"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <div className="flex-1 flex items-center justify-center gap-2">
                    <img src={logo} alt="" className="w-5 h-5 rounded" />
                    <span className="text-xs text-muted-foreground font-medium tracking-tight">AtendeTicket Dashboard</span>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 space-y-4">
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "Atendimentos", value: "1,234", color: "bg-primary/10 text-primary" },
                      { label: "Tempo Médio", value: "2:45", color: "bg-green-500/10 text-green-600" },
                      { label: "Satisfação", value: "98%", color: "bg-cyan-500/10 text-cyan-600" },
                    ].map((stat, i) => (
                      <motion.div 
                        key={i} 
                        className={`p-3 rounded-xl liquid-glass-btn ${stat.color}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + i * 0.15 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <div className="text-lg font-bold tracking-tight">{stat.value}</div>
                        <div className="text-xs opacity-80 tracking-tight">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Chat Preview */}
                  <div className="space-y-3">
                    {[
                      { name: "Maria Silva", msg: "Olá, preciso de ajuda...", time: "Agora", unread: true },
                      { name: "João Santos", msg: "Obrigado pelo atendimento!", time: "5min", unread: false },
                      { name: "Ana Costa", msg: "Qual o prazo de entrega?", time: "12min", unread: true },
                    ].map((chat, i) => (
                      <motion.div
                        key={i}
                        className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 cursor-pointer ${
                          chat.unread ? "liquid-glass-card" : "hover:bg-secondary/30"
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + i * 0.1 }}
                        whileHover={{ scale: 1.02, x: 4 }}
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-cyan-300/30 flex items-center justify-center">
                          <MessageCircle className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-sm text-foreground tracking-tight">{chat.name}</span>
                            <span className="text-xs text-muted-foreground">{chat.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground truncate tracking-tight">{chat.msg}</p>
                        </div>
                        {chat.unread && (
                          <div className="relative">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <motion.div 
                              className="absolute inset-0 w-2 h-2 rounded-full bg-primary"
                              animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Cards */}
            <motion.div 
              className="absolute -left-8 top-1/4 liquid-glass-card p-4 shadow-iridescent"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500/20 to-green-400/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground tracking-tight">+24</div>
                  <div className="text-xs text-muted-foreground tracking-tight">Atendentes online</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="absolute -right-4 bottom-1/4 liquid-glass-card p-4 shadow-iridescent"
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="flex items-center gap-3">
                <motion.div 
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-300/10 flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Zap className="w-5 h-5 text-primary" />
                </motion.div>
                <div>
                  <div className="text-sm font-bold text-foreground tracking-tight">2.5s</div>
                  <div className="text-xs text-muted-foreground tracking-tight">Tempo de resposta</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
