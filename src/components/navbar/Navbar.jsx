import React, { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isAboutVisible, setIsAboutVisible] = useState(false)

    // Track when #about section is in view
    useEffect(() => {
        const aboutSection = document.getElementById('about')
        if (!aboutSection) {
            setIsAboutVisible(false)
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsAboutVisible(entry.isIntersecting)
            },
            { threshold: 0.3 } // 30% of section must be visible
        )

        observer.observe(aboutSection)

        return () => observer.disconnect()
    }, [location.pathname]) // Re-run when route changes

    const handleAboutClick = (e) => {
        e.preventDefault()
        setIsMenuOpen(false) // Close menu on click

        // If already on Home, just scroll
        if (location.pathname === '/') {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        } else {
            // Navigate to Home first, then scroll after render
            navigate('/')
            setTimeout(() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }, 100)
        }
    }

    const handleLinkClick = () => {
        setIsMenuOpen(false) // Close menu when any link is clicked
    }

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev)
    }

    // Determine active states
    const isHomePage = location.pathname === '/'
    const isHomeActive = isHomePage && !isAboutVisible
    const isAboutActive = isHomePage && isAboutVisible

    return (
        <nav className="nav-container">
            <div className="nav-content">
                {/* Logo/Brand */}
                <Link to="/" className="nav-logo" onClick={handleLinkClick}>
                    MTorres29
                </Link>

                {/* Hamburger Button (mobile only) */}
                <button
                    type="button"
                    className="nav-hamburger"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                >
                    <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                </button>

                {/* Navigation Links - Desktop */}
                <ul className="nav-links">
                    <li className="nav-link">
                        <NavLink
                            to="/"
                            className={() => isHomeActive ? 'active' : ''}
                            onClick={handleLinkClick}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-link">
                        <a
                            href="#about"
                            onClick={handleAboutClick}
                            className={isAboutActive ? 'active' : ''}
                        >
                            About Me
                        </a>
                    </li>
                    <li className="nav-link">
                        <NavLink
                            to="/projects"
                            className={({ isActive }) => isActive ? 'active' : ''}
                        >
                            Projects
                        </NavLink>
                    </li>
                </ul>

                {/* Mobile Menu */}
                <div className={`nav-mobile-menu ${isMenuOpen ? 'is-open' : ''}`}>
                    <ul className="nav-mobile-links">
                        <li className="nav-mobile-link">
                            <NavLink
                                to="/"
                                className={() => isHomeActive ? 'active' : ''}
                                onClick={handleLinkClick}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-mobile-link">
                            <a
                                href="#about"
                                onClick={handleAboutClick}
                                className={isAboutActive ? 'active' : ''}
                            >
                                About Me
                            </a>
                        </li>
                        <li className="nav-mobile-link">
                            <NavLink
                                to="/projects"
                                className={({ isActive }) => isActive ? 'active' : ''}
                                onClick={handleLinkClick}
                            >
                                Projects
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar