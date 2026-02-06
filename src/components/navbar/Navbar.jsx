import React, { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isAboutVisible, setIsAboutVisible] = useState(false)

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false)
    }, [location.pathname])

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
            { threshold: 0.3 }
        )

        observer.observe(aboutSection)

        return () => observer.disconnect()
    }, [location.pathname])

    const handleHomeClick = (e) => {
        e.preventDefault()
        setIsMenuOpen(false)

        if (location.pathname === '/') {
            document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
        } else {
            navigate('/')
            setTimeout(() => {
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
            }, 100)
        }
    }

    const handleAboutClick = (e) => {
        e.preventDefault()
        setIsMenuOpen(false)

        if (location.pathname === '/') {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        } else {
            navigate('/')
            setTimeout(() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }, 100)
        }
    }

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev)
    }

    const isHomePage = location.pathname === '/'
    const isHomeActive = isHomePage && !isAboutVisible
    const isAboutActive = isHomePage && isAboutVisible

    return (
        <nav className="nav-container">
            <div className="nav-content">
                <Link to="/" className="nav-logo" onClick={handleHomeClick}>
                    MTorres
                </Link>

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

                <ul className="nav-links">
                    <li className="nav-link">
                        <NavLink to="/" className={() => isHomeActive ? 'active' : ''} onClick={handleHomeClick}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-link">
                        <a href="#about" onClick={handleAboutClick} className={isAboutActive ? 'active' : ''}>
                            About Me
                        </a>
                    </li>
                    <li className="nav-link">
                        <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
                            Projects
                        </NavLink>
                    </li>
                </ul>

                <div className={`nav-mobile-menu ${isMenuOpen ? 'is-open' : ''}`}>
                    <ul className="nav-mobile-links">
                        <li className="nav-mobile-link">
                            <NavLink to="/" className={() => isHomeActive ? 'active' : ''} onClick={handleHomeClick}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-mobile-link">
                            <a href="#about" onClick={handleAboutClick} className={isAboutActive ? 'active' : ''}>
                                About Me
                            </a>
                        </li>
                        <li className="nav-mobile-link">
                            <NavLink
                                to="/projects"
                                className={({ isActive }) => isActive ? 'active' : ''}
                                onClick={() => setIsMenuOpen(false)}
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