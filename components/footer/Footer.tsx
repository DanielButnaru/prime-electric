import React from 'react';
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#09090b] text-[#FFFBF5] pt-32 pb-12 px-6 md:px-12 z-50 overflow-hidden flex flex-col justify-between" style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      
      {/* BACKGROUND TEXT/GRAFIC MASIV */}
      <div className="absolute top-10 left-0 w-full flex justify-center opacity-5 pointer-events-none select-none">
        <span className="text-[15rem] md:text-[25rem] font-serif italic tracking-tighter leading-none">PRIME</span>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-24">
        {/* PARTEA SUPERIOARĂ FOOTER - Call To Action Masiv */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
          <div className="flex flex-col gap-6 max-w-2xl">
            <h2 className="text-5xl md:text-7xl lg:text-8xl tracking-tight font-light uppercase leading-[0.9]">
              Gata de <br />
              <span className="text-prime-text-mut font-serif italic lowercase">proiectul</span> tău?
            </h2>
            <p className="text-prime-text-mut/60 font-light tracking-wide max-w-sm mt-4 text-sm md:text-base">
              Discută cu echipa noastră de ingineri. De la viziunea arhitecturală la implementarea tehnică de precizie.
            </p>
          </div>
          
          <div className="flex gap-4">
             <Button variant="outlineWhite" size="lg" className="rounded-full px-8 py-6 text-sm" asChild>
                <a href="/contact">Trimite un brief</a>
             </Button>
          </div>
        </div>

        {/* LINIE DE SEPARARE SUBȚIRE */}
        <div className="w-full h-[1px] bg-white/10" />

        {/* PARTEA DE JOS FOOTER - Linkuri și Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* LOCATIE / CONTACT */}
          <div className="col-span-1 md:col-span-1 flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest text-prime-text-mut mb-2">Locație</span>
            <span className="text-sm text-zinc-300">Iași, România</span>
            <span className="text-[10px] text-prime-text-mut/60 mt-1 max-w-44">Servicii de instalații electrice pentru proiecte rezidențiale și comerciale.</span>
          </div>

          {/* CONTACT */}
          <div className="col-span-1 md:col-span-1 flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest text-prime-text-mut mb-2">Contact</span>
            <a href="mailto:office@prime-electric.ro" className="text-sm md:text-base font-light hover:text-zinc-300 transition-colors">
              office@prime-electric.ro
            </a>
            <a href="tel:+40700000000" className="text-sm md:text-base text-prime-text-mut/60 font-light hover:text-white transition-colors mt-2">
              +40 740 000 000
            </a>
          </div>

          {/* MENIU RAPID */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] uppercase tracking-widest text-prime-text-mut mb-2">Navigație</span>
            <a href="/proiecte" className="text-sm text-zinc-300 uppercase tracking-widest hover:text-white transition-colors">Proiecte</a>
            <a href="/#expertise" className="text-sm text-zinc-300 uppercase tracking-widest hover:text-white transition-colors">Expertiză</a>
            <a href="/despre" className="text-sm text-zinc-300 uppercase tracking-widest hover:text-white transition-colors">Despre Noi</a>
          </div>

          {/* SOCIALS */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] uppercase tracking-widest text-prime-text-mut mb-2">Social</span>
            <a href="#" className="text-sm text-zinc-300 uppercase tracking-widest hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-sm text-zinc-300 uppercase tracking-widest hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-sm text-zinc-300 uppercase tracking-widest hover:text-white transition-colors">Facebook</a>
          </div>

          {/* LEGAL */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] uppercase tracking-widest text-prime-text-mut mb-2">Legal</span>
            <a href="/legal/privacy" className="text-sm text-zinc-300 uppercase tracking-widest hover:text-white transition-colors">Confidențialitate</a>
            <a href="/legal/terms" className="text-sm text-zinc-300 uppercase tracking-widest hover:text-white transition-colors">Termeni și Condiții</a>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-prime-text-mut uppercase tracking-widest pt-8 border-t border-white/5">
          <span>© {new Date().getFullYear()} Prime Electric. Toate drepturile rezervate.</span>
          <span className="mt-4 md:mt-0">Design Architectural & Engineering</span>
        </div>

      </div>
    </footer>
  );
}