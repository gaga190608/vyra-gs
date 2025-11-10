import React, { useEffect, useState } from 'react'
function storageKey(id){ return `vyra_profile_${id}` }

export default function ProfileModal({profile, onClose}){
  const [recs,setRecs]=useState(0)
  const [msg,setMsg]=useState('')
  const [sent,setSent]=useState(false)

  useEffect(()=>{ 
    const s=JSON.parse(localStorage.getItem(storageKey(profile.id))||'{}')
    setRecs(s.recs||0)
  },[profile.id])

  function recommend(){
    const k=storageKey(profile.id)
    const s=JSON.parse(localStorage.getItem(k)||'{}')
    const next=(s.recs||0)+1
    localStorage.setItem(k, JSON.stringify({...s, recs: next}))
    setRecs(next)
  }

  function sendMessage(e){
    e.preventDefault()
    if(!msg.trim()) return
    const k=storageKey(profile.id)
    const s=JSON.parse(localStorage.getItem(k)||'{}')
    const msgs=s.msgs||[]
    msgs.push({ text: msg.trim(), at: new Date().toISOString() })
    localStorage.setItem(k, JSON.stringify({...s, msgs}))
    setMsg('')
    setSent(true); setTimeout(()=>setSent(false),1500)
  }

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4">
      <div className="glass rounded-2xl max-w-3xl w-full p-5 md:p-6">
        <div className="flex justify-between items-start gap-3">
          <div className="flex items-center gap-3">
            <img src={profile.photo} alt="" className="h-14 w-14 rounded-xl object-cover" />
            <div>
              <h3 className="text-xl font-semibold">{profile.name}</h3>
              <p className="text-sm text-slate-300">{profile.role} • {profile.city} • {profile.area}</p>
              <p className="text-xs text-slate-400 mt-1">{profile.email}</p>
            </div>
          </div>
          <button className="btn" onClick={onClose}>Fechar</button>
        </div>

        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <section className="md:col-span-2 card">
            <h4 className="font-semibold">Experiências</h4>
            <ul className="list-disc pl-5 mt-2 text-sm text-slate-300 space-y-1">
              {profile.experiences.map((x,i)=>(<li key={i}>{x}</li>))}
            </ul>

            <h4 className="font-semibold mt-4">Habilidades Técnicas</h4>
            <ul className="flex flex-wrap gap-2 mt-2">
              {profile.skills.map(s=>(<li key={s} className="badge">{s}</li>))}
            </ul>

            <h4 className="font-semibold mt-4">Soft Skills & Hobbies</h4>
            <ul className="flex flex-wrap gap-2 mt-2">
              {profile.softSkills.map(s=>(<li key={s} className="badge">{s}</li>))}
              {profile.hobbies.map(s=>(<li key={s} className="badge">{s}</li>))}
            </ul>
          </section>

          <aside className="card">
            <h4 className="font-semibold">Ações</h4>
            <button className="btn-primary btn w-full mt-2" onClick={recommend}>Recomendar ({recs})</button>
            <form onSubmit={sendMessage} className="mt-3 grid gap-2">
              <label className="text-xs text-slate-400">Enviar mensagem</label>
              <textarea className="input h-24" value={msg} onChange={e=>setMsg(e.target.value)} placeholder="Diga olá..." />
              <button className="btn w-full" type="submit">Enviar</button>
              {sent && <p className="text-green-300 text-xs">Mensagem enviada!</p>}
            </form>

            <div className="mt-4">
              <h5 className="text-sm font-semibold">Formação</h5>
              <p className="text-sm text-slate-300">{profile.education}</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}