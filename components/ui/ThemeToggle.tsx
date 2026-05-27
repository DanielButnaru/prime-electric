"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    
    // Adaugăm clasa de tranziție pentru a intercepta și animația background-ului
    root.classList.add('theme-transition');
    
    if (isDark) {
      root.classList.remove('dark');
      setIsDark(false);
    } else {
      root.classList.add('dark');
      setIsDark(true);
    }
    
    // Oprim tranziția după ce se finalizează, pentru a nu deranja resize-uri sau height-uri
    setTimeout(() => {
      root.classList.remove('theme-transition');
    }, 1000);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-[9999] w-12 h-12 rounded-full border border-prime-border dark:border-white/20 bg-prime-bg-main dark:bg-prime-bg-main flex items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(0,0,0,0.1)] group outline-none"
      aria-label="Comutator Lumini"
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {/* Cercul din mijloc (simularea unui LED / bec inteligent KNX) */}
        <div 
           className="w-3 h-3 rounded-full border transition-all duration-700"
           style={{
             backgroundColor: isDark ? "var(--prime-text-main)" : "transparent",
             borderColor: isDark ? "var(--prime-text-main)" : "var(--prime-text-main)",
             boxShadow: isDark ? "0 0 10px rgba(255, 251, 245, 0.4)" : "none"
           }}
        />
      </div>
      
      {/* Label tooltip (index tehnic stânga) */}
      <span className="absolute right-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[9px] uppercase tracking-[0.2em] whitespace-nowrap text-prime-text-mut delay-100 hidden md:block">
        [ {isDark ? "SYS: LIGHTS ON" : "SYS: LIGHTS OFF"} ]
      </span>
    </button>
  );
}
