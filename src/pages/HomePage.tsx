import { Link } from 'react-router-dom'
import { ArrowRight, Camera, Clapperboard, Megaphone } from 'lucide-react'
import { packages, services, site } from '../data/site'
import { SectionHeading } from '../components/SectionHeading'
import { ReviewsSection } from '../components/ReviewsSection'

export function HomePage() {
  return (
    <div>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <img src="/images/logo.png" alt="Your Business View logo" className="logo-glow mb-6 h-20 w-20 rounded-full" />
          <p className="text-sm tracking-[0.32em] text-olive uppercase">{site.tagline}</p>
          <h1 className="font-display mt-3 text-5xl leading-[1.05] tracking-wide uppercase sm:text-7xl">
            Your Business
            <span className="block text-green">View</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            Product photography, video reels, logo design, posters, branding, and Facebook ads —
            built to make local brands look premium online.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-green px-6 py-3 font-semibold text-white hover:bg-green-dark"
            >
              Chat on WhatsApp
            </a>
            <Link
              to="/packages"
              className="rounded-full border border-olive/40 bg-paper px-6 py-3 font-semibold hover:border-green"
            >
              View packages
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 rounded-[2.4rem] bg-green/20 blur-2xl" />
          <div className="card-shadow relative overflow-hidden rounded-[2.2rem] border border-olive/20 bg-paper">
            <img src="/images/profile.jpg" alt="Founder of Your Business View" className="h-[28rem] w-full object-cover object-[center_22%]" />
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-ink/70 via-ink/20 to-transparent px-6 pt-16 pb-5 text-paper">
              <p className="font-display text-2xl tracking-wide uppercase">Your Business View</p>
              <p className="text-sm text-green">Digital Marketing · Multan</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 pb-8 sm:grid-cols-3">
        {[
          { icon: Camera, label: 'Product Photoshoots' },
          { icon: Clapperboard, label: 'Video Reels' },
          { icon: Megaphone, label: 'Logos & Branding' },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-olive/20 bg-paper px-5 py-4">
            <item.icon className="h-5 w-5 text-green" />
            <p className="font-medium">{item.label}</p>
          </div>
        ))}
      </section>

      <section className="px-5 py-16">
        <SectionHeading
          eyebrow="What we do"
          title="Services"
          copy="Video editing, product photography, digital marketing, logo design, poster design, and Facebook ads."
        />
        <div className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              to="/services"
              className="card-shadow group overflow-hidden rounded-[1.8rem] border border-olive/15 bg-paper"
            >
              <img src={service.image} alt="" className="h-44 w-full object-cover transition group-hover:scale-[1.03]" />
              <div className="p-5">
                <h3 className="font-display text-2xl tracking-wide text-green uppercase">{service.title}</h3>
                <p className="mt-2 text-sm text-muted">{service.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-5 py-8">
        <SectionHeading eyebrow="Monthly plans" title="Packages" copy="Choose a monthly package or mix services from the price list." />
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
          {packages.map((pack) => (
            <div
              key={pack.name}
              className={`card-shadow rounded-[2rem] border bg-paper p-8 ${
                pack.featured ? 'border-green shadow-[0_0_0_3px_rgba(0,200,83,0.12)]' : 'border-olive/20'
              }`}
            >
              <h3 className="font-display text-3xl tracking-wide text-green uppercase">{pack.name}</h3>
              <p className="mt-4 text-sm tracking-[0.2em] text-muted uppercase">Monthly package</p>
              <p className="mt-1 font-display text-4xl text-green">{pack.price}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {pack.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <Link to="/packages" className="mt-6 inline-flex items-center gap-2 font-semibold text-green">
                See details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* <ReviewsSection preview />

      <section className="px-5 py-16">
        <div className="card-shadow mx-auto max-w-6xl overflow-hidden rounded-[2.2rem] border border-olive/20 bg-paper md:grid md:grid-cols-2">
          <img src="/images/profile.jpg" alt="" className="h-full max-h-[420px] w-full object-cover object-[center_22%]" />
          <div className="p-8 md:p-12">
            <p className="text-sm tracking-[0.28em] text-olive uppercase">Based in Multan</p>
            <h2 className="font-display mt-2 text-4xl tracking-wide text-green uppercase">Let’s grow your brand</h2>
            <p className="mt-4 text-muted">
              From Citi Housing Phase-1, Bosan Road, we help businesses look sharper on Instagram, Facebook, and TikTok
              with content that is ready to post and ready to sell.
            </p>
            <Link to="/contact" className="mt-6 inline-flex rounded-full bg-green px-6 py-3 font-semibold text-white hover:bg-green-dark">
              Contact details
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  )
}
