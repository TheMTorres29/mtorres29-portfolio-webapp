import React from 'react';
import Timeline from '../timeline/Timeline.jsx';
import './AboutMe.css';

const education = [
    {
        id: 'edu-1',
        institution: 'Cal State University San Bernardino',
        degree: 'Bachelor of Science',
        field: 'Computer Science',
        dateRange: '2018 - 2022',
        logoSrc: 'https://drive.google.com/thumbnail?id=1CMheUs0GA-IEhykYB3d6N1kdq95WvstA',
    },
    {
        id: 'edu-2',
        institution: 'Norco Community College',
        degree: 'Associate of Science',
        field: 'Math and Science',
        dateRange: '2014 - 2018',
        logoSrc: 'https://drive.google.com/thumbnail?id=12sGFs3mxArHew0KawayCiFY20xr_BK1V',
    },
];

const About = () => {
    return (
        <div id="about" className="about-me-container">
            <h2 className="about-heading">About Me</h2>
            <p>
                Hello! I'm a passionate developer with a love for creating dynamic and user-friendly web applications.
                I enjoy learning new technologies and improving my skills to build better solutions.
            </p>
            <p>
                In my free time, I like to explore nature, read books, and experiment with new coding projects.
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
