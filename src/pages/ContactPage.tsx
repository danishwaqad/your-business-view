import { useState, type FormEvent } from 'react'
import { MapPin, Phone } from 'lucide-react'
import { site } from '../data/site'
import { SectionHeading } from '../components/SectionHeading'
import { FacebookIcon, InstagramIcon, TikTokIcon } from '../components/SocialIcons'

export function ContactPage() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('Premium Package')
  const [message, setMessage] = useState('')

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    const text = `Hello Your Business View, I am ${name}. Phone: ${phone}. I am interested in ${service}. ${message}`
    window.open(`${site.whatsapp}?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <div className="px-5 py-16">
      <SectionHeading
        eyebrow="Let’s talk"
        title="Contact details"
        copy="WhatsApp is the fastest way to book a photoshoot, reel, logo, or monthly package."
      />

      <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="card-shadow rounded-[2rem] border border-olive/20 bg-paper p-8">
          <img
            src="/images/profile.jpg"
            alt="Your Business View"
            className="mb-5 h-64 w-full rounded-[1.4rem] object-cover object-[center_22%]"
          />
          <h3 className="font-display text-3xl tracking-wide uppercase">{site.name}</h3>
          <p className="mt-1 text-sm tracking-[0.2em] text-green uppercase">{site.tagline}</p>
          <div className="mt-6 space-y-3 text-muted">
            <p className="flex gap-3">
              <Phone className="h-5 w-5 text-green" />
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
            </p>
            <p className="flex gap-3">
              <MapPin className="h-5 w-5 text-green" />
              <span>{site.address}</span>
            </p>
          </div>
          <div className="mt-6 flex gap-3">
            <a className="rounded-full bg-ink p-3 text-paper hover:bg-green" href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a className="rounded-full bg-ink p-3 text-paper hover:bg-green" href={site.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a className="rounded-full bg-ink p-3 text-paper hover:bg-green" href={site.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok">
              <TikTokIcon />
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="card-shadow rounded-[2rem] border border-olive/20 bg-paper p-8">
          <label className="mb-4 block">
            <span className="mb-2 block text-sm tracking-[0.16em] uppercase">Name</span>
            <input
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full rounded-2xl border border-olive/20 bg-cream px-4 py-3 outline-none focus:border-green"
            />
          </label>
          <label className="mb-4 block">
            <span className="mb-2 block text-sm tracking-[0.16em] uppercase">Phone</span>
            <input
              required
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className="w-full rounded-2xl border border-olive/20 bg-cream px-4 py-3 outline-none focus:border-green"
            />
          </label>
          <label className="mb-4 block">
            <span className="mb-2 block text-sm tracking-[0.16em] uppercase">Service</span>
            <select
              value={service}
              onChange={(event) => setService(event.target.value)}
              className="w-full rounded-2xl border border-olive/20 bg-cream px-4 py-3 outline-none focus:border-green"
            >
              <option>Basic Package</option>
              <option>Premium Package</option>
              <option>Product Photoshoot</option>
              <option>Product Videoreel</option>
              <option>Logo Design</option>
              <option>Branding</option>
              <option>Facebook Ads</option>
            </select>
          </label>
          <label className="mb-6 block">
            <span className="mb-2 block text-sm tracking-[0.16em] uppercase">Message</span>
            <textarea
              rows={4}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="w-full rounded-2xl border border-olive/20 bg-cream px-4 py-3 outline-none focus:border-green"
            />
          </label>
          <button type="submit" className="w-full rounded-full bg-green py-3 font-semibold text-white hover:bg-green-dark">
            Send on WhatsApp
          </button>
        </form>
      </div>
    </div>
  )
}
