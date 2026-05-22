import { Link, useLocation } from 'react-router-dom'

export default function Nav({ dark = false }) {
  const location = useLocation()

  const linkClass = (path) => {
    const isActive = location.pathname === path
    const base = 'text-sm tracking-[0.2em] uppercase font-medium transition-opacity duration-200'
    const color = dark ? 'text-black' : 'text-white'
    const active = isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'
    return `${base} ${color} ${active}`
  }

  const nameColor = dark ? 'text-black' : 'text-white'

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-8">
      <Link to="/" className={`text-base tracking-[0.3em] uppercase font-semibold ${nameColor}`}>
        Jayshotz
      </Link>
      <div className="flex gap-10">
        <Link to="/" className={linkClass('/')}>Home</Link>
        <Link to="/about" className={linkClass('/about')}>About</Link>
        <Link to="/projects" className={linkClass('/projects')}>Projects</Link>
        <Link to="/contact" className={linkClass('/contact')}>Contact</Link>
      </div>
    </nav>
  )
}
