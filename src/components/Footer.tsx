import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const footerLinks = {
    produto: [
      { label: "Recursos", href: "/recursos" },
      { label: "Preços", href: "/precos" },
      { label: "Integrações", href: "/integracoes" },
      { label: "API", href: "/api" },
    ],
    empresa: [
      { label: "Sobre nós", href: "/sobre" },
      { label: "Carreiras", href: "/carreiras" },
      { label: "Blog", href: "/blog" },
      { label: "Contato", href: "/contato" },
    ],
    suporte: [
      { label: "Central de Ajuda", href: "/ajuda" },
      { label: "Documentação", href: "/documentacao" },
      { label: "Status", href: "/status" },
      { label: "Comunidade", href: "/comunidade" },
    ],
    legal: [
      { label: "Termos de Uso", href: "/termos" },
      { label: "Privacidade", href: "/privacidade" },
      { label: "Cookies", href: "/cookies" },
      { label: "LGPD", href: "/lgpd" },
    ],
  };

  return (
    <footer id="contato" className="bg-foreground text-background py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-3 mb-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={logo} 
                  alt="AtendeTicket" 
                  className="w-10 h-10 rounded-xl relative z-10 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="font-display font-bold text-xl text-background">
                Atende<span className="text-primary">Ticket</span>
              </span>
            </a>
            <p className="text-background/60 text-sm mb-6 max-w-xs leading-relaxed">
              Plataforma de multiatendimento que centraliza todos os seus canais 
              em um único lugar. Simples, rápido e eficiente.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:contato@atendeticket.com" className="flex items-center gap-3 text-sm text-background/60 hover:text-primary transition-colors duration-300 group">
                <div className="w-8 h-8 rounded-lg bg-background/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                contato@atendeticket.com
              </a>
              <a href="tel:+5511999999999" className="flex items-center gap-3 text-sm text-background/60 hover:text-primary transition-colors duration-300 group">
                <div className="w-8 h-8 rounded-lg bg-background/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                (11) 99999-9999
              </a>
              <div className="flex items-center gap-3 text-sm text-background/60">
                <div className="w-8 h-8 rounded-lg bg-background/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                São Paulo, Brasil
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-background mb-4">Produto</h4>
            <ul className="space-y-3">
              {footerLinks.produto.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-background/60 hover:text-primary transition-colors duration-300 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-background/60 hover:text-primary transition-colors duration-300 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Suporte</h4>
            <ul className="space-y-3">
              {footerLinks.suporte.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-background/60 hover:text-primary transition-colors duration-300 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-background/60 hover:text-primary transition-colors duration-300 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} AtendeTicket. Todos os direitos reservados.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {[
              { icon: Linkedin, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: Youtube, href: "#" },
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href} 
                className="w-10 h-10 rounded-xl bg-background/5 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
              >
                <social.icon className="w-5 h-5 text-background/60 group-hover:text-primary-foreground transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
