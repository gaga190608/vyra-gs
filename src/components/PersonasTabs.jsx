import React, { useState } from "react";

const Card = ({ children, className = "" }) => (
  <div className={`card p-6 md:p-8 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 ${className}`}>
    {children}
  </div>
);

const personas = [
  {
    name: "Especialista CRM (Salesforce)",
    goals: [
      "Centralizar a verdade do cliente (Single Source of Truth)",
      "Automatizar fluxos de vendas e atendimento",
      "Garantir integridade e higiene de dados",
    ],
    journey: [
      "Configuração de objetos e campos customizados",
      "Implementação de regras de validação",
      "Criação de Dashboards e Relatórios Executivos",
    ],
  },
  {
    name: "Gestão de Onboarding",
    goals: [
      "Reduzir o Time-to-Value (TTV) do cliente",
      "Garantir a adoção inicial da ferramenta",
      "Treinar stakeholders e usuários finais",
    ],
    journey: [
      "Kick-off e alinhamento de expectativas",
      "Configuração guiada do ambiente (Setup)",
      "Acompanhamento de marcos de sucesso (Milestones)",
    ],
  },
  {
    name: "Gestão de Churn & Retenção",
    goals: [
      "Identificar clientes com risco de cancelamento",
      "Aumentar o LTV (Lifetime Value)",
      "Reverter detratores para promotores",
    ],
    journey: [
      "Monitoramento de Health Score",
      "Execução de Playbooks de Risco",
      "Reuniões de Revisão de Negócio (QBRs)",
    ],
  },
  {
    name: "Analista de KCS (Knowledge)",
    goals: [
      "Reduzir tempo de resolução de tickets",
      "Criar base de conhecimento escalável",
      "Promover o autoatendimento (Self-service)",
    ],
    journey: [
      "Captura de conhecimento durante o atendimento",
      "Estruturação e curadoria de artigos",
      "Publicação e ciclo de feedback do conteúdo",
    ],
  },
];

export default function PersonasTabs() {
  const [i, setI] = useState(0);
  const p = personas[i];
  
  return (
    <section className="bg-slate-50 dark:bg-slate-950 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          Especializações e Processos
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {personas.map((x, idx) => (
            <button
              key={x.name}
              onClick={() => setI(idx)}
              className={`px-4 py-2 rounded-xl text-sm transition-colors ${
                i === idx
                  ? "btn-primary"
                  : "btn !bg-transparent !text-black dark:!text-white hover:bg-slate-200 dark:hover:bg-slate-800"
              }`}
            >
              {x.name}
            </button>
          ))}
        </div>
        <Card className="mx-auto mt-8 max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">Objetivos Principais</h3>
              <ul className="mt-2 grid gap-2 list-disc pl-5 text-slate-700 dark:text-slate-300">
                {p.goals.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">Jornada Operacional</h3>
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