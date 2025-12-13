import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacidade = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade | AtendeTicket</title>
        <meta name="description" content="Saiba como o AtendeTicket coleta, usa e protege seus dados pessoais." />
      </Helmet>

      <main className="min-h-screen bg-background scroll-smooth">
        <Navbar />
        
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="text-center animate-slide-up mb-12">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Política de Privacidade
                </h1>
                <p className="text-muted-foreground">Última atualização: Dezembro 2024</p>
              </div>

              <div className="glass-card rounded-2xl p-8 md:p-12 prose prose-gray max-w-none">
                <h2 className="text-xl font-display font-bold mb-4">1. Informações que Coletamos</h2>
                <p className="text-muted-foreground mb-6">
                  Coletamos informações que você nos fornece diretamente, como nome, e-mail e dados de uso 
                  da plataforma para melhorar nossos serviços.
                </p>

                <h2 className="text-xl font-display font-bold mb-4">2. Como Usamos suas Informações</h2>
                <p className="text-muted-foreground mb-6">
                  Utilizamos seus dados para fornecer, manter e melhorar nossos serviços, 
                  além de comunicar atualizações importantes sobre a plataforma.
                </p>

                <h2 className="text-xl font-display font-bold mb-4">3. Compartilhamento de Dados</h2>
                <p className="text-muted-foreground mb-6">
                  Não vendemos suas informações pessoais. Compartilhamos dados apenas com 
                  prestadores de serviços essenciais para operação da plataforma.
                </p>

                <h2 className="text-xl font-display font-bold mb-4">4. Segurança dos Dados</h2>
                <p className="text-muted-foreground mb-6">
                  Implementamos medidas de segurança técnicas e organizacionais para proteger 
                  seus dados contra acesso não autorizado, alteração ou destruição.
                </p>

                <h2 className="text-xl font-display font-bold mb-4">5. Seus Direitos</h2>
                <p className="text-muted-foreground mb-6">
                  Você tem direito de acessar, corrigir ou excluir seus dados pessoais. 
                  Entre em contato conosco para exercer esses direitos.
                </p>

                <h2 className="text-xl font-display font-bold mb-4">6. Contato</h2>
                <p className="text-muted-foreground">
                  Para dúvidas sobre privacidade, entre em contato: privacidade@atendeticket.com
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

export default Privacidade;
