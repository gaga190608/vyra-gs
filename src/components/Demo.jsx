import React, { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { useCareers } from "../lib/hooks";

const Card = ({ children, className = "" }) => (
  <div
    className={`card p-6 md:p-8 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-2xl ${className}`}
  >
    {children}
  </div>
);

const trendData = [
  { year: "2025", iaEthics: 18 },
  { year: "2026", iaEthics: 26 },
  { year: "2027", iaEthics: 35 },
  { year: "2028", iaEthics: 43 },
  { year: "2029", iaEthics: 52 },
  { year: "2030", iaEthics: 64 },
];

export default function Demo() {
  const [tab, setTab] = useState("aluno");

  const { data: careers = [], loading: careersLoading } = useCareers({
    order_by: "score",
    limit: 10,
  });

  const demoData = useMemo(
    () => ({
      aluno: trendData,
      empresa: trendData.map((d) => ({ ...d, iaEthics: d.iaEthics + 8 })),
      governo: trendData.map((d) => ({ ...d, iaEthics: d.iaEthics + 15 })),
    }),
    []
  );

  return (
    <section id="demo" className="bg-slate-50 dark:bg-slate-950 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Demo ao vivo
            </h2>
            <p className="mt-2 max-w-2xl text-slate-700 dark:text-slate-300">
              Simule o painel e veja como as trilhas mudam conforme a validação do mercado.
            </p>
          </div>

          <div className="flex gap-2">
            {["aluno", "empresa", "governo"].map((k) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={`rounded-xl px-4 py-2 text-sm font-medium capitalize transition ${
                  tab === k
                    ? "btn-primary"
                    : "btn !bg-transparent !text-black dark:!text-white hover:bg-slate-200 dark:hover:bg-slate-800"
                }`}
              >
                {k}
              </button>
            ))}
          </div>
        </div>

        <Card className="mt-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={demoData[tab]}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(148,163,184,0.15)"
                  />
                  <XAxis
                    dataKey="year"
                    stroke="#94a3b8"
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#94a3b8"
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "#0b1020",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 12,
                      color: "#fff",
                    }}
                  />

                  <Line
                    type="monotone"
                    dataKey="iaEthics"
                    stroke="#22d3ee"
                    strokeWidth={3}
                    dot={false}
                    name="Confiança — IA Ética"
                  />
                </LineChart>
              </ResponsiveContainer>

              <div className="mt-3 text-xs text-slate-600 dark:text-slate-400">
                *Dados ilustrativos para prototipagem.
              </div>
            </div>

            <div className="grid content-start gap-4">
              <div className="p-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-2xl">
                <p className="text-xs text-slate-600 dark:text-slate-400">Trilha recomendada</p>
                <p className="mt-1 font-semibold text-slate-900 dark:text-white">
                  Especialista em IA Ética
                </p>

                <ul className="mt-3 grid gap-2 text-sm text-slate-700 dark:text-slate-300 list-disc pl-5">
                  <li>Fundamentos de ML + Ética</li>
                  <li>Fairness, Bias & Explainability</li>
                  <li>Regulatório (IA Act/LGPD)</li>
                  <li>Projeto com dados públicos</li>
                </ul>
              </div>

          
              <div className="p-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-2xl">
                <p className="text-xs text-slate-600 dark:text-slate-400">ODS afetados</p>

                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  {[
                    "ODS 4 — Educação",
                    "ODS 8 — Trabalho decente",
                    "ODS 9 — Inovação",
                    "ODS 10 — Redução desigualdades",
                  ].map((t) => (
                    <span
                      key={t}
                      className="badge !bg-slate-100 !text-slate-700 dark:!bg-slate-700 dark:!text-slate-300 border border-slate-200 dark:border-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Carreiras em destaque
                  </p>

                  {careersLoading ? (
                    <div className="mt-2 text-sm">Carregando...</div>
                  ) : (
                    <ul className="mt-2 text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      {careers.slice(0, 4).map((c) => (
                        <li key={c.id} className="flex items-center justify-between">
                          <span>{c.title ?? c.name ?? "Carreira"}</span>
                          <span className="text-xs text-slate-500 dark:text-slate-400">
                            {c.score ?? ""}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}