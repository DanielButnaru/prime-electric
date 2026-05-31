"use client";
import React, { useRef } from "react";
import Navbar from "../components/nav/Navbar";
import Hero from "../components/hero/Hero";
import OldFooter from "../components/layout/Footer";
import Footer from "../components/footer/Footer";
import ExpertiseBento from "../components/expertise/ExpertiseBento";
import type { Feature, FAQItem as FAQType, CTA } from "../types/landing";
import ContentSections from "../components/layout/MainContentSection";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
// CORECTAT: Schimbat importul din folderul de componente pentru a nu crăpa la build-ul Next.js
import ProjectsCinematicSlider from "../components/layout/ProjectsCinematicSlider";

// Features adaptate pentru o firmă de electricieni premium în Iași
const features: Feature[] = [
  {
    id: "f1",
    title: "Execuție Tablouri Electrice",
    description:
      "Asamblare și cablare profesională pentru tablouri de distribuție și automatizare, conform normativului I7.",
  },
  {
    id: "f2",
    title: "Instalații Case & Apartamente",
    description:
      "Cablaj structurat, circuite de forță și iluminat pentru proiecte rezidențiale noi sau renovări de amploare în Iași.",
  },
  {
    id: "f3",
    title: "Sisteme Smart Home",
    description:
      "Configurare și integrare KNX, DALI și Control4 pentru un control total asupra confortului și eficienței energetice.",
  },
];

const faqs: FAQType[] = [
  {
    id: "q1",
    question: "Cum integrați sistemele inteligente în arhitecturi minimaliste?",
    answer:
      "Filosofia noastră se bazează pe conceptul de 'infrastructură invizibilă'. Colaborăm strâns cu arhitecții și designerii de interior încă din faza de concept pentru a ascunde elementele tehnice (senzori, panouri, cabluri) lăsând la vedere doar interfețele de control absolut necesare. Folosim protocoale DALI și KNX care permit rutări elegante și reduceri semnificative de cablaj la vedere.",
  },
  {
    id: "q2",
    question: "Care este durata medie pentru implementarea unui proiect premium?",
    answer:
      "Fiecare lucrare are propria dinamică, dictată de complexitatea structurală și viziunea beneficiarului. În general, faza de audit și proiectare durează între 2 și 4 săptămâni, urmată de execuția fizică etapizată în funcție de ritmul șantierului. Oferim o planificare transparentă și un calendar extrem de riguros la semnarea contractului.",
  },
  {
    id: "q3",
    question: "Asigurați mentenanță post-predare pentru ecosistemele create?",
    answer:
      "Desigur. Odată ce predăm un proiect, intrăm într-o fază de monitorizare activă. Tehnologiile pe care le implementăm permit diagnosticarea de la distanță pentru a rezolva eventuale setări de software instantaneu. Pentru intervențiile fizice, echipele noastre de suport răspund cu prioritate maximă pentru menținerea confortului dumneavoastră.",
  },
  {
    id: "q4",
    question: "Puteți prelua proiecte de iluminat arhitectural complexe?",
    answer:
      "Iluminatul reprezintă coloana vertebrală a atmosferei dintr-un spațiu de lux. Suntem specializați în crearea și implementarea scenariilor complexe de lumină. Calculăm temperaturile de culoare, unghiurile de reflexie și integrăm corpuri de iluminat ascunse pentru a modela volumele spațiale exact așa cum au fost ele gândite de echipa de arhitectură.",
  },
];

const ctas: CTA[] = [
  { label: "Inițiază un proiect", href: "#features", variant: "primary" },
  { label: "Standardele noastre", href: "#features", variant: "secondary" },
];

