import React from "react";
const Card = ({ children }) => (
  <div className="card p-6 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700">{children}</div>
);

export default function HowItWorks() {
  const steps = [
    { title: "Coleta responsável", desc: "Dados públicos/mercado/aprendizagem; privacidade por design." },
    { title: "Modelagem preditiva", desc: "Probabilidade, confiança e horizonte temporal por tendência." },
    { title: "Trilhas dinâmicas", desc: "Currículo se adapta conforme validação real do mercado." },
  ];
  return (
    <section className="bg-slate-50 dark:bg-slate-950 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Como funciona</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-700 dark:text-slate-300">
          Transparência total: fonte, confiança e impacto esperado nos ODS.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <Card key={s.title}>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-slate-700 dark:text-slate-300">{s.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}