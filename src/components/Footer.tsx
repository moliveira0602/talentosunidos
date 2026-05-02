import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="size-12 shrink-0 flex items-center justify-center">
                <img src="/images/logo_icon.png" alt="Talentos Unidos" className="h-full w-auto object-contain" />
              </div>
              <div className="flex flex-col leading-[1.1] font-bold text-[var(--deep-blue)] uppercase">
                <span className="text-[7px] tracking-[0.25em] opacity-70 mb-0.5">ASSOCIAÇÃO</span>
                <span className="text-[17px] tracking-tighter font-black">Talentos</span>
                <span className="text-[17px] tracking-tighter font-black">Unidos</span>
              </div>
            </div>
            <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
              Associação sem fins lucrativos dedicada ao desenvolvimento de talentos e integração social no Algarve.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-black mb-6">Institucional</h4>
            <ul className="space-y-3">
              <li><Link href="#missao" className="text-sm text-slate-500 hover:text-black transition-colors">Missão</Link></li>
              <li><Link href="#objetivos" className="text-sm text-slate-500 hover:text-black transition-colors">Objetivos</Link></li>
              <li><Link href="#direcao" className="text-sm text-slate-500 hover:text-black transition-colors">Direção</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-black mb-6">Comunidade</h4>
            <ul className="space-y-3">
              <li><Link href="#parceiros" className="text-sm text-slate-500 hover:text-black transition-colors">Parceiros</Link></li>
              <li><Link href="/#blog" className="text-sm text-slate-500 hover:text-black transition-colors">Blog</Link></li>
              <li><Link href="/#cta-associar" className="text-sm text-slate-500 hover:text-black transition-colors">Associe-se</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-black mb-6">Suporte</h4>
            <ul className="space-y-3">
              <li><Link href="#contactos" className="text-sm text-slate-500 hover:text-black transition-colors">Contactos</Link></li>
              <li><Link href="/privacidade" className="text-sm text-slate-500 hover:text-black transition-colors">Privacidade</Link></li>
              <li><Link href="/termos" className="text-sm text-slate-500 hover:text-black transition-colors">Termos</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-400">
          <p suppressHydrationWarning>&copy; {new Date().getFullYear()} Talentos Unidos. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a 
              href="https://www.facebook.com/associacaotalentosunidos/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="size-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[var(--deep-blue)] hover:text-white transition-all shadow-sm"
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a 
              href="https://www.instagram.com/associacao_talentos_unidos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="size-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[var(--deep-blue)] hover:text-white transition-all shadow-sm"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
