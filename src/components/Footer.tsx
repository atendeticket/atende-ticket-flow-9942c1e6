import { Phone, Instagram, Youtube, Github } from "lucide-react";
import logo from "@/assets/atendeticket-logo.png";

const Footer = () => {
  const navLinks = [
    { label: "Recursos", href: "#recursos" },
    { label: "Preços", href: "#precos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-foreground text-background py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <img 
              src={logo} 
              alt="AtendeTicket" 
              className="h-10 brightness-0 invert transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-background/70 hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Phone */}
          <a 
            href="tel:+5511999999999" 
            className="flex items-center gap-2 text-sm text-background/70 hover:text-primary transition-colors duration-300"
          >
            <Phone className="w-4 h-4" />
            (11) 99999-9999
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} AtendeTicket. Todos os direitos reservados.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, i) => (
              <a 
                key={i}
                href={social.href}
                aria-label={social.label}
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
