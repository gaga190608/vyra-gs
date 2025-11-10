import React, { useEffect, useState } from "react";
const key = (id) => `vyra_profile_${id}`;

export default function ProfileModal({ profile, onClose }) {
  const [recs, setRecs] = useState(0);
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(key(profile.id)) || "{}");
    setRecs(saved.recs || 0);
  }, [profile.id]);

  function recommend() {
    const k = key(profile.id);
    const saved = JSON.parse(localStorage.getItem(k) || "{}");
    const next = (saved.recs || 0) + 1;
    localStorage.setItem(k, JSON.stringify({ ...saved, recs: next }));
    setRecs(next);
  }

  function sendMessage(e) {
    e.preventDefault();
    if (!msg.trim()) return;
    const k = key(profile.id);
    const saved = JSON.parse(localStorage.getItem(k) || "{}");
    const msgs = saved.msgs || [];
    msgs.push({ text: msg.trim(), at: new Date().toISOString() });
    localStorage.setItem(k, JSON.stringify({ ...saved, msgs }));
    setMsg("");
    setSent(true);
    setTimeout(() => setSent(false), 1200);
  }

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4">
      <div className="glass w-full max-w-3xl rounded-2xl p-5 md:p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <img src={profile.photo} alt="" className="h-14 w-14 rounded-xl object-cover" />
            <div>
              <h3 className="text-xl font-semibold">{profile.name}</h3>
              <p className="text-sm text-slate-300">{profile.role} • {profile.city} • {profile.area}</p>
              <p className="mt-1 text-xs text-slate-400">{profile.email}</p>
            </div>
          </div>
          <button className="btn" onClick={onClose}>Fechar</button>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <section className="card md:col-span-2">
            <h4 className="font-semibold">Experiências</h4>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
              {profile.experiences.map((x, i) => <li key={i}>{x}</li>)}
            </ul>

            <h4 className="mt-4 font-semibold">Habilidades Técnicas</h4>
            <ul className="mt-2 flex flex-wrap gap-2">
              {profile.skills.map((s) => <li key={s} className="badge">{s}</li>)}
            </ul>

            <h4 className="mt-4 font-semibold">Soft Skills & Hobbies</h4>
            <ul className="mt-2 flex flex-wrap gap-2">
              {profile.softSkills.map((s) => <li key={s} className="badge">{s}</li>)}
              {profile.hobbies.map((s) => <li key={s} className="badge">{s}</li>)}
            </ul>
          </section>

          <aside className="card">
            <h4 className="font-semibold">Ações</h4>
            <button className="btn-primary btn mt-2 w-full" onClick={recommend}>
              Recomendar ({recs})
            </button>
            <form onSubmit={sendMessage} className="mt-3 grid gap-2">
              <label className="text-xs text-slate-400">Enviar mensagem</label>
              <textarea className="input h-24" value={msg} onChange={(e)=>setMsg(e.target.value)} placeholder="Diga olá..." />
              <button className="btn w-full" type="submit">Enviar</button>
              {sent && <p className="text-xs text-green-300">Mensagem enviada!</p>}
            </form>
            <div className="mt-4">
              <h5 className="text-sm font-semibold">Formação</h5>
              <p className="text-sm text-slate-300">{profile.education}</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}