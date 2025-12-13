import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "Como reduzir o tempo de resposta em 80% com automação",
      excerpt: "Descubra estratégias práticas para automatizar seu atendimento sem perder a humanização.",
      category: "Automação",
      date: "10 Dez 2024",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800"
    },
    {
      title: "O futuro do atendimento ao cliente: tendências para 2025",
      excerpt: "IA, omnichannel e personalização: o que esperar do atendimento nos próximos anos.",
      category: "Tendências",
      date: "8 Dez 2024",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800"
    },
    {
      title: "Guia completo: WhatsApp Business API",
      excerpt: "Tudo que você precisa saber para integrar o WhatsApp ao seu negócio.",
      category: "Tutoriais",
      date: "5 Dez 2024",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800"
    },
    {
      title: "Métricas de atendimento: o que medir e como melhorar",
      excerpt: "KPIs essenciais para acompanhar a performance do seu time de suporte.",
      category: "Analytics",
      date: "2 Dez 2024",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
    },
  ];

  return (
    <>
      <Helmet>
        <title>Blog | AtendeTicket - Dicas e Novidades</title>
        <meta name="description" content="Artigos sobre atendimento ao cliente, automação, chatbots e muito mais." />
      </Helmet>

      <main className="min-h-screen bg-background scroll-smooth">
        <Navbar />
        
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto animate-slide-up mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Blog
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Insights e{" "}
                <span className="text-gradient">novidades</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Dicas, tutoriais e tendências sobre atendimento ao cliente.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {posts.map((post, index) => (
                <article 
                  key={post.title}
                  className="glass-card rounded-2xl overflow-hidden hover-lift group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-medium text-primary">{post.category}</span>
                    <h2 className="text-xl font-display font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Blog;
