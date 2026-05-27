"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import ContactFormArchitectural from "@/components/forms/ContactFormArchitectural";

export default function ContactPage() {
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

      <main className="pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-12 lg:gap-24">
            
            {/* Info Stanga */}
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-between py-8">
              <div>
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[10px] font-mono tracking-[0.5em] text-prime-text-mut uppercase block mb-8"
                >
                  [ Contact ]
                </motion.span>
                <motion.h1 
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-5xl md:text-8xl font-latienne italic font-light tracking-tighter leading-none mb-12"
                >
                  Să dăm viață <br /> proiectului tău.
                </motion.h1>

                <div className="flex flex-col gap-10">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] uppercase tracking-widest text-prime-text-mut">E-mail General</span>
                    <a href="mailto:office@prime-electric.ro" className="text-xl md:text-2xl font-light hover:text-prime-text-mut transition-colors underline underline-offset-8">
                      office@prime-electric.ro
                    </a>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] uppercase tracking-widest text-prime-text-mut">Telefon</span>
                    <a href="tel:+40740000000" className="text-xl md:text-2xl font-light hover:text-prime-text-mut transition-colors">
                      +40 740 000 000
                    </a>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] uppercase tracking-widest text-prime-text-mut">Locație & Operare</span>
                    <p className="text-lg font-light">Iași, România</p>
                    <p className="text-sm text-prime-text-mut italic">Disponibilitate pentru proiecte regionale și naționale.</p>
                  </div>
                </div>
              </div>

              {/* Technical Detail */}
              <div className="mt-20 pt-12 border-t border-prime-border hidden lg:block">
                 <div className="flex items-center gap-6">
                    <div className="flex flex-col">
                       <span className="text-[9px] font-mono text-prime-text-mut uppercase tracking-widest">Latitudine</span>
                       <span className="text-xs">44.4268° N</span>
                    </div>
                    <div className="w-px h-8 bg-prime-border" />
                    <div className="flex flex-col">
                       <span className="text-[9px] font-mono text-prime-text-mut uppercase tracking-widest">Longitudine</span>
                       <span className="text-xs">26.1025° E</span>
                    </div>
                 </div>
              </div>
            </div>

            {/* Formular Dreapta */}
            <div className="col-span-12 lg:col-span-7 bg-prime-bg-sec p-8 md:p-16 border border-prime-border relative overflow-hidden">
               <div className="relative z-10">
                 <h2 className="text-2xl md:text-3xl font-serif mb-12">Trimite-ne un mesaj stucturat</h2>
                 <ContactFormArchitectural />
               </div>
               
               {/* Decorative Grid */}
               <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                 <svg width="100" height="100" viewBox="0 0 100 100">
                    <path d="M0 20h100M0 40h100M0 60h100M0 80h100M20 0v100M40 0v100M60 0v100M80 0v100" stroke="currentColor" fill="none" />
                 </svg>
               </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
