import React, { useState } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'
import ContactModal from './components/contact/ContactModal.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'

const AppLayout = () => {
    const [isContactOpen, setIsContactOpen] = useState(false)

    const handleContactOpen = () => setIsContactOpen(true)
    const handleContactClose = () => setIsContactOpen(false)

    const handleContactSubmit = async (formData) => {
        const templateParams = {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
        }

        await emailjs.send(
            'service_4j1p01e',
            'template_gmkz3rc',
            templateParams,
            'kLIqezveESqfmlKjx'
        )
    }

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer onContactClick={handleContactOpen} />
            <ContactModal
                isOpen={isContactOpen}
                onClose={handleContactClose}
                onSubmit={handleContactSubmit}
            />
        </>
    )
}

function App() {
    return (
        <Routes>
            <Route element={<AppLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Route>
        </Routes>
    )
}

export default App