"use client";
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  logo?: React.ReactNode;
  links?: NavLink[];
  onCTAClick?: () => void;
  isTransparent?: boolean;
}

export default function Navbar({ logo, links = [], onCTAClick, isTransparent = true }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { scrollY } = useScroll();
  
  // Adăugăm un efect de "spring" pentru a amortiza citirea valorii de scroll, făcându-l foarte "buttery smooth"
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Animația logoului la scroll. 
  // Am extins intervalul de scroll (de la 80 la 150/200px) și folosim smoothScrollY pentru fluiditate maximă
  const logoTextWidth = useTransform(smoothScrollY, [0, 150], ["12rem", "0rem"]);
  const logoTextOpacity = useTransform(smoothScrollY, [0, 100], [1, 0]);
  const logoIconOpacity = useTransform(smoothScrollY, [100, 200], [0, 1]);
  const logoIconRotate = useTransform(smoothScrollY, [50, 250], [-90, 0]);

  // Culori dinamice pentru hamburger
  // Dacă meniul e deschis, hamburgerul trebuie să fie vizibil peste fundalul overlay-ului (prime-bg-main)
  const hamburgerColor = mobileMenuOpen 
    ? "bg-prime-text-main" 
    : (!scrolled && isTransparent && !mobileMenuOpen) 
      ? "bg-white" 
      : "bg-prime-text-main";

  const navLinks = links.length > 0 ? links : [
    { label: "Expertiză", href: "/#expertise" },
    { label: "Proiecte", href: "/proiecte" },
    { label: "Despre", href: "/despre" },
    { label: "Contact", href: "/contact" },
  ];

  const showSolidNav = scrolled || !isTransparent;

  return (
    <>
    <header 
      className={`fixed left-0 right-0 z-101 transition-all duration-500 flex justify-center w-full ${
        showSolidNav ? "top-4 px-4 md:px-0" : "top-0"
      }`}
    >
      <div 
        className={`transition-all duration-500 flex items-center justify-between px-6 md:px-10 py-5 ${
          showSolidNav && !mobileMenuOpen
            ? "w-full md:w-[85%] lg:w-[90%] bg-prime-bg-main/80 backdrop-blur-md rounded-sm border border-prime-border shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
            : "w-full bg-transparent border-b border-white/5"
        }`}
      >
        {/* LOGO AREA - Animație framer */}
        <Link href="/" className={`flex items-center gap-2 select-none relative h-8 transition-colors duration-500 ${mobileMenuOpen ? "z-50" : ""}`}>
          {logo ?? (
            <>
              {/* Logo complet în starea extinsă (top) - Colapsare pe lățime */}
              <motion.div 
                style={{ 
                  opacity: mobileMenuOpen ? 1 : (isTransparent ? logoTextOpacity : 0), 
                  width: mobileMenuOpen ? "12rem" : (isTransparent ? logoTextWidth : "0rem") 
                }}
                className="overflow-hidden whitespace-nowrap flex items-center h-full"
              >
                <span className={`text-[15px] tracking-[0.25em] uppercase flex items-center gap-2 transition-colors duration-500 font-serif pointer-events-none ${showSolidNav && !mobileMenuOpen ? "text-prime-text-main" : "text-[#FFFBF5]"}`}>
                  PRIME
                  <span className={`tracking-widest font-sans transition-colors duration-500 ${showSolidNav && !mobileMenuOpen ? "text-prime-text-mut" : "text-[#FFFBF5]/70"}`}>ELECTRIC</span>
                </span>
              </motion.div>
              
              {/* Logo compactat/icon în starea scrolată */}
              <motion.span 
                style={{ 
                  opacity: mobileMenuOpen ? 0 : (isTransparent ? logoIconOpacity : 1), 
                  rotate: isTransparent ? logoIconRotate : 0 
                }}
                className="flex items-center justify-center pointer-events-auto origin-center absolute left-0 top-1/2 -translate-y-1/2"
              >
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center bg-transparent mt-0.5 transition-colors duration-500 ${showSolidNav ? "border-prime-text-main/30" : "border-[#FFFBF5]/30"}`}>
                  <span className={`font-serif italic text-[15px] transition-colors duration-500 ${showSolidNav ? "text-prime-text-main" : "text-[#FFFBF5]"}`}>P</span>
                </div>
              </motion.span>
            </>
          )}
        </Link>

        {/* Buton Hamburger pt Mobile */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-50 p-2 cursor-pointer focus:outline-none"
        >
          <span className={`w-6 h-px transition-all duration-300 ${hamburgerColor} ${mobileMenuOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
          <span className={`w-6 h-px transition-all duration-300 ${hamburgerColor} ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-6 h-px transition-all duration-300 ${hamburgerColor} ${mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
        </button>

        {/* NAVIGATION LINKS DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-14">
          <div className="flex items-center gap-6 lg:gap-10">
            {navLinks.map((l, idx) => (
              <a 
                key={idx} 
                href={l.href} 
                className={`text-[14px] font-light tracking-[0.2em] uppercase transition-all duration-300 ${
                  showSolidNav 
                    ? "text-prime-text-mut hover:text-prime-text-main"
                    : "text-zinc-300 hover:text-[#FFFBF5]"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>
          
          {/* BUTONUL CTA - Înlocuit complet cu element nativ și stilizat manual */}
          <Link
            href="/contact"
            className={`px-4.5 pb-2.25 pt-2.75 rounded-full font-light text-[11px] lg:text-xs tracking-[0.15em] inline-block border border-solid uppercase transition-colors duration-300 cursor-pointer ${
              showSolidNav
                ? "text-prime-text-main border-prime-text-main hover:bg-prime-text-main hover:text-prime-bg-main"
                : "text-[#FFFBF5] border-[#FFFBF5] hover:bg-[#FFFBF5] hover:text-[#09090b]"
            }`}
          >
            Inițiază un proiect
          </Link>
        </nav>
      </div>
    </header>

    {/* OVERLAY MENIU MOBIL (FULL-SCREEN) */}
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-100 bg-prime-bg-main flex flex-col justify-center items-center px-4"
        >
          {/* Noise subtil și pentru meniul de mobil */}
          <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-overlay">
            <svg className="w-full h-full"><rect width="100%" height="100%" filter="url(#noiseFilter)"/></svg>
          </div>

          <div className="flex flex-col items-center gap-8 md:gap-12 relative z-10 w-full max-w-sm">
            {navLinks.map((l, i) => (
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                key={i}
                href={l.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl md:text-5xl font-light uppercase tracking-widest text-prime-text-main hover:text-prime-text-mut/60 transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 border-t border-prime-border w-full pt-8 flex flex-col items-center gap-4"
            >
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-4 rounded-full font-light text-sm tracking-[0.15em] border border-prime-border text-prime-text-main uppercase transition-all hover:bg-prime-text-main hover:text-prime-bg-main w-full max-w-xs text-center"
              >
                Inițiază un proiect
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}