export default function Home() {
  const introRef = useRef<HTMLDivElement>(null);
  
  // Utilizăm useScroll pe containerul textului pentru a anima opacitatea si parallax-ul
  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ["start 80%", "end start"]
  });

  // Imaginea pornește de "sus" (y = -150) ca să poată "coborî în jos" spre locul ei (y = 0)
  // devine transparentă la 0, iar când ajunge la final e 100% (1) vizibilă.
  const opacityIcon = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0, 1, 1, 0]);
  const yIcon = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [-150, 0, 0, 100]); 
  
  // Partea de text pornește ușor diferit pentru a lăsa spațiu imaginii să pice prima
  const opacityText = useTransform(scrollYProgress, [0.1, 0.5, 0.7, 1], [0, 1, 1, 0]);
  const yText = useTransform(scrollYProgress, [0.1, 0.5, 0.7, 1], [50, 0, 0, -50]);

  // Se așază frumos pe zero
  const rotateIcon = useTransform(scrollYProgress, [0, 0.4], [-15, 0]);

  return (
    <div className="min-h-screen font-sans text-prime-text-main bg-prime-bg-main">
      <Navbar
        links={[
          { label: "Expertiză", href: "#expertise" },
          { label: "Proiecte", href: "/proiecte" },
          { label: "Despre", href: "/despre" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <main>
        {/* 1. HERO CONTAINER (Crestem Z-ul pentru a acoperi GridLines in aceasta sectiune) */}
        <div className="relative h-screen w-full overflow-hidden z-20">
          <Hero
            title="Inginerie de precizie pentru medii moderne"
            subtitle="Ridicăm instalațiile electrice standard la nivelul unei infrastructuri sofisticate, sigure și eficiente."
            ctas={ctas}
            media={
              <Image
                src="/hero.jpg"
                alt="Instalații electrice de precizie - Prime Electric Iași"
                fill
                priority
                className="object-cover opacity-50"
                sizes="100vw"
              />
            }
          />
        </div>

        {/* SECȚIUNE DE INTRODUCERE DECLARATIVĂ (Animație legată progresiv de scroll, inspirată de referință) */}
        <div ref={introRef} className="h-screen bg-prime-bg-main relative flex flex-col justify-center items-center">
          <div className="grid grid-cols-12 gap-8 w-full px-4 lg:px-12">
            <div className="flex flex-col gap-8 order-2 col-span-12 justify-center items-center lg:order-0">
              <motion.div 
                style={{ opacity: opacityIcon, y: yIcon, rotate: rotateIcon }}
                className="flex justify-center mb-6"
              >
                {/* Poti inlocui path-ul de mai jos cu un SVG/Logo propriu (gen o sigla vectoriala simpla) */}
                <div className="w-16 h-16 rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center">
                  <span className="text-zinc-500 font-serif italic text-2xl">P</span>
                </div>
              </motion.div>
              
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="overflow-hidden pt-4"
                >
                  <motion.div 
                    variants={{
                      hidden: { y: "120%", opacity: 0 },
                      visible: { y: 0, opacity: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 } }
                    }}
                  >
                    <p className="text-base tracking-[0.15em] uppercase text-prime-text-main max-w-xs text-center md:max-w-2xl md:text-lg leading-relaxed md:leading-loose font-sans font-light">
                      De peste 10 ani concepând și executând infrastructuri electrice premium, Prime Electric transformă viziunile arhitecturale în realități tehnologice sigure, reflectând o înțelegere profundă a inovației și performanței absolut necesare mediului modern.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>

        {/* Am modificat fundalul containerului global (main) și al secțiunilor din `bg-prime-bg-main` în `bg-prime-bg-main` */}
        <div className="bg-prime-bg-main">
          {/* 2. CINEMATIC SCROLL */}
          {/* 3. SECȚIUNEA CONȚINUT (Z-50: Vine din urmă și acoperă sliderul la final de scroll) */}
          <div className="relative w-full z-50  pb-24 ">
            {/* Trecerea progresivă de la slider-ul de proiecte la foaia albă */}
            {/* 2. SECȚIUNEA CINEMATICĂ DE PROIECTE (Z-40: Urcă fluid peste Hero când pornește scroll-ul) */}
            <div id="projects" className="relative z-40 bg-[#09090b]">
              <ProjectsCinematicSlider />
            </div>

            {/* SECTIUNEA DE EXPERTIZĂ (Bento Grid) */}
            <div className="relative z-50">
              <ExpertiseBento />
            </div>

            {/* Cardul central care conține: Features, Newsletter și FAQ */}
            <ContentSections features={features} faqs={faqs} />
          </div>
        </div>
      </main>

      {/* 4. FOOTER MONUMENTAL */}
      <Footer />
    </div>
  );
}