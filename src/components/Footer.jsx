import React from "react";

export default function Footer() {
  return (
    <footer id="cta" className="border-t border-gray-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Pronto para ativar carreiras vivas?
            </h3>
            <p className="mt-2 text-slate-700 dark:text-slate-300">
              Use a demo e leve a VYRA para sua apresentação.
            </p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <a href="#demo" className="btn-primary btn">Usar Demo</a>
            <a href="#" className="btn">Política de IA</a>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <div
              className="h-5 w-5 rounded-md"
              style={{ backgroundImage: "linear-gradient(135deg,#8b5cf6,#22d3ee)" }}
            />
            <span className="text-slate-900 dark:text-white">VYRA © 2025</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">Privacidade</a>
            <a href="#" className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">Termos</a>
            <a href="#" className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">Política de IA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}