import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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
    gradient: "from-primary/20 to-cyan-300/20",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Users,
    title: "Múltiplos Atendentes",
    description: "Gerencie toda sua equipe com controle de permissões e setores.",
    gradient: "from-green-500/20 to-emerald-300/20",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-600",
  },
  {
    icon: Bot,
    title: "Chatbot Inteligente",
    description: "Automatize respostas e qualifique leads 24 horas por dia.",
    gradient: "from-purple-500/20 to-violet-300/20",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-600",
  },
  {
    icon: BarChart3,
    title: "Relatórios Avançados",
    description: "Métricas em tempo real para tomar decisões baseadas em dados.",
    gradient: "from-orange-500/20 to-amber-300/20",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-600",
  },
  {
    icon: Smartphone,
    title: "App Mobile",
    description: "Atenda seus clientes de qualquer lugar pelo celular.",
    gradient: "from-pink-500/20 to-rose-300/20",
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-600",
  },
  {
    icon: Lock,
    title: "Segurança Total",
    description: "Criptografia de ponta a ponta e conformidade com LGPD.",
    gradient: "from-cyan-600/20 to-sky-300/20",
    iconBg: "bg-cyan-600/10",
    iconColor: "text-cyan-700",
  },
  {
    icon: Zap,
    title: "Respostas Rápidas",
    description: "Templates prontos para agilizar o atendimento.",
    gradient: "from-yellow-500/20 to-amber-200/20",
    iconBg: "bg-yellow-500/10",
    iconColor: "text-yellow-600",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte Premium",
    description: "Equipe especializada pronta para ajudar sua empresa.",
    gradient: "from-indigo-500/20 to-blue-300/20",
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-600",
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
      { threshold: 0.15, rootMargin: "50px" }
    );

    const items = sectionRef.current?.querySelectorAll("[data-index]");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="recursos" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/30 to-transparent pointer-events-none" />
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 relative z-10" ref={sectionRef}>
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass-card text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-foreground tracking-tight">Recursos Poderosos</span>
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Tudo que você precisa para{" "}
            <span className="gradient-text-animated">escalar seu atendimento</span>
          </h2>
          <p className="text-lg text-muted-foreground tracking-tight">
            Ferramentas poderosas para transformar a experiência dos seus clientes e 
            aumentar a produtividade da sua equipe.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              data-index={index}
              className={`group relative p-6 rounded-2xl liquid-glass-card cursor-pointer ${
                visibleItems.has(index) ? "opacity-100" : "opacity-0"
              }`}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Gradient overlay on hover */}
              <motion.div 
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              
              {/* Content */}
              <div className="relative z-10">
                <motion.div 
                  className={`w-14 h-14 rounded-2xl ${feature.iconBg} flex items-center justify-center mb-4 transition-all duration-500`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                </motion.div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 tracking-tight">
                  {feature.description}
                </p>
                <motion.a
                  href="https://pay.kiwify.com.br/UcJKaJp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                  whileHover={{ x: 4 }}
                >
                  Saiba mais
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
