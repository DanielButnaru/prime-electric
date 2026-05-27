"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { FAQItem } from '../../types/landing';

type Props = FAQItem;

export default function FAQItemComponent({ id, question, answer }: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="border-b border-prime-border group">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`faq-${id}`}
        className="w-full text-left flex items-center justify-between py-6 md:py-8 cursor-pointer focus:outline-none"
      >
        <span className={`text-xl md:text-3xl font-light tracking-tight transition-colors duration-500 pr-8 ${open ? "text-prime-text-main" : "text-prime-text-mut group-hover:text-prime-text-main"}`}>
          {question}
        </span>
        <div className="relative w-6 h-6 flex items-center justify-center shrink-0">
          <motion.span 
            animate={{ rotate: open ? 180 : 0, opacity: open ? 0 : 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute text-2xl font-light text-prime-text-mut/60"
          >
            +
          </motion.span>
          <motion.span 
            animate={{ rotate: open ? 0 : -180, opacity: open ? 1 : 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute text-4xl font-light text-prime-text-main leading-none -mt-1"
          >
            -
          </motion.span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-sm md:text-base text-prime-text-mut font-light leading-relaxed max-w-3xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
