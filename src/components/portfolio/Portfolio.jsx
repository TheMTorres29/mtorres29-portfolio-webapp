import React from 'react';
import './Portfolio.css';

import ValAppIcon from '../../assets/imgs/projects/ValApp-Icon.png';
import ProdTrackerIcon from '../../assets/imgs/projects/ProdTracker-Icon.png';
import RandomSmashPreview from '../../assets/imgs/projects/RandomSmash-Preview.png';
import SmashFlaskPreview from '../../assets/imgs/projects/SmashFlask-Preview.png';
import SmashTkinterPreview from '../../assets/imgs/projects/SmashTkinter-Preview.png';
import PokeStopPreview from '../../assets/imgs/projects/PokeStop-Preview.png';
import TropaGamePreview from '../../assets/imgs/projects/TropaGame-Preview.png';
import FightStickPreview from '../../assets/imgs/projects/FightStick-Preview.png';

const projects = [
    {
        id: 'proj-8',
        title: 'WillYouBeMyValentine 2026',
        description: 'Will You Be My Valentine 2026 is a romantic web application designed to help users plan the perfect Valentine\'s Day surprise for their loved ones.',
        tech: ['React', 'JavaScript', 'HTML', 'CSS'],
        thumbnail: ValAppIcon,
        liveUrl: 'https://themtorres29.github.io/ValentinesDay2026/',
        githubUrl: 'https://github.com/TheMTorres29/ValentinesDay2026',
    },
    {
        id: 'proj-7',
        title: 'Productivity Tracker',
        description: 'A web application designed to help users track their productivity and manage tasks effectively.',
        tech: ['React', 'JavaScript', 'HTML', 'CSS','NodeJS', 'MongoDB', 'Express'],
        thumbnail: ProdTrackerIcon,
        liveUrl: 'https://prologistixwalmart-productiontracker.up.railway.app/',
        githubUrl: 'https://github.com/TheMTorres29/PrologistixWalmartTracker',
    },
    {
        id: 'proj-6',
        title: 'Random Smashdown',
        description: 'The original ReactJS Fighter Randomizer for Super Smash Bros Ultimate.',
        tech: ['React', 'JavaScript', 'HTML', 'CSS', 'Amplify'],
        thumbnail: RandomSmashPreview,
        liveUrl: 'https://random-smashdown.site',
        githubUrl: null,
    },
    {
        id: 'proj-5',
        title: 'Random Smashdown (Flask)',
        description: 'A random character generator for Super Smash Bros. Ultimate using Python and Flask.',
        tech: ['Python', 'Flask', 'AWS'],
        thumbnail: SmashFlaskPreview,
        liveUrl: 'https://ec2-3-95-67-134.compute-1.amazonaws.com/',
        githubUrl: null,
    },
    {
        id: 'proj-4',
        title: 'Random Smashdown (TKinter)',
        description: 'A random character generator for Super Smash Bros. Ultimate using Python and TKinter.',
        tech: ['Python', 'TKinter'],
        thumbnail: SmashTkinterPreview,
        liveUrl: null,
        githubUrl: 'https://github.com/TheMTorres29/RandomSmashdown-Tkinter',
    },
    {
        id: 'proj-3',
        title: 'MTCG PokeStop Page',
        description: 'A simple PokeStop landing page for the MTCG Card shop using HTML and CSS.',
        tech: ['ReactJS', 'HTML', 'CSS'],
        thumbnail: PokeStopPreview,
        liveUrl: 'https://themtorres29.github.io/MTCG-PokeStop-Page/',
        githubUrl: null,
    },
    {
        id: 'proj-2',
        title: 'Tropa Magica Game',
        description: 'First Unity game I built for Game Design course.',
        tech: ['Unity', 'C#'],
        thumbnail: TropaGamePreview,
        liveUrl: null,
        githubUrl: 'https://github.com/TheMTorres29/TropaMagicaGameBuild/releases',
    },
    {
        id: 'proj-1',
        title: 'Custom Fightstick',
        description: 'Custom universal fightstick I built to use when I play fighting games.',
        tech: ['Hardware', 'DIY'],
        thumbnail: FightStickPreview,
        liveUrl: null,
        githubUrl: null,
        internalLink: '/fightstick',
    },
];

const GitHubIcon = () => (
    <svg className="project-link-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
);

const ExternalLinkIcon = () => (
    <svg className="project-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

const Portfolio = () => {
    return (
        <section id="projects" className="portfolio-container">
            <div className="portfolio-inner">
                <h2 className="portfolio-heading">Projects</h2>
                <p className="portfolio-intro">
                    A selection of projects that showcase my skills and experience. Each project highlights different technologies and approaches I've used to solve problems and create engaging experiences.
                </p>

                <div className="portfolio-grid">
                    {projects.map((project) => (
                        <article key={project.id} className="project-card">
                            {/* Thumbnail */}
                            <div className="project-thumbnail">
                                <img
                                    src={project.thumbnail}
                                    alt={`${project.title} preview`}
                                    loading="lazy"
                                />
                            </div>

                            {/* Content */}
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                {/* Tech Stack */}
                                <div className="project-tech">
                                    {project.tech.map((t) => (
                                        <span key={t} className="tech-badge">{t}</span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="project-links">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link project-link--primary"
                                        >
                                            <ExternalLinkIcon />
                                            Live Demo
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link project-link--secondary"
                                        >
                                            <GitHubIcon />
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
