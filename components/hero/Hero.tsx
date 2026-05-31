"use client";
import React from "react";
import type { CTA } from "../../types/landing";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  title: string;
  subtitle?: string;
  ctas?: CTA[];
  media?: React.ReactNode;
};

export default function Hero({ title, subtitle, ctas = [], media }: Props) {
  return (
    <section className="relative w-full h-svh flex items-end bg-[#09090b] overflow-hidden pb-32 sm:pb-36">
      {/* Containerul imaginii */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {/* Forțăm media să stea în spatele textelor și overlay-urilor */}
        <div className="w-full h-full relative z-0">{media}</div>

        {/* 1. Overlay întunecat pentru contrast */}
        <div className="absolute inset-0 bg-black/50 z-0 pointer-events-none" />

        {/* 2. MAGIC FADE: Gradientul spre negrul de jos */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#09090b]/40 to-[#09090b] z-0 pointer-events-none" />
      </div>

      {/* Conținut text - z-30 e suficient pentru a sta peste overlay-ul z-20 */}
      <div className="relative z-30 text-[#FFFBF5] px-6 lg:px-12 w-full pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto w-full flex flex-col xl:flex-row gap-10 xl:justify-between xl:items-end mt-10">
          
          <div className="flex flex-col gap-6 lg:gap-8 max-w-5xl">
            <h1 className="text-4xl uppercase sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[1.1] md:leading-none font-light">
              {title}
            </h1>
            <p className="text-xs sm:text-sm md:text-base max-w-xl leading-relaxed text-zinc-400 font-light tracking-wide">
              {subtitle}
            </p>
          </div>

          <div className="flex z-50 flex-col sm:flex-row items-center xl:items-end shrink-0 gap-3 sm:gap-6">
            <Button className="cursor-pointer w-full sm:w-auto text-center py-6 px-10 text-[10px] uppercase tracking-widest" variant="outlineWhite" size="default" asChild>
              <Link href="/contact">Inițiază un proiect</Link>
            </Button>
            <Button className="cursor-pointer font-light w-full sm:w-auto text-center py-6 px-10 text-[10px] uppercase tracking-widest" variant="ghostWhite" size="default" asChild>
              <Link href="/proiecte">
                Vezi portofoliul
                <ArrowRightIcon className="rtl:rotate-180 ml-2 h-4 w-4 inline" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* BANNER DE BOTTOM "FEATURED IN" / PARTENERI (Așezat la bază, pe fundalul luminos al site-ului) */}
      <div className="absolute bottom-0 left-0 w-full z-40 bg-prime-bg-main border-t border-prime-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex gap-2 items-center">
              <div className="rounded-full w-1 h-1 bg-prime-text-main"></div>
              <p className="text-[9px] sm:text-[10px] tracking-widest uppercase text-prime-text-main font-medium">
               Experți în:
              </p>
            </div>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-16">
            <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-prime-text-main/80">KNX Assoc.</span>
            <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-prime-text-main/80">Dali Alliance</span>
            <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-prime-text-main/80">Loxone</span>
          </div>
        </div>
      </div>
    </section>
  );
}