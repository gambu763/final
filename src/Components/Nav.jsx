import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const DEFAULT_LOGO = 'https://res.cloudinary.com/dopqrpvhl/image/upload/v1779612456/WhatsApp_Image_2026-05-22_at_22.30.01_nqajeq.jpg'

export default function Nav({ dark = false, logoSrc = DEFAULT_LOGO }) {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const linkClass = (path) => {
    const isActive = location.pathname === path
    const base = 'text-sm tracking-[0.2em] uppercase font-medium transition-opacity duration-200'
    const color = dark ? 'text-black' : 'text-white'
    const active = isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'
    return `${base} ${color} ${active}`
  }

  const mobileLinkClass = (path) => {
    const isActive = location.pathname === path
    return `text-lg tracking-[0.2em] uppercase font-medium text-white transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-60'}`
  }

  const nameColor = dark ? 'text-black' : 'text-white'
  const burgerColor = dark ? 'bg-black' : 'bg-white'

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-8">
        <Link to="/" className="flex items-center">
          <img
            src={logoSrc}
            alt="Jayshotz"
            className="h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-10">
          <Link to="/" className={linkClass('/')}>Home</Link>
          <Link to="/about" className={linkClass('/about')}>About</Link>
          <Link to="/projects" className={linkClass('/projects')}>Projects</Link>
          <Link to="/contact" className={linkClass('/contact')}>Contact</Link>
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px ${burgerColor} transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
          <span className={`block w-6 h-px ${burgerColor} transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px ${burgerColor} transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center gap-10 md:hidden">
          {[['/', 'Home'], ['/about', 'About'], ['/projects', 'Projects'], ['/contact', 'Contact']].map(([path, label]) => (
            <Link
              key={path}
              to={path}
              className={mobileLinkClass(path)}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
