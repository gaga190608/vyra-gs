import React from 'react'

export default function ProfileCard({profile,onOpen}){
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
        {profile.skills.slice(0,4).map(s => (
          <li key={s} className="badge">{s}</li>
        ))}
      </ul>
      <div className="mt-4 flex gap-2">
        <button className="btn-primary btn" onClick={onOpen}>Ver perfil</button>
        <button className="btn" onClick={onOpen}>Recomendar</button>
      </div>
    </article>
  )
}