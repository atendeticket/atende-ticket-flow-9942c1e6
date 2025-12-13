import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code, Terminal, Book, Zap, Lock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const API = () => {
  const features = [
    { icon: Code, title: "RESTful API", description: "API moderna e bem documentada seguindo padrões REST." },
    { icon: Terminal, title: "SDKs", description: "SDKs para Python, Node.js, PHP e outras linguagens." },
    { icon: Book, title: "Documentação", description: "Documentação completa com exemplos práticos." },
    { icon: Zap, title: "Webhooks", description: "Receba eventos em tempo real na sua aplicação." },
    { icon: Lock, title: "OAuth 2.0", description: "Autenticação segura com tokens de acesso." },
    { icon: Globe, title: "Rate Limiting", description: "Limites generosos para todas as requisições." },
  ];

  return (
    <>
      <Helmet>
        <title>API | AtendeTicket - Documentação para Desenvolvedores</title>
        <meta name="description" content="Integre o AtendeTicket à sua aplicação com nossa API RESTful completa." />
      </Helmet>

      <main className="min-h-screen bg-background scroll-smooth">
        <Navbar />
        
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto animate-slide-up mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Para Desenvolvedores
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                API{" "}
                <span className="text-gradient">poderosa e flexível</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Construa integrações personalizadas com nossa API completa.
              </p>
              <div className="flex gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Ver Documentação
                </Button>
                <Button variant="heroOutline" size="lg">
                  Testar API
                </Button>
              </div>
            </div>

            {/* Code Example */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="glass-card rounded-2xl overflow-hidden">
                <div className="bg-foreground/5 px-6 py-3 border-b border-border flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-4 text-sm text-muted-foreground">Exemplo de requisição</span>
                </div>
                <pre className="p-6 text-sm overflow-x-auto">
                  <code className="text-foreground">{`curl -X POST https://api.atendeticket.com/v1/messages \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+5511999999999",
    "channel": "whatsapp",
    "message": "Olá! Como posso ajudar?"
  }'`}</code>
                </pre>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="glass-card rounded-2xl p-6 hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
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

export default API;
