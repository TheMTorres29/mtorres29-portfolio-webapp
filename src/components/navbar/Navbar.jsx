import React, { useState } from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

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
                        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-link">
                        <a href="#about" onClick={handleAboutClick}>
                            About Me
                        </a>
                    </li>
                    <li className="nav-link">
                        <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
                            Projects
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar