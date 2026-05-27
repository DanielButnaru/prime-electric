'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-prime-bg-main flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Architectural Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-px bg-prime-text-main/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-[80vh] bg-prime-text-main/10" />
      </div>

      <div className="max-w-xl w-full text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] font-mono tracking-[0.5em] text-prime-text-mut uppercase block mb-8">
            [ Error 404 — Circuit Interrupted ]
          </span>
          
          <h1 className="text-6xl md:text-8xl font-latienne text-prime-text-main mb-6 italic tracking-tighter">
            Lost in <br /> Connectivity
          </h1>
          
          <p className="text-sm md:text-base text-prime-text-mut font-light max-w-sm mx-auto mb-12 leading-relaxed">
            Pagina pe care o căutați nu a putut fi găsită. Este posibil ca adresa să fi fost mutată sau deconectată.
          </p>

          <div className="flex flex-col items-center gap-6">
            <Link 
              href="/"
              className="px-12 py-4 bg-prime-text-main text-prime-bg-main text-[10px] uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95"
            >
              Înapoi la Home
            </Link>
            
            <div className="text-[9px] font-mono text-prime-text-mut/50 tracking-widest flex items-center gap-4">
               <span>LAT: 44.4268° N</span>
               <span className="w-1 h-1 bg-prime-text-main/20 rounded-full" />
               <span>LONG: 26.1025° E</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Technical detail in corner */}
      <div className="absolute bottom-12 right-12 hidden md:block">
        <div className="flex flex-col items-end gap-1 opacity-30">
           <span className="text-[9px] font-mono">SIGNAL_LOST: TRUE</span>
           <span className="text-[9px] font-mono">STATUS: 404</span>
           <div className="w-16 h-px bg-prime-text-main" />
        </div>
      </div>
    </div>
  );
}
