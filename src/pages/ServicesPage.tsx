import { services, site } from '../data/site'
import { SectionHeading } from '../components/SectionHeading'

export function ServicesPage() {
  return (
    <div className="px-5 py-16">
      <SectionHeading
        eyebrow="Our work"
        title="Services"
        copy="Video editing | Product photography | Digital marketing services | Logo design | Poster design | Facebook ads services"
      />
      <div className="mx-auto mt-12 grid max-w-6xl gap-8">
        {services.map((service, index) => (
          <article
            key={service.slug}
            className={`card-shadow grid overflow-hidden rounded-[2rem] border border-olive/15 bg-paper md:grid-cols-2 ${
              index % 2 === 1 ? 'md:[&>img]:order-2' : ''
            }`}
          >
            <img src={service.image} alt={service.title} className="h-72 w-full object-cover md:h-full" />
            <div className="flex flex-col justify-center p-8 md:p-12">
              <h3 className="font-display text-4xl tracking-wide text-green uppercase">{service.title}</h3>
              <p className="mt-4 text-muted">{service.summary}</p>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-fit rounded-full bg-green px-5 py-2.5 font-semibold text-white hover:bg-green-dark"
              >
                Book this service
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
