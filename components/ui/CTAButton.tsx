"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react'; // Asigură-te că ai instalat lucide-react
import type { CTAVariant } from '../../types/landing';

type Props = {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: CTAVariant | 'primary' | 'secondary' | 'outline';
  className?: string;
};

export default function CTAButton({ label, href, onClick, variant = 'primary', className = '' }: Props) {
  const base = 'group inline-flex items-center justify-center rounded-xl px-8 py-4 text-base font-bold transition-all duration-300 active:scale-95 focus:outline-none';
  
  const variantClass =
    variant === 'primary'
      ? 'bg-[#FFB800] text-black hover:bg-[#ffc833] shadow-[0_0_20px_rgba(255,184,0,0.2)]'
      : variant === 'secondary'
      ? 'bg-zinc-800 text-white hover:bg-zinc-700'
      : 'bg-transparent text-prime-text-mut/60 hover:text-white px-2';

  const content = (
    <>
      <span>{label}</span>
      {/* Săgeata apare doar la variantele care nu sunt primary, sau poți decide să o pui peste tot */}
      {(variant === 'secondary' || variant === 'outline') && (
        <ArrowRight 
          className="ml-2 w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" 
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${base} ${variantClass} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={`${base} ${variantClass} ${className}`}>
      {content}
    </button>
  );
}