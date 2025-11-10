import React, { useEffect, useMemo, useState } from "react";
import DirectorySearchBar from "../components/DirectorySearchBar.jsx";
import ProfileCard from "../components/ProfileCard.jsx";
import ProfileModal from "../components/ProfileModal.jsx";

export default function TalentDirectory() {
  const [profiles, setProfiles] = useState([]);
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [tech, setTech] = useState("");
  const [sort, setSort] = useState("recent");
  const [view, setView] = useState("cards"); // "cards" | "list"
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("/data/profiles.json").then((r)=>r.json()).then(setProfiles);
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
    const q = query.trim().toLowerCase();
    let arr = profiles.filter((p) => {
      const matchesQuery =
        !q ||
        [p.name, p.role, p.area, p.city, ...p.skills]
          .join(" ")
          .toLowerCase()
          .includes(q);
      const matchesCity = !city || p.city === city;
      const matchesArea = !area || p.area === area;
      const matchesTech = !tech || p.skills.includes(tech);
      return matchesQuery && matchesCity && matchesArea && matchesTech;
    });

    if (sort === "name") {
      arr = arr.slice().sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "city") {
      arr = arr.slice().sort((a, b) => a.city.localeCompare(b.city));
    }
    // recent = ordem original (mock)
    return arr;
  }, [profiles, query, city, area, tech, sort]);

  return (
    <section className="bg-slate-900 py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <DirectorySearchBar
          query={query} setQuery={setQuery}
          city={city} setCity={setCity} cities={cities}
          area={area} setArea={setArea} areas={areas}
          tech={tech} setTech={setTech} techs={techs}
          sort={sort} setSort={setSort}
          view={view} setView={setView}
          count={filtered.length}
        />

        {/* grid/list */}
        <div className={`mt-6 ${view==="cards" ? "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid gap-3"}`}>
          {filtered.map((p) => (
            <ProfileCard key={p.id} profile={p} view={view} onOpen={() => setSelected(p)} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-6 text-center text-slate-300">
            Nenhum resultado. Ajuste os filtros ou tente outra busca.
          </div>
        )}

        {selected && (
          <ProfileModal profile={selected} onClose={() => setSelected(null)} />
        )}
      </div>
    </section>
  );
}