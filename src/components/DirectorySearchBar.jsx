import React from "react";

export default function DirectorySearchBar({
  query, setQuery,
  city, setCity, cities = [],
  area, setArea, areas = [],
  tech, setTech, techs = [],
  sort, setSort,
  view, setView,
  count
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold">Diretório de Talentos</h3>
          <p className="text-xs text-slate-400">{count} resultado(s)</p>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={sort}
            onChange={(e)=>setSort(e.target.value)}
            className="select"
            aria-label="Ordenar por"
          >
            <option value="recent">Mais recentes</option>
            <option value="name">Nome (A-Z)</option>
            <option value="city">Cidade</option>
          </select>
          <div className="hidden gap-1 md:flex" role="group" aria-label="Layout">
            <button
              onClick={()=>setView("cards")}
              className={`btn px-3 ${view==="cards"?"ring-1 ring-cyan-400/50":""}`}
              title="Cards"
            >Cards</button>
            <button
              onClick={()=>setView("list")}
              className={`btn px-3 ${view==="list"?"ring-1 ring-cyan-400/50":""}`}
              title="Lista"
            >Lista</button>
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-5">
        <div className="md:col-span-2">
          <label className="text-xs text-slate-400">Buscar</label>
          <input
            className="input"
            placeholder="nome, skill, cargo..."
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
          />
        </div>
        <div>
          <label className="text-xs text-slate-400">Cidade</label>
          <select className="select" value={city} onChange={(e)=>setCity(e.target.value)}>
            <option value="">Todas</option>
            {cities.map((c)=> <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs text-slate-400">Área</label>
          <select className="select" value={area} onChange={(e)=>setArea(e.target.value)}>
            <option value="">Todas</option>
            {areas.map((a)=> <option key={a} value={a}>{a}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs text-slate-400">Tecnologia</label>
          <select className="select" value={tech} onChange={(e)=>setTech(e.target.value)}>
            <option value="">Todas</option>
            {techs.map((t)=> <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
}