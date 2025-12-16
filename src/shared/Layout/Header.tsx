import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { toggleTheme } from '../../features/theme/themeSlice'

const Header: React.FC = () => {
    const location = useLocation()
    const dispatch = useAppDispatch()
    const mode = useAppSelector((state) => state.theme.mode)

    useEffect(() => {
        if (mode === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [mode])

    const handleToggle = () => {
        dispatch(toggleTheme())
    }

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/labs', label: 'Labs' },
    ]

    return (
        <header
            id="site-header"
            className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-[#f5f5f5]/80 backdrop-blur transition-all dark:border-neutral-800 dark:bg-neutral-950/80"
        >
            <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 sm:px-8 md:px-10">
                {/* Logo */}
                <Link
                    to="/"
                    className="font-grotesk text-xl tracking-tight text-slate-900 dark:text-neutral-100"
                >
                    Маринич Данило
                </Link>

                {/* Navigation */}
                <nav className="flex items-center gap-6 font-grotesk text-sm uppercase text-slate-600 dark:text-neutral-400">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`transition-colors hover:text-slate-900 dark:hover:text-neutral-200 ${
                                location.pathname === link.path ? 'text-slate-900 dark:text-neutral-200' : ''
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Theme Toggle Button */}
                    <button
                        id="theme-toggle"
                        type="button"
                        aria-label="Toggle theme"
                        onClick={handleToggle}
                        className="group relative inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-300 bg-white text-neutral-700 transition-colors hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:bg-neutral-800"
                    >
                        {/* Sun Icon (Light Mode) */}
                        <svg
                            className={`h-5 w-5 transition-all ${mode === 'dark' ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                        </svg>

                        {/* Moon Icon (Dark Mode) */}
                        <svg
                            className={`absolute h-5 w-5 transition-all ${mode === 'dark' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            />
                        </svg>
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default Header
