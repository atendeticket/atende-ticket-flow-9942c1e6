import { Button } from "@/components/ui/button";
import { ArrowRight, Play, MessageCircle, Users, Zap, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden bg-gradient-hero">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl animate-pulse-glow stagger-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 border border-primary/20 mb-6 animate-fade-in">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-accent-foreground">
                Novo: Integração com IA
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-slide-up opacity-0 stagger-1">
              Atendimento ao cliente{" "}
              <span className="text-gradient">unificado</span> em uma só plataforma
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-slide-up opacity-0 stagger-2">
              Centralize WhatsApp, Instagram, Facebook e e-mail em um único painel. 
              Aumente a produtividade da sua equipe e encante seus clientes.
            </p>

            {/* Features list */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-slide-up opacity-0 stagger-3">
              {["Múltiplos atendentes", "Chatbot inteligente", "Relatórios em tempo real"].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up opacity-0 stagger-4">
              <Button variant="hero" size="xl" className="group">
                Teste Grátis por 7 Dias
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="xl" className="group">
                <Play className="w-5 h-5" />
                Ver Demo
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-10 animate-fade-in opacity-0 stagger-5">
              <p className="text-sm text-muted-foreground mb-3">
                Mais de 5.000 empresas já confiam em nós
              </p>
              <div className="flex items-center gap-6 justify-center lg:justify-start opacity-60">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-8 w-20 bg-muted rounded" />
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="flex-1 relative animate-slide-in-right opacity-0 stagger-3">
            {/* Main Dashboard Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-300/20 rounded-3xl blur-2xl transform rotate-3" />
              <div className="relative bg-card rounded-3xl shadow-xl overflow-hidden border border-border/50">
                {/* Dashboard Header */}
                <div className="bg-secondary/50 p-4 flex items-center gap-3 border-b border-border">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <div className="flex-1 text-center">
                    <div className="text-xs text-muted-foreground">AtendeTicket Dashboard</div>
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
                      <div key={i} className={`p-3 rounded-xl ${stat.color}`}>
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
                        className={`flex items-center gap-3 p-3 rounded-xl transition-colors hover:bg-secondary/50 ${
                          chat.unread ? "bg-accent/30" : ""
                        }`}
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
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
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -left-8 top-1/4 animate-float">
              <div className="bg-card p-4 rounded-2xl shadow-lg border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">+24</div>
                    <div className="text-xs text-muted-foreground">Atendentes online</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 bottom-1/4 animate-float-slow">
              <div className="bg-card p-4 rounded-2xl shadow-lg border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">2.5s</div>
                    <div className="text-xs text-muted-foreground">Tempo de resposta</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
