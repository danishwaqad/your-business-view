import { Link, Navigate, useParams } from 'react-router-dom'
import { getPortfolioFolder } from '../data/site'
import { SectionHeading } from '../components/SectionHeading'

export function PortfolioFolderPage() {
  const { categorySlug, folderSlug } = useParams()
  const match = getPortfolioFolder(categorySlug ?? '', folderSlug ?? '')

  if (!match) {
    return <Navigate to="/portfolio" replace />
  }

  const { category, folder } = match

  return (
    <div className="px-5 py-16">
      <p className="mx-auto mb-8 max-w-6xl text-sm text-muted">
        <Link to="/portfolio" className="hover:text-green">
          Portfolio
        </Link>
        <span className="px-2">/</span>
        <Link to={`/portfolio/${category.slug}`} className="hover:text-green">
          {category.title}
        </Link>
        <span className="px-2">/</span>
        <span>{folder.title}</span>
      </p>
      <SectionHeading
        eyebrow={category.title}
        title={folder.title}
        copy="Placeholder images for layout. Swap these files with your real product photos whenever you are ready."
      />
      <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {folder.images.map((image, index) => (
          <figure key={`${folder.slug}-${index}`} className="card-shadow overflow-hidden rounded-[1.8rem] border border-olive/15 bg-paper">
            <img src={image} alt={`${folder.title} sample ${index + 1}`} className="h-72 w-full object-cover" />
          </figure>
        ))}
      </div>
    </div>
  )
}
