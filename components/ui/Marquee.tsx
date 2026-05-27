"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Marquee() {
  const text = "PRIME ELECTRIC — HIGH-END INFRASTRUCTURE — MODERN ENERGY — ";
  // Repetăm de câteva ori textul pentru a asigura un loop liniștit
  const items = Array.from({ length: 4 }).fill(text) as string[];

  return (
    <div className="relative w-full overflow-hidden py-5 bg-prime-bg-main z-10 flex">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"]
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 35
        }}
      >
        <div className="flex gap-4 items-center pl-4">
          {items.map((item, index) => (
            <span 
              key={index}
              className="text-[10px] md:text-xs tracking-[0.25em] font-mono uppercase text-[#FFFBF5]/70"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-4 items-center pl-4">
          {items.map((item, index) => (
            <span 
              key={index + 4}
              className="text-[10px] md:text-xs tracking-[0.25em] font-mono uppercase text-[#FFFBF5]/70"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
