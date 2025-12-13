import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Carreiras = () => {
  const jobs = [
    { title: "Desenvolvedor Full Stack Senior", location: "Remoto", type: "CLT", department: "Engenharia" },
    { title: "Product Designer", location: "São Paulo, SP", type: "CLT", department: "Produto" },
    { title: "Customer Success Manager", location: "Remoto", type: "CLT", department: "Sucesso do Cliente" },
    { title: "DevOps Engineer", location: "Remoto", type: "CLT", department: "Infraestrutura" },
    { title: "Analista de Suporte N2", location: "São Paulo, SP", type: "CLT", department: "Suporte" },
  ];

  const benefits = [
    "Trabalho remoto ou híbrido", "Vale alimentação", "Plano de saúde", "Gympass",
    "Day off no aniversário", "Horário flexível", "Stock options", "Budget para cursos"
  ];

  return (
    <>
      <Helmet>
        <title>Carreiras | AtendeTicket - Trabalhe Conosco</title>
        <meta name="description" content="Junte-se ao time AtendeTicket. Veja nossas vagas abertas e faça parte dessa transformação." />
      </Helmet>

      <main className="min-h-screen bg-background scroll-smooth">
        <Navbar />
        
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto animate-slide-up mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Carreiras
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Faça parte do{" "}
                <span className="text-gradient">nosso time</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Estamos sempre em busca de pessoas talentosas que queiram fazer a diferença.
              </p>
            </div>

            {/* Benefits */}
            <div className="glass-card rounded-2xl p-8 mb-16">
              <h2 className="text-2xl font-display font-bold mb-6 text-center">Nossos Benefícios</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {benefits.map((benefit) => (
                  <span key={benefit} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>

            {/* Jobs */}
            <h2 className="text-2xl font-display font-bold mb-8">Vagas Abertas</h2>
            <div className="space-y-4">
              {jobs.map((job, index) => (
                <div 
                  key={job.title}
                  className="glass-card rounded-2xl p-6 hover-lift flex flex-col md:flex-row md:items-center justify-between gap-4"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div>
                    <span className="text-xs text-primary font-medium">{job.department}</span>
                    <h3 className="text-lg font-semibold mt-1">{job.title}</h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {job.type}
                      </span>
                    </div>
                  </div>
                  <Button variant="hero">
                    Candidatar-se
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Carreiras;
