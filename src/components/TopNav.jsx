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
    } catch (e) {
      console.error("applyTheme falhou", e);
    }
  }

  function toggleTheme() {
    const nowDark = !isDark;
    applyTheme(nowDark);
    setIsDark(nowDark);
  }

  const NavLink = ({ href, children }) => (
    <a href={href} className="text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white">
      {children}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 dark:border-white/10 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          <VyraLogo className="h-7 w-7" />
          <span className="text-sm font-semibold tracking-wider">VYRA</span>
        </div>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <NavLink href="#problema">Problema</NavLink>
          <NavLink href="#demo">Demo</NavLink>
          <NavLink href="#diretorio">Diretório</NavLink>
          <NavLink href="#impacto">Impacto</NavLink>
          <NavLink href="#planos">Planos</NavLink>
          <NavLink href="#faq">FAQ</NavLink>

          <button
            onClick={toggleTheme}
            className="btn inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium"
          >
            {isDark ? "Claro" : "Escuro"}
          </button>
        </nav>

        <button
          className="btn md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          Menu
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="grid gap-2 px-4 pb-3 md:hidden">
          {[
            ["#problema", "Problema"],
            ["#demo", "Demo"],
            ["#diretorio", "Diretório"],
            ["#impacto", "Impacto"],
            ["#planos", "Planos"],
            ["#faq", "FAQ"],
          ].map(([h, t]) => (
            <a key={h} href={h} className="btn">
              {t}
            </a>
          ))}

          <button onClick={toggleTheme} className="btn">
            {isDark ? "Claro" : "Escuro"}
          </button>
        </div>
      )}
    </header>
  );
}