import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  MessageSquare, 
  Bot, 
  Users, 
  BarChart3, 
  Zap, 
  Shield, 
  Clock, 
  Globe,
  Smartphone,
  Settings,
  Database,
  Lock
} from "lucide-react";

const Recursos = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Multicanal Unificado",
      description: "WhatsApp, Instagram, Facebook, Telegram e E-mail em uma única interface. Nunca perca uma mensagem importante.",
      details: ["Integração nativa com APIs oficiais", "Sincronização em tempo real", "Histórico completo de conversas"]
    },
    {
      icon: Bot,
      title: "Chatbot Inteligente",
      description: "IA avançada que entende e responde seus clientes 24/7. Reduza tempo de resposta em até 80%.",
      details: ["Fluxos personalizáveis", "Respostas contextuais", "Transferência automática para humanos"]
    },
    {
      icon: Users,
      title: "Gestão de Equipe",
      description: "Distribua atendimentos, monitore performance e gerencie sua equipe de forma eficiente.",
      details: ["Filas inteligentes", "Métricas por atendente", "Permissões granulares"]
    },
    {
      icon: BarChart3,
      title: "Analytics Avançado",
      description: "Dashboards em tempo real com insights acionáveis para melhorar seu atendimento.",
      details: ["Relatórios customizáveis", "Exportação de dados", "Alertas automáticos"]
    },
    {
      icon: Zap,
      title: "Automações",
      description: "Automatize tarefas repetitivas e foque no que realmente importa: seus clientes.",
      details: ["Triggers personalizados", "Respostas automáticas", "Integrações com webhooks"]
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Seus dados protegidos com criptografia de ponta e conformidade com LGPD.",
      details: ["Criptografia AES-256", "Backup automático", "Auditoria de acessos"]
    },
    {
      icon: Clock,
      title: "Disponibilidade 24/7",
      description: "Sistema sempre online com uptime garantido de 99.9%.",
      details: ["Servidores redundantes", "Monitoramento contínuo", "Suporte prioritário"]
    },
    {
      icon: Globe,
      title: "Multi-idioma",
      description: "Atenda clientes do mundo todo com suporte a múltiplos idiomas.",
      details: ["Tradução automática", "Templates por idioma", "Detecção automática"]
    },
    {
      icon: Smartphone,
      title: "App Mobile",
      description: "Atenda de qualquer lugar com nosso app para iOS e Android.",
      details: ["Notificações push", "Modo offline", "Sincronização automática"]
    },
    {
      icon: Settings,
      title: "Personalização",
      description: "Configure tudo de acordo com as necessidades do seu negócio.",
      details: ["Campos customizados", "Workflows flexíveis", "White-label disponível"]
    },
    {
      icon: Database,
      title: "CRM Integrado",
      description: "Gerencie leads e clientes sem sair da plataforma.",
      details: ["Pipeline de vendas", "Tags e segmentação", "Histórico completo"]
    },
    {
      icon: Lock,
      title: "Controle de Acesso",
      description: "Defina quem pode ver e fazer o quê dentro da plataforma.",
      details: ["Roles personalizadas", "2FA obrigatório", "IP whitelist"]
    },
  ];

  return (
    <>
      <Helmet>
        <title>Recursos | AtendeTicket - Funcionalidades da Plataforma</title>
        <meta name="description" content="Conheça todos os recursos do AtendeTicket: multicanal, chatbot IA, analytics, automações e muito mais." />
      </Helmet>

      <main className="min-h-screen bg-background scroll-smooth">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto animate-slide-up">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Recursos Completos
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Tudo que você precisa em{" "}
                <span className="text-gradient">uma plataforma</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Descubra todas as funcionalidades que fazem do AtendeTicket a escolha 
                de milhares de empresas.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="glass-card rounded-2xl p-8 hover-lift group scroll-trigger"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Recursos;
