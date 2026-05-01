"use client";
 
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
 
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);
 
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
 
  const navLinks = [
    { name: "MISSÃO", href: "#missao" },
    { name: "OBJETIVOS", href: "#objetivos" },
    { name: "PARCEIROS", href: "#parceiros" },
    { name: "BLOG", href: "/#blog" },
    { name: "ASSOCIE-SE", href: "/#cta-associar" },
    { name: "CONTACTOS", href: "#contactos" },
  ];
 
  return (
    <header className={`fixed top-0 left-0 w-full h-[72px] z-[1000] flex items-center transition-all duration-300 ${
      scrolled 
        ? "bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm" 
        : "bg-transparent border-b border-transparent"
    }`}>
      <div className="container mx-auto max-w-7xl px-6 flex justify-between items-center relative z-[1002]">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="size-10 overflow-hidden rounded-full shadow-lg shrink-0">
            <img 
              src="/images/logo.png" 
              alt="TU" 
              className="h-10 w-auto max-w-none object-cover object-left" 
            />
          </div>
          <div className={`flex flex-col leading-[1.1] font-bold transition-colors duration-300 ${
            scrolled || mobileMenuOpen ? "text-[var(--deep-blue)]" : "text-white"
          }`}>
            <span className="text-[6px] tracking-[0.25em] opacity-70 mb-0.5">ASSOCIAÇÃO</span>
            <span className="text-[14px] sm:text-[16px] tracking-tighter uppercase font-black">Talentos</span>
            <span className="text-[14px] sm:text-[16px] tracking-tighter uppercase font-black">Unidos</span>
          </div>
        </Link>
 
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className={`text-[11px] font-bold tracking-widest transition-colors ${
                    scrolled ? "text-slate-600 hover:text-[var(--accent-dark)]" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link 
            href="#contactos" 
            className={`text-[11px] font-black px-6 py-2.5 rounded-full transition-all uppercase tracking-widest ${
              scrolled 
                ? "bg-[var(--deep-blue)] text-white hover:bg-black" 
                : "bg-[var(--accent)] text-[var(--deep-blue)] hover:bg-white"
            }`}
          >
            Fale Connosco
          </Link>
        </nav>
 
        {/* Mobile Controls */}
        <div className="flex items-center gap-4 lg:hidden">
          <Link 
            href="#contactos" 
            className={`text-[10px] font-black px-4 py-2 rounded-full transition-all uppercase tracking-widest ${
              scrolled || mobileMenuOpen
                ? "bg-[var(--deep-blue)] text-white" 
                : "bg-[var(--accent)] text-[var(--deep-blue)]"
            }`}
          >
            Fale Connosco
          </Link>
          <button 
            onClick={toggleMobileMenu}
            className={`p-2 transition-colors ${
              scrolled || mobileMenuOpen ? "text-[var(--deep-blue)]" : "text-white"
            }`}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
 
      {/* Mobile Menu Overlay */}
      <div className={`fixed top-0 left-0 w-full h-[100dvh] bg-white z-[1001] transition-transform duration-500 lg:hidden flex flex-col ${
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        {/* Padding for the fixed header height */}
        <div className="h-[72px] shrink-0" />
        
        <div className="flex-1 overflow-y-auto px-8 py-12 flex flex-col">
          <nav className="mb-12">
            <ul className="space-y-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl font-bold text-[var(--deep-blue)] tracking-tighter hover:text-[var(--accent-dark)] transition-colors block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="mt-auto pt-10 border-t border-slate-100">
            <p className="text-[10px] text-slate-400 mb-6 font-bold tracking-[0.2em] uppercase">Siga-nos nas Redes Sociais</p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/associacaotalentosunidos/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-[var(--deep-blue)] hover:bg-[var(--accent)] transition-all"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a 
                href="https://www.instagram.com/associacao_talentos_unidos" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-[var(--deep-blue)] hover:bg-[var(--accent)] transition-all"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
 
export default Navigation;
