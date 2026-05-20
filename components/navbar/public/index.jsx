"use client";
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sun, Moon } from 'lucide-react'
import logoImg from '@/assets/n-keys-no-bg.png'
import { useTheme } from '@/hooks/useTheme'

const navItems = [
    { to: '/', label: 'Home' },
    { to: '/feature', label: 'Features' },
    { to: '/roadmap', label: 'Roadmap' },
    { to: 'https://docs.n-keys.com', label: 'Docs', external: true },
    { to: '/pricing', label: 'Pricing' },
    { to: '/contact', label: 'Contact' },
    { to: '/hiring', label: 'Hiring' },
    { to: '/waitlist', label: 'Waitlist' },
]

function SiteNav() {
    const [open, setOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const close = () => setOpen(false)
    const { theme, toggleTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <header className="site-header">
            <div className="container nav-wrap">
                <Link href="/" className="logo" aria-label="N-Keys home" onClick={close}>
                    <img src={logoImg.src} alt="N-Keys" />
                    N-Keys
                </Link>

                <nav aria-label="Primary" className="nav-desktop">
                    <ul className="nav-list">
                        {navItems.map((item) => {
                            const isActive = usePathname() === item.to;
                            return (
                            <li key={item.to}>
                                {item.external ? (
                                    <a
                                        href={item.to}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="nav-link"
                                    >
                                        {item.label}
                                        <svg className="inline-block w-3 h-3 ml-1 -mt-1 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                ) : (
                                    <Link
                                        href={item.to}
                                        className={isActive ? 'nav-link nav-link-active' : 'nav-link'}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="nav-right">
                    <button 
                        onClick={toggleTheme} 
                        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center w-9 h-9"
                        aria-label="Toggle Dark Mode"
                    >
                        {mounted && (theme === 'dark' ? (
                            <Moon className="w-5 h-5 text-sky-400" />
                        ) : (
                            <Sun className="w-5 h-5 text-amber-500" />
                        ))}
                    </button>
                    <Link
                        className="button button-primary nav-cta"
                        href="/login"
                    >
                        Sign In
                    </Link>
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
                        {navItems.map((item) => {
                            const isActive = usePathname() === item.to;
                            return (
                            <li key={item.to}>
                                {item.external ? (
                                    <a
                                        href={item.to}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="nav-link nav-mobile-link"
                                        onClick={close}
                                    >
                                        {item.label}
                                    </a>
                                ) : (
                                    <Link
                                        href={item.to}
                                        className={
                                            isActive
                                                ? 'nav-link nav-link-active nav-mobile-link'
                                                : 'nav-link nav-mobile-link'
                                        }
                                        onClick={close}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                            );
                        })}
                        <li>
                            <Link
                                className="button button-primary"
                                style={{ width: '100%' }}
                                href="/login"
                                onClick={close}
                            >
                                Sign In
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    )
}

export default SiteNav
