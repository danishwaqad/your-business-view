import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'
import { PortfolioPage } from './pages/PortfolioPage'
import { PortfolioCategoryPage } from './pages/PortfolioCategoryPage'
import { PortfolioFolderPage } from './pages/PortfolioFolderPage'
import { PackagesPage } from './pages/PackagesPage'
import { ContactPage } from './pages/ContactPage'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/services', element: <ServicesPage /> },
      { path: '/portfolio', element: <PortfolioPage /> },
      { path: '/portfolio/:categorySlug', element: <PortfolioCategoryPage /> },
      { path: '/portfolio/:categorySlug/:folderSlug', element: <PortfolioFolderPage /> },
      { path: '/packages', element: <PackagesPage /> },
      { path: '/contact', element: <ContactPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
