import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Eye, Trash2, Download, Edit, Ban } from "lucide-react";
import { Button } from "@/components/ui/button";

const LGPD = () => {
  const rights = [
    { icon: Eye, title: "Acesso", description: "Solicite uma cópia de todos os seus dados pessoais" },
    { icon: Edit, title: "Correção", description: "Corrija dados pessoais incompletos ou incorretos" },
    { icon: Trash2, title: "Exclusão", description: "Solicite a exclusão dos seus dados pessoais" },
    { icon: Download, title: "Portabilidade", description: "Receba seus dados em formato estruturado" },
    { icon: Ban, title: "Oposição", description: "Oponha-se ao tratamento dos seus dados" },
    { icon: Shield, title: "Revogação", description: "Revogue o consentimento a qualquer momento" },
  ];

  return (
    <>
      <Helmet>
        <title>LGPD | AtendeTicket - Lei Geral de Proteção de Dados</title>
        <meta name="description" content="Conheça seus direitos sob a LGPD e como o AtendeTicket protege seus dados." />
      </Helmet>

      <main className="min-h-screen bg-background scroll-smooth">
        <Navbar />
        
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center animate-slide-up mb-12">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  LGPD
                </span>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Seus dados,{" "}
                  <span className="text-gradient">seus direitos</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  O AtendeTicket está em conformidade com a Lei Geral de Proteção de Dados (LGPD).
                </p>
              </div>

              {/* Rights */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {rights.map((right, index) => (
                  <div 
                    key={right.title}
                    className="glass-card rounded-2xl p-6 hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <right.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{right.title}</h3>
                    <p className="text-sm text-muted-foreground">{right.description}</p>
                  </div>
                ))}
              </div>

              {/* DPO Contact */}
              <div className="glass-card rounded-2xl p-8 text-center">
                <h2 className="text-xl font-display font-bold mb-4">Encarregado de Proteção de Dados (DPO)</h2>
                <p className="text-muted-foreground mb-6">
                  Para exercer seus direitos ou tirar dúvidas sobre tratamento de dados, 
                  entre em contato com nosso DPO.
                </p>
                <div className="mb-6">
                  <p className="font-semibold">E-mail:</p>
                  <p className="text-primary">dpo@atendeticket.com</p>
                </div>
                <Button variant="hero" size="lg">
                  Solicitar Exercício de Direitos
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default LGPD;
