import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <div className="bg-[var(--deep-blue)] pt-40 pb-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,var(--accent)_0%,transparent_50%)] opacity-10" />
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-normal tracking-tighter mb-4 leading-none">
            Termos de <span className="text-[var(--accent)] font-bold italic">Serviço.</span>
          </h1>
          <p className="text-xl text-white/60 font-light">Regras e diretrizes para a utilização da nossa plataforma.</p>
        </div>
      </div>

      <article className="py-24 container mx-auto max-w-4xl px-6">
        <div className="blog-content">
          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao aceder e utilizar o site da Talentos Unidos, o utilizador aceita cumprir e ficar vinculado aos presentes Termos de Serviço e a todas as leis e regulamentos aplicáveis.
          </p>
          
          <h2>2. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo presente neste site, incluindo textos, gráficos, logótipos e imagens, é propriedade da Talentos Unidos ou dos seus licenciadores e está protegido por leis de direitos de autor nacionais e internacionais.
          </p>
          
          <h2>3. Uso Autorizado</h2>
          <p>
            O utilizador compromete-se a utilizar o site apenas para fins lícitos e de forma a não infringir os direitos de terceiros ou restringir o uso e usufruto do site por parte de outros.
          </p>
          
          <h2>4. Limitação de Responsabilidade</h2>
          <p>
            A Talentos Unidos esforça-se por manter a informação atualizada e correta, mas não garante a ausência de erros ou omissões. Não seremos responsáveis por quaisquer danos decorrentes do uso ou incapacidade de uso do site.
          </p>
          
          <h2>5. Links para Terceiros</h2>
          <p>
            Este site pode conter links para sites externos que não são operados por nós. Não temos controlo sobre o conteúdo desses sites e não assumimos responsabilidade pelas suas políticas de privacidade ou práticas.
          </p>
          
          <div className="mt-20 p-10 bg-slate-50 rounded-[40px] border border-slate-100">
            <p className="text-sm text-slate-500 italic mb-0">
              Estes termos regem-se e são interpretados de acordo com as leis de Portugal. Qualquer litígio será submetido à jurisdição exclusiva dos tribunais da comarca de Faro.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
