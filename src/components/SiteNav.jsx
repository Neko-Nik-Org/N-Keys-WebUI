import { Link, NavLink } from 'react-router-dom'
import logoImg from '../assets/n-keys-no-bg.png'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/features', label: 'Features' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
  { to: '/waitlist', label: 'Waitlist' },
]

function SiteNav() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="logo" aria-label="N-Keys home">
          <img src={logoImg} alt="N-Keys" />
          N-Keys
        </Link>

        <nav aria-label="Primary">
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

        <a
          className="button button-primary nav-cta"
          href="https://calendly.com/neko-nik/general-meet"
          target="_blank"
          rel="noreferrer"
        >
          Book a Meet
        </a>
      </div>
    </header>
  )
}

export default SiteNav
