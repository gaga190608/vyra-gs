import React, { useEffect, useState } from "react";

const THEME_KEY = "vyra-theme";

export default function ThemeToggle({ className = "" }) {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(THEME_KEY);
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial = saved ? saved === "dark" : prefersDark;
      setIsDark(initial);
      document.documentElement.classList.toggle("dark", initial);
    } catch {}
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      document.documentElement.classList.toggle("dark", isDark);
      localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
    } catch {}
  }, [isDark, mounted]);

  function toggle() {
    setIsDark((v) => !v);
  }

  if (!mounted) return null; 

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