import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, AlertCircle, Clock } from "lucide-react";

const Status = () => {
  const services = [
    { name: "API", status: "operational", uptime: "99.99%" },
    { name: "Dashboard", status: "operational", uptime: "99.98%" },
    { name: "WhatsApp Integration", status: "operational", uptime: "99.95%" },
    { name: "Instagram Integration", status: "operational", uptime: "99.97%" },
    { name: "Email Service", status: "operational", uptime: "99.99%" },
    { name: "Webhooks", status: "operational", uptime: "99.96%" },
  ];

  const incidents = [
    { date: "10 Dez 2024", title: "Manutenção programada", status: "resolved", duration: "15 min" },
    { date: "5 Dez 2024", title: "Latência elevada na API", status: "resolved", duration: "8 min" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational": return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "degraded": return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      default: return <AlertCircle className="w-5 h-5 text-red-500" />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Status | AtendeTicket - Status do Sistema</title>
        <meta name="description" content="Acompanhe o status em tempo real de todos os serviços do AtendeTicket." />
      </Helmet>

      <main className="min-h-screen bg-background scroll-smooth">
        <Navbar />
        
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto animate-slide-up mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-500 text-sm font-medium mb-6">
                <CheckCircle className="w-4 h-4" />
                Todos os sistemas operacionais
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Status do{" "}
                <span className="text-gradient">Sistema</span>
              </h1>
            </div>

            {/* Services */}
            <div className="glass-card rounded-2xl p-8 mb-8">
              <h2 className="text-xl font-display font-bold mb-6">Serviços</h2>
              <div className="space-y-4">
                {services.map((service) => (
                  <div key={service.name} className="flex items-center justify-between p-4 rounded-xl bg-background/50">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(service.status)}
                      <span className="font-medium">{service.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">Uptime: {service.uptime}</span>
                      <span className="text-sm text-green-500 font-medium">Operacional</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Incidents */}
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-xl font-display font-bold mb-6">Incidentes Recentes</h2>
              <div className="space-y-4">
                {incidents.map((incident, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-background/50">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{incident.date}</span>
                      </div>
                      <span className="font-medium">{incident.title}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-green-500 font-medium">Resolvido</div>
                      <div className="text-xs text-muted-foreground">Duração: {incident.duration}</div>
                    </div>
                  </div>
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

export default Status;
