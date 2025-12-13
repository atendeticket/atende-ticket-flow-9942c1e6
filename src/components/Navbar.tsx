import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#recursos", label: "Recursos" },
    { href: "#precos", label: "Preços" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-strong py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src={logo} 
                alt="AtendeTicket" 
                className="w-10 h-10 rounded-xl relative z-10 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              Atende<span className="text-gradient">Ticket</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hover:bg-primary/10">
              Entrar
            </Button>
            <Button variant="hero" size="sm" className="shadow-glow">
              Começar Grátis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl glass-subtle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slide-up-spring">
            <div className="glass-card rounded-2xl p-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-all duration-300 font-medium py-3 px-4 rounded-xl animate-fade-in-up opacity-0 stagger-${index + 1}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex flex-col gap-2 pt-4 mt-2 border-t border-border/50">
                  <Button variant="ghost" className="w-full justify-center">
                    Entrar
                  </Button>
                  <Button variant="hero" className="w-full justify-center shadow-glow">
                    Começar Grátis
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
