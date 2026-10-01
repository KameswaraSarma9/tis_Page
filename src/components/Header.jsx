import { useState } from 'react'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import { nav, contact } from '../data/content'

const linkStyle = 'underline-offset-8 decoration-accent decoration-2 hover:underline'

export default function Header({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="font-display text-lg font-extrabold">
          Tulas <span className="hidden sm:inline">International School</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className={linkStyle}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a
            href={contact.applyUrl}
            className="hidden rounded-full bg-accent px-5 py-2 text-sm font-bold text-navy sm:block"
          >
            Apply now
          </a>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full border border-line md:hidden"
            aria-expanded={open}
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-4 border-t border-line px-5 py-5 md:hidden"
        >
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-lg font-medium">
              {item.label}
            </a>
          ))}
          <a href={contact.applyUrl} className="rounded-full bg-accent px-5 py-3 text-center font-bold text-navy">
            Apply now
          </a>
        </motion.nav>
      )}
    </header>
  )
}
