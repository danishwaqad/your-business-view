import { portfolio } from '../data/site'
import { SectionHeading } from '../components/SectionHeading'

export function PortfolioPage() {
  return (
    <div className="px-5 py-16">
      <SectionHeading
        eyebrow="Selected work"
        title="Portfolio"
        copy="Posters, brand boards, photography, and video direction created in the Your Business View style."
      />
      <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.map((item) => (
          <figure key={item.title} className="card-shadow overflow-hidden rounded-[1.8rem] border border-olive/15 bg-paper">
            <img src={item.image} alt={item.title} className="h-80 w-full object-cover object-top" />
            <figcaption className="p-5">
              <p className="text-xs tracking-[0.2em] text-olive uppercase">{item.category}</p>
              <h3 className="font-display mt-1 text-2xl tracking-wide uppercase">{item.title}</h3>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
