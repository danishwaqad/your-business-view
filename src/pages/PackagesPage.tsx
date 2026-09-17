import { packages, priceList, site } from '../data/site'
import { SectionHeading } from '../components/SectionHeading'

export function PackagesPage() {
  return (
    <div className="px-5 py-16">
      <SectionHeading
        eyebrow="Monthly plans"
        title="Packages"
        copy="Two ready monthly packages, plus a la carte pricing if you only need one service."
      />

      <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
        {packages.map((pack) => (
          <article
            key={pack.name}
            className={`card-shadow rounded-[2.2rem] border bg-paper p-8 sm:p-10 ${
              pack.featured ? 'border-green ring-4 ring-green/10' : 'border-olive/20'
            }`}
          >
            <h3 className="font-display text-4xl tracking-wide text-green uppercase">{pack.name}</h3>
            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="h-px w-16 bg-ink/20" />
              <span className="size-1.5 rounded-full bg-ink" />
              <span className="size-1.5 rounded-full bg-ink" />
              <span className="size-1.5 rounded-full bg-ink" />
              <span className="h-px w-16 bg-ink/20" />
            </div>
            <ul className="mt-8 space-y-3">
              {pack.items.map((item) => (
                <li key={item} className="text-lg">• {item}</li>
              ))}
            </ul>
            <p className="mt-8 text-center text-sm tracking-[0.22em] text-muted uppercase">Monthly package</p>
            <p className="mt-1 text-center font-display text-4xl text-green">{pack.price}</p>
            <a
              href={`${site.whatsapp}?text=${encodeURIComponent(`Hi, I want the ${pack.name}`)}`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 block rounded-full bg-green py-3 text-center font-semibold text-white hover:bg-green-dark"
            >
              Choose {pack.name}
            </a>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-3xl">
        <SectionHeading title="Price list" copy="Need a single service? These are the individual rates." />
        <div className="card-shadow mt-10 overflow-hidden rounded-[2rem] border border-olive/20 bg-paper">
          {priceList.map((row, index) => (
            <div
              key={row.name}
              className={`flex items-center justify-between gap-4 px-6 py-5 sm:px-8 ${
                index !== priceList.length - 1 ? 'border-b border-olive/15' : ''
              }`}
            >
              <p className="font-medium tracking-wide uppercase">{row.name}</p>
              <p className="font-display text-2xl text-green">{row.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
