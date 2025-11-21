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
  const [view, setView] = useState("cards");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("/data/profiles.json")
      .then((r) => r.json())
      .then(setProfiles)
      .catch((err) => {
        console.error("Falha ao carregar perfis:", err);
        setProfiles([]);
      });
  }, []);

  const cities = useMemo(
    () => Array.from(new Set(profiles.map((p) => p.city))).filter(Boolean).sort(),
    [profiles]
  );
  const areas = useMemo(
    () => Array.from(new Set(profiles.map((p) => p.area))).filter(Boolean).sort(),
    [profiles]
  );
  const techs = useMemo(
    () =>
      Array.from(new Set(profiles.flatMap((p) => (p.skills || [])))).filter(Boolean).sort(),
    [profiles]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let arr = profiles.filter((p) => {
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

    if (sort === "name") {
      arr = arr.slice().sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "city") {
      arr = arr.slice().sort((a, b) => (a.city || "").localeCompare(b.city || ""));
    }
    return arr;
  }, [profiles, query, city, area, tech, sort]);

  return (
    <section className="bg-slate-50 dark:bg-slate-950 py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
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
          sort={sort}
          setSort={setSort}
          view={view}
          setView={setView}
          count={filtered.length}
        />

        <div
          className={`mt-6 ${
            view === "cards"
              ? "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "grid gap-3"
          }`}
        >
          {filtered.map((p) => (
            <ProfileCard key={p.id} profile={p} view={view} onOpen={() => setSelected(p)} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 p-6 text-center">
            <p className="text-slate-900 dark:text-white font-medium">Nenhum resultado.</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Ajuste os filtros ou tente outra busca.
            </p>
          </div>
        )}

        {selected && <ProfileModal profile={selected} onClose={() => setSelected(null)} />}
      </div>
    </section>
  );
}