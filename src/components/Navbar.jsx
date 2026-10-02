import { useState } from 'react'
import { navItems } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-edge bg-ink/90 backdrop-blur">
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Main navigation">
        <a href="#home" className="font-display text-lg font-bold text-white">Tanzeela Sultana</a>

        <ul className="hidden items-center gap-6 lg:flex">
          {navItems.slice(1).map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="text-sm text-soft transition hover:text-accent">{item.label}</a>
            </li>
          ))}
        </ul>

        <button
          className="rounded-md border border-edge p-2 text-slate-200 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="container-x flex flex-col gap-1 border-t border-edge pb-4 pt-2 lg:hidden">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={() => setOpen(false)} className="block rounded-md px-2 py-2.5 text-slate-200 hover:bg-panel hover:text-accent">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
