import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Youtube, Github } from "lucide-react";
import logo from "@/assets/atendeticket-logo.png";

const Footer = () => {
  const navLinks = [
    { label: "Recursos", href: "#recursos" },
    { label: "Preços", href: "#precos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "https://wa.me/5519995828860", external: true },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/atendeticket", label: "Instagram" },
    { icon: Github, href: "https://github.com/atendeticket", label: "GitHub" },
    { icon: Youtube, href: "https://www.youtube.com/@atendeticket", label: "YouTube" },
  ];

  return (
    <footer className="bg-foreground text-background py-12 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
          {/* Logo */}
          <motion.a 
            href="#" 
            className="flex items-center group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <img 
              src={logo} 
              alt="AtendeTicket" 
              className="h-10 brightness-0 invert transition-transform duration-300"
            />
          </motion.a>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm text-background/70 hover:text-primary transition-colors duration-300 tracking-tight"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-background/70">
            <motion.a 
              href="mailto:contato@atendeticket.com" 
              className="flex items-center gap-2 hover:text-primary transition-colors duration-300 tracking-tight"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-4 h-4" />
              contato@atendeticket.com
            </motion.a>
            <motion.a 
              href="tel:+5519995828860" 
              className="flex items-center gap-2 hover:text-primary transition-colors duration-300 tracking-tight"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-4 h-4" />
              (19) 99582-8860
            </motion.a>
            <span className="flex items-center gap-2 tracking-tight">
              <MapPin className="w-4 h-4" />
              São Paulo, Brasil
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60 tracking-tight">
            © {new Date().getFullYear()} AtendeTicket. Todos os direitos reservados.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, i) => (
              <motion.a 
                key={i}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-xl bg-background/5 flex items-center justify-center hover:bg-primary transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <social.icon className="w-5 h-5 text-background/60 group-hover:text-primary-foreground transition-colors duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
