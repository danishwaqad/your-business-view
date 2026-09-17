import { Link, Navigate, useParams } from 'react-router-dom'
import { FolderOpen } from 'lucide-react'
import { getPortfolioCategory } from '../data/site'
import { SectionHeading } from '../components/SectionHeading'

export function PortfolioCategoryPage() {
  const { categorySlug } = useParams()
  const category = getPortfolioCategory(categorySlug ?? '')

  if (!category) {
    return <Navigate to="/portfolio" replace />
  }

  return (
    <div className="px-5 py-16">
      <p className="mx-auto mb-8 max-w-6xl text-sm text-muted">
        <Link to="/portfolio" className="hover:text-green">
          Portfolio
        </Link>
        <span className="px-2">/</span>
        <span>{category.title}</span>
      </p>
      <SectionHeading
        eyebrow="Folders"
        title={category.title}
        copy="Choose a product type. Dummy images are inside for now — replace them with your real photos later."
      />
      <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {category.folders.map((folder) => (
          <Link
            key={folder.slug}
            to={`/portfolio/${category.slug}/${folder.slug}`}
            className="card-shadow group overflow-hidden rounded-[1.8rem] border border-olive/15 bg-paper"
          >
            <img src={folder.cover} alt="" className="h-56 w-full object-cover transition group-hover:scale-[1.03]" />
            <div className="flex items-center gap-3 p-5">
              <FolderOpen className="h-5 w-5 text-green" />
              <div>
                <h3 className="font-display text-2xl tracking-wide uppercase">{folder.title}</h3>
                <p className="text-xs tracking-[0.16em] text-olive uppercase">{folder.images.length} photos</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
