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
                    'Received and processed freight deliveries.',
                    'Maintained inventory accuracy through regular audits.',
                    'Collaborated with the sales team to ensure optimal stock levels.',
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
                    'Led a team of receivers in a high-volume warehouse.',
                    'Implemented process improvements that enhanced efficiency by 15%.',
                    'Trained new employees on safety and operational procedures.',
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
                    'Assisted in the management of the fresh department, including inventory management and merchandising.',
                    'Achieved a 10% reduction in waste through effective stock rotation and quality control.',
                    'Provided exemplary customer service, addressing customer inquiries and concerns.',
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
                    'Operated direct-to-garment printers, ensuring high-quality prints.',
                    'Performed routine maintenance and troubleshooting on printing equipment.',
                    'Collaborated with the design team to achieve accurate and vibrant print results.',
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
                    'Provided exceptional customer service and expert advice on gaming products.',
                    'Achieved top salesperson status for three consecutive months.',
                    'Managed inventory, including receiving and processing new stock.',
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
                    'Provided technical support and troubleshooting for hardware and software issues.',
                    'Managed IT inventory, including ordering and maintaining supplies.',
                    'Conducted training sessions for staff on new technologies and software.',
                ],
            },
            {
                id: 'job-7',
                companyName: 'Superior Grocers',
                companyLogoSrc: SuperiorGrocersLogo,
                companyInitials: 'SG',
                jobTitle: 'Sales Associate',
                dateRange: 'Aug 2014 - Jan 2015',
                details: [
                    'Assisted customers with product selection and inquiries.',
                    'Maintained cleanliness and organization of the sales floor.',
                    'Executed effective merchandising strategies to maximize sales.',
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