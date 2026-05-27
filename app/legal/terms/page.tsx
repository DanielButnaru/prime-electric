"use client";
import React from "react";
import Navbar from "../../../components/nav/Navbar";
import Footer from "../../../components/footer/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-prime-bg-main text-prime-text-main font-sans">
      <Navbar links={[
          { label: "Acasă", href: "/" },
      ]} />
      
      <main className="max-w-4xl mx-auto px-6 py-32 md:py-48">
        <h1 className="text-4xl md:text-6xl font-serif font-light uppercase tracking-tight mb-12">Termeni și Condiții</h1>
        
        <div className="space-y-12 text-prime-text-mut leading-relaxed font-light">
          <section>
            <h2 className="text-lg font-medium text-prime-text-main uppercase tracking-widest mb-4">1. Acceptarea Termenilor</h2>
            <p>Utilizarea acestui website și a formularelor de contact implică acceptarea deplină a acestor termeni și condiții.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-prime-text-main uppercase tracking-widest mb-4">2. Utilizarea Site-ului</h2>
            <p>Conținutul acestui site este proprietatea Prime Electric. Este interzisă reproducerea materialelor fără acordul scris prealabil.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-prime-text-main uppercase tracking-widest mb-4">3. Limitarea Răspunderii</h2>
            <p>Prime Electric depune eforturi pentru a menține informațiile actualizate, însă nu garantează acuratețea 100% a tuturor detaliilor tehnice prezentate pe site, acestea având caracter informativ.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-prime-text-main uppercase tracking-widest mb-4">4. Confidențialitate</h2>
            <p>Prelucrarea datelor se face conform Politicii de Confidențialitate disponibile pe acest website.</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
