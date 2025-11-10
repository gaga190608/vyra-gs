import React from "react";
import TopNav from "./components/TopNav";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Demo from "./components/Demo";
import PersonasTabs from "./components/PersonasTabs";
import Impact from "./components/Impact";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import TalentDirectory from "./sections/TalentDirectory";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <TopNav />
      <Hero />
      <HowItWorks />
      <Demo />
      <TalentDirectory />
      <PersonasTabs />
      <Impact />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}