import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Termos = () => {
  return (
    <>
      <Helmet>
        <title>Termos de Uso | AtendeTicket</title>
        <meta name="description" content="Termos e condições de uso da plataforma AtendeTicket." />
      </Helmet>

      <main className="min-h-screen bg-background scroll-smooth">
        <Navbar />
        
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="text-center animate-slide-up mb-12">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Termos de Uso
                </h1>
                <p className="text-muted-foreground">Última atualização: Dezembro 2024</p>
              </div>

              <div className="glass-card rounded-2xl p-8 md:p-12 prose prose-gray max-w-none">
                <h2 className="text-xl font-display font-bold mb-4">1. Aceitação dos Termos</h2>
                <p className="text-muted-foreground mb-6">
                  Ao acessar e utilizar a plataforma AtendeTicket, você concorda em cumprir estes termos de uso. 
                  Se você não concordar com qualquer parte destes termos, não poderá acessar o serviço.
                </p>

                <h2 className="text-xl font-display font-bold mb-4">2. Uso do Serviço</h2>
                <p className="text-muted-foreground mb-6">
                  O AtendeTicket é uma plataforma de multiatendimento que permite centralizar comunicações 
                  de diferentes canais. Você é responsável por manter a confidencialidade de sua conta.
                </p>

                <h2 className="text-xl font-display font-bold mb-4">3. Conta do Usuário</h2>
                <p className="text-muted-foreground mb-6">
                  Você deve fornecer informações precisas e completas ao criar sua conta. 
                  É sua responsabilidade manter suas credenciais de acesso seguras.
                </p>

                <h2 className="text-xl font-display font-bold mb-4">4. Propriedade Intelectual</h2>
                <p className="text-muted-foreground mb-6">
                  Todo o conteúdo da plataforma, incluindo textos, gráficos, logos e software, 
                  é propriedade do AtendeTicket e protegido por leis de propriedade intelectual.
                </p>

                <h2 className="text-xl font-display font-bold mb-4">5. Limitação de Responsabilidade</h2>
                <p className="text-muted-foreground mb-6">
                  O AtendeTicket não será responsável por quaisquer danos indiretos, incidentais 
                  ou consequenciais resultantes do uso ou incapacidade de uso do serviço.
                </p>

                <h2 className="text-xl font-display font-bold mb-4">6. Alterações nos Termos</h2>
                <p className="text-muted-foreground">
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. 
                  Alterações significativas serão comunicadas por e-mail ou através da plataforma.
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

export default Termos;
