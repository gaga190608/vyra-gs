import React, { useState } from "react";
const Card = ({ children, className = "" }) => (
  <div className={`card p-6 md:p-8 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 ${className}`}>
    {children}
  </div>
);

const personas = [
  {
    name: "Ana — transição de carreira",
    goals: ["Descobrir skills transferíveis", "Aprender com validação do mercado", "Evidências reais"],
    journey: ["Diagnóstico de perfil", "Trilha dinâmica", "Portfólio validado"],
  },
  {
    name: "Rafa — Tech Lead ESG",
    goals: ["Mapear skills emergentes", "Upskilling de equipe", "Contratar por potencial"],
    journey: ["Painel de tendências", "Academia interna", "Match VYRA"],
  },
  {
    name: "Governo — agência de trabalho",
    goals: ["Planejar formação regional", "Reduzir desemprego estrutural", "Política baseada em evidência"],
    journey: ["Mapa de demanda", "Bolsas condicionadas", "Avaliação de impacto (ODS)"],
  },
];

export default function PersonasTabs() {
  const [i, setI] = useState(0);
  const p = personas[i];
  return (
    <section className="bg-slate-50 dark:bg-slate-950 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Para quem a VYRA existe</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {personas.map((x, idx) => (
            <button key={x.name} onClick={() => setI(idx)} className={`px-4 py-2 rounded-xl text-sm ${i === idx ? "btn-primary" : "btn"}`}>
              {x.name}
            </button>
          ))}
        </div>
        <Card className="mx-auto mt-8 max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">Metas</h3>
              <ul className="mt-2 grid gap-2 list-disc pl-5 text-slate-700 dark:text-slate-300">
                {p.goals.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">Jornada</h3>
              <ul className="mt-2 grid gap-2 list-disc pl-5 text-slate-700 dark:text-slate-300">
                {p.journey.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}