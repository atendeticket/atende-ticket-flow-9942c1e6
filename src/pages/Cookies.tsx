import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cookies = () => {
  const cookieTypes = [
    { name: "Essenciais", description: "Necessários para o funcionamento básico do site", required: true },
    { name: "Analytics", description: "Nos ajudam a entender como você usa o site", required: false },
    { name: "Marketing", description: "Usados para personalizar anúncios", required: false },
    { name: "Preferências", description: "Lembram suas configurações e preferências", required: false },
  ];

  return (
    <>
      <Helmet>
        <title>Política de Cookies | AtendeTicket</title>
        <meta name="description" content="Saiba como o AtendeTicket usa cookies para melhorar sua experiência." />
      </Helmet>

      <main className="min-h-screen bg-background scroll-smooth">
        <Navbar />
        
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="text-center animate-slide-up mb-12">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Política de Cookies
                </h1>
                <p className="text-muted-foreground">Última atualização: Dezembro 2024</p>
              </div>

              <div className="glass-card rounded-2xl p-8 md:p-12 mb-8">
                <h2 className="text-xl font-display font-bold mb-4">O que são Cookies?</h2>
                <p className="text-muted-foreground mb-6">
                  Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você 
                  visita nosso site. Eles nos ajudam a lembrar suas preferências e melhorar sua experiência.
                </p>

                <h2 className="text-xl font-display font-bold mb-4">Tipos de Cookies que Usamos</h2>
                <div className="space-y-4">
                  {cookieTypes.map((cookie) => (
                    <div key={cookie.name} className="p-4 rounded-xl bg-background/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">{cookie.name}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${cookie.required ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                          {cookie.required ? 'Obrigatório' : 'Opcional'}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{cookie.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8 md:p-12">
                <h2 className="text-xl font-display font-bold mb-4">Como Gerenciar Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  Você pode controlar cookies através das configurações do seu navegador. 
                  Note que desabilitar certos cookies pode afetar a funcionalidade do site.
                </p>
                <p className="text-muted-foreground">
                  Para mais informações, entre em contato: privacidade@atendeticket.com
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Cookies;
