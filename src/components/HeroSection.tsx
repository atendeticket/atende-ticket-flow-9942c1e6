import { Button } from "@/components/ui/button";
import { ArrowRight, Play, MessageCircle, Users, Zap, CheckCircle, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";
import { ParallaxElement } from "@/components/ParallaxElement";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden flex items-center">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      
      {/* Parallax background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main glow - Parallax slower */}
        <ParallaxElement speed={-0.3} className="absolute top-20 left-1/4">
          <div className="w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        </ParallaxElement>
        
        <ParallaxElement speed={-0.5} className="absolute bottom-0 right-1/4">
          <div className="w-[500px] h-[500px] bg-cyan-300/30 rounded-full blur-[100px] animate-pulse-glow stagger-3" />
        </ParallaxElement>
        
        {/* Floating orbs - Different speeds */}
        <ParallaxElement speed={0.8} className="absolute top-1/4 right-1/4">
          <div className="w-4 h-4 bg-primary/60 rounded-full animate-float blur-sm" />
        </ParallaxElement>
        
        <ParallaxElement speed={0.5} className="absolute top-1/3 left-1/3">
          <div className="w-3 h-3 bg-cyan-400/50 rounded-full animate-float-slow stagger-2" />
        </ParallaxElement>
        
        <ParallaxElement speed={0.6} className="absolute bottom-1/3 right-1/3">
          <div className="w-5 h-5 bg-primary/40 rounded-full animate-float-delayed" />
        </ParallaxElement>
        
        {/* Morphing shape - Slow parallax */}
        <ParallaxElement speed={-0.2} className="absolute top-1/2 left-10">
          <div className="w-64 h-64 bg-gradient-to-br from-primary/10 to-cyan-300/10 animate-morph" />
        </ParallaxElement>

        {/* Extra decorative elements */}
        <ParallaxElement speed={1} direction="right" className="absolute top-20 right-20">
          <div className="w-32 h-32 border border-primary/20 rounded-full animate-rotate-slow" />
        </ParallaxElement>
        
        <ParallaxElement speed={0.4} className="absolute bottom-20 left-20">
          <div className="w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-primary/20 rounded-2xl rotate-45 animate-float" />
        </ParallaxElement>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 animate-scale-in-bounce">
              <div className="relative">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <div className="absolute inset-0 bg-primary/30 blur-md animate-pulse" />
              </div>
              <span className="text-sm font-medium text-foreground">
                Novo: Integração com IA Avançada
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-6 animate-slide-up-spring opacity-0 stagger-1">
              Atendimento ao cliente{" "}
              <span className="gradient-text-animated">unificado</span> em uma só plataforma
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in-up opacity-0 stagger-2">
              Centralize WhatsApp, Instagram, Facebook e e-mail em um único painel. 
              Aumente a produtividade da sua equipe e encante seus clientes.
            </p>

            {/* Features list */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in-up opacity-0 stagger-3">
              {["Múltiplos atendentes", "Chatbot inteligente", "Relatórios em tempo real"].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 glass-subtle px-3 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up-spring opacity-0 stagger-4">
              <Button variant="hero" size="xl" className="group shadow-glow-lg">
                <span className="relative z-10">Teste Grátis por 7 Dias</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </Button>
              <Button variant="glass" size="xl" className="group">
                <Play className="w-5 h-5 text-primary" />
                Ver Demo
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-12 animate-fade-in opacity-0 stagger-5">
              <p className="text-sm text-muted-foreground mb-4">
                Mais de <span className="text-primary font-semibold">5.000+</span> empresas já confiam em nós
              </p>
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-8 w-20 glass-subtle rounded-lg" />
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview with Parallax */}
          <ParallaxElement speed={0.15} className="flex-1 relative animate-blur-in opacity-0 stagger-3">
            {/* Glow behind dashboard */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-cyan-300/30 rounded-3xl blur-3xl transform rotate-3 animate-pulse-glow" />
            
            {/* Main Dashboard Card */}
            <div className="relative">
              <div className="relative glass-strong rounded-3xl overflow-hidden animate-float-slow">
                {/* Dashboard Header */}
                <div className="bg-secondary/30 p-4 flex items-center gap-3 border-b border-border/30">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/70 animate-pulse" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <div className="flex-1 flex items-center justify-center gap-2">
                    <img src={logo} alt="" className="w-5 h-5 rounded" />
                    <span className="text-xs text-muted-foreground font-medium">AtendeTicket Dashboard</span>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 space-y-4">
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "Atendimentos", value: "1,234", color: "bg-primary/10 text-primary", delay: "stagger-1" },
                      { label: "Tempo Médio", value: "2:45", color: "bg-green-500/10 text-green-600", delay: "stagger-2" },
                      { label: "Satisfação", value: "98%", color: "bg-cyan-500/10 text-cyan-600", delay: "stagger-3" },
                    ].map((stat, i) => (
                      <div 
                        key={i} 
                        className={`p-3 rounded-xl glass-subtle ${stat.color} animate-scale-in-bounce opacity-0 ${stat.delay}`}
                      >
                        <div className="text-lg font-bold">{stat.value}</div>
                        <div className="text-xs opacity-80">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Chat Preview */}
                  <div className="space-y-3">
                    {[
                      { name: "Maria Silva", msg: "Olá, preciso de ajuda...", time: "Agora", unread: true },
                      { name: "João Santos", msg: "Obrigado pelo atendimento!", time: "5min", unread: false },
                      { name: "Ana Costa", msg: "Qual o prazo de entrega?", time: "12min", unread: true },
                    ].map((chat, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                          chat.unread ? "glass-card" : "hover:bg-secondary/30"
                        }`}
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-cyan-300/30 flex items-center justify-center">
                          <MessageCircle className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-sm text-foreground">{chat.name}</span>
                            <span className="text-xs text-muted-foreground">{chat.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground truncate">{chat.msg}</p>
                        </div>
                        {chat.unread && (
                          <div className="relative">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <div className="absolute inset-0 w-2 h-2 rounded-full bg-primary animate-ping" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards with independent parallax */}
            <ParallaxElement speed={0.4} className="absolute -left-8 top-1/4">
              <div className="glass-card p-4 rounded-2xl shadow-glow animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500/20 to-green-400/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">+24</div>
                    <div className="text-xs text-muted-foreground">Atendentes online</div>
                  </div>
                </div>
              </div>
            </ParallaxElement>

            <ParallaxElement speed={0.6} className="absolute -right-4 bottom-1/4">
              <div className="glass-card p-4 rounded-2xl shadow-glow animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-300/10 flex items-center justify-center animate-pulse-ring">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">2.5s</div>
                    <div className="text-xs text-muted-foreground">Tempo de resposta</div>
                  </div>
                </div>
              </div>
            </ParallaxElement>
          </ParallaxElement>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
