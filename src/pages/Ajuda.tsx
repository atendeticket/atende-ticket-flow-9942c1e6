import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Book, MessageCircle, Video, FileText, HelpCircle } from "lucide-react";
import { Input } from "@/components/ui/input";

const Ajuda = () => {
  const categories = [
    { icon: Book, title: "Primeiros Passos", description: "Aprenda o básico para começar", articles: 12 },
    { icon: MessageCircle, title: "Canais de Atendimento", description: "Configuração e integrações", articles: 18 },
    { icon: Video, title: "Tutoriais em Vídeo", description: "Aprenda assistindo", articles: 8 },
    { icon: FileText, title: "API e Integrações", description: "Documentação técnica", articles: 24 },
    { icon: HelpCircle, title: "FAQ", description: "Perguntas frequentes", articles: 30 },
  ];

  const popularArticles = [
    "Como conectar meu WhatsApp Business?",
    "Configurando respostas automáticas",
    "Gerenciando múltiplos atendentes",
    "Exportando relatórios",
    "Configuração de chatbot",
  ];

  return (
    <>
      <Helmet>
        <title>Central de Ajuda | AtendeTicket</title>
        <meta name="description" content="Encontre respostas para suas dúvidas, tutoriais e documentação do AtendeTicket." />
      </Helmet>

      <main className="min-h-screen bg-background scroll-smooth">
        <Navbar />
        
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto animate-slide-up mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Central de Ajuda
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Como podemos{" "}
                <span className="text-gradient">ajudar?</span>
              </h1>
              
              {/* Search */}
              <div className="relative max-w-xl mx-auto mt-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  placeholder="Buscar artigos, tutoriais..." 
                  className="pl-12 h-14 glass-card border-primary/20 text-lg"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {categories.map((category, index) => (
                <div 
                  key={category.title}
                  className="glass-card rounded-2xl p-6 hover-lift cursor-pointer group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{category.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{category.description}</p>
                  <span className="text-xs text-primary">{category.articles} artigos</span>
                </div>
              ))}
            </div>

            {/* Popular Articles */}
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-xl font-display font-bold mb-6">Artigos Populares</h2>
              <div className="space-y-3">
                {popularArticles.map((article, index) => (
                  <a 
                    key={article}
                    href="#"
                    className="block p-4 rounded-xl hover:bg-primary/5 transition-colors text-foreground hover:text-primary"
                  >
                    {article}
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

export default Ajuda;
