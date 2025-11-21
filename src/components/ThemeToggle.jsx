import React, { useEffect, useState } from "react";

const THEME_KEY = "vyra_theme";

export default function ThemeToggle({ className = "" }) {
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved) return saved === "dark";
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return true;
    }
  });

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    if (isDark) {
      html.classList.add("dark");
      body.classList.remove("bg-slate-50", "text-slate-900");
      body.classList.add("bg-slate-950", "text-slate-100");
      localStorage.setItem(THEME_KEY, "dark");
    } else {
      html.classList.remove("dark");
      body.classList.remove("bg-slate-950", "text-slate-100");
      body.classList.add("bg-slate-50", "text-slate-900");
      localStorage.setItem(THEME_KEY, "light");
    }
  }, [isDark]);

  function toggle() {
    setIsDark((v) => !v);
  }

  return (
    <button
      aria-pressed={isDark}
      onClick={toggle}
      className={`btn ${className}`}
      title={isDark ? "Mudar para claro" : "Mudar para escuro"}
    >
      {isDark ? "Claro" : "Escuro"}
    </button>
  );
}