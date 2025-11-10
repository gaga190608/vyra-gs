import React from 'react'
const Card = ({ children }) => <div className="card p-5">{children}</div>

export default function FAQ(){
  const faqs = [
    ['Como a VYRA evita achismos?','Fontes confiáveis, nível de confiança e metodologia por recomendação.'],
    ['E se a tendência não se confirmar?','A trilha se adapta; skills nucleares são realocadas.'],
    ['Privacidade?','LGPD-first, privacidade por design e transparência.']
  ]
  return (
    <section className="bg-slate-950 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold">Perguntas Frequentes</h2>
        <div className="mt-8 grid gap-4">
          {faqs.map(([q,a])=>(
            <Card key={q}>
              <p className="font-medium">{q}</p>
              <p className="mt-2 text-slate-300">{a}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}