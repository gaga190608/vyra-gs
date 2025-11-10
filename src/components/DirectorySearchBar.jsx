import React from "react";

export default function DirectorySearchBar({
  query,
  setQuery,
  city,
  setCity,
  cities,
  area,
  setArea,
  areas,
  tech,
  setTech,
  techs,
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 md:p-5">
      <div className="grid gap-3 md:grid-cols-5">
        <div className="md:col-span-2">
          <label className="text-xs text-slate-400">Buscar</label>
          <input
            className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-400"
            placeholder="nome, skill, cargo..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div>
          <label className="text-xs text-slate-400">Cidade</label>
          <select
            className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">Todas</option>
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs text-slate-400">Área</label>
          <select
            className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          >
            <option value="">Todas</option>
            {areas.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs text-slate-400">Tecnologia</label>
          <select
            className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm"
            value={tech}
            onChange={(e) => setTech(e.target.value)}
          >
            <option value="">Todas</option>
            {techs.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}