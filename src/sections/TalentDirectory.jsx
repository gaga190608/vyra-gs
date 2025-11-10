import React, { useEffect, useMemo, useState } from "react";
import DirectorySearchBar from "../components/DirectorySearchBar";
import ProfileCard from "../components/ProfileCard";
import ProfileModal from "../components/ProfileModal";

export default function TalentDirectory() {
  const [profiles, setProfiles] = useState([]);
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [tech, setTech] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("/data/profiles.json")
      .then((r) => r.json())
      .then(setProfiles)
      .catch(() => setProfiles([]));
  }, []);


  const cities = useMemo(
    () => Array.from(new Set(profiles.map((p) => p.city))).sort(),
    [profiles]
  );
  const areas = useMemo(
    () => Array.from(new Set(profiles.map((p) => p.area))).sort(),
    [profiles]
  );
  const techs = useMemo(
    () => Array.from(new Set(profiles.flatMap((p) => p.skills))).sort(),
    [profiles]
  );


  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return profiles.filter((p) => {
      const matchesQuery =
        !q ||
        [p.name, p.role, p.area, p.city, ...(p.skills || [])]
          .join(" ")
          .toLowerCase()
          .includes(q);
      const matchesCity = !city || p.city === city;
      const matchesArea = !area || p.area === area;
      const matchesTech = !tech || (p.skills || []).includes(tech);
      return matchesQuery && matchesCity && matchesArea && matchesTech;
    });
  }, [profiles, query, city, area, tech]);

  return (
    <section id="talents" className="bg-slate-950 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Diretório de Talentos
            </h2>
            <p className="text-slate-300 mt-2">
              Explore profissionais fictícios do ecossistema VYRA. Clique no
              card para ver o perfil completo, recomendar e enviar mensagem.
            </p>
          </div>
          <div className="text-xs text-slate-400">
            {filtered.length} resultado(s)
          </div>
        </div>

        <div className="mt-6">
          <DirectorySearchBar
            query={query}
            setQuery={setQuery}
            city={city}
            setCity={setCity}
            cities={cities}
            area={area}
            setArea={setArea}
            areas={areas}
            tech={tech}
            setTech={setTech}
            techs={techs}
          />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <ProfileCard key={p.id} profile={p} onOpen={() => setSelected(p)} />
          ))}
        </div>

        {selected && (
          <ProfileModal profile={selected} onClose={() => setSelected(null)} />
        )}
      </div>
    </section>
  );
}