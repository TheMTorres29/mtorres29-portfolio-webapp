import React from 'react';
import Timeline from '../timeline/Timeline.jsx';
import './AboutMe.css';

import CSUSBLogo from '../../assets/imgs/logos/csusb.png';
import NCCLogo from '../../assets/imgs/logos/ncc.png';

const education = [
    {
        id: 'edu-1',
        institution: 'Cal State University San Bernardino',
        degree: 'Bachelor of Science',
        field: 'Computer Science',
        dateRange: '2018 - 2022',
        logoSrc: CSUSBLogo,
    },
    {
        id: 'edu-2',
        institution: 'Norco Community College',
        degree: 'Associate of Science',
        field: 'Math and Science',
        dateRange: '2014 - 2018',
        logoSrc: NCCLogo,
    },
];

const About = () => {
    return (
        <div id="about" className="about-me-container">
            <h2 className="about-heading">About Me</h2>
            <p>
                I'm a software developer with a background in IT support and operations leadership, focused on building practical tools that improve real workflows. I've led teams, supported production systems, and developed web applications that automate reporting and productivity tracking. I enjoy working at the intersection of technology and operations - where clean code meets real - world impact.            </p>
            <p>
                In my free time I like to explore nature, play guitar, game a little bit, and experiment with new coding projects.
            </p>

            {/* Education Section */}
            <section className="education-section">
                <h2 className="education-heading">Education</h2>
                <ul className="education-list">
                    {education.map((edu) => (
                        <li key={edu.id} className="education-item">
                            {edu.logoSrc && (
                                <img
                                    className="education-logo"
                                    src={edu.logoSrc}
                                    alt={`${edu.institution} logo`}
                                />
                            )}
                            <div className="education-content">
                                <div className="education-main">
                                    <span className="education-degree">{edu.degree} in {edu.field}</span>
                                    <span className="education-institution">{edu.institution}</span>
                                </div>
                                <div className="education-meta">
                                    <span className="education-date">{edu.dateRange}</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Work Experience */}
            <Timeline />
        </div>
    );
};

export default About;
