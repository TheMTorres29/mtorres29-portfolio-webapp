import React, { useEffect, useState } from 'react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState('idle');
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') handleClose();
        };

        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        // Prevent layout shift when scrollbar disappears
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.paddingRight = `${scrollBarWidth}px`;

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            onClose();
        }, 200); // match CSS duration
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const submit = onSubmit ?? (() => Promise.resolve());
            await submit(formData);
            setStatus('sent');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch {
            setStatus('error');
        }
    };

    return (
        <div className={`contact-modal-backdrop ${isClosing ? 'is-closing' : ''}`} onClick={handleClose}>
            <div
                className={`contact-modal ${isClosing ? 'is-closing' : ''}`}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
            >
                <div className="contact-modal-header">
                    <h2 className="contact-modal-title">Contact Me</h2>
                    <button type="button" className="contact-modal-close" onClick={handleClose} aria-label="Close">
                        x
                    </button>
                </div>

                <form className="contact-modal-form" onSubmit={handleSubmit}>
                    <div className="contact-form-row">
                        <label className="contact-label" htmlFor="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            className="contact-input"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="contact-form-row">
                        <label className="contact-label" htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            className="contact-input"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="contact-form-row">
                        <label className="contact-label" htmlFor="subject">Subject</label>
                        <input
                            id="subject"
                            name="subject"
                            className="contact-input"
                            type="text"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="contact-form-row">
                        <label className="contact-label" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            className="contact-textarea"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="contact-modal-actions">
                        <button type="button" className="contact-secondary" onClick={handleClose}>
                            Cancel
                        </button>
                        <button type="submit" className="contact-primary" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>

                    {status === 'sent' && (
                        <p className="contact-success">Message sent successfully!</p>
                    )}

                    {status === 'error' && (
                        <p className="contact-error">Something went wrong. Please try again.</p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ContactModal;