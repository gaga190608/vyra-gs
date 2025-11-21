import React from "react";
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const Card = ({ children, className = "" }) => (
  <div className={`card p-6 md:p-8 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 ${className}`}>
    {children}
  </div>
);

const data = [
  { name: "IA Ética", value: 86 },
  { name: "Segurança", value: 74 },
  { name: "Bioeconomia", value: 62 },
  { name: "Dados Públicos", value: 55 },
  { name: "NeuroUX", value: 48 },
];

export default function Impact() {
  return (
    <section id="impact" className="bg-slate-50 dark:bg-slate-950 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 grid items-start gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Impacto & Métricas</h2>
          <ul className="mt-4 grid gap-3 text-slate-700 dark:text-slate-300 list-disc pl-5">
            <li>% empregabilidade pós-trilha</li>
            <li>Tempo médio de requalificação</li>
            <li>Redução de desigualdade regional</li>
            <li>Aderência regulatória (LGPD/IA Act)</li>
          </ul>
        </div>
        <Card>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.15)" />
                <XAxis dataKey="name" stroke="#94a3b8" tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "#0b1020",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 12,
                    color: "#fff",
                  }}
                />
                <Bar dataKey="value" fill="#8b5cf6" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-3 text-xs text-slate-600 dark:text-slate-400">
            Indicador composto de demanda, investimento e política pública.
          </p>
        </Card>
      </div>
    </section>
  );
}