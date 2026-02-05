import React, { useMemo, useState, useEffect, useRef } from 'react';
import './Timeline.css';

// Import logos from local assets
import WalmartLogo from '../../assets/imgs/logos/walmart.png';
import PrologistixLogo from '../../assets/imgs/logos/prologistix.png';
import SamsClubLogo from '../../assets/imgs/logos/samsclub.png';
import ZumiezLogo from '../../assets/imgs/logos/zumiez.png';
import GameStopLogo from '../../assets/imgs/logos/gamestop.png';
import LaCenaduriaLogo from '../../assets/imgs/logos/lacenaduria.png';
import SuperiorGrocersLogo from '../../assets/imgs/logos/superiorgrocers.png';

const PlaceholderLogo = ({ initials }) => (
    <div className="timeline-logo-fallback" aria-hidden="true">
        {initials}
    </div>
);

const LogoWithFallback = ({ src, alt, initials }) => {
    const [hasError, setHasError] = useState(false);

    if (!src || hasError) {
        return <PlaceholderLogo initials={initials} />;
    }

    return (
        <img
            className="timeline-logo"
            src={src}
            alt={alt}
            onError={() => {
                console.warn(`Failed to load logo: ${src}`);
                setHasError(true);
            }}
        />
    );
};

// Hook for fade-in AND fade-out on scroll
const useScrollFade = () => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Toggle visibility based on whether element is in view
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.15, rootMargin: '-50px 0px -50px 0px' }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return { ref, isVisible };
};

