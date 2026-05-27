"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import Link from "next/link";

const categories = ["Toate", "Rezidențial", "Comercial", "Smart Home", "Industrial"];

const projects = [
  {
    id: 1,
    title: "Vila Q — Iași",
    category: "Smart Home",
    slug: "vila-q",
    description: "Integrare completă KNX pentru controlul iluminatului și climatizării într-o reședință minimalistă.",
    image: "/proiect_1.webp",
    size: "large"
  },
  {
    id: 2,
    title: "Centru Afaceri",
    category: "Comercial",
    slug: "centru-afaceri",
    description: "Execuție tablouri electrice de forță și sistem de iluminat DALI pentru birouri Clasa A.",
    image: "/proiect_2.webp",
    size: "normal"
  },
  {
    id: 3,
    title: "Apartament Panoramic",
    category: "Rezidențial",
    slug: "apartament-panoramic",
    description: "Refacere completă instalație electrică și soluții de iluminat arhitectural.",
    image: "/proiect_3.webp",
    size: "normal"
  },
  {
    id: 4,
    title: "Showroom Auto",
    category: "Industrial",
    slug: "showroom-auto",
    description: "Infrastructură electrică branșament și management energetic.",
    image: "/panel.jpeg",
    size: "large"
  }
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("Toate");

  const filteredProjects = activeCategory === "Toate" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

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
        {/* Header Sectiune */}
        <div className="max-w-7xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] font-mono tracking-[0.5em] text-prime-text-mut uppercase block mb-6"
          >
            [ Portofoliu de Lucrări ]
          </motion.span>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-latienne italic font-light tracking-tighter leading-none"
          >
            Excelență în <br /> Execuție.
          </motion.h1>
        </div>

        {/* Filtre */}
        <div className="max-w-7xl mx-auto mb-16 flex flex-wrap gap-x-6 gap-y-4 md:gap-8 border-b border-prime-border pb-4 md:pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] uppercase tracking-[0.2em] transition-all duration-300 relative py-2 ${
                activeCategory === cat ? "text-prime-text-main" : "text-prime-text-mut hover:text-prime-text-main"
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div 
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-prime-text-main"
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid Proiecte */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative overflow-hidden bg-prime-bg-sec border border-prime-border cursor-pointer ${
                  project.size === "large" ? "lg:col-span-8" : "lg:col-span-4"
                }`}
              >
                <Link href={project.slug ? `/proiecte/${project.slug}` : "#"}>
                  <div className="aspect-16/10 md:aspect-auto md:h-125 overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <span className="text-white text-[10px] uppercase tracking-[0.3em] border border-white/30 px-6 py-2 backdrop-blur-sm">Vezi Detalii Proiect</span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[10px] uppercase tracking-widest text-prime-text-mut">{project.category}</span>
                      <span className="text-[10px] font-mono text-prime-text-mut">/ 0{project.id}</span>
                    </div>
                    <h3 className="text-2xl font-serif italic mb-2">{project.title}</h3>
                    <p className="text-sm text-prime-text-mut font-light line-clamp-2">{project.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
}
