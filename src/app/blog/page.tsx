import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Link from "next/link";
import { ArrowUpRight, Calendar, User, Clock } from "lucide-react";

const BLOG_POSTS = [
  {
    id: 1,
    title: "O Impacto da Formação Profissional no Algarve",
    excerpt: "Como os nossos programas de capacitação estão a mudar vidas e a impulsionar a economia local através da integração de jovens talentos.",
    date: "15 Mai, 2024",
    author: "Selma Cazes",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    category: "Educação"
  },
  {
    id: 2,
    title: "Sustentabilidade e NGO: Um Compromisso Real",
    excerpt: "Exploramos como a Talentos Unidos está a alinhar os seus projetos com a Agenda 2030 da ONU para um Algarve mais verde.",
    date: "10 Mai, 2024",
    author: "Juliene Rodrigues",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    category: "Sustentabilidade"
  },
  {
    id: 3,
    title: "Guia de Voluntariado: Como Podes Ajudar",
    excerpt: "Tudo o que precisas de saber para te tornares voluntário na nossa associação e fazer a diferença na comunidade algarvia.",
    date: "05 Mai, 2024",
    author: "Mariana Rodrigues",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800",
    category: "Comunidade"
  },
  {
    id: 4,
    title: "Inovação Social nas Escolas",
    excerpt: "Lançamento do nosso novo projeto piloto focado no desenvolvimento de soft skills para alunos do ensino secundário.",
    date: "01 Mai, 2024",
    author: "Equipa TU",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
    category: "Educação"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section for Blog */}
      <div className="bg-[var(--deep-blue)] pt-40 pb-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,var(--accent)_0%,transparent_50%)] opacity-10" />
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-normal tracking-tighter mb-8 leading-none">
              Nosso <span className="text-[var(--accent)] font-bold italic underline decoration-white/20">Blog.</span>
            </h1>
            <p className="text-xl text-white/60 font-light leading-relaxed">
              Partilhamos histórias de impacto, atualizações de projetos e conhecimento sobre o desenvolvimento de talentos no Algarve.
            </p>
          </div>
        </div>
      </div>


      {/* Blog Grid */}
      <Section label="Atualidades" title="Últimas Histórias">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id} className="group bg-white rounded-[40px] overflow-hidden border border-slate-100 transition-all hover:shadow-2xl hover:shadow-[var(--deep-blue)]/5 flex flex-col md:flex-row h-full">
              <div className="md:w-2/5 relative overflow-hidden h-64 md:h-auto">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 rounded-full bg-[var(--accent)] text-[var(--deep-blue)] text-[10px] font-bold uppercase tracking-widest shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="md:w-3/5 p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-6 text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-6">
                    <span className="flex items-center gap-2">
                      <Calendar className="size-3 text-[var(--accent)]" /> {post.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="size-3 text-[var(--accent)]" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--deep-blue)] mb-4 leading-tight group-hover:text-[var(--accent)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-50 flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-[var(--deep-blue)] group-hover:border-[var(--deep-blue)] group-hover:text-white transition-all">
                    <ArrowUpRight className="size-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Footer />
    </main>
  );
}
