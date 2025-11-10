import React from "react";

import TopNav from "./components/TopNav.jsx";
import Hero from "./components/Hero.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Demo from "./components/Demo.jsx";
import PersonasTabs from "./components/PersonasTabs.jsx";
import Impact from "./components/Impact.jsx";
import Pricing from "./components/Pricing.jsx";
import FAQ from "./components/FAQ.jsx";

import TalentDirectory from "./sections/TalentDirectory.jsx";

import Footer from "./components/Footer.jsx";

import "./index.css";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <TopNav />

      <section id="home" className="scroll-mt-24">
        <Hero />
      </section>

      <section id="problem" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-14">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300 ring-1 ring-white/20">
                Problema
              </span>
              <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-white">
                Descompasso entre educação e demanda real
              </h2>
              <p className="mt-3 text-slate-300">
                Pessoas aprendem hoje o que o mercado já deixou para trás;
                empresas não sabem quais skills contratar; governos investem sem evidência.
              </p>
              <ul className="mt-4 space-y-2 text-slate-300 text-sm">
                <li>• Falta de previsões confiáveis</li>
                <li>• Requalificação lenta e genérica</li>
                <li>• Desigualdades regionais</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.25)]" id="solution">
              <span className="inline-flex items-center rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-300 ring-1 ring-violet-400/30">
                Solução — VYRA
              </span>
              <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-white">
                Carreiras vivas, guiadas por dados
              </h2>
              <p className="mt-3 text-slate-300">
                IA preditiva cruza OIT/WEF/mercado para gerar trilhas dinâmicas
                com níveis de confiança, fontes e ajuste contínuo.
              </p>
              <ul className="mt-4 space-y-2 text-slate-300 text-sm">
                <li>• Probabilidade e evidência por profissão</li>
                <li>• Microtrilhas personalizadas</li>
                <li>• Painéis para pessoas, empresas e governo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="scroll-mt-24">
        <HowItWorks />
      </section>

      <section id="demo" className="scroll-mt-24">
        <Demo />
      </section>

      <section id="diretorio" className="scroll-mt-24">
        <TalentDirectory />
      </section>

      <section id="personas" className="scroll-mt-24">
        <PersonasTabs />
      </section>
      
      <section id="impact" className="scroll-mt-24">
        <Impact />
      </section>

    
      <section id="pricing" className="scroll-mt-24">
        <Pricing />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FAQ />
      </section>

      <Footer />
    </div>
  );
}