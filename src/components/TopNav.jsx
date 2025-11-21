import React, { useEffect, useState } from "react";
import VyraLogo from "../assets/VyraLogo.jsx";

const THEME_KEY = "vyra-theme";

export default function TopNav() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const startDark = saved ? saved === "dark" : prefersDark;
      applyTheme(startDark);
      setIsDark(startDark);
    } catch (e) {
      console.error("Erro ao carregar tema:", e);
    }
  }, []);

  function applyTheme(dark) {
    try {
      document.documentElement.classList.toggle("dark", dark);
      localStorage.setItem(THEME_KEY, dark ? "dark" : "light");
      setIsDark(dark);
    } catch (e) {
      console.error("applyTheme falhou", e);
    }
  }

  function toggleTheme() {
    applyTheme(!isDark);
  }

  const NavLink = ({ href, children, onClick }) => (
    <a
      href={href}
      onClick={onClick}
      className="text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white px-2 py-1"
    >
      {children}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-white/10 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          <VyraLogo className="h-7 w-7" />
          <span className="text-sm font-semibold tracking-wider text-slate-900 dark:text-white">VYRA</span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink href="#problema">Problema</NavLink>
          <NavLink href="#demo">Demo</NavLink>
          <NavLink href="#diretorio">Diretório</NavLink>
          <NavLink href="#impacto">Impacto</NavLink>
          <NavLink href="#planos">Planos</NavLink>
          <NavLink href="#faq">FAQ</NavLink>

          <button
            onClick={toggleTheme}
            className="btn inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium"
            aria-pressed={!isDark}
            aria-label="Alternar tema"
          >
            {isDark ? "Claro" : "Escuro"}
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="btn md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          Menu
        </button>
      </div>

      {/* MOBILE MENU — renderiza só em small screens (md:hidden garante isso) */}
      {open && (
        <div className="md:hidden" role="dialog" aria-modal="true">
          {/* Backdrop: escuro translúcido (melhor legibilidade em desktop também) */}
          <div
            className="fixed inset-0 z-40 bg-black/40 dark:bg-black/60"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div className="fixed top-14 inset-x-4 z-50 mx-auto max-w-md rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 p-4 shadow-lg">
            <div className="flex flex-col gap-2">
              {[
                ["#problema", "Problema"],
                ["#demo", "Demo"],
                ["#diretorio", "Diretório"],
                ["#impacto", "Impacto"],
                ["#planos", "Planos"],
                ["#faq", "FAQ"],
              ].map(([h, t]) => (
                <a
                  key={h}
                  href={h}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-center text-slate-900 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                >
                  {t}
                </a>
              ))}

              <div className="pt-2 border-t border-gray-100 dark:border-gray-800 mt-2">
                <button
                  onClick={() => { toggleTheme(); setOpen(false); }}
                  className="w-full rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 text-white px-4 py-2"
                >
                  {isDark ? "Mudar para claro" : "Mudar para escuro"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}