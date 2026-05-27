"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactFormArchitectural() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: ""
  });
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulăm o trimitere a unui formular (înlocuiește cu API call)
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", projectType: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto text-left relative z-10 flex flex-col gap-10 mt-12 bg-prime-bg-main p-8 md:p-12 border border-prime-border shadow-sm">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-prime-text-mut font-medium">Nume complet</label>
        <input 
          type="text" 
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-prime-border py-3 text-prime-text-main transition-colors focus:border-prime-text-main focus:outline-none placeholder:text-prime-text-mut/40"
          placeholder="ex. Popescu Andrei"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-prime-text-mut font-medium">Adresa de email</label>
        <input 
          type="email" 
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-prime-border py-3 text-prime-text-main transition-colors focus:border-prime-text-main focus:outline-none placeholder:text-prime-text-mut/40"
          placeholder="hello@domeniu.ro"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label htmlFor="projectType" className="text-[10px] uppercase tracking-widest text-prime-text-mut font-medium">Tipul Proiectului</label>
        <div className="relative">
          <select 
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-prime-border py-3 text-prime-text-mut transition-colors focus:border-prime-text-main focus:text-prime-text-main focus:outline-none appearance-none rounded-none cursor-pointer"
          >
            <option value="" disabled hidden>Selectează tipul infrastructurii</option>
            <option value="residential_luxury">Rezidențial Luxury / Smart Home</option>
            <option value="commercial">Comercial / Office</option>
            <option value="industrial">Industrial</option>
            <option value="other">Altele</option>
          </select>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-prime-text-mut/60">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-prime-text-mut font-medium">Detalii Brief</label>
        <textarea 
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-prime-border py-3 text-prime-text-main transition-colors focus:border-prime-text-main focus:outline-none placeholder:text-prime-text-mut/40 resize-none"
          placeholder="Descrie succint viziunea sau cerințele tehnice ale proiectului tău..."
        ></textarea>
      </div>

      <div className="flex items-start gap-3 mt-2">
        <input 
          type="checkbox" 
          id="privacy" 
          name="privacy" 
          required 
          className="mt-1 w-4 h-4 border-prime-border rounded bg-transparent checked:bg-prime-text-main"
        />
        <label htmlFor="privacy" className="text-[11px] text-prime-text-mut leading-tight">
          Sunt de acord cu prelucrarea datelor conform <a href="/legal/privacy" className="underline hover:text-prime-text-main transition-colors">Politicii de Confidențialitate</a> și cu <a href="/legal/terms" className="underline hover:text-prime-text-main transition-colors">Termenii și Condițiile</a>.
        </label>
      </div>

      <button 
        type="submit" 
        disabled={status === "submitting" || status === "success"}
        className="mt-4 px-6 pb-3 pt-4 rounded-full font-light text-xs tracking-widest border border-prime-text-main uppercase transition-colors duration-300 bg-transparent text-prime-text-main hover:bg-prime-text-main hover:text-prime-bg-main disabled:opacity-50 flex items-center justify-center gap-2 group w-full sm:w-auto self-start"
      >
        {status === "idle" && "Trimite solicitarea"}
        {status === "submitting" && "Se procesează..."}
        {status === "success" && "Mesaj receptionat"}
        {status === "idle" && <span className="transition-transform group-hover:translate-x-1">→</span>}
      </button>

      {status === "success" && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="text-xs text-green-700 font-light mt-2"
        >
          Mulțumim. Un inginer Prime Electric va răspunde în curând cererii tale.
        </motion.p>
      )}
    </form>
  );
}