"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/demos/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full items-end justify-center pt-16">
      <div
        className="absolute inset-0 h-full bg-cover"
        style={{
          backgroundImage:
            "url(/images/hero-bg.png)",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-brightness-[0.8]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 pb-20 text-white md:px-0">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between text-center lg:text-left gap-12 lg:gap-20">
          <div className="max-w-3xl space-y-6 lg:space-y-8">
            <h1 className="font-normal text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white tracking-tighter leading-[1.05]">
              Desenvolvendo Talentos para um <span className="italic font-bold text-[var(--accent)]">Futuro Melhor.</span>
            </h1>
 
            <p className="max-w-2xl font-light text-base sm:text-xl text-white/80 mx-auto lg:mx-0">
              Capacitando jovens e comunidades no Algarve para prosperar através de soluções inovadoras de formação e integração social.
            </p>
          </div>
          
          <div className="flex flex-col items-center lg:items-start gap-8 lg:gap-10 shrink-0">
            <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <Avatar
                    className="size-10 sm:size-12 border-2 border-[var(--accent)] transition-all duration-300 hover:grayscale-0"
                    key={i}
                  >
                    <AvatarImage
                      src={`https://images.cnippet.dev/image/upload/v1770400411/a${i+1}.jpg`}
                    />
                    <AvatarFallback>U{i}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="flex flex-col font-medium text-sm sm:text-base">
                <span className="text-xl sm:text-2xl font-bold text-[var(--accent)]">2500</span>
                <span className="text-white/60 uppercase tracking-widest text-[10px]">Pessoas Impactadas</span>
              </div>
            </div>
 
            <div className="flex w-fit">
              <Link 
                href="#contactos"
                className="group flex items-center transition-transform active:scale-95"
              >
                <div className="flex h-[56px] sm:h-[64px] items-center rounded-full bg-[var(--accent)] pl-8 sm:pl-10 pr-3 sm:pr-4 text-[var(--deep-blue)] font-bold duration-500 ease-in-out group-hover:bg-white shadow-xl shadow-black/20">
                  <span className="uppercase tracking-widest text-[10px] sm:text-sm mr-4 sm:mr-6">Quero Fazer Parte</span>
                  <div className="relative flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center overflow-hidden rounded-full bg-[var(--deep-blue)]/10 text-[var(--deep-blue)] transition-colors duration-500 group-hover:bg-[var(--deep-blue)] group-hover:text-white">
                    <ArrowUpRight className="absolute h-5 w-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-[150%] group-hover:-translate-y-[150%]" />
                    <ArrowUpRight className="absolute h-5 w-5 top-1/2 left-1/2 -translate-x-[150%] translate-y-[150%] transition-all duration-500 ease-in-out group-hover:-translate-x-1/2 group-hover:-translate-y-1/2" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
