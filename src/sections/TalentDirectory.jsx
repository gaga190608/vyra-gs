import React, { useEffect, useMemo, useState } from "react";
import DirectorySearchBar from "../components/DirectorySearchBar.jsx";
import ProfileCard from "../components/ProfileCard.jsx";
import ProfileModal from "../components/ProfileModal.jsx";

const GroupHeader = ({title}) => (
  <div className="sticky top-16 z-10 -mx-2 mb-3 rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 backdrop-blur">
    <h4 className="text-sm font-semibold text-slate-200">{title}</h4>
  </div>
);

export default function TalentDirectory(){
  const [profiles, setProfiles] = useState([]);
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [tech, setTech] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(()=>{
    fetch("/data/profiles.json").then(r=>r.json()).then(setProfiles);
  },[]);

  const cities = useMemo(()=>Array.from(new Set(profiles.map(p=>p.city))).sort(), [profiles]);
  const areas  = useMemo(()=>Array.from(new Set(profiles.map(p=>p.area))).sort(), [profiles]);
  const techs  = useMemo(()=>Array.from(new Set(profiles.flatMap(p=>p.skills))).sort(), [profiles]);

  const filtered = useMemo(()=>profiles.filter(p=>{
    const q = query.toLowerCase();
    const matchesQuery = !q || [p.name,p.role,p.area,p.city,...p.skills].join(" ").toLowerCase().includes(q);
    const matchesCity = !city || p.city===city;
    const matchesArea = !area || p.area===area;
    const matchesTech = !tech || p.skills.includes(tech);
    return matchesQuery && matchesCity && matchesArea && matchesTech;
  }), [profiles, query, city, area, tech]);

  const groups = useMemo(()=>{
    const map = new Map();
    filtered.forEach(p=>{
      const key = p.area || "Outros";
      if(!map.has(key)) map.set(key, []);
      map.get(key).push(p);
    });
    return Array.from(map.entries()); 
  }, [filtered]);

  function clearFilters(){
    setQuery(""); setCity(""); setArea(""); setTech("");
  }

  return (
    <section id="talents" className="py-20 md:py-28 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <header className="mb-6">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Diretório de Talentos</h2>
          <p className="mt-2 text-slate-300 max-w-3xl">
            Explore profissionais fictícios do ecossistema VYRA. Clique no card para ver o perfil completo, recomendar e enviar mensagem.
          </p>
        </header>

        <DirectorySearchBar
          query={query} setQuery={setQuery}
          city={city} setCity={setCity} cities={cities}
          area={area} setArea={setArea} areas={areas}
          tech={tech} setTech={setTech} techs={techs}
          count={filtered.length}
          onClear={clearFilters}
        />

        <div className="mt-8 grid gap-10">
          {groups.map(([areaName, list])=>(
            <div key={areaName}>
              <GroupHeader title={areaName} />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {list.map(p=>(
                  <ProfileCard key={p.id} profile={p} onOpen={()=>setSelected(p)} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {selected && <ProfileModal profile={selected} onClose={()=>setSelected(null)} />}
      </div>
    </section>
  );
}