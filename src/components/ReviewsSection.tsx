import { Link } from 'react-router-dom'
import { reviewImages } from '../data/site'
import { SectionHeading } from './SectionHeading'

type ReviewsSectionProps = {
  preview?: boolean
}

export function ReviewsSection({ preview = false }: ReviewsSectionProps) {
  const images = preview ? reviewImages.slice(0, 6) : reviewImages

  return (
    <section className="px-5 py-16">
      <SectionHeading
        eyebrow="Client love"
        title="Reviews"
        copy="Real Facebook recommendations from brands who worked with Your Business View."
      />
      <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
        {images.map((image) => (
          <figure key={image} className="card-shadow overflow-hidden rounded-[1.6rem] border border-olive/15 bg-paper">
            <img src={image} alt="Facebook review for Your Business View" className="w-full object-cover object-top" />
          </figure>
        ))}
      </div>
      {preview ? (
        <div className="mt-10 text-center">
          <Link to="/reviews" className="inline-flex rounded-full bg-green px-6 py-3 font-semibold text-white hover:bg-green-dark">
            See all reviews
          </Link>
        </div>
      ) : null}
    </section>
  )
}
