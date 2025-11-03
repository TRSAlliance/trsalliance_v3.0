import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'

export default function App() {
  const { pathname } = useLocation()
  return (
    <div className="min-h-screen trs-gradient">
      <header className="sticky top-0 z-10 bg-black/60 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="font-semibold tracking-wide">
            <span className="text-trsCyan">OBSIDIAN</span> <span className="text-trsViolet">SMART</span> <span className="text-white/70">v3.0</span>
          </h1>
          <nav className="flex gap-6 text-sm">
            <Link to="/" className={link(pathname === '/')}>Home</Link>
            <Link to="/sentinel" className={link(pathname === '/sentinel')}>Sentinel</Link>
            <Link to="/dashboard" className={link(pathname === '/dashboard')}>Dashboard</Link>
          </nav>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="border-t border-white/10 mt-12 py-6 text-center text-xs text-white/50">
        © 2025 TRS Alliance — Truth • Respect • System
      </footer>
    </div>
  )
}

function link(active: boolean) {
  return `hover:text-trsCyan transition ${active ? 'text-trsCyan' : 'text-white/70'}`
}
