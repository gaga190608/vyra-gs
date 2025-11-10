import React from "react";

export default function ProfileCard({ profile, onOpen, view="cards" }) {
  if (view === "list") {
    return (
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
        <img src={profile.photo} alt="" className="h-10 w-10 rounded-lg object-cover" />
        <div>
          <p className="font-medium">{profile.name} <span className="text-slate-400">• {profile.role}</span></p>
          <p className="text-xs text-slate-400">{profile.area} • {profile.city}</p>
        </div>
        <button className="btn-primary btn" onClick={onOpen}>Ver perfil</button>
      </div>
    );
  }

  // cards
  return (
    <article className="card hover:brightness-110 transition">
      <div className="flex items-center gap-3">
        <img src={profile.photo} alt={`Foto de ${profile.name}`} className="h-12 w-12 rounded-xl object-cover" />
        <div>
          <h3 className="font-semibold">{profile.name}</h3>
          <p className="text-sm text-slate-300">{profile.role} • {profile.city}</p>
        </div>
      </div>
      <ul className="mt-3 flex flex-wrap gap-2">
        {profile.skills.slice(0,4).map((s) => (
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