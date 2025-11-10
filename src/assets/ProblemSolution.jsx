import React from 'react'

const Card = ({ children, className="" }) => <div className={`card p-6 md:p-8 ${className}`}>{children}</div>

export default function ProblemSolution(){
  return (
    <section id="problem" className="bg-slate-900 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 grid gap-8 md:grid-cols-2">
        <Card>
          <span className="badge">Problema</span>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold">Descompasso entre educação e demanda real</h2>
          <p className="mt-3 text-slate-300">Aprende-se hoje o que o mercado já deixou para trás. Falta evidência; requalificação é lenta; desigualdades persistem.</p>
          <ul className="mt-5 grid gap-2 text-slate-300 list-disc pl-5">
            <li>Falta de previsões confiáveis</li>
            <li>Requalificação genérica</li>
            <li>Desigualdades regionais</li>
          </ul>
        </Card>
        <Card>
          <span className="badge">Solução — VYRA</span>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold">Carreiras vivas, guiadas por dados</h2>
          <p className="mt-3 text-slate-300">IA preditiva cruza OIT/WEF/mercado e gera trilhas com níveis de confiança, evidência e ajuste automático.</p>
          <ul className="mt-5 grid gap-2 text-slate-300 list-disc pl-5">
            <li>Probabilidade e evidência por profissão</li>
            <li>Microtrilhas personalizadas</li>
            <li>Painel para empresas e governo</li>
          </ul>
        </Card>
      </div>
    </section>
  )
}