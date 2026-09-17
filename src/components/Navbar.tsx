import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navLinks, site } from '../data/site'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-olive/20 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/images/logo.png" alt="" className="logo-glow h-12 w-12 rounded-full" />
          <div className="leading-tight">
            <p className="font-display text-lg tracking-wide uppercase">{site.name}</p>
            <p className="text-[11px] tracking-[0.22em] text-muted uppercase">{site.tagline}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-sm tracking-[0.16em] uppercase transition ${
                  isActive ? 'text-green' : 'text-ink/80 hover:text-green'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-green px-5 py-2 text-sm font-semibold text-white transition hover:bg-green-dark"
          >
            WhatsApp
          </a>
        </nav>

        <button
          type="button"
          className="rounded-full p-2 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-olive/20 bg-paper px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 tracking-[0.14em] uppercase ${
                    isActive ? 'bg-cream text-green' : 'text-ink'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-green px-5 py-2 text-center font-semibold text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
