import React from 'react';

export default function GridLines() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden text-prime-text-main/40">
      {/* Blueprint Pattern - Alocuri (Gradient Mask) */}
      <div 
        className="absolute inset-0 opacity-[0.04] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
          maskImage: 'radial-gradient(circle at 10% 20%, black 0%, transparent 40%), radial-gradient(circle at 85% 75%, black 0%, transparent 45%)',
          WebkitMaskImage: 'radial-gradient(circle at 10% 20%, black 0%, transparent 40%), radial-gradient(circle at 85% 75%, black 0%, transparent 45%)'
        }}
      />

      {/* Cota Dimensionala (Dimension Line) - Top Left */}
      <div className="absolute top-[20%] left-8 md:origin-top-left md:-rotate-90 hidden md:flex items-center gap-2 text-[9px] tracking-widest font-mono uppercase">
         <span>|</span>
         <span className="inline-block w-8 sm:w-16 h-px bg-prime-text-main/30"></span>
         <span>230V AC</span>
         <span className="inline-block w-8 sm:w-16 h-px bg-prime-text-main/30"></span>
         <span>|</span>
      </div>
      
      {/* Semn de Impamantare si Detalii Retea - Bottom Right */}
      <div className="absolute bottom-16 right-8 text-[10px] tracking-[0.2em] font-mono text-prime-text-main/40 text-right uppercase hidden md:flex flex-col items-end gap-1">
        <div className="flex items-center gap-2">
          <span>SYS. READY</span>
          <span className="text-sm">⏚</span>
        </div>
        <div className="w-24 h-px bg-prime-text-main/20 my-1"></div>
        <span>U: 400V 3~</span>
        <span>f: 50Hz</span>
      </div>

      {/* Simbol Inalta Tensiune (High Voltage) - Middle Right */}
      <div className="absolute top-1/2 right-6 -translate-y-1/2 hidden md:flex flex-col items-center gap-4">
         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-40"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
         <div className="text-[8px] font-mono uppercase style-vertical rotate-180" style={{ writingMode: 'vertical-rl' }}>
            [⚡ 400V]
         </div>
      </div>

      {/* Schema Mica Blueprint (Motor/Generator) - Top Right */}
      <div className="absolute top-32 right-16 w-24 h-24 hidden lg:block opacity-30 border border-prime-text-main/20">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-prime-text-main/20" />
         <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-prime-text-main/20" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-prime-text-main/40 w-12 h-12 flex items-center justify-center bg-prime-bg-main/50 backdrop-blur-sm">
           <span className="text-[10px] font-mono">M</span>
         </div>
         <div className="absolute -bottom-5 right-0 text-[8px] font-mono tracking-widest">FIG. 001</div>
      </div>
    </div>
  );
}
