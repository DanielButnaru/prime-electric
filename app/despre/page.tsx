"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-prime-bg-main text-prime-text-main">
      <Navbar
        isTransparent={false}
        links={[
          { label: "Expertiză", href: "/#expertise" },
          { label: "Proiecte", href: "/proiecte" },
          { label: "Despre", href: "/despre" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <main className="pt-32 pb-24">
        {/* Intro */}
        <section className="px-6 lg:px-12 mb-32">
          <div className="max-w-7xl mx-auto">
             <motion.span 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="text-[10px] font-mono tracking-[0.5em] text-prime-text-mut uppercase block mb-8"
             >
               [ Filosofia Noastră ]
             </motion.span>
             <h1 className="text-5xl md:text-8xl font-latienne italic font-light tracking-tighter leading-none mb-16">
               Dincolo de <br /> cablaje.
             </h1>
             <div className="grid grid-cols-12 gap-8 md:gap-16">
                <div className="col-span-12 lg:col-span-6">
                   <p className="text-lg md:text-2xl leading-relaxed font-light">
                      La Prime Electric, privim instalația electrică ca pe coloana vertebrală a oricărui spațiu. Nu este vorba doar despre a aduce curent, ci despre a crea o infrastructură sigură, eficientă și inteligentă care să dispară în fundal, lăsând loc experienței umane.
                   </p>
                </div>
                <div className="col-span-12 lg:col-span-6 flex flex-col gap-8 opacity-70">
                   <p className="text-sm md:text-base leading-relaxed">
                      Echipa noastră din Iași reunește ingineri și tehnicieni cu o viziune clară: excelența tehnică nu este negociabilă. De la audituri inițiale complexe până la implementări de tip smart home (KNX, DALI), fiecare gest tehnic este ghidat de precizie.
                   </p>
                   <div className="w-full h-px bg-prime-border" />
                   <p className="text-sm md:text-base leading-relaxed italic">
                      "Performanța unei clădiri moderne stă în calitatea infrastructurii sale invizibile."
                   </p>
                </div>
             </div>
          </div>
        </section>

        {/* Imagine Full Width */}
        <section className="w-full h-[60vh] relative overflow-hidden mb-32">
           <img src="/hero.jpg" className="w-full h-full object-cover grayscale opacity-50" alt="Work Process" />
           <div className="absolute inset-0 bg-black/20" />
        </section>

        {/* Valori */}
        <section className="px-6 lg:px-12 mb-32">
           <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                 <div className="flex flex-col gap-6">
                    <span className="text-3xl font-serif italic text-prime-text-mut">01.</span>
                    <h3 className="text-xl uppercase tracking-widest font-light">Integritate</h3>
                    <p className="text-sm text-prime-text-mut leading-relaxed">Folosim doar materiale certificate și respectăm normativul I7 fără nicio excepție.</p>
                 </div>
                 <div className="flex flex-col gap-6">
                    <span className="text-3xl font-serif italic text-prime-text-mut">02.</span>
                    <h3 className="text-xl uppercase tracking-widest font-light">Inovație</h3>
                    <p className="text-sm text-prime-text-mut leading-relaxed">Suntem la curent cu cele mai noi protocoale de automatizare (KNX, Zigbee, DALI).</p>
                 </div>
                 <div className="flex flex-col gap-6">
                    <span className="text-3xl font-serif italic text-prime-text-mut">03.</span>
                    <h3 className="text-xl uppercase tracking-widest font-light">Suport</h3>
                    <p className="text-sm text-prime-text-mut leading-relaxed">Oferim mentenanță și asistență post-execuție pentru toate sistemele noastre.</p>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
