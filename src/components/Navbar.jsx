import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/languages', label: 'Languages' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [location.pathname])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__brand" aria-label="CodeCraft Academy home">
          <span className="nav__logo">{'</>'}</span>
          <span className="nav__brandtext">
            CodeCraft <em>Academy</em>
          </span>
        </Link>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `nav__link ${isActive ? 'is-active' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <ThemeToggle className="nav__theme--mobile" />
          <Link to="/contact" className="btn btn--primary nav__cta">
            Enroll Now
          </Link>
        </nav>

        <div className="nav__actions">
          <ThemeToggle className="nav__theme--desktop" />
          <button
            className={`nav__toggle ${open ? 'is-open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
