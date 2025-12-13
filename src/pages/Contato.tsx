import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contato = () => {
  const contactInfo = [
    { icon: Mail, label: "E-mail", value: "contato@atendeticket.com", href: "mailto:contato@atendeticket.com" },
    { icon: Phone, label: "Telefone", value: "(11) 99999-9999", href: "tel:+5511999999999" },
    { icon: MessageSquare, label: "WhatsApp", value: "(11) 99999-9999", href: "https://wa.me/5511999999999" },
    { icon: MapPin, label: "Endereço", value: "São Paulo, SP - Brasil", href: "#" },
  ];

  return (
    <>
      <Helmet>
        <title>Contato | AtendeTicket - Fale Conosco</title>
        <meta name="description" content="Entre em contato com nossa equipe. Estamos prontos para ajudar você." />
      </Helmet>

      <main className="min-h-screen bg-background scroll-smooth">
        <Navbar />
        
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto animate-slide-up mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Contato
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Fale{" "}
                <span className="text-gradient">conosco</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Estamos aqui para ajudar. Entre em contato e responderemos em até 24h.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Contact Form */}
              <div className="glass-card rounded-2xl p-8">
                <h2 className="text-xl font-display font-bold mb-6">Envie uma mensagem</h2>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Seu nome" className="glass-subtle border-primary/20" />
                    <Input type="email" placeholder="Seu e-mail" className="glass-subtle border-primary/20" />
                  </div>
                  <Input placeholder="Assunto" className="glass-subtle border-primary/20" />
                  <Textarea placeholder="Sua mensagem" rows={5} className="glass-subtle border-primary/20" />
                  <Button variant="hero" className="w-full" size="lg">
                    Enviar Mensagem
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h2 className="text-xl font-display font-bold">Outras formas de contato</h2>
                {contactInfo.map((info, index) => (
                  <a 
                    key={info.label}
                    href={info.href}
                    className="glass-card rounded-2xl p-6 flex items-center gap-4 hover-lift block"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="font-semibold">{info.value}</div>
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

export default Contato;
