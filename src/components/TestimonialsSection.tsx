import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ricardo Almeida",
    role: "CEO, Tech Solutions",
    avatar: "RA",
    content:
      "A AtendeTicket revolucionou nosso atendimento. Antes perdíamos clientes por demora nas respostas, hoje nosso tempo médio é de 2 minutos!",
    rating: 5,
    gradient: "from-primary/20 to-cyan-300/20",
  },
  {
    name: "Camila Santos",
    role: "Gerente de CS, E-commerce Plus",
    avatar: "CS",
    content:
      "A integração com WhatsApp Business e o chatbot são incríveis. Automatizamos 60% das perguntas frequentes e nossa equipe pode focar no que importa.",
    rating: 5,
    gradient: "from-green-500/20 to-emerald-300/20",
  },
  {
    name: "Fernando Costa",
    role: "Diretor, Clínica Saúde",
    avatar: "FC",
    content:
      "Perfeito para clínicas! Agendamentos, lembretes e atendimento em um só lugar. Os relatórios nos ajudam a melhorar constantemente.",
    rating: 5,
    gradient: "from-purple-500/20 to-violet-300/20",
  },
  {
    name: "Juliana Mendes",
    role: "Fundadora, Boutique Online",
    avatar: "JM",
    content:
      "Comecei sozinha e hoje tenho 5 atendentes. A AtendeTicket cresceu junto comigo. Suporte excepcional!",
    rating: 5,
    gradient: "from-pink-500/20 to-rose-300/20",
  },
  {
    name: "Marcos Oliveira",
    role: "Head de Vendas, SaaS Corp",
    avatar: "MO",
    content:
      "O ROI foi imediato. Em 3 meses aumentamos conversões em 40% graças ao atendimento rápido e personalizado.",
    rating: 5,
    gradient: "from-orange-500/20 to-amber-300/20",
  },
  {
    name: "Ana Paula Ribeiro",
    role: "Atendimento, Delivery Express",
    avatar: "AP",
    content:
      "Interface super intuitiva. Minha equipe aprendeu a usar em menos de 1 hora. A produtividade triplicou!",
    rating: 5,
    gradient: "from-cyan-500/20 to-sky-300/20",
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
    <section id="depoimentos" className="py-24 bg-background overflow-hidden relative">
      {/* Background decorations */}
      <motion.div 
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-300/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto px-4 mb-12 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass-card text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-foreground tracking-tight">Histórias de Sucesso</span>
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            O que nossos{" "}
            <span className="gradient-text-animated">clientes dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground tracking-tight">
            Mais de 5.000 empresas confiam na AtendeTicket para transformar seu atendimento.
          </p>
        </motion.div>
      </div>

      {/* Testimonials Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-hidden px-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-[400px] p-6 rounded-2xl liquid-glass-card group"
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Gradient overlay */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative z-10">
              {/* Quote icon */}
              <motion.div 
                className="w-12 h-12 rounded-xl liquid-glass-btn flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <Quote className="w-6 h-6 text-primary" />
              </motion.div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed tracking-tight">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star 
                      className="w-4 h-4 fill-yellow-400 text-yellow-400" 
                    />
                  </motion.div>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <motion.div 
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-cyan-300/30 flex items-center justify-center group-hover:shadow-glow transition-shadow duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="font-semibold text-primary tracking-tight">{testimonial.avatar}</span>
                </motion.div>
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 tracking-tight">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground tracking-tight">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
