import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageCircle, Instagram, Facebook, Mail, Send, Globe, Webhook, Puzzle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Integracoes = () => {
  const integrations = [
    { icon: MessageCircle, name: "WhatsApp Business", status: "Disponível", category: "Canais" },
    { icon: Instagram, name: "Instagram Direct", status: "Disponível", category: "Canais" },
    { icon: Facebook, name: "Facebook Messenger", status: "Disponível", category: "Canais" },
    { icon: Send, name: "Telegram", status: "Disponível", category: "Canais" },
    { icon: Mail, name: "E-mail", status: "Disponível", category: "Canais" },
    { icon: Globe, name: "Chat Web", status: "Disponível", category: "Canais" },
    { icon: Webhook, name: "Webhooks", status: "Disponível", category: "Automação" },
    { icon: Puzzle, name: "Zapier", status: "Em breve", category: "Automação" },
  ];

  const categories = ["Canais", "Automação"];

  return (
    <>
      <Helmet>
        <title>Integrações | AtendeTicket - Conecte Seus Canais</title>
        <meta name="description" content="Integre WhatsApp, Instagram, Facebook, Telegram e muito mais em uma única plataforma." />
      </Helmet>

      <main className="min-h-screen bg-background scroll-smooth">
        <Navbar />
        
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto animate-slide-up mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Integrações
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Conecte{" "}
                <span className="text-gradient">todos os seus canais</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Centralize o atendimento de todos os canais em um único lugar.
              </p>
            </div>

            {categories.map((category) => (
              <div key={category} className="mb-16">
                <h2 className="text-2xl font-display font-bold mb-8">{category}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {integrations
                    .filter((i) => i.category === category)
                    .map((integration, index) => (
                      <div 
                        key={integration.name}
                        className="glass-card rounded-2xl p-6 hover-lift flex items-center gap-4"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                          <integration.icon className="w-7 h-7 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">{integration.name}</h3>
                          <span className={`text-sm ${integration.status === "Disponível" ? "text-green-500" : "text-muted-foreground"}`}>
                            {integration.status}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">Não encontrou a integração que precisa?</p>
              <Button variant="hero" size="lg">
                Solicitar Integração
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Integracoes;
