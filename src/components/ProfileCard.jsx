import React from "react";

export default function ProfileCard({ profile, onOpen }) {
  return (
    <article className="relative rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition hover:brightness-110">
      {/* sobreposição sutil */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/0 to-cyan-400/0 opacity-0 transition group-hover:opacity-10" />
      <div className="flex items-center gap-3">
        <img
          src={profile.photo}
          alt={`Foto de ${profile.name}`}
          className="h-12 w-12 rounded-xl object-cover"
        />
        <div>
          <h3 className="font-semibold text-white">{profile.name}</h3>
          <p className="text-sm text-slate-300">
            {profile.role} • {profile.city}
          </p>
        </div>
      </div>
      <ul className="mt-3 flex flex-wrap gap-2">
        {(profile.skills || []).slice(0, 4).map((s) => (
          <li
            key={s}
            className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-xs text-slate-300"
          >
            {s}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex gap-2">
        <button
          className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-3 py-2 text-sm font-medium text-white"
          onClick={onOpen}
        >
          Ver perfil
        </button>
      </div>
    </article>
  );
}