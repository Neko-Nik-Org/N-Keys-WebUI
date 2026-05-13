import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoImg from '../assets/n-keys-no-bg.png'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/features', label: 'Features' },
  { to: '/roadmap', label: 'Roadmap' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
  { to: '/waitlist', label: 'Waitlist' },
]

function SiteNav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="logo" aria-label="N-Keys home" onClick={close}>
          <img src={logoImg} alt="N-Keys" />
          N-Keys
        </Link>

        <nav aria-label="Primary" className="nav-desktop">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive ? 'nav-link nav-link-active' : 'nav-link'
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-right">
          <a
            className="button button-primary nav-cta"
            href="https://calendly.com/neko-nik/general-meet"
            target="_blank"
            rel="noreferrer"
          >
            Book a Meet
          </a>
          <button
            className="hamburger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile navigation" className="nav-mobile">
          <ul className="nav-mobile-list">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? 'nav-link nav-link-active nav-mobile-link'
                      : 'nav-link nav-mobile-link'
                  }
                  onClick={close}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                className="button button-primary"
                style={{ width: '100%' }}
                href="https://calendly.com/neko-nik/general-meet"
                target="_blank"
                rel="noreferrer"
                onClick={close}
              >
                Book a Meet
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default SiteNav
