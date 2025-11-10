import React, { useEffect, useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import SearchBar from './components/SearchBar.jsx'
import ProfileCard from './components/ProfileCard.jsx'
import ProfileModal from './components/ProfileModal.jsx'
import Footer from './components/Footer.jsx'

export default function App(){
  const [profiles, setProfiles] = useState([])
  const [query, setQuery] = useState('')
  const [city, setCity] = useState('')
  const [area, setArea] = useState('')
  const [tech, setTech] = useState('')
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    fetch('/data/profiles.json').then(r => r.json()).then(setProfiles)
  }, [])

  const cities = useMemo(() => Array.from(new Set(profiles.map(p => p.city))).sort(), [profiles])
  const areas  = useMemo(() => Array.from(new Set(profiles.map(p => p.area))).sort(), [profiles])
  const techs  = useMemo(() => Array.from(new Set(profiles.flatMap(p => p.skills))).sort(), [profiles])

  const filtered = useMemo(() => profiles.filter(p => {
    const q = query.toLowerCase()
    const matchesQuery = !q || [p.name, p.role, p.area, p.city, ...p.skills].join(' ').toLowerCase().includes(q)
    const matchesCity = !city || p.city === city
    const matchesArea = !area || p.area === area
    const matchesTech = !tech || p.skills.includes(tech)
    return matchesQuery && matchesCity && matchesArea && matchesTech
  }), [profiles, query, city, area, tech])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <main className="mx-auto max-w-7xl px-4 md:px-6 py-8">
        <section className="mb-6">
          <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
            <h1 className="text-2xl md:text-3xl font-bold">VYRA • Rede Profissional do Futuro</h1>
            <div className="flex gap-2 text-xs">
              <span className="badge">Dark Mode</span>
              <span className="badge">SPA React</span>
              <span className="badge">Tailwind</span>
              <span className="badge">JSON Local</span>
            </div>
          </div>
          <p className="text-slate-300 mt-2 max-w-3xl">
            Explore profissionais fictícios: dados pessoais/academia, experiências, habilidades técnicas e soft skills.
            Busque e filtre por área, cidade ou tecnologia.
          </p>
        </section>

        <SearchBar
          query={query} setQuery={setQuery}
          city={city} setCity={setCity} cities={cities}
          area={area} setArea={setArea} areas={areas}
          tech={tech} setTech={setTech} techs={techs}
          count={filtered.length}
        />

        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" id="grid">
          {filtered.map(p => (
            <ProfileCard key={p.id} profile={p} onOpen={() => setSelected(p)} />
          ))}
        </section>

        {selected && <ProfileModal profile={selected} onClose={() => setSelected(null)} />}
      </main>
      <Footer />
    </div>
  )
}