import React from "react";
const Card = ({ children, className = "" }) => (
  <div className={`card p-6 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 ${className}`}>
    {children}
  </div>
);

export default function Pricing() {
  const tiers = [
    { name: "Starter", price: "Gratuito", bullets: ["1 trilha dinâmica", "Relatórios básicos", "Carteira de portfólio"], cta: "Começar" },
    { name: "Pro (Empresas)", price: "R$ 499/mês", bullets: ["Painel de gaps", "Academia interna", "Match com talentos"], cta: "Pedir demo", featured: true },
    { name: "Gov/ONG", price: "Sob consulta", bullets: ["Mapas regionais", "Bolsas condicionadas", "Métricas por ODS"], cta: "Falar com equipe" },
  ];
  return (
    <section id="pricing" className="bg-slate-50 dark:bg-slate-950 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Planos & Go-to-Market</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <Card key={t.name} className={t.featured ? "ring-2 ring-cyan-400/60" : ""}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{t.name}</h3>
                {t.featured && <span className="badge">Recomendado</span>}
              </div>
              <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">{t.price}</p>
              <ul className="mt-4 grid gap-2 text-slate-700 dark:text-slate-300 list-disc pl-5">{t.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              <button className="mt-6 w-full btn-primary btn">{t.cta}</button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}