import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Sun, Moon } from 'lucide-react'
import logoImg from '@/assets/n-keys-no-bg.png'
import { useTheme } from '@/hooks/useTheme'

const navItems = [
    { to: '/', label: 'Home' },
    { to: '/features', label: 'Features' },
    { to: '/roadmap', label: 'Roadmap' },
    { to: '/docs', label: 'Docs' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/contact', label: 'Contact' },
    { to: '/hiring', label: 'Hiring' },
    { to: '/waitlist', label: 'Waitlist' },
]

function SiteNav() {
    const [open, setOpen] = useState(false)
    const close = () => setOpen(false)
    const { theme, toggleTheme } = useTheme()

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
                    <button 
                        onClick={toggleTheme} 
                        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center"
                        aria-label="Toggle Dark Mode"
                    >
                        {theme === 'dark' ? (
                            <Moon className="w-5 h-5 text-sky-400" />
                        ) : (
                            <Sun className="w-5 h-5 text-amber-500" />
                        )}
                    </button>
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
