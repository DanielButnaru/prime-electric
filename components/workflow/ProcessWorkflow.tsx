"use client";
import React from "react";
import { motion } from "framer-motion";

const processSteps = [
  {
    number: "01",
    title: "Audit & Consultanță",
    description: "Analizăm detaliat planurile arhitecturale și cerințele specifice pentru a stabili cadrul tehnologic optim."
  },
  {
    number: "02",
    title: "Proiectare Tehnologică",
    description: "Dezvoltăm scheme de cablare și arhitecturi de sistem la standarde globale, vizând siguranța și versatilitatea (ex. KNX, DALI)."
  },
  {
    number: "03",
    title: "Execuție de Precizie",
    description: "Manevrăm traseele și tablourile electrice cu rigurozitate milimetrică, asigurând un backbone curat, invizibil și perfomant."
  },
  {
    number: "04",
    title: "Integrare & Predare",
    description: "Programăm scenariile inteligente, calibram funcțiile și predăm controlul absolut al sistemului către beneficiar."
  }
];

export default function ProcessWorkflow() {
  return (
    <div className="w-full flex flex-col gap-0 border-t border-prime-border">
      {processSteps.map((step, index) => (
        <motion.div 
          key={step.number}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="group flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-8 items-start py-10 md:py-16 border-b border-prime-border hover:bg-zinc-50 transition-colors duration-500 cursor-default px-0"
        >
          {/* Numărul - foarte masiv, Serif */}
          <div className="flex justify-start md:col-span-3 lg:justify-center items-start">
            <span className="text-4xl md:text-7xl font-serif italic font-light text-zinc-300 group-hover:text-prime-text-main transition-colors duration-500">
              {step.number}
            </span>
          </div>

          {/* Titlul și descrierea  */}
          <div className="flex flex-col gap-3 md:col-span-6 md:gap-4 w-full">
            <h3 className="text-xl md:text-3xl font-light uppercase tracking-tight text-prime-text-main">
              {step.title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-prime-text-mut font-light max-w-full md:max-w-lg">
              {step.description}
            </p>
          </div>

          {/* Săgeata decorativă dreapta */}
          <div className="hidden md:flex col-span-12 md:col-span-3 justify-end pr-8 lg:pr-12 items-center h-full opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
             <span className="text-prime-text-mut/60">→</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}