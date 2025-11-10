import React, { useEffect, useState } from "react";
import VyraLogo from "../assets/VyraLogo.jsx";

export default function TopNav() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("vyra-theme");
    if (saved === "light") {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("bg-slate-950", "text-slate-100");
      document.body.classList.add("bg-slate-50", "text-slate-900");
      setIsDark(false);
    }
  }, []);

  function toggleTheme() {
    const html = document.documentElement;
    const nowDark = !html.classList.contains("dark");
    html.classList.toggle("dark");
    setIsDark(nowDark);
    if (nowDark) {
      document.body.classList.add("bg-slate-950", "text-slate-100");
      document.body.classList.remove("bg-slate-50", "text-slate-900");
      localStorage.setItem("vyra-theme", "dark");
    } else {
      document.body.classList.remove("bg-slate-950", "text-slate-100");
      document.body.classList.add("bg-slate-50", "text-slate-900");
      localStorage.setItem("vyra-theme", "light");
    }
  }

  const Link = ({ href, children }) => (
    <a href={href} className="text-slate-300 hover:text-white">
      {children}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          <VyraLogo className="h-7 w-7" />
          <span className="text-sm font-semibold tracking-wider">VYRA</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link href="#problema">Problema</Link>
          <Link href="#demo">Demo</Link>
          <Link href="#diretorio">Diretório</Link>
          <Link href="#impacto">Impacto</Link>
          <Link href="#planos">Planos</Link>
          <Link href="#faq">FAQ</Link>
          <button onClick={toggleTheme} className="btn">
            {isDark ? "Claro" : "Escuro"}
          </button>
        </nav>
        <button
          className="btn md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          Menu
        </button>
      </div>
      {open && (
        <div className="grid gap-2 px-4 pb-3 md:hidden">
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