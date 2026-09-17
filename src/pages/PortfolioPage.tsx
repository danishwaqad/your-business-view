import { Link } from 'react-router-dom'
import { FolderOpen } from 'lucide-react'
import { portfolioCategories } from '../data/site'
import { SectionHeading } from '../components/SectionHeading'

export function PortfolioPage() {
  return (
    <div className="px-5 py-16">
      <SectionHeading
        eyebrow="Selected work"
        title="Portfolio"
        copy="Open a category, then a product folder. You can replace these dummy photos with your real work anytime."
      />
      <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-3">
        {portfolioCategories.map((category) => (
          <Link
            key={category.slug}
            to={`/portfolio/${category.slug}`}
            className="card-shadow group overflow-hidden rounded-[1.8rem] border border-olive/15 bg-paper"
          >
            <div className="relative">
              <img src={category.cover} alt="" className="h-72 w-full object-cover object-center transition group-hover:scale-[1.03]" />
              <span className="absolute top-4 left-4 rounded-full bg-paper/90 px-3 py-1 text-xs tracking-[0.16em] text-olive uppercase">
                {category.folders.length} folders
              </span>
            </div>
            <div className="flex items-center gap-3 p-5">
              <FolderOpen className="h-5 w-5 text-green" />
              <h3 className="font-display text-2xl tracking-wide uppercase">{category.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
