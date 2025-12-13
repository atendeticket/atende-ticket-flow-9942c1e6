import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, MessageSquare, Video, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Comunidade = () => {
  const resources = [
    { icon: MessageSquare, title: "Fórum", description: "Troque experiências com outros usuários", cta: "Acessar Fórum" },
    { icon: Video, title: "Webinars", description: "Lives e workshops gratuitos", cta: "Ver Agenda" },
    { icon: Users, title: "Discord", description: "Comunidade ativa no Discord", cta: "Entrar no Discord" },
    { icon: Calendar, title: "Eventos", description: "Meetups e conferências", cta: "Ver Eventos" },
  ];

  const discussions = [
    { title: "Melhores práticas para chatbot", replies: 24, views: 156 },
    { title: "Integração com CRM externo", replies: 18, views: 89 },
    { title: "Dicas para reduzir tempo de resposta", replies: 32, views: 245 },
    { title: "Configuração de filas de atendimento", replies: 15, views: 78 },
  ];

  return (
    <>
      <Helmet>
        <title>Comunidade | AtendeTicket</title>
        <meta name="description" content="Junte-se à comunidade AtendeTicket. Participe de discussões, eventos e webinars." />
      </Helmet>

      <main className="min-h-screen bg-background scroll-smooth">
        <Navbar />
        
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto animate-slide-up mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Comunidade
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Faça parte da{" "}
                <span className="text-gradient">comunidade</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Conecte-se com outros profissionais de atendimento.
              </p>
            </div>

            {/* Resources */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {resources.map((resource, index) => (
                <div 
                  key={resource.title}
                  className="glass-card rounded-2xl p-6 hover-lift text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <resource.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                  <Button variant="ghost" size="sm" className="text-primary">
                    {resource.cta} <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              ))}
            </div>

            {/* Popular Discussions */}
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-xl font-display font-bold mb-6">Discussões Populares</h2>
              <div className="space-y-4">
                {discussions.map((discussion, index) => (
                  <a 
                    key={discussion.title}
                    href="#"
                    className="flex items-center justify-between p-4 rounded-xl hover:bg-primary/5 transition-colors"
                  >
                    <span className="font-medium hover:text-primary transition-colors">{discussion.title}</span>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{discussion.replies} respostas</span>
                      <span>{discussion.views} views</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Comunidade;
