import { MessageSquare, Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    produto: [
      { label: "Recursos", href: "#recursos" },
      { label: "Preços", href: "#precos" },
      { label: "Integrações", href: "#" },
      { label: "API", href: "#" },
    ],
    empresa: [
      { label: "Sobre nós", href: "#" },
      { label: "Carreiras", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contato", href: "#contato" },
    ],
    suporte: [
      { label: "Central de Ajuda", href: "#" },
      { label: "Documentação", href: "#" },
      { label: "Status", href: "#" },
      { label: "Comunidade", href: "#" },
    ],
    legal: [
      { label: "Termos de Uso", href: "#" },
      { label: "Privacidade", href: "#" },
      { label: "Cookies", href: "#" },
      { label: "LGPD", href: "#" },
    ],
  };

  return (
    <footer id="contato" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-background">
                Atende<span className="text-primary">Ticket</span>
              </span>
            </a>
            <p className="text-background/60 text-sm mb-6 max-w-xs">
              Plataforma de multiatendimento que centraliza todos os seus canais 
              em um único lugar.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:contato@atendeticket.com" className="flex items-center gap-2 text-sm text-background/60 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                contato@atendeticket.com
              </a>
              <a href="tel:+5511999999999" className="flex items-center gap-2 text-sm text-background/60 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                (11) 99999-9999
              </a>
              <div className="flex items-center gap-2 text-sm text-background/60">
                <MapPin className="w-4 h-4" />
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
                  <a href={link.href} className="text-sm text-background/60 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-background/60 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Suporte</h4>
            <ul className="space-y-3">
              {footerLinks.suporte.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-background/60 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-background/60 hover:text-primary transition-colors">
                    {link.label}
                  </a>
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
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors group">
              <Linkedin className="w-5 h-5 text-background/60 group-hover:text-primary-foreground" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors group">
              <Instagram className="w-5 h-5 text-background/60 group-hover:text-primary-foreground" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors group">
              <Youtube className="w-5 h-5 text-background/60 group-hover:text-primary-foreground" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
