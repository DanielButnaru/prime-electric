"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import { ArrowLeft, CheckCircle2, Lightbulb, ClipboardList, PenTool, Zap } from "lucide-react";
import Link from "next/link";

export default function ProjectDetailsPage() {
  // Exemplu de date pentru un proiect (ar putea veni dintr-un CMS/JSON ulterior)
  const project = {
    title: "Vila Q — Iași",
    client: "Privat",
    location: "Bârnova, Iași",
    year: "2024",
    category: "Smart Home & Rezidențial",
    heroImage: "/proiect_1.webp",
    brief: "Beneficiarul a solicitat o locuință ultra-modernă, unde tehnologia să fie complet integrată în arhitectura minimalistă, fără elemente tehnice vizibile, dar cu un control granular asupra tuturor sistemelor.",
    steps: [
      {
        id: "01",
        title: "Audit & Consultanță",
        icon: <ClipboardList className="w-6 h-6" />,
        description: "Am început prin analiza planurilor arhitecturale. Am discutat cu clientul timp de 6 ore despre rutinele zilnice pentru a înțelege exact cum vor fi folosite spațiile."
      },
      {
        id: "02",
        title: "Analiza Soluțiilor",
        icon: <Lightbulb className="w-6 h-6" />,
        description: "Am evaluat 3 protocoale diferite (KNX, Loxone, Zigbee). Am optat pentru KNX pe magistrală datorită fiabilității pe termen lung și a posibilității de extindere ulterioară."
      },
      {
        id: "03",
        title: "Proiectare Tehnică",
        icon: <PenTool className="w-6 h-6" />,
        description: "Realizarea schemelor monofilare pentru cele 4 tablouri electrice. Am planificat peste 3.5km de cablu pentru a asigura redundanța sistemelor de senzori."
      },
      {
        id: "04",
        title: "Execuție & Cablaj",
        icon: <Zap className="w-6 h-6" />,
        description: "Echipa noastră a implementat infrastructura în 14 zile. Fiecare cablu a fost etichetat digital pentru a facilita mentenanța viitoare."
      },
      {
        id: "05",
        title: "Programare & Predare",
        icon: <CheckCircle2 className="w-6 h-6" />,
        description: "Configurarea scenariilor de iluminat architectural (DALI). Predarea sistemului a inclus o sesiune de training cu beneficiarul și instalarea aplicației de control."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-prime-bg-main text-prime-text-main font-sans">
      <Navbar isTransparent={false} />

      <main className="pt-32 pb-24">
        {/* Intro Section */}
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
        <section className="w-full h-[70vh] relative mb-32 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto h-full overflow-hidden rounded-sm">
             <img src={project.heroImage} className="w-full h-full object-cover grayscale brightness-75" alt={project.title} />
          </div>
        </section>

        {/* Process */}
        <section className="px-6 lg:px-12 mb-32">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-serif italic mb-16 border-b border-prime-border pb-8 leading-none">Călătoria Tehnologică</h2>
            
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
              Tehnologie invizibilă, <br /> control absolut.
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-16 w-full">
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-light">3.5km</span>
                <span className="text-[9px] uppercase tracking-widest text-white/50">Cablaj KNX</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-light">48</span>
                <span className="text-[9px] uppercase tracking-widest text-white/50">Canale Dimmabile</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-light">4</span>
                <span className="text-[9px] uppercase tracking-widest text-white/50">Tablouri Electrice</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-light">0.05ms</span>
                <span className="text-[9px] uppercase tracking-widest text-white/50">Latență Rețea</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 lg:px-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-latienne italic mb-12">Vrei o soluție similară pentru spațiul tău?</h2>
            <Link href="/contact" className="px-12 py-6 rounded-full bg-prime-text-main text-prime-bg-main uppercase tracking-widest text-sm inline-block hover:scale-105 transition-transform duration-300">
              Discută cu un inginer
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
