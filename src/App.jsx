import React, { useEffect } from "react";
import TopNav from "./components/TopNav.jsx";
import Hero from "./components/Hero.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Demo from "./components/Demo.jsx";
import PersonasTabs from "./components/PersonasTabs.jsx";
import Impact from "./components/Impact.jsx";
import Pricing from "./components/Pricing.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";
import TalentDirectory from "./sections/TalentDirectory.jsx";

export default function App() {
  useEffect(() => {
    const f = () => {
      const id = window.location.hash?.replace("#", "");
      if (!id) return;
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    window.addEventListener("hashchange", f);
    return () => window.removeEventListener("hashchange", f);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <TopNav />
      <main>
        <section id="home" className="scroll-mt-24">
          <Hero />
        </section>

        <section id="problema" className="scroll-mt-24">
          <HowItWorks />
        </section>

        <section id="demo" className="scroll-mt-24">
          <Demo />
        </section>

        <section id="diretorio" className="scroll-mt-24">
          <TalentDirectory />
        </section>

        <section id="impacto" className="scroll-mt-24">
          <Impact />
        </section>

        <section id="planos" className="scroll-mt-24">
          <Pricing />
        </section>

        <section id="faq" className="scroll-mt-24">
          <FAQ />
        </section>
      </main>
      <Footer />
    </div>
  );
}