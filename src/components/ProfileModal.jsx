import React, { useEffect, useState } from "react";

function storageKey(id) {
  return `vyra_profile_${id}`;
}

export default function ProfileModal({ profile, onClose }) {
  const [recs, setRecs] = useState(0);
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(storageKey(profile.id)) || "{}");
    setRecs(saved.recs || 0);
  }, [profile.id]);

  function recommend() {
    const key = storageKey(profile.id);
    const saved = JSON.parse(localStorage.getItem(key) || "{}");
    const next = (saved.recs || 0) + 1;
    localStorage.setItem(key, JSON.stringify({ ...saved, recs: next }));
    setRecs(next);
  }

  function sendMessage(e) {
    e.preventDefault();
    if (!msg.trim()) return;
    const key = storageKey(profile.id);
    const saved = JSON.parse(localStorage.getItem(key) || "{}");
    const msgs = saved.msgs || [];
    msgs.push({ text: msg.trim(), at: new Date().toISOString() });
    localStorage.setItem(key, JSON.stringify({ ...saved, msgs }));
    setMsg("");
    setSent(true);
    setTimeout(() => setSent(false), 1200);
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4"
    >
      <div className="w-full max-w-3xl rounded-2xl border border-white/10 bg-slate-900 p-5 md:p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <img
              src={profile.photo}
              alt=""
              className="h-14 w-14 rounded-xl object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-white">{profile.name}</h3>
              <p className="text-sm text-slate-300">
                {profile.role} • {profile.city} • {profile.area}
              </p>
              <p className="mt-1 text-xs text-slate-400">{profile.email}</p>
            </div>
          </div>
          <button className="rounded-xl border border-white/15 px-3 py-2" onClick={onClose}>
            Fechar
          </button>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <section className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-4">
            <h4 className="font-semibold text-white">Experiências</h4>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
              {(profile.experiences || []).map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>

            <h4 className="mt-4 font-semibold text-white">Habilidades Técnicas</h4>
            <ul className="mt-2 flex flex-wrap gap-2">
              {(profile.skills || []).map((s) => (
                <li
                  key={s}
                  className="inline-flex rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-xs text-slate-300"
                >
                  {s}
                </li>
              ))}
            </ul>

            <h4 className="mt-4 font-semibold text-white">Soft Skills & Hobbies</h4>
            <ul className="mt-2 flex flex-wrap gap-2">
              {(profile.softSkills || []).map((s) => (
                <li key={s} className="inline-flex rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-xs text-slate-300">
                  {s}
                </li>
              ))}
              {(profile.hobbies || []).map((s) => (
                <li key={s} className="inline-flex rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-xs text-slate-300">
                  {s}
                </li>
              ))}
            </ul>
          </section>

          <aside className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <h4 className="font-semibold text-white">Ações</h4>
            <button
              className="btn-primary mt-2 w-full rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-2.5 font-medium text-white"
              onClick={recommend}
            >
              Recomendar ({recs})
            </button>

            <form onSubmit={sendMessage} className="mt-3 grid gap-2">
              <label className="text-xs text-slate-400">Enviar mensagem</label>
              <textarea
                className="h-24 w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-400"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Diga olá..."
              />
              <button className="w-full rounded-xl border border-white/15 bg-white/5 py-2">
                Enviar
              </button>
              {sent && <p className="text-xs text-green-300">Mensagem enviada!</p>}
            </form>

            <div className="mt-4">
              <h5 className="text-sm font-semibold text-white">Formação</h5>
              <p className="text-sm text-slate-300">{profile.education}</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}