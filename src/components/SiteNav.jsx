import { Link, NavLink } from 'react-router-dom'

const navItems = [
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
          href="https://calendly.com/your-name/n-keys-intro"
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
