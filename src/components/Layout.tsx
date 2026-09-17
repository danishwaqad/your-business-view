import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { WhatsAppFab } from './WhatsAppFab'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function HideNetlifyBadge() {
  useEffect(() => {
    const hide = () => {
      document.querySelectorAll('a, button, div, span, iframe').forEach((el) => {
        const text = el.textContent?.toLowerCase() ?? ''
        const href = el instanceof HTMLAnchorElement ? el.href : ''
        if (text.includes('powered by netlify') && text.replace(/\s+/g, ' ').trim().length < 40) {
          ;(el as HTMLElement).style.setProperty('display', 'none', 'important')
        }
        if (href.includes('www.netlify.com') || href.includes('netlify.com/?utm')) {
          ;(el as HTMLElement).style.setProperty('display', 'none', 'important')
        }
      })
    }

    hide()
    const timer = window.setInterval(hide, 1000)
    const observer = new MutationObserver(hide)
    observer.observe(document.body, { childList: true, subtree: true })
    return () => {
      window.clearInterval(timer)
      observer.disconnect()
    }
  }, [])

  return null
}

export function Layout() {
  return (
    <div className="page-bg min-h-screen">
      <ScrollToTop />
      <HideNetlifyBadge />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}
