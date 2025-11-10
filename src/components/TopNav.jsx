import React, { useEffect, useState } from 'react'

export default function TopNav(){
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
          <a href="#problem" className="text-slate-300 hover:text-white">Problema</a>
          <a href="#demo" className="text-slate-300 hover:text-white">Demo</a>
          <a href="#dir" className="text-slate-300 hover:text-white">Diretório</a>
          <a href="#impact" className="text-slate-300 hover:text-white">Impacto</a>
          <a href="#pricing" className="text-slate-300 hover:text-white">Planos</a>
          <button onClick={toggleTheme} className="btn">{isDark ? 'Claro' : 'Escuro'}</button>
        </nav>
        <button className="md:hidden btn" onClick={()=>setOpen(v=>!v)} aria-expanded={open}>Menu</button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-2">
          <a className="btn" href="#problem">Problema</a>
          <a className="btn" href="#demo">Demo</a>
          <a className="btn" href="#dir">Diretório</a>
          <a className="btn" href="#impact">Impacto</a>
          <a className="btn" href="#pricing">Planos</a>
          <button onClick={toggleTheme} className="btn">{isDark ? 'Claro' : 'Escuro'}</button>
        </div>
      )}
    </header>
  )
}