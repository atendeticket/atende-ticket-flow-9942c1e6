import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Book, Code, Zap, Settings, Shield, Database } from "lucide-react";

const Documentacao = () => {
  const sections = [
    { icon: Book, title: "Guia de Início Rápido", description: "Configure sua conta em 5 minutos" },
    { icon: Code, title: "Referência da API", description: "Endpoints, parâmetros e exemplos" },
    { icon: Zap, title: "Webhooks", description: "Receba eventos em tempo real" },
    { icon: Settings, title: "Configurações", description: "Personalize sua plataforma" },
    { icon: Shield, title: "Segurança", description: "Autenticação e boas práticas" },
    { icon: Database, title: "SDKs e Bibliotecas", description: "Código pronto para usar" },
  ];

  return (
    <>
      <Helmet>
        <title>Documentação | AtendeTicket</title>
        <meta name="description" content="Documentação completa do AtendeTicket para desenvolvedores e administradores." />
      </Helmet>

      <main className="min-h-screen bg-background scroll-smooth">
        <Navbar />
        
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto animate-slide-up mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Documentação
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Tudo que você precisa{" "}
                <span className="text-gradient">saber</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Guias, referências e tutoriais para aproveitar ao máximo o AtendeTicket.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections.map((section, index) => (
                <div 
                  key={section.title}
                  className="glass-card rounded-2xl p-8 hover-lift cursor-pointer group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <section.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2">{section.title}</h3>
                  <p className="text-muted-foreground">{section.description}</p>
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

export default Documentacao;
