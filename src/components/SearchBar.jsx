import React from 'react'

export default function SearchBar({query,setQuery, city,setCity,cities, area,setArea,areas, tech,setTech,techs, count}){
  return (
    <section id="filters" className="glass rounded-2xl p-4 md:p-5">
      <div className="grid gap-3 md:grid-cols-5">
        <div className="md:col-span-2">
          <label className="text-xs text-slate-400">Buscar</label>
          <input className="input" placeholder="nome, skill, cargo..." value={query} onChange={e=>setQuery(e.target.value)} />
        </div>
        <div>
          <label className="text-xs text-slate-400">Cidade</label>
          <select className="select" value={city} onChange={e=>setCity(e.target.value)}>
            <option value="">Todas</option>
            {cities.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs text-slate-400">Área</label>
          <select className="select" value={area} onChange={e=>setArea(e.target.value)}>
            <option value="">Todas</option>
            {areas.map(a => <option key={a} value={a}>{a}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs text-slate-400">Tecnologia</label>
          <select className="select" value={tech} onChange={e=>setTech(e.target.value)}>
            <option value="">Todas</option>
            {techs.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>
      <p className="text-xs text-slate-400 mt-2">{count} resultados</p>
    </section>
  )
}