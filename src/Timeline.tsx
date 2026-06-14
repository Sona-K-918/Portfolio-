import React, { useEffect, useRef } from 'react';
import './Timeline.css';

interface Milestone {
  id: string;
  date: string;
  title: string;
  category: 'builder' | 'human' | 'visionary' | 'academic';
  categoryLabel: string;
  description: string;
}

// Track 1: Developer Journey Milestones
const DEVELOPER_TIMELINE: Milestone[] = [
  {
    id: 'diaguard',
    date: 'Early June 2026',
    title: 'DiaGuard',
    category: 'human',
    categoryLabel: 'Human Project',
    description: 'Focused on accessibility, safety and real-world healthcare impact.',
  },
  {
    id: 'coro',
    date: 'Late May 2026',
    title: 'CORO',
    category: 'builder',
    categoryLabel: 'Builder Project',
    description: 'Began building a productivity-focused software ecosystem.',
  },
  {
    id: 'legalize',
    date: 'Late October 2025',
    title: 'Legalize',
    category: 'visionary',
    categoryLabel: 'Visionary Project',
    description: 'First major project exploring legal technology and innovation.',
  },
];

// Track 2: Learner Journey Milestones
const LEARNER_TIMELINE: Milestone[] = [
  {
    id: 'btech-first-year',
    date: '2025-26',
    title: 'First Year B.Tech',
    category: 'academic',
    categoryLabel: 'Academic • 81.1%',
    description: 'Scored 81.1% while beginning my journey in software development and AI.',
  },
  {
    id: 'class-12',
    date: '2024-25',
    title: 'Class 12',
    category: 'academic',
    categoryLabel: 'Academic • 76%',
    description: 'Completed senior secondary education with 76%.',
  },
  {
    id: 'class-10',
    date: '2022-23',
    title: 'Class 10',
    category: 'academic',
    categoryLabel: 'Academic • 90.8%',
    description: 'Scored 90.8% and built a strong academic foundation.',
  },
];

export const Timeline: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const items = document.querySelectorAll('.timeline-item');

    // Create IntersectionObserver to add 'visible' class when elements enter viewport
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Unobserve to run animation only once on scroll-down
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08, // Trigger early when top of card enters screen
        rootMargin: '0px 0px -30px 0px', // Slide in slightly before passing fold
      }
    );

    items.forEach((item) => {
      observerRef.current?.observe(item);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const getBadgeClass = (category: string) => {
    switch (category) {
      case 'builder':
        return 'badge-builder';
      case 'human':
        return 'badge-human';
      case 'visionary':
        return 'badge-visionary';
      default:
        return 'badge-academic';
    }
  };

  return (
    <section id="timeline-section" className="timeline-section" aria-label="Timeline Journey">
      <div className="timeline-glow" aria-hidden="true"></div>

      <div className="timeline-header">
        <h2 className="timeline-title">TIMELINE</h2>
        <p className="timeline-subtitle">The milestones that shaped my journey.</p>
      </div>

      <div className="timeline-grid">
        
        {/* --- TRACK 1: DEVELOPER JOURNEY --- */}
        <div className="timeline-track developer">
          <header className="track-header">
            <h3 className="track-title">My Journey as a Developer</h3>
            <p className="track-desc-sub">Projects, products and ideas brought to life.</p>
          </header>
          
          <div className="track-line" aria-hidden="true"></div>

          {DEVELOPER_TIMELINE.map((event) => (
            <div key={event.id} className="timeline-item" data-id={event.id}>
              {/* Connector node */}
              <div className="timeline-node" aria-hidden="true"></div>

              {/* Small date label above card */}
              <time className="timeline-date-label" dateTime={event.date}>
                {event.date}
              </time>

              {/* Emphasized glassmorphic card */}
              <article className="timeline-card">
                <header className="timeline-card-header">
                  <h4 className="timeline-card-title">{event.title}</h4>
                  <span className={`milestone-badge ${getBadgeClass(event.category)}`}>
                    {event.categoryLabel}
                  </span>
                </header>
                <p className="timeline-card-desc">{event.description}</p>
              </article>
            </div>
          ))}
        </div>

        {/* --- TRACK 2: LEARNER JOURNEY --- */}
        <div className="timeline-track learner">
          <header className="track-header">
            <h3 className="track-title">My Journey as a Learner</h3>
            <p className="track-desc-sub">Academic milestones and continuous growth.</p>
          </header>
          
          <div className="track-line" aria-hidden="true"></div>

          {LEARNER_TIMELINE.map((event) => (
            <div key={event.id} className="timeline-item" data-id={event.id}>
              {/* Connector node */}
              <div className="timeline-node" aria-hidden="true"></div>

              {/* Small date label above card */}
              <time className="timeline-date-label" dateTime={event.date}>
                {event.date}
              </time>

              {/* Refined silver/gold accented glassmorphic card */}
              <article className="timeline-card">
                <header className="timeline-card-header">
                  <h4 className="timeline-card-title">{event.title}</h4>
                  <span className={`milestone-badge ${getBadgeClass(event.category)}`}>
                    {event.categoryLabel}
                  </span>
                </header>
                <p className="timeline-card-desc">{event.description}</p>
              </article>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Timeline;
