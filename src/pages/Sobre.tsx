import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Heart, Rocket, Users } from "lucide-react";

const Sobre = () => {
  const values = [
    { icon: Target, title: "Missão", description: "Democratizar o acesso a ferramentas profissionais de atendimento ao cliente." },
    { icon: Heart, title: "Valores", description: "Transparência, inovação contínua e foco absoluto na experiência do cliente." },
    { icon: Rocket, title: "Visão", description: "Ser a principal plataforma de multiatendimento da América Latina." },
    { icon: Users, title: "Time", description: "Uma equipe apaixonada por tecnologia e excelência em atendimento." },
  ];

  const stats = [
    { value: "5.000+", label: "Empresas ativas" },
    { value: "50M+", label: "Mensagens/mês" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Suporte" },
  ];

  return (
    <>
      <Helmet>
        <title>Sobre Nós | AtendeTicket - Nossa História</title>
        <meta name="description" content="Conheça a história do AtendeTicket e nossa missão de transformar o atendimento ao cliente." />
      </Helmet>

      <main className="min-h-screen bg-background scroll-smooth">
        <Navbar />
        
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto animate-slide-up mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Sobre Nós
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Transformando o{" "}
                <span className="text-gradient">atendimento ao cliente</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Nascemos da necessidade de simplificar a comunicação entre empresas e clientes.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="glass-card rounded-2xl p-6 text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="glass-card rounded-2xl p-8 hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
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

export default Sobre;
