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

      <div className="relative z-10 w-full max-w-7xl px-6 pb-20 text-center text-white md:px-0">
        <div className="flex items-center justify-between text-left">
          <div className="max-w-3xl space-y-6">
            <h1 className="font-normal text-5xl text-white tracking-tighter md:text-7xl">
              Desenvolvendo Talentos para um Futuro Melhor
            </h1>

            <p className="max-w-2xl font-light text-lg text-white/90 md:text-xl">
              Capacitando jovens e comunidades no Algarve para prosperar através de soluções inovadoras de formação e integração social.
            </p>
          </div>
          <div className="mt-auto space-y-7">
            <div className="mt-8 flex flex-wrap items-center gap-3 lg:mt-auto">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <Avatar
                    className="size-12 border-2 border-[var(--accent)] transition-all duration-300 hover:grayscale-0 dark:border-[var(--accent)]"
                    key={i}
                  >
                    <AvatarImage
                      src={`https://images.cnippet.dev/image/upload/v1770400411/a${i+1}.jpg`}
                    />
                    <AvatarFallback>U{i}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="flex flex-col font-normal text-sm">
                <span className="text-base sm:text-lg">+5000</span>
                <span className="">Pessoas Impactadas</span>
              </div>
            </div>
            <div className="flex w-fit">
              <Link 
                href="#contactos"
                className="group flex items-center gap-3 transition-transform active:scale-95"
              >
                <div className="flex h-[60px] items-center justify-center rounded-full bg-[var(--accent)] px-10 text-[var(--deep-blue)] font-bold duration-500 ease-in-out group-hover:bg-white uppercase tracking-widest text-sm shadow-xl shadow-black/10">
                  Fale Connosco
                </div>
                <div className="relative flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-full bg-[var(--accent)] text-[var(--deep-blue)] duration-500 ease-in-out group-hover:bg-white shadow-xl shadow-black/10">
                  <ArrowUpRight className="absolute h-6 w-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-[150%] group-hover:-translate-y-[150%]" />
                  <ArrowUpRight className="absolute h-6 w-6 top-1/2 left-1/2 -translate-x-[150%] translate-y-[150%] transition-all duration-500 ease-in-out group-hover:-translate-x-1/2 group-hover:-translate-y-1/2" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