// Timeline Item component with fade-in/out
const TimelineItem = ({ job, isExpanded, hasDetails, onToggle }) => {
    const { ref, isVisible } = useScrollFade();

    return (
        <li ref={ref} className={`timeline-item ${isVisible ? 'is-visible' : ''}`}>
            <button
                type="button"
                className="timeline-node"
                onClick={() => hasDetails && onToggle(job.id)}
                aria-expanded={hasDetails ? isExpanded : undefined}
                aria-controls={hasDetails ? `${job.id}-panel` : undefined}
                disabled={!hasDetails}
            >
                <LogoWithFallback
                    src={job.companyLogoSrc}
                    alt={`${job.companyName} logo`}
                    initials={job.companyInitials ?? job.companyName?.[0] ?? '?'}
                />
            </button>

            <div className="timeline-main">
                <div className="timeline-meta">
                    <div className="timeline-company">
                        <span className="timeline-company-name">{job.companyName}</span>
                        <span className="timeline-job-title">{job.jobTitle}</span>
                    </div>

                    <div className="timeline-dates">
                        <span className="timeline-date">{job.dateRange}</span>
                    </div>
                </div>

                {hasDetails && (
                    <div
                        id={`${job.id}-panel`}
                        className={`timeline-panel ${isExpanded ? 'is-open' : ''}`}
                    >
                        <ul className="timeline-details">
                            {job.details.map((d, idx) => (
                                <li key={idx}>{d}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </li>
    );
};

const Timeline = () => {
    const jobs = useMemo(
        () => [
            {
                id: 'job-1',
                companyName: 'Walmart',
                companyLogoSrc: WalmartLogo,
                companyInitials: 'W',
                jobTitle: 'Unloader',
                dateRange: 'Jan 2026 - Present',
                details: [
                    'Unloaded and processed freight containers while consistently meeting productivity and accuracy standards',
                    'Analyzed incoming freight to ensure correct receiving, documentation, and system accuracy',
                    'Collaborated with management to quickly identify and resolve operational issues impacting productivity',
                ],

            },
            {
                id: 'job-2',
                companyName: 'ProLogistix',
                companyLogoSrc: PrologistixLogo,
                companyInitials: 'PL',
                jobTitle: 'Receiving Lead',
                dateRange: 'May 2024 - January 2026',
                details: [
                    'Led and coordinated a team of 10 - 20 associates to unload and process freight containers efficiently and on schedule',
                    'Communicated with team members and management to resolve workflow issues, maintain productivity, and ensure operational continuity',
                    'Designed and developed a productivity management web application to automate hour tracking and performance calculations',
                ],

            },
            {
                id: 'job-3',
                companyName: "Sam's Club",
                companyLogoSrc: SamsClubLogo,
                companyInitials: 'SC',
                jobTitle: 'Fresh Dept. Associate',
                dateRange: 'Oct 2023 - May 2024',
                details: [
                    'Supported daily fresh department operations by organizing freight, rotating stock, and maintaining product availability',
                    'Operated material-handling equipment as a forklift-certified associate to support efficient inventory movement',
                    'Assisted customers on the sales floor while maintaining clean, organized, and well-stocked work areas',
                ],

            },
            {
                id: 'job-4',
                companyName: 'Zumiez DTG',
                companyLogoSrc: ZumiezLogo,
                companyInitials: 'Z',
                jobTitle: 'Operator / Quality Control',
                dateRange: 'Oct 2022 - Oct 2023',
                details: [
                    'Operated and maintained Kornit DTG printing systems, ensuring consistent production output and minimizing equipment downtime',
                    'Performed quality assurance checks to validate print accuracy, color consistency, and sale-ready production standards',
                    'Trained new team members on machine operation, maintenance workflows, and digital asset preparation using Adobe Photoshop and Illustrator',
                ],

            },
            {
                id: 'job-5',
                companyName: 'GameStop',
                companyLogoSrc: GameStopLogo,
                companyInitials: 'GS',
                jobTitle: 'Senior Game Advisor',
                dateRange: 'Oct 2020 - May 2021',
                details: [
                    'Led daily store operations and supervised a small team, coordinating task execution, workflow efficiency, and customer support',
                    'Maintained inventory accuracy and system integrity through regular audits and stock adjustments within the GameStop POS platform',
                    'Handled cash management and operational reporting, ensuring accountability, compliance, and secure financial close-out procedures',
                ],
            },
            {
                id: 'job-6',
                companyName: 'La Cenaduria',
                companyLogoSrc: LaCenaduriaLogo,
                companyInitials: 'LC',
                jobTitle: 'IT / Help Desk',
                dateRange: 'Jan 2015 - Present',
                details: [
                    'Provided day-to-day IT and help desk support by maintaining office hardware, printers, and internal systems',
                    'Standardized document workflows by creating Microsoft Office templates and assisting staff with PDFs, email distribution, and file access',
                    'Supported business operations through POS reporting, expense tracking, menu updates, and deployment of digital and in-store media systems',
                ],

            },
            {
                id: 'job-7',
                companyName: 'Superior Grocers',
                companyLogoSrc: SuperiorGrocersLogo,
                companyInitials: 'SG',
                jobTitle: 'Sales Associate',
                dateRange: 'Aug 2014 - Jan 2016',
                details: [
                    'Coordinated daily department operations, maintaining structured inventory organization and workflow consistency',
                    'Communicated inventory requirements and operational needs directly with management to support efficient ordering processes',
                    'Supported high-volume retail operations by ensuring stock accuracy and delivering reliable customer assistance',
                ],

            },
        ],
        []
    );

    const [expandedId, setExpandedId] = useState(null);

    const handleToggle = (id) => {
        setExpandedId((prev) => (prev === id ? null : id));
    };

    return (
        <section className="timeline-container" aria-label="Work experience timeline">
            <div className="timeline-inner">
                <h2 className="timeline-heading">Work Experience</h2>

                <ol className="timeline-list">
                    {/* Vertical line spanning full timeline */}
                    <div className="timeline-rail">
                        <div className="timeline-line" />
                    </div>

                    {jobs.map((job) => {
                        const isExpanded = expandedId === job.id;
                        const hasDetails = job.details && job.details.length > 0;

                        return (
                            <TimelineItem
                                key={job.id}
                                job={job}
                                isExpanded={isExpanded}
                                hasDetails={hasDetails}
                                onToggle={handleToggle}
                            />
                        );
                    })}
                </ol>
            </div>
        </section>
    );
};

export default Timeline;