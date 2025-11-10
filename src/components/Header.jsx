import React, { useEffect, useState } from 'react'

export default function Header(){
  const [open, setOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('vyra-theme')
    if(saved === 'light'){
      document.documentElement.classList.remove('dark')
      document.body.classList.remove('bg-slate-950','text-slate-100')
      document.body.classList.add('bg-slate-50','text-slate-900')
      setIsDark(false)
    }
  }, [])

  function toggleTheme(){
    const html = document.documentElement
    const nowDark = !html.classList.contains('dark')
    html.classList.toggle('dark')
    setIsDark(nowDark)
    if(nowDark){
      document.body.classList.add('bg-slate-950','text-slate-100')
      document.body.classList.remove('bg-slate-50','text-slate-900')
      localStorage.setItem('vyra-theme', 'dark')
    } else {
      document.body.classList.remove('bg-slate-950','text-slate-100')
      document.body.classList.add('bg-slate-50','text-slate-900')
      localStorage.setItem('vyra-theme', 'light')
    }
  }

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md border-b border-white/10 bg-slate-950/70">
      <div className="mx-auto max-w-7xl px-4 md:px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-lg" style={{backgroundImage:'linear-gradient(135deg,#8b5cf6,#22d3ee)'}} />
          <span className="text-sm font-semibold tracking-wider">VYRA</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#filters" className="text-slate-300 hover:text-white">Filtros</a>
          <a href="#grid" className="text-slate-300 hover:text-white">Perfis</a>
          <button onClick={toggleTheme} className="btn">{isDark ? 'Claro' : 'Escuro'}</button>
        </nav>
        <button className="md:hidden btn" onClick={()=>setOpen(v=>!v)} aria-expanded={open}>Menu</button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-2">
          <a href="#filters" className="btn">Filtros</a>
          <a href="#grid" className="btn">Perfis</a>
          <button onClick={toggleTheme} className="btn">{isDark ? 'Claro' : 'Escuro'}</button>
        </div>
      )}
    </header>
  )
}