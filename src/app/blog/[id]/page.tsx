import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, Share2, Link as LinkIcon, Mail } from "lucide-react";
import { notFound } from "next/navigation";

const BLOG_POSTS = [
  {
    id: 1,
    title: "O Impacto da Formação Profissional no Algarve",
    content: `
      <p>No coração da nossa missão está a crença de que o talento não tem fronteiras, apenas precisa do solo certo para florescer. No Algarve, temos visto uma transformação notável através dos nossos programas de formação.</p>
      <h2>Capacitação para o Futuro</h2>
      <p>Os nossos programas não se focam apenas em competências técnicas. Trabalhamos as 'soft skills', a inteligência emocional e a capacidade de adaptação. O mercado de trabalho moderno exige profissionais que saibam aprender a aprender.</p>
      <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200" alt="Workshop de Formação" />
      <h2>Resultados Reais</h2>
      <p>Mais de 80% dos nossos formandos conseguem integração direta em empresas parceiras num prazo de seis meses. Este sucesso é o resultado de uma ponte sólida construída entre a sociedade civil e o tecido empresarial algarvio.</p>
      <blockquote>"O sucesso de um jovem é o sucesso de toda a comunidade. Não estamos apenas a formar trabalhadores, estamos a formar cidadãos ativos."</blockquote>
      <p>Continuaremos a expandir os nossos horizontes, trazendo novos projetos e parcerias que permitam a cada indivíduo atingir o seu potencial máximo.</p>
    `,
    date: "15 Mai, 2024",
    author: "Selma Cazes",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    category: "Educação"
  },
  {
    id: 2,
    title: "Sustentabilidade e NGO: Um Compromisso Real",
    content: `
      <p>A Talentos Unidos assume a sustentabilidade não como uma tendência, mas como um pilar fundamental da nossa existência. Alinhamos cada ação com a Agenda 2030 da ONU.</p>
      <h2>Eco-Eficiência no Algarve</h2>
      <p>Desenvolvemos projetos que promovem a economia circular e a preservação do ecossistema algarvio. Acreditamos que o desenvolvimento de talentos deve caminhar lado a lado com a proteção do planeta.</p>
      <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200" alt="Natureza Algarve" />
      <h2>Educação Ambiental</h2>
      <p>Integramos módulos de literacia ambiental em todas as nossas formações. O objetivo é formar líderes que compreendam o impacto das suas decisões no meio ambiente.</p>
      <blockquote>"Não herdamos a terra dos nossos antepassados, pedimo-la emprestada aos nossos filhos."</blockquote>
      <p>A nossa sede e eventos seguem protocolos rigorosos de desperdício zero, servindo de exemplo para toda a comunidade.</p>
    `,
    date: "10 Mai, 2024",
    author: "Juliene Rodrigues",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    category: "Sustentabilidade"
  },
  {
    id: 3,
    title: "Guia de Voluntariado: Como Podes Ajudar",
    content: `
      <p>O voluntariado é o motor da Talentos Unidos. Sem a dedicação generosa da nossa equipa de voluntários, o nosso impacto seria apenas uma fração do que é hoje.</p>
      <h2>Quem Pode Ser Voluntário?</h2>
      <p>Procuramos pessoas com vontade de partilhar conhecimento, mentores para os nossos jovens e entusiastas que queiram ajudar na organização de eventos e logística.</p>
      <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200" alt="Equipa de Voluntários" />
      <h2>Os Benefícios de Dar</h2>
      <p>Além do impacto na comunidade, o voluntariado permite o desenvolvimento de competências de liderança, empatia e networking. É uma jornada de crescimento mútuo.</p>
      <blockquote>"A melhor maneira de nos encontrarmos é perdermo-nos ao serviço dos outros."</blockquote>
      <p>Junte-se a nós nesta missão. O Algarve precisa do seu talento para crescer de forma mais justa e equilibrada.</p>
    `,
    date: "05 Mai, 2024",
    author: "Mariana Rodrigues",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800",
    category: "Comunidade"
  },
  {
    id: 4,
    title: "Inovação Social nas Escolas",
    content: `
      <p>Lançámos recentemente um projeto piloto inovador focado no desenvolvimento de competências do século XXI em alunos do ensino secundário em Faro.</p>
      <h2>Tecnologia e Humanismo</h2>
      <p>O programa combina ferramentas digitais avançadas com metodologias de design thinking e pensamento crítico. Queremos que os alunos sejam criadores, não apenas consumidores de tecnologia.</p>
      <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200" alt="Inovação Escolar" />
      <h2>Impacto Escolar</h2>
      <p>Os professores parceiros já reportam um aumento significativo no engajamento dos alunos e na capacidade de resolução colaborativa de problemas complexos.</p>
      <blockquote>"Inovar na educação é dar voz ao aluno e ferramentas ao professor para que o futuro não seja um destino, mas uma construção."</blockquote>
      <p>Este projeto será expandido para outros concelhos do Algarve no próximo ano letivo, alcançando mais de 1000 estudantes.</p>
    `,
    date: "01 Mai, 2024",
    author: "Equipa TU",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
    category: "Educação"
  }
];

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = BLOG_POSTS.find(p => p.id === parseInt(id));

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Article Hero */}
      <div className="relative h-[70vh] w-full pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>
        
        <div className="container mx-auto max-w-7xl px-6 relative h-full flex flex-col justify-end pb-20 text-white">
          <div className="max-w-4xl space-y-6">
            <span className="px-4 py-1.5 rounded-full bg-[var(--accent)] text-[var(--deep-blue)] text-[10px] font-bold uppercase tracking-widest inline-block">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-8 pt-4">
              <div className="flex items-center gap-8">
                <div>
                  <p className="text-[10px] text-white/60 font-bold uppercase tracking-widest">Data</p>
                  <p className="text-sm font-bold">{post.date}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/60 font-bold uppercase tracking-widest">Leitura</p>
                  <p className="text-sm font-bold">{post.readTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-24 container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--deep-blue)] hover:text-[var(--accent)] transition-colors mb-12">
              <ArrowLeft className="size-4" /> Voltar ao Blog
            </Link>
            
            <div 
              className="blog-content max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="mt-20 pt-12 border-t border-slate-100 flex flex-wrap items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-slate-900 uppercase tracking-widest">Partilhar</span>
                <div className="flex gap-3">
                  {[LinkIcon, Mail, Share2].map((Icon, i) => (
                    <button key={i} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-[var(--deep-blue)] hover:text-white transition-all text-slate-400">
                      <Icon className="size-4" />
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Educação", "Algarve", "Impacto Social"].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-slate-50 text-slate-500 text-xs font-medium rounded-full">#{tag}</span>
                ))}
              </div>
            </div>
          </div>
          
          <aside className="lg:col-span-4 space-y-12">
            <div className="bg-slate-50 rounded-[40px] p-10">
              <h3 className="text-xl font-bold text-[var(--deep-blue)] mb-6">Subscreva a nossa Newsletter</h3>
              <p className="text-sm text-slate-500 mb-8 font-light leading-relaxed">
                Receba as últimas notícias e atualizações dos nossos projetos diretamente no seu email.
              </p>
              <form className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Seu email"
                  className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:border-[var(--accent)] outline-none"
                />
                <button className="w-full bg-[var(--deep-blue)] text-white py-4 rounded-2xl font-bold hover:bg-[var(--accent)] hover:text-[var(--deep-blue)] transition-all">
                  Subscrever
                </button>
              </form>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-[var(--deep-blue)] mb-8">Artigos Relacionados</h3>
              <div className="space-y-8">
                {BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3).map((related) => (
                  <Link href={`/blog/${related.id}`} key={related.id} className="group block">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                        <img src={related.image} alt={related.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-widest">{related.category}</span>
                        <h4 className="text-sm font-bold text-[var(--deep-blue)] group-hover:text-[var(--accent)] transition-colors line-clamp-2 mt-1">
                          {related.title}
                        </h4>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </article>

      <Footer />
    </main>
  );
}
