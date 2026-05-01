import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <div className="bg-[var(--deep-blue)] pt-40 pb-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,var(--accent)_0%,transparent_50%)] opacity-10" />
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-normal tracking-tighter mb-4 leading-none">
            Política de <span className="text-[var(--accent)] font-bold italic">Privacidade.</span>
          </h1>
          <p className="text-xl text-white/60 font-light">A sua segurança e privacidade são a nossa prioridade.</p>
        </div>
      </div>

      <article className="py-24 container mx-auto max-w-4xl px-6">
        <div className="blog-content">
          <h2>1. Recolha de Dados</h2>
          <p>
            A Talentos Unidos recolhe dados pessoais estritamente necessários para o fornecimento dos nossos serviços, incluindo nome, email e contacto telefónico, sempre com o seu consentimento explícito através dos nossos formulários.
          </p>
          
          <h2>2. Utilização da Informação</h2>
          <p>
            Os dados recolhidos destinam-se exclusivamente à gestão de parcerias, inscrições em formações, envio de newsletters (quando autorizado) e resposta a pedidos de contacto. Não partilhamos os seus dados com terceiros para fins comerciais.
          </p>
          
          <h2>3. Cookies e Rastreio</h2>
          <p>
            Utilizamos cookies essenciais para garantir o funcionamento correto do site e cookies analíticos anónimos para compreender como os utilizadores interagem com a nossa plataforma, permitindo-nos melhorar a experiência de navegação.
          </p>
          
          <h2>4. Direitos do Utilizador</h2>
          <p>
            Nos termos do RGPD, o utilizador tem o direito de aceder, retificar, limitar ou solicitar a eliminação dos seus dados pessoais a qualquer momento. Para exercer estes direitos, poderá contactar-nos através do email info@talentosunidos.com.
          </p>
          
          <h2>5. Segurança</h2>
          <p>
            Implementamos medidas técnicas e organizativas adequadas para proteger os seus dados contra acessos não autorizados, perda ou destruição acidental.
          </p>
          
          <div className="mt-20 p-10 bg-slate-50 rounded-[40px] border border-slate-100">
            <p className="text-sm text-slate-500 italic mb-0">
              Última atualização: 1 de Maio de 2024. A Talentos Unidos reserva-se o direito de atualizar esta política conforme necessário.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
