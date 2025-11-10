import React from 'react'

const Pill = ({ children, className = "" }) => (
  <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium tracking-wide ${className}`}>{children}</span>
)

const Dot = () => <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 inline-block" />

export default function Hero(){
  return (
    <section id="home" className="pt-20 md:pt-28 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 md:px-6 grid items-center gap-12 md:grid-cols-2">
        <div>
          <Pill className="bg-violet-500/10 text-violet-300 ring-1 ring-inset ring-violet-400/30">
            <Dot /> Carreiras Vivas • IA Preditiva • ODS
          </Pill>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight text-white">
            Aprender <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">o que o mundo</span> ainda está descobrindo.
          </h1>
          <p className="mt-5 text-slate-300 md:text-lg">
            Antecipamos tendências com evidências e criamos trilhas dinâmicas — com confiabilidade, validação contínua e impacto nos ODS.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#demo" className="btn-primary btn">Ver demo ao vivo</a>
            <a href="#problem" className="btn">Como funciona</a>
          </div>
        </div>
        <div className="card p-6 md:p-8">
          <p className="text-sm text-slate-300">Confiança média das previsões</p>
          <p className="text-3xl font-semibold mt-1">92%</p>
          <div className="mt-4 h-3 w-full rounded-full bg-white/10">
            <div className="h-3 rounded-full" style={{width:'92%', backgroundImage:'linear-gradient(90deg,#8b5cf6,#22d3ee)'}} />
          </div>
        </div>
      </div>
    </section>
  )
}