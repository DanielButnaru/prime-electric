"use client";
import React from "react";
import FAQItem from "../faq/FAQItem";
import ProcessWorkflow from "../workflow/ProcessWorkflow";
import ContactFormArchitectural from "../forms/ContactFormArchitectural";
import Marquee from "../ui/Marquee";
import { motion } from "framer-motion";
import type { Feature, FAQItem as FAQType } from "../../types/landing";

interface ContentSectionsProps {
  features: Feature[];
  faqs: FAQType[];
}

export default function ContentSections({ features, faqs }: ContentSectionsProps) {
  return (
    <div className="relative z-0 bg-prime-bg-main max-w-full mx-auto overflow-hidden ">
      
      {/* 1. VIEW ALL WORK / CTA SECȚIUNE */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="pb-12 w-full lg:hidden px-6 pt-24"
      >
        <div className="w-full border-y border-prime-border flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl uppercase text-prime-text-main py-8 font-light tracking-widest">
            Vedeți tot portofoliul
          </h2>
          <span className="text-xl">↗</span>
        </div>
      </motion.div>
      <div className="pb-16 w-full lg:pb-56"></div>

      {/* 2. SECȚIUNEA EXPERTIZĂ */}
      <section id="features" className="px-6 lg:px-14">
        <div className="grid grid-cols-12 gap-y-12 md:gap-8 w-full">
          <div className="flex flex-col gap-6 md:gap-8 h-fit col-span-12 lg:col-span-8">
            <div className="overflow-hidden">
               <motion.h2 
                 initial={{ y: "100%" }}
                 whileInView={{ y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                 className="text-[2.2rem] sm:text-[3rem] uppercase lg:text-7xl xl:text-[7rem] text-prime-text-main max-w-3xl leading-[0.9] font-serif font-light tracking-tight"
               >
                 Expertiză
               </motion.h2>
            </div>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="flex flex-wrap gap-3 items-center mt-2"
            >
              <p className="text-[10px] sm:text-xs tracking-[0.2em] font-mono uppercase text-prime-text-mut">
                 Sisteme Avansate
              </p>
              <div className="rounded-full w-1 h-1 bg-prime-text-main/40"></div>
              <p className="text-[10px] sm:text-xs tracking-[0.2em] font-mono uppercase text-prime-text-mut">
                 Infrastructură Premium
              </p>
            </motion.div>
            <p className="text-sm sm:text-base leading-relaxed text-prime-text-main max-w-xl font-light mt-4 pr-4">
              De la sisteme de iluminat inteligente la automatizări avansate, oferim soluții electrice premium pentru fiecare proiect.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 md:gap-8 h-fit col-span-12 justify-center pl-0 lg:col-span-4 lg:pl-[10%] xl:pl-[20%] pt-2 md:pt-10"
          >
            <div className="flex gap-3 items-center">
              <div className="rounded-full w-1 h-1 bg-prime-text-main/40"></div>
              <p className="text-[10px] sm:text-xs tracking-[0.2em] font-mono uppercase text-prime-text-mut font-medium">
                 Misiunea Noastră
              </p>
            </div>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-prime-text-main font-light opacity-80 pr-4">
               Fiecare proiect este abordat cu rigurozitate, trecând printr-un ciclu clar de la proiectare teoretică până la execuția impecabilă din teren.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 lg:mt-32 w-full max-w-[100vw] mx-auto border-t border-prime-border"
        >
           <ProcessWorkflow />
        </motion.div>
      </section>

      <div className="pb-16 w-full lg:pb-28"></div>
      
      {/* INFINITE MARQUEE */}
      <Marquee />

      <div className="pb-16 w-full lg:pb-28"></div>

      {/* 2. SECȚIUNEA CONTACT */}
      <motion.section
        initial={{ opacity: 0, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        id="newsletter"
        className="w-full bg-prime-bg-sec py-20 lg:py-48 px-6 border-y border-prime-border text-center"
      >
        <div className="max-w-2xl mx-auto">
          <div className="overflow-hidden pb-4">
             <motion.h3 
               initial={{ y: "120%" }}
               whileInView={{ y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
               className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-serif font-light text-prime-text-main uppercase leading-[0.9]"
             >
               Inițiază un dialog
             </motion.h3>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-prime-text-mut mb-10 text-xs sm:text-sm md:text-base max-w-lg mx-auto leading-relaxed font-light mt-4 tracking-wide px-4"
          >
             Pentru proiecte complexe de infrastructură electrică, sisteme smart home integrate sau iluminat arhitectural premium.
          </motion.p>
          <div className="w-full max-w-md mx-auto">
            <ContactFormArchitectural />
          </div>
        </div>
      </motion.section>

      <div className="pb-24 w-full lg:pb-56"></div>

      {/* 3. SECȚIUNEA FAQ */}
      <section
        id="faq"
        className="px-6 lg:px-14 w-full"
      >
        <div className="grid grid-cols-12 gap-y-12 md:gap-8 w-full">
           <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
              <div className="overflow-hidden pb-2">
                 <motion.h2 
                   initial={{ y: "100%" }}
                   whileInView={{ y: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                   className="text-3xl sm:text-4xl md:text-5xl uppercase text-prime-text-main leading-[0.9] font-serif font-light tracking-tight pr-4"
                 >
                    Întrebări Frecvente
                 </motion.h2>
              </div>
           </div>
           
           <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
             className="col-span-12 lg:col-span-8 flex flex-col gap-4"
           >
              <div className="flex flex-col">
                {faqs.map((q) => (
                  <FAQItem
                    key={q.id}
                    id={q.id}
                    question={q.question}
                    answer={q.answer}
                  />
                ))}
              </div>
           </motion.div>
        </div>
      </section>

      <div className="pb-28 w-full lg:pb-56"></div>

    </div>
  );
}