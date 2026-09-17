import { Link } from 'react-router-dom'
import { MapPin, Phone } from 'lucide-react'
import { navLinks, site } from '../data/site'
import { FacebookIcon, InstagramIcon, TikTokIcon } from './SocialIcons'

export function Footer() {
  return (
    <footer className="mt-16 border-t border-olive/20 bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-3">
        <div>
          <img src="/images/logo.png" alt="" className="logo-glow mb-4 h-14 w-14 rounded-full" />
          <p className="font-display text-2xl tracking-wide uppercase">{site.name}</p>
          <p className="mt-1 text-sm tracking-[0.2em] text-green uppercase">{site.tagline}</p>
        </div>
        <div>
          <p className="mb-4 text-sm tracking-[0.2em] text-green uppercase">Explore</p>
          <div className="flex flex-col gap-2 text-sm text-paper/80">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="hover:text-green">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-3 text-sm text-paper/80">
          <p className="mb-4 text-sm tracking-[0.2em] text-green uppercase">Contact details</p>
          <p className="flex items-start gap-2">
            <Phone className="mt-0.5 h-4 w-4 text-green" />
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
          </p>
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 text-green" />
            <span>{site.address}</span>
          </p>
          <div className="flex gap-3 pt-2">
            <a className="rounded-full bg-white/10 p-2 hover:bg-green" href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a className="rounded-full bg-white/10 p-2 hover:bg-green" href={site.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a className="rounded-full bg-white/10 p-2 hover:bg-green" href={site.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok">
              <TikTokIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-paper/50">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  )
}
