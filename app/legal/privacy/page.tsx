"use client";
import React from "react";
import Navbar from "../../../components/nav/Navbar";
import Footer from "../../../components/footer/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-prime-bg-main text-prime-text-main font-sans">
      <Navbar links={[
          { label: "Acasă", href: "/" },
      ]} />
      
      <main className="max-w-4xl mx-auto px-6 py-32 md:py-48">
        <h1 className="text-4xl md:text-6xl font-serif font-light uppercase tracking-tight mb-12">Politica de Confidențialitate</h1>
        
        <div className="space-y-12 text-prime-text-mut leading-relaxed font-light">
          <section>
            <h2 className="text-lg font-medium text-prime-text-main uppercase tracking-widest mb-4">1. Introducere</h2>
            <p>Prime Electric se angajează să protejeze datele dumneavoastră cu caracter personal. Această politică explică modul în care colectăm și utilizăm informațiile furnizate prin intermediul formularelor de contact.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-prime-text-main uppercase tracking-widest mb-4">2. Date Colectate</h2>
            <p>Colectăm următoarele date atunci când folosiți formularul nostru de contact:</p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Nume complet</li>
              <li>Adresa de email</li>
              <li>Tipul proiectului</li>
              <li>Detalii despre proiect (brief)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-prime-text-main uppercase tracking-widest mb-4">3. Scopul Prelucrării</h2>
            <p>Datele sunt utilizate exclusiv pentru a vă răspunde solicitărilor comerciale, pentru a furniza oferte de preț și pentru a stabili detaliile tehnice ale potențialelor colaborări.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-prime-text-main uppercase tracking-widest mb-4">4. Durata Stocării</h2>
            <p>Păstrăm datele dumneavoastră doar atât timp cât este necesar pentru scopurile menționate sau conform obligațiilor legale.</p>
          </section>
          
          <section>
            <h2 className="text-lg font-medium text-prime-text-main uppercase tracking-widest mb-4">5. Drepturile Dumneavoastră</h2>
            <p>Conform GDPR, aveți dreptul de acces, rectificare, ștergere a datelor sau restricționarea prelucrării. Ne puteți contacta la office@prime-electric.ro pentru orice solicitare legată de datele dumneavoastră.</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
