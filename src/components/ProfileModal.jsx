// src/components/ProfileModal.jsx
import React, { useEffect, useState } from "react";
import { useRecommend } from "../lib/hooks";

const key = (id) => `vyra_profile_${id}`;

export default function ProfileModal({ profile, onClose }) {
  const [recsLocal, setRecsLocal] = useState(0);
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);
  const { run, result, loading, error, clear } = useRecommend();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(key(profile.id)) || "{}");
    setRecsLocal(saved.recs || 0);
  }, [profile.id]);

  function recommendLocal() {
    const k = key(profile.id);
    const saved = JSON.parse(localStorage.getItem(k) || "{}");
    const next = (saved.recs || 0) + 1;
    localStorage.setItem(k, JSON.stringify({ ...saved, recs: next }));
    setRecsLocal(next);
  }

  async function handleRecommend() {
    try {
      // payload uses inline dna from profile
      const payload = {
        top_n: 5,
        dna: {
          nome: profile.name || profile.nome,
          skills: profile.skills || [],
          valores: profile.valores || [],
          modo: profile.modo || "profissional",
          ods_interesse: profile.ods_interesse || [],
        },
      };
      await run(payload);
      // increment local counter too
      recommendLocal();
    } catch (e) {
      console.error("Erro recommend:", e);
      alert("Falha ao gerar recomendações.");
    }
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
      <div className="glass w-full max-w-3xl rounded-2xl p-5 md:p-6 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <img src={profile.photo} alt="" className="h-14 w-14 rounded-xl object-cover" />
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{profile.name}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{profile.role} • {profile.city} • {profile.area}</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{profile.email}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="btn" onClick={onClose}>Fechar</button>
            <button className="btn-primary" onClick={handleRecommend} disabled={loading}>
              {loading ? "Gerando..." : "Gerar recomendações"}
            </button>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <section className="card md:col-span-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 p-4">
            <h4 className="font-semibold text-slate-900 dark:text-white">Experiências</h4>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-300">
              {profile.experiences?.map((x, i) => <li key={i}>{x}</li>)}
            </ul>

            <h4 className="mt-4 font-semibold text-slate-900 dark:text-white">Habilidades Técnicas</h4>
            <ul className="mt-2 flex flex-wrap gap-2">
              {profile.skills?.map((s) => <li key={s} className="badge">{s}</li>)}
            </ul>

            <h4 className="mt-4 font-semibold text-slate-900 dark:text-white">Soft Skills & Hobbies</h4>
            <ul className="mt-2 flex flex-wrap gap-2">
              {profile.softSkills?.map((s) => <li key={s} className="badge">{s}</li>)}
              {profile.hobbies?.map((s) => <li key={s} className="badge">{s}</li>)}
            </ul>

            {result && (
              <div className="mt-4 p-3 bg-slate-50 dark:bg-slate-900 border border-gray-100 dark:border-gray-800 rounded">
                <h5 className="font-semibold text-slate-900 dark:text-white">Recomendações (API)</h5>
                <pre className="text-xs mt-2 overflow-auto text-slate-700 dark:text-slate-300">{JSON.stringify(result, null, 2)}</pre>
              </div>
            )}
            {error && (
              <div className="mt-4 text-sm text-red-600 dark:text-red-300">Erro ao gerar recomendações.</div>
            )}
          </section>

          <aside className="card bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 p-4">
            <h4 className="font-semibold text-slate-900 dark:text-white">Ações</h4>
            <button className="btn-primary btn mt-2 w-full" onClick={recommendLocal}>
              Recomendar (local) ({recsLocal})
            </button>

            <form onSubmit={sendMessage} className="mt-3 grid gap-2">
              <label className="text-xs text-slate-600 dark:text-slate-400">Enviar mensagem</label>
              <textarea className="input h-24" value={msg} onChange={(e)=>setMsg(e.target.value)} placeholder="Diga olá..." />
              <button className="btn w-full" type="submit">Enviar</button>
              {sent && <p className="text-xs text-green-600 dark:text-green-300">Mensagem enviada!</p>}
            </form>

            <div className="mt-4">
              <h5 className="text-sm font-semibold text-slate-900 dark:text-white">Formação</h5>
              <p className="text-sm text-slate-700 dark:text-slate-300">{profile.education}</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}