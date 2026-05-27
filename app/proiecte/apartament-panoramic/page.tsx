"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import { ArrowLeft, CheckCircle2, Home, Scissors, Zap, Cpu, Settings } from "lucide-react";
import Link from "next/link";

export default function PanoramicApartmentPage() {
  const project = {
    title: "Apartament Panoramic",
    client: "Privat",
    location: "Copou, Iași",
    year: "2024",
    category: "Rezidențial",
    heroImage: "/proiect_3.webp",
    brief: "Refacerea completă a instalației electrice pentru un apartament de tip penthouse, punând accent pe scenarii de iluminat arhitectural și eficientizarea consumului într-un spațiu de locuit modern.",
    steps: [
      {
        id: "01",
        title: "Dezafectare & Audit",
        icon: <Scissors className="w-6 h-6" />,
        description: "Îndepărtarea vechii instalații de aluminiu și auditarea structurii pentru a optimiza noile trasee fără a afecta integritatea pereților."
      },
      {
        id: "02",
        title: "Configurare Tablou",
        icon: <Settings className="w-6 h-6" />,
        description: "Proiectarea unui tablou electric local cu 36 de posturi, incluzând protecții diferențiale dedicate pentru fiecare zonă umedă."
      },
      {
        id: "03",
        title: "Iluminat Arhitectural",
        icon: <Cpu className="w-6 h-6" />,
        description: "Instalarea sistemelor de profile LED integrate în plafon și configurarea dimming-ului pe 5 zone independente."
      },
      {
        id: "04",
        title: "Smart Control",
        icon: <Home className="w-6 h-6" />,
        description: "Integrarea controlului prin smartphone pentru iluminat și climatizare, oferind locatarilor confort total de la distanță."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-prime-bg-main text-prime-text-main font-sans">
      <Navbar isTransparent={false} />

      <main className="pt-32 pb-24">
        {/* Intro */}
        <section className="px-6 lg:px-12 mb-20">
          <div className="max-w-7xl mx-auto">
            <Link href="/proiecte" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-prime-text-mut hover:text-prime-text-main transition-colors mb-12 group">
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
              Înapoi la portofoliu
            </Link>
            
            <div className="grid grid-cols-12 gap-8 md:gap-16 items-start">
              <div className="col-span-12 lg:col-span-8">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl md:text-8xl font-latienne italic font-light tracking-tighter leading-none mb-8"
                >
                  {project.title}
                </motion.h1>
                <p className="text-xl md:text-2xl font-light text-prime-text-mut leading-relaxed max-w-2xl">
                  {project.brief}
                </p>
              </div>

              <div className="col-span-12 lg:col-span-4 grid grid-cols-2 gap-8 pt-4">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-prime-text-mut/60 mb-1">Locație</span>
                  <span className="text-sm font-medium">{project.location}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-prime-text-mut/60 mb-1">An finalizare</span>
                  <span className="text-sm font-medium">{project.year}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-prime-text-mut/60 mb-1">Categorie</span>
                  <span className="text-sm font-medium">{project.category}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-prime-text-mut/60 mb-1">Client</span>
                  <span className="text-sm font-medium">{project.client}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Media */}
        <section className="w-full h-[60vh] relative mb-32 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto h-full overflow-hidden rounded-sm">
             <img src="/proiect_3.webp" className="w-full h-full object-cover grayscale brightness-50" alt={project.title} />
          </div>
        </section>

        {/* Process */}
        <section className="px-6 lg:px-12 mb-32">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-serif italic mb-16 border-b border-prime-border pb-8 leading-none">Viziune Tehnică Rezidențială</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-12">
              {project.steps.map((step, idx) => (
                <div key={idx} className="flex flex-col gap-6 group">
                  <div className="flex items-center justify-between border-l-2 border-prime-border pl-6 transition-all duration-500 group-hover:border-prime-text-main">
                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] font-mono text-prime-text-mut uppercase">Etapa {step.id}</span>
                      <h3 className="text-xl uppercase tracking-widest font-light">{step.title}</h3>
                    </div>
                    <div className="w-12 h-12 flex items-center justify-center text-prime-text-mut group-hover:text-prime-text-main transition-colors duration-500">
                      {step.icon}
                    </div>
                  </div>
                  <p className="text-sm text-prime-text-mut leading-relaxed pl-6">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="bg-prime-text-main text-prime-bg-main py-32 px-6 lg:px-12 mb-32">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <span className="text-[10px] font-mono tracking-[0.5em] uppercase mb-8">
              [ Rezultatul Final ]
            </span>
            <h3 className="text-4xl md:text-6xl font-latienne italic leading-tight max-w-4xl mb-12">
              Confort, siguranță și un design <br /> optic de excepție.
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-16 w-full">
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-light">1.2km</span>
                <span className="text-[9px] uppercase tracking-widest text-white/50">Cablaj Cupru</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-light">36</span>
                <span className="text-[9px] uppercase tracking-widest text-white/50">Posturi Tablou</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-light">5</span>
                <span className="text-[9px] uppercase tracking-widest text-white/50">Zone Dimming</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-light">100%</span>
                <span className="text-[9px] uppercase tracking-widest text-white/50">Siguranță Tehnică</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 lg:px-12 text-center">
          <div className="max-w-4xl mx-auto">
            <Link href="/contact" className="px-12 py-6 rounded-full border border-prime-text-main text-prime-text-main uppercase tracking-widest text-sm inline-block hover:bg-prime-text-main hover:text-prime-bg-main transition-all duration-300">
              Transformă-ți Locuința
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
