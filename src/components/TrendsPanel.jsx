import React, { useState } from "react";
import { api } from "../lib/api";

export default function TrendsPanel({ className = "" }) {
  const [ia, setIa] = useState(7);
  const [clima, setClima] = useState(5);
  const [remoto, setRemoto] = useState(6);
  const [loading, setLoading] = useState(false);

  async function handleApply() {
    setLoading(true);
    try {
      await api.updateTrends({ ia, clima, remoto });
      alert("Tendências aplicadas com sucesso.");
    } catch (e) {
      console.error("Erro ao aplicar trends:", e);
      alert("Falha ao aplicar tendências. Veja o console.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={`p-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg ${className}`}>
      <h3 className="font-semibold text-slate-900 dark:text-white">Painel de Tendências</h3>

      <div className="mt-3 grid gap-3">
        <label className="text-sm text-slate-700 dark:text-slate-300">
          IA: <span className="font-medium">{ia}</span>
        </label>
        <input type="range" min="0" max="10" value={ia} onChange={(e) => setIa(Number(e.target.value))} />

        <label className="text-sm text-slate-700 dark:text-slate-300">
          Clima: <span className="font-medium">{clima}</span>
        </label>
        <input type="range" min="0" max="10" value={clima} onChange={(e) => setClima(Number(e.target.value))} />

        <label className="text-sm text-slate-700 dark:text-slate-300">
          Remoto: <span className="font-medium">{remoto}</span>
        </label>
        <input type="range" min="0" max="10" value={remoto} onChange={(e) => setRemoto(Number(e.target.value))} />

        <button
          onClick={handleApply}
          disabled={loading}
          className="mt-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 text-white px-4 py-2"
        >
          {loading ? "Aplicando..." : "Aplicar tendências"}
        </button>
      </div>
    </div>
  );
}