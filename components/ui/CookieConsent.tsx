"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("prime-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("prime-cookie-consent", "true");
    setIsVisible(false);
  };

  const handleRefuse = () => {
    localStorage.setItem("prime-cookie-consent", "false");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-32 md:max-w-xl z-50"
        >
          <div className="bg-prime-bg-main border border-prime-border p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.2)] backdrop-blur-md relative overflow-hidden group">
            {/* Fine architectural line accent */}
            <div className="absolute top-0 left-0 w-1 h-full bg-prime-text-main opacity-20" />
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono text-prime-text-mut tracking-[0.3em] uppercase">[ Cookie Notice ]</span>
              </div>
              
              <p className="text-xs md:text-sm text-prime-text-main font-light leading-relaxed tracking-wide">
                Utilizăm tehnologii de tip "cookie" pentru a îmbunătăți experiența dumneavoastră pe platforma noastră digitală. Puteți alege să acceptați sau să refuzați modulele de monitorizare non-esențiale.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mt-2">
                <button
                  onClick={handleAccept}
                  className="px-6 py-3 bg-prime-text-main text-prime-bg-main text-[10px] uppercase tracking-[0.2em] transition-all hover:bg-zinc-800"
                >
                  Acceptă
                </button>
                <button
                  onClick={handleRefuse}
                  className="px-6 py-3 border border-prime-border text-prime-text-main text-[10px] uppercase tracking-[0.2em] transition-all hover:bg-prime-text-main hover:text-prime-bg-main"
                >
                  Refuză
                </button>
                <Link 
                  href="/legal/privacy" 
                  className="text-[10px] uppercase tracking-[0.2em] text-prime-text-mut hover:text-prime-text-main transition-colors underline underline-offset-4"
                >
                  Documentație
                </Link>
              </div>
            </div>
            
            {/* Technical grid decoration in corner */}
            <div className="absolute -bottom-2 -right-2 opacity-5 pointer-events-none">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <path d="M0 10h60M0 20h60M0 30h60M0 40h60M0 50h60M10 0v60M20 0v60M30 0v60M40 0v60M50 0v60" stroke="currentColor" strokeWidth="1" fill="none" />
              </svg>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
