"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import { Users, Target, Leaf, Mail, MapPin, CheckCircle2, ArrowUpRight, Loader2 } from "lucide-react";

export default function Home() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Informações Gerais",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/sendemail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "Informações Gerais", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      
      <Section id="missao" label="Sobre Nós" title="Criamos caminhos para o potencial humano florescer.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <p className="text-xl md:text-3xl text-slate-900 leading-tight font-light tracking-tight">
              A nossa missão é incentivar e participar na organização de formações que promovam o intercâmbio de ideias e culturas no Algarve.
            </p>
            <div className="space-y-6">
              {[
                "Intercâmbio de ideias e culturas",
                "Estudos e projetos de impacto social",
                "Capacitação individual e coletiva"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-slate-600">
                  <CheckCircle2 className="size-6 text-[var(--accent)] fill-black" />
                  <span className="text-lg font-medium tracking-tight">{item}</span>
                </div>
              ))}
            </div>
            <blockquote className="border-l-4 border-[var(--accent)] pl-8 py-2 italic text-xl text-slate-500 max-w-lg">
              “Não devemos permitir que alguém saia da nossa presença sem se sentir melhor e mais feliz.”
              <cite className="block not-italic text-sm font-bold text-slate-900 mt-6 tracking-widest uppercase">— Madre Teresa de Calcutá</cite>
            </blockquote>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-[var(--accent)] rounded-[40px] rotate-2 transition-transform group-hover:rotate-1 opacity-20" />
            <img 
              src="/images/community.png" 
              alt="Comunidade Talentos Unidos" 
              className="relative rounded-[32px] shadow-2xl transition-all duration-700"
            />
          </div>
        </div>
      </Section>

      <Section id="objetivos" light label="Estratégia" title="Nossos pilares de atuação.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Users className="size-8" />}
            title="Integração Social"
            description="Motivamos a sociedade civil e empresarial do Algarve a fornecer ferramentas de orientação e inserção real no mercado."
          />
          <FeatureCard 
            icon={<Target className="size-8" />}
            title="Foco Jovem"
            description="Apoio estratégico e orientação personalizada para a inserção de jovens no mercado de trabalho algarvio."
          />
          <FeatureCard 
            icon={<Leaf className="size-8" />}
            title="Sustentabilidade"
            description="Atuamos em total conformidade com a Agenda 2030 da ONU para o desenvolvimento sustentável e humano."
          />
        </div>
      </Section>

      <Section id="direcao" label="Governança" title="Compromisso com a Transparência e Excelência.">
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[var(--deep-blue)] mb-2">Conselho de Administração</h3>
          <p className="text-slate-500 font-light">Liderança dedicada à estratégia e sustentabilidade da associação.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { name: "SELMA VALLE FERREIRA CAZES", role: "Presidente" },
            { name: "JULIENE NINOSKA DA PONTE RODRIGUES", role: "Vice-Presidente" },
            { name: "MARIANA INÁCIO RODRIGUES", role: "Secretária Tesoureira" }
          ].map((person, i) => (
            <div key={i} className="group relative p-10 rounded-[40px] bg-white border border-slate-100 hover:border-[var(--accent)] transition-all duration-700 shadow-sm hover:shadow-2xl hover:shadow-[var(--deep-blue)]/10 hover:-translate-y-2">
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-slate-50 rounded-2xl mb-8 group-hover:bg-[var(--accent)] transition-colors duration-500">
                  <Users className="size-6 text-[var(--deep-blue)]" />
                </div>
                
                <h4 className="text-lg font-bold text-[var(--deep-blue)] mb-2 tracking-tight group-hover:translate-x-1 transition-transform duration-500 min-h-[3rem] flex items-center">
                  {person.name}
                </h4>

                
                <div className="flex items-center gap-2">
                  <div className="h-px w-4 bg-[var(--accent)]" />
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">
                    {person.role}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <div className="w-8 h-8 rounded-full bg-[var(--deep-blue)] flex items-center justify-center">
                  <ArrowUpRight className="size-3 text-[var(--accent)]" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-[var(--deep-blue)] rounded-[56px] p-12 md:p-24 text-white overflow-hidden relative border border-white/5 shadow-3xl shadow-[var(--deep-blue)]/40">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,var(--accent)_0%,transparent_50%)] opacity-[0.03]" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white opacity-[0.02] blur-3xl rounded-full" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-4 space-y-8">
              <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-[var(--accent)] text-[10px] font-bold uppercase tracking-widest">
                Órgãos Sociais
              </div>
              <h3 className="text-4xl font-normal tracking-tighter leading-tight">
                Estrutura de <br />
                <span className="text-[var(--accent)] font-bold italic">Decisão Coletiva.</span>
              </h3>
              <p className="text-white/40 text-sm font-light leading-relaxed max-w-xs">
                A nossa governação assenta em princípios de ética, integridade e prestação de contas à comunidade.
              </p>
              
              <div className="pt-8">
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <span className="text-4xl font-bold text-[var(--accent)] block mb-1 tracking-tighter">Quadriénio</span>
                  <p className="text-xs text-white/40 uppercase tracking-widest font-bold">2024 — 2028</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <div className="flex items-center gap-3 mb-10">
                  <div className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--accent)]">Assembleia Geral</h3>
                </div>
                <div className="space-y-12">
                  {[
                    { name: "VÍTOR MANUEL DOS SANTOS REIS", role: "Presidente" },
                    { name: "BETÂNIA CEPAS", role: "1ª Secretária" },
                    { name: "VICTOR CAZES", role: "2º Secretário" }
                  ].map((person, i) => (
                    <div key={i} className="group cursor-default border-b border-white/5 pb-6 transition-colors hover:border-[var(--accent)]/30">
                      <p className="text-[8px] text-white/30 font-bold uppercase tracking-[0.3em] mb-2">{person.role}</p>
                      <h4 className="text-base sm:text-lg font-medium text-white group-hover:text-[var(--accent)] transition-colors duration-300 leading-tight">
                        {person.name}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-10">
                  <div className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--accent)]">Conselho Fiscal</h3>
                </div>
                <div className="space-y-12">
                  {[
                    { name: "MANUELA ROBINSON", role: "Presidente" },
                    { name: "CATHERINE ELIZABETH PUGH ALMEIDA", role: "1º Vogal" },
                    { name: "RONALDO SCHUTZ", role: "2º Vogal" }
                  ].map((person, i) => (
                    <div key={i} className="group cursor-default border-b border-white/5 pb-6 transition-colors hover:border-[var(--accent)]/30">
                      <p className="text-[8px] text-white/30 font-bold uppercase tracking-[0.3em] mb-2">{person.role}</p>
                      <h4 className="text-base sm:text-lg font-medium text-white group-hover:text-[var(--accent)] transition-colors duration-300 leading-tight">
                        {person.name}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </Section>
      
      {/* Parceiros Section */}
      <Section id="parceiros" light label="Rede de Impacto" title="Parceiros que acreditam no talento algarvio.">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {[
            { name: "Ver o Verso", img: "/images/partners/logo_veroverso.png" },
            { name: "Green Valley", img: "/images/partners/logo_greenvalley.png", invert: true },
            { name: "DOP", img: "/images/partners/logo_dop.png" },
            { name: "Sigues", img: "/images/partners/logo_sigues.png" },
            { name: "Clube Mulheres de Negócios", img: "/images/partners/logo_mulheresnegocios.png" },
            { name: "Associação Esperança e Paz", img: "/images/partners/logo_esperancaepaz.png" },
            { name: "Banco de Tempo Quarteira", img: "/images/partners/logo_bancodetempo.png" },
            { name: "Rotary", img: "/images/partners/logo_rotary.png", large: true },
            { name: "PROLE", img: "/images/partners/logo_prole.png" },
            { name: "SPEAK", img: "/images/partners/logo_speak.png" },
            { name: "UAlg", img: "/images/partners/logo_ualg.png" },
            { name: "Algarve Families in Need", isText: true },
            { name: "Certideal", img: "/images/partners/logo_certideal.png" },
          ].map((partner, i) => (
            <div key={i} className="h-32 rounded-[32px] flex items-center justify-center p-6 transition-all duration-500 group shadow-sm hover:shadow-xl hover:-translate-y-1 bg-white border border-slate-100">
              {partner.isText ? (
                <span className="text-center font-bold text-slate-700 leading-tight group-hover:scale-110 transition-transform duration-500">
                  {partner.name}
                </span>
              ) : (
                <img 
                  src={partner.img} 
                  alt={partner.name} 
                  className={`max-w-full max-h-full object-contain transition-all duration-500 ${
                    partner.large ? "scale-125 group-hover:scale-[1.4]" : "scale-100 group-hover:scale-110"
                  } ${
                    partner.invert ? "brightness-0 opacity-60 group-hover:opacity-100" : "grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-slate-500 font-light max-w-2xl mx-auto">
            Trabalhamos em conjunto com entidades de referência para criar oportunidades reais de integração e desenvolvimento no Algarve.
          </p>
        </div>
      </Section>

      <Section id="blog" label="Atualidades" title="Últimas do nosso Blog.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              id: 1,
              title: "O Impacto da Formação no Algarve",
              category: "Educação",
              date: "15 Mai, 2024",
              image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
            },
            {
              id: 2,
              title: "Sustentabilidade e Compromisso Real",
              category: "Sustentabilidade",
              date: "10 Mai, 2024",
              image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
            },
            {
              id: 3,
              title: "Guia de Voluntariado Comunitário",
              category: "Comunidade",
              date: "05 Mai, 2024",
              image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800"
            }
          ].map((post, i) => (
            <Link href={`/blog/${post.id}`} key={i} className="group bg-white rounded-[40px] overflow-hidden border border-slate-100 transition-all hover:shadow-2xl hover:shadow-[var(--deep-blue)]/5">
              <div className="relative h-64 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 rounded-full bg-[var(--accent)] text-[var(--deep-blue)] text-[10px] font-bold uppercase tracking-widest shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-10">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mb-4">{post.date}</p>
                <h4 className="text-xl font-bold text-[var(--deep-blue)] mb-6 group-hover:text-[var(--accent)] transition-colors leading-tight">
                  {post.title}
                </h4>
                <div className="flex items-center gap-2 text-xs font-bold text-[var(--deep-blue)] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                  Ler Artigo <ArrowUpRight className="size-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/blog" className="group flex items-center gap-4 px-10 py-5 rounded-full bg-slate-50 border border-slate-100 text-[var(--deep-blue)] font-bold hover:bg-[var(--deep-blue)] hover:text-white transition-all shadow-xl shadow-slate-100 hover:shadow-[var(--deep-blue)]/20">
            Ver Todas as Notícias
            <div className="w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowUpRight className="size-4 text-[var(--deep-blue)]" />
            </div>
          </Link>
        </div>
      </Section>

      {/* CTA Section */}
      <section id="cta-associar" className="py-24 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="relative bg-[var(--deep-blue)] rounded-[50px] p-12 md:p-20 overflow-hidden shadow-2xl">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,var(--accent)_0%,transparent_70%)] opacity-10 -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 -translate-x-32 translate-y-32 blur-3xl rounded-full" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl text-center lg:text-left space-y-6">
                <span className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-[0.3em]">Impacto Social</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-tight">
                  Pronto para <span className="italic font-normal text-[var(--accent)]">transformar</span> vidas no Algarve?
                </h2>
                <p className="text-xl text-white/60 font-light leading-relaxed">
                  Junte-se à nossa rede de mentores, voluntários e parceiros. O seu talento é a chave para o sucesso de muitos jovens.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Link href="#contactos" className="group/btn relative flex items-center gap-4 px-10 py-5 rounded-full bg-[var(--accent)] text-[var(--deep-blue)] font-bold transition-all shadow-xl shadow-black/20 hover:scale-105 hover:shadow-black/30 whitespace-nowrap">
                  Quero Fazer Parte
                  <div className="w-8 h-8 rounded-full bg-[var(--deep-blue)]/10 flex items-center justify-center group-hover/btn:bg-[var(--deep-blue)] group-hover/btn:text-white transition-all">
                    <ArrowUpRight className="size-4" />
                  </div>
                </Link>
                <Link href="#missao" className="group/btn flex items-center gap-4 px-10 py-5 rounded-full border border-white/20 text-white font-bold hover:bg-white/10 hover:border-white/40 transition-all whitespace-nowrap">
                  Saber Mais
                  <ArrowUpRight className="size-4 opacity-40 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section id="contactos" light label="Conexão" title="Vamos conversar sobre o futuro?">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Info Card */}
          <div className="lg:col-span-5 bg-[var(--deep-blue)] rounded-[40px] p-12 text-white relative overflow-hidden flex flex-col justify-between shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent)] opacity-5 -translate-y-32 translate-x-32 blur-3xl rounded-full" />
            
            <div className="relative z-10 space-y-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight">Estamos aqui para apoiar.</h3>
                <p className="text-white/60 font-light leading-relaxed max-w-sm">
                  Seja para parcerias, voluntariado ou dúvidas sobre os nossos projetos, a nossa equipa está pronta para responder.
                </p>
              </div>

              <div className="space-y-10">
                <div className="flex gap-6 items-center group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-colors group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)]">
                    <Mail className="size-6 text-[var(--accent)] group-hover:text-[var(--deep-blue)] transition-colors" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-1">Contacto Direto</span>
                    <p className="text-xl font-medium">info@talentosunidos.com</p>
                    <p className="text-sm text-white/60">289 040 092 | 934 436 515</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-center group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-colors group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)]">
                    <MapPin className="size-6 text-[var(--accent)] group-hover:text-[var(--deep-blue)] transition-colors" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-1">Sede Social</span>
                    <p className="text-xl font-medium leading-tight">Rua dos Torneiros s/nº</p>
                    <p className="text-sm text-white/60">8100-664 Loulé, Algarve</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Form Card */}
          <div className="lg:col-span-7 bg-white rounded-[40px] p-12 shadow-xl border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)] opacity-5 -translate-y-16 translate-x-16 rotate-45" />
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Nome Completo</label>
                  <div className="relative group">
                    <Users className="absolute left-5 top-1/2 -translate-y-1/2 size-4 text-slate-300 group-focus-within:text-[var(--accent)] transition-colors" />
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: João Silva"
                      className="w-full pl-12 pr-6 py-4 bg-white border border-slate-200 rounded-2xl focus:border-[var(--accent)] focus:ring-4 focus:ring-[var(--accent)]/10 transition-all outline-none text-slate-900 placeholder:text-slate-300 shadow-sm" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Endereço de E-mail</label>
                  <div className="relative group">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 size-4 text-slate-300 group-focus-within:text-[var(--accent)] transition-colors" />
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="joao@exemplo.pt"
                      className="w-full pl-12 pr-6 py-4 bg-white border border-slate-200 rounded-2xl focus:border-[var(--accent)] focus:ring-4 focus:ring-[var(--accent)]/10 transition-all outline-none text-slate-900 placeholder:text-slate-300 shadow-sm" 
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Assunto do Contacto</label>
                <div className="relative group">
                  <Target className="absolute left-5 top-1/2 -translate-y-1/2 size-4 text-slate-300 group-focus-within:text-[var(--accent)] transition-colors" />
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full pl-12 pr-6 py-4 bg-white border border-slate-200 rounded-2xl focus:border-[var(--accent)] focus:ring-4 focus:ring-[var(--accent)]/10 transition-all outline-none text-slate-900 appearance-none cursor-pointer shadow-sm"
                  >
                    <option>Informações Gerais</option>
                    <option>Parcerias Institucionais</option>
                    <option>Candidatura a Voluntariado</option>
                    <option>Outros Assuntos</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Sua Mensagem</label>
                <textarea 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Como podemos ajudar a desenvolver o seu talento?"
                  className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:border-[var(--accent)] focus:ring-4 focus:ring-[var(--accent)]/10 transition-all outline-none text-slate-900 placeholder:text-slate-300 shadow-sm min-h-[140px] resize-none"
                ></textarea>
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="group w-full sm:w-auto bg-[var(--deep-blue)] text-white px-12 py-5 rounded-2xl font-bold hover:bg-[var(--accent)] hover:text-[var(--deep-blue)] transition-all flex items-center justify-center gap-3 shadow-xl shadow-[var(--deep-blue)]/20 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      A enviar...
                      <Loader2 className="size-5 animate-spin" />
                    </>
                  ) : (
                    <>
                      Enviar Mensagem
                      <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>
                  )}
                </button>
              </div>

              {status === "success" && (
                <div className="p-4 bg-green-50 text-green-700 rounded-xl text-sm font-medium border border-green-100">
                  Obrigado! A sua mensagem foi enviada com sucesso. Entraremos em contacto brevemente.
                </div>
              )}
              {status === "error" && (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm font-medium border border-red-100">
                  Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente ou envie e-mail direto.
                </div>
              )}
              
              <p className="text-[10px] text-slate-400 font-medium text-center sm:text-left mt-6">
                Ao enviar este formulário, concorda com a nossa <Link href="/privacidade" className="text-[var(--deep-blue)] font-bold underline hover:text-[var(--accent)] transition-colors">Política de Privacidade</Link>.
              </p>
            </form>
          </div>

        </div>
      </Section>


      <Footer />
    </main>
  );
}


