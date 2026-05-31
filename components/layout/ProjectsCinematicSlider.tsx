"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Vila Q1 — Smart Automation",
    location: "București, România",
    tag: "Rezidențial · KNX",
    description:
      "Integrare completă a sistemului KNX într-o reședință minimalistă de 450 mp. Management inteligent al climatizării și scenarii complexe de iluminat arhitectural controlate centralizat.",
    image: "/proiect_1.webp",
  },
  {
    id: 2,
    title: "Showroom Lumina & Design",
    location: "Cluj-Napoca, România",
    tag: "Comercial · DALI",
    description:
      "Proiectare și execuție pentru un spațiu expozițional modern. Am implementat protocolul DALI pentru controlul dinamic al temperaturii de culoare și fluxului luminos.",
    image: "/proiect_2.webp",
  },
  {
    id: 3,
    title: "Birouri Tehnologice 'Hexagon'",
    location: "Iași, România",
    tag: "Corporate · Automatizare",
    description:
      "Infrastructură electrică de înaltă densitate pentru un sediu de companie IT. Management impecabil al cablajului structural și tablouri de automatizare industriale avansate.",
    image: "/proiect_3.webp",
  },
];

const TRANSITION = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

export default function ProjectsCinematicSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newIndex = Math.min(
      projects.length - 1,
      Math.floor(latest * (projects.length + 0.1)) // Buffer mic pentru stabilitate pe final
    );
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  });

  // Valori Framer Motion pentru a anima bara de progres
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      {/*
        CONTAINER — înălțimea dictează cât scroll trebuie făcut.
        Ex: 3 slide-uri = 300vh
      */}
      <div
        ref={containerRef}
        className="relative w-full"
        style={{ height: `${projects.length * 100}vh` }}
      >
        {/*
          SLIDER STICKY — rămâne lipit pe ecran cât timp facem scroll prin container
        */}
        <div className="sticky top-0 h-svh w-full bg-[#09090b] text-[#FFFBF5] flex flex-col md:flex-row overflow-hidden z-40">

          {/* ── COLOANA STÂNGA: TEXT ── */}
          <div className="w-full md:w-[45%] h-[50vh] md:h-full flex flex-col justify-center
                          px-6 md:pl-14 md:pr-10 lg:pl-20 lg:pr-4 z-30 order-2 md:order-1">
            <span className="text-[9px] uppercase tracking-[0.35em] text-prime-text-mut mb-6 font-mono block">
              Portofoliu / Proiecte de top
            </span>

            <div className="relative h-64 md:h-120 w-full overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={TRANSITION}
                  className="absolute inset-0 flex flex-col justify-center gap-3 will-change-transform"
                >
                  <span className="text-[10px] uppercase tracking-[0.25em] text-prime-text-mut font-mono">
                    {projects[currentIndex].tag}
                  </span>
                  <h2 className="text-3xl uppercase md:text-5xl lg:text-5xlxl xl:text-6xl text-[#FFFBF5] max-w-2xl leading-[1.1]">
                    {projects[currentIndex].title}
                  </h2>
                  <p className="text-[10px] text-prime-text-mut uppercase tracking-[0.2em] mt-1">
                    {projects[currentIndex].location}
                  </p>
                  <p className="text-sm md:text-base leading-relaxed text-zinc-400 max-w-xl mt-2 font-light">
                    {projects[currentIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bara de progres + dots */}
            <div className="mt-8 space-y-3">
              <div className="h-px w-full bg-[#FFFBF5]/10 relative rounded-full overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-[#FFFBF5]"
                  style={{ width: progressWidth }}
                />
              </div>
              <div className="flex items-center gap-3">
                {projects.map((p, i) => (
                  <button
                    key={p.id}
                    aria-label={`Proiect ${i + 1}: ${p.title}`}
                    onClick={() => {
                      const targetScroll = containerRef.current
                        ? containerRef.current.offsetTop + (i / projects.length) * containerRef.current.offsetHeight
                        : 0;
                      window.scrollTo({ top: targetScroll, behavior: "smooth" });
                    }}
                    className={`transition-all duration-500 rounded-full cursor-pointer p-2 flex items-center justify-center -m-2 ${
                      i === currentIndex ? "opacity-100" : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <div className={`rounded-full transition-all duration-500 ${
                      i === currentIndex
                        ? "w-2.5 h-2.5 bg-[#FFFBF5]"
                        : "w-2 h-2 bg-[#FFFBF5]/50"
                    }`} />
                  </button>
                ))}
                <span className="ml-auto text-[10px] text-prime-text-mut font-mono tabular-nums">
                  {String(currentIndex + 1).padStart(2, "0")} /{" "}
                  {String(projects.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>

          {/* ── COLOANA DREAPTA: IMAGINE ── */}
          <div className="w-full md:w-[55%] h-[58vh] md:h-full order-1 md:order-2
                          relative overflow-hidden bg-zinc-900">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ ...TRANSITION, duration: 0.6 }}
                className="absolute inset-0 w-full h-full z-10 origin-center overflow-hidden will-change-[transform,opacity]"
              >
                <Image
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 55vw"
                  className="object-cover object-center will-change-transform"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 right-6 font-mono text-[10px]
                                text-white/40 tracking-widest tabular-nums select-none">
                  {String(currentIndex + 1).padStart(2, "0")}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Hint scroll pe primul slide */}
          <AnimatePresence>
            {currentIndex === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none z-50"
              >
                <span className="text-[9px] uppercase tracking-[0.3em] text-prime-text-mut font-mono">
                  Scroll
                </span>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                  className="w-px h-6 bg-linear-to-b from-zinc-600 to-transparent"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}