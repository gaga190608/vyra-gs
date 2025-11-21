import React from "react";

export default function ProfileCard({ profile, onOpen, view = "cards" }) {
  if (view === "list") {
    return (
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 p-3">
        <img src={profile.photo} alt="" className="h-10 w-10 rounded-lg object-cover" />
        <div>
          <p className="font-medium text-slate-900 dark:text-white">
            {profile.name} <span className="text-slate-600 dark:text-slate-400">• {profile.role}</span>
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400">{profile.area} • {profile.city}</p>
        </div>
        <button className="btn-primary btn" onClick={onOpen}>Ver perfil</button>
      </div>
    );
  }

  // cards
  return (
    <article className="card hover:brightness-110 transition bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 p-4">
      <div className="flex items-center gap-3">
        <img src={profile.photo} alt={`Foto de ${profile.name}`} className="h-12 w-12 rounded-xl object-cover" />
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-white">{profile.name}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">{profile.role} • {profile.city}</p>
        </div>
      </div>
      <ul className="mt-3 flex flex-wrap gap-2">
        {profile.skills.slice(0, 4).map((s) => (
          <li key={s} className="badge">{s}</li>
        ))}
      </ul>
      <div className="mt-4 flex gap-2">
        <button className="btn-primary btn" onClick={onOpen}>Ver perfil</button>
        <a className="btn" href="#diretorio">Recomendar</a>
      </div>
    </article>
  );
}