import { useEffect, useRef, useState } from "react";
import { 
  MessageSquare, 
  Users, 
  BarChart3, 
  Bot, 
  Smartphone, 
  Lock, 
  Zap, 
  HeadphonesIcon,
  ArrowRight
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Multiatendimento Unificado",
    description: "WhatsApp, Instagram, Facebook e Telegram em uma única interface intuitiva.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Users,
    title: "Múltiplos Atendentes",
    description: "Gerencie toda sua equipe com controle de permissões e setores.",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Bot,
    title: "Chatbot Inteligente",
    description: "Automatize respostas e qualifique leads 24 horas por dia.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: BarChart3,
    title: "Relatórios Avançados",
    description: "Métricas em tempo real para tomar decisões baseadas em dados.",
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: Smartphone,
    title: "App Mobile",
    description: "Atenda seus clientes de qualquer lugar pelo celular.",
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    icon: Lock,
    title: "Segurança Total",
    description: "Criptografia de ponta a ponta e conformidade com LGPD.",
    color: "bg-cyan-600/10 text-cyan-700",
  },
  {
    icon: Zap,
    title: "Respostas Rápidas",
    description: "Templates prontos para agilizar o atendimento.",
    color: "bg-yellow-500/10 text-yellow-600",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte Premium",
    description: "Equipe especializada pronta para ajudar sua empresa.",
    color: "bg-indigo-500/10 text-indigo-600",
  },
];

const FeaturesSection = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleItems((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = sectionRef.current?.querySelectorAll("[data-index]");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="recursos" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/20 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10" ref={sectionRef}>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Recursos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tudo que você precisa para{" "}
            <span className="text-gradient">escalar seu atendimento</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ferramentas poderosas para transformar a experiência dos seus clientes e 
            aumentar a produtividade da sua equipe.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover-lift cursor-pointer ${
                visibleItems.has(index)
                  ? "animate-scale-in opacity-100"
                  : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {feature.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Saiba mais
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
