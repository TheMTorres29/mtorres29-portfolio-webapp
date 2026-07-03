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

const certificates = [
    {
        id: "cert-1",
        title: "Google AI Professional Certificate",
        issuer: "Google (via Coursera)",
        date: "May 2026",
        modules: [
          { name: "AI Fundamentals", link: "https://coursera.org/share/52632aec21dcbda4ca44bc3c87904710" },
          { name: "AI for Brainstorming & Planning", link: "https://coursera.org/share/25c21177c7f80230b40e831230fd93ba" },
          { name: "AI for Research & Insights", link: "https://coursera.org/share/4c23dd766fe56907d68c7f1d798025da" },
          { name: "AI for Writing & Communicating", link: "https://coursera.org/share/af232e337717acdc3c2a0329d5471537" },
          { name: "AI for Content Creation", link: "https://coursera.org/share/e5f9b3be0695d0196b07da3c2a641e83" },
          { name: "AI for Data Analysis", link: "https://coursera.org/share/470f73da317af06e90925c37cc3d3862" },
          { name: "AI for App Building", link: "https://coursera.org/share/4419238adf9c444748daa864ac711278" }
        ],
        highlights: [
          "Engineered advanced prompts across 20+ hands-on labs using Google AI Studio.",
          "Utilized natural language (vibe coding) to design, build, and test custom workflow apps.",
          "Applied systematic prompt constraints to optimize data analytics and content workflows."
        ]
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
                
                {/* Certificates */}
                <h2 className="certificate-heading">Certificates</h2>
                <ul className="education-list">
                    {certificates.map((cert) => (
                        <li key={cert.id} className="education-item">
                            <div className="education-content">
                                <div className="education-main">
                                    <span className="education-degree">{cert.title} from {cert.issuer}</span>
                                    <span className="education-institution"> {cert.modules.map((module, index) => (
                                        <React.Fragment key={index}>
                                            <a href={module.link} target="_blank" rel="noopener noreferrer">
                                                {module.name}
                                            </a>
                                            {index < cert.modules.length - 1 && <span className="certificate-separator">|</span>}
                                        </React.Fragment>                                        
                                    ))}
                                    </span>
                                </div>

                                <div className="education-meta">
                                    <span className="education-date">{cert.date}</span>
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
