import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ricardo Almeida",
    role: "CEO, Tech Solutions",
    avatar: "RA",
    content:
      "A AtendeTicket revolucionou nosso atendimento. Antes perdíamos clientes por demora nas respostas, hoje nosso tempo médio é de 2 minutos!",
    rating: 5,
  },
  {
    name: "Camila Santos",
    role: "Gerente de CS, E-commerce Plus",
    avatar: "CS",
    content:
      "A integração com WhatsApp Business e o chatbot são incríveis. Automatizamos 60% das perguntas frequentes e nossa equipe pode focar no que importa.",
    rating: 5,
  },
  {
    name: "Fernando Costa",
    role: "Diretor, Clínica Saúde",
    avatar: "FC",
    content:
      "Perfeito para clínicas! Agendamentos, lembretes e atendimento em um só lugar. Os relatórios nos ajudam a melhorar constantemente.",
    rating: 5,
  },
  {
    name: "Juliana Mendes",
    role: "Fundadora, Boutique Online",
    avatar: "JM",
    content:
      "Comecei sozinha e hoje tenho 5 atendentes. A AtendeTicket cresceu junto comigo. Suporte excepcional!",
    rating: 5,
  },
  {
    name: "Marcos Oliveira",
    role: "Head de Vendas, SaaS Corp",
    avatar: "MO",
    content:
      "O ROI foi imediato. Em 3 meses aumentamos conversões em 40% graças ao atendimento rápido e personalizado.",
    rating: 5,
  },
  {
    name: "Ana Paula Ribeiro",
    role: "Atendimento, Delivery Express",
    avatar: "AP",
    content:
      "Interface super intuitiva. Minha equipe aprendeu a usar em menos de 1 hora. A produtividade triplicou!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const animate = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += 0.5;
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section id="depoimentos" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O que nossos{" "}
            <span className="text-gradient">clientes dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Mais de 5.000 empresas confiam na AtendeTicket para transformar seu atendimento.
          </p>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-hidden px-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[400px] p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift"
          >
            {/* Quote icon */}
            <Quote className="w-10 h-10 text-primary/20 mb-4" />

            {/* Content */}
            <p className="text-foreground mb-6 leading-relaxed">
              "{testimonial.content}"
            </p>

            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-semibold text-primary">{testimonial.avatar}</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
