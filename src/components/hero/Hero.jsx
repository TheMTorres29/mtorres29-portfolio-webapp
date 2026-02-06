import React from 'react';
import StarSpace from '../../assets/videos/StarfieldLoop.mp4';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-container">
            <video
                className="hero-bg-video"
                src={StarSpace}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
            />

            <div className="hero-content">
                <h1 className="hero-title">Miguel Torres</h1>
                <p className="hero-subtitle">SoCal Web Developer</p>
                <button className="hero-button" onClick={() => window.location.href = '/projects'}>My Work</button>
            </div>
        </section>
    );
};

export default Hero;