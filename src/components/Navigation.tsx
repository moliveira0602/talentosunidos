"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full h-[64px] z-50 flex items-center transition-all duration-300 ${
      scrolled 
        ? "bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm" 
        : "bg-transparent border-b border-transparent"
    }`}>
      <div className="container mx-auto max-w-7xl px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="size-11 overflow-hidden rounded-full shadow-lg shrink-0">
            <img 
              src="/images/logo.png" 
              alt="TU" 
              className="h-11 w-auto max-w-none object-cover object-left" 
            />
          </div>
          <div className={`flex flex-col leading-[1.1] font-bold transition-colors duration-300 ${
            scrolled ? "text-[var(--deep-blue)]" : "text-white"
          }`}>
            <span className="text-[7px] tracking-[0.25em] opacity-70 mb-0.5">ASSOCIAÇÃO</span>
            <span className="text-[17px] tracking-tighter uppercase font-black">Talentos</span>
            <span className="text-[17px] tracking-tighter uppercase font-black">Unidos</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            <li><Link href="#missao" className={`text-sm font-medium transition-colors ${scrolled ? "text-slate-600 hover:text-slate-900" : "text-white/80 hover:text-white"}`}>MISSÃO</Link></li>
            <li><Link href="#objetivos" className={`text-sm font-medium transition-colors ${scrolled ? "text-slate-600 hover:text-slate-900" : "text-white/80 hover:text-white"}`}>OBJETIVOS</Link></li>
            <li><Link href="#parceiros" className={`text-sm font-medium transition-colors ${scrolled ? "text-slate-600 hover:text-slate-900" : "text-white/80 hover:text-white"}`}>PARCEIROS</Link></li>
            <li><Link href="/#blog" className={`text-sm font-medium transition-colors ${scrolled ? "text-slate-600 hover:text-slate-900" : "text-white/80 hover:text-white"}`}>BLOG</Link></li>
            <li><Link href="/#cta-associar" className={`text-sm font-medium transition-colors ${scrolled ? "text-slate-600 hover:text-slate-900" : "text-white/80 hover:text-white"}`}>ASSOCIE-SE</Link></li>
            <li><Link href="#contactos" className={`text-sm font-medium transition-colors ${scrolled ? "text-slate-600 hover:text-slate-900" : "text-white/80 hover:text-white"}`}>CONTACTOS</Link></li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="#contactos" className={`text-sm font-black px-6 py-3 rounded-full transition-all uppercase tracking-wider ${
            scrolled 
              ? "bg-[var(--deep-blue)] text-white hover:bg-black" 
              : "bg-[var(--accent)] text-[var(--deep-blue)] hover:bg-white"
          }`}>
            Fale Connosco
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation;

