import React, { useState } from 'react';
import './DeveloperDeck.css';

interface Project {
  name: string;
  url?: string;
  description?: string;
}

interface CardData {
  id: string;
  title: string;
  suit: string;
  suitSymbol: string;
  suitClass: 'suit-gold' | 'suit-crimson';
  projectCount: number;
  description: string;
  projects: Project[];
}

export const DeveloperDeck: React.FC = () => {
  // Track flip state for each card individually
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({
    builder: false,
    human: false,
    visionary: false,
    explorer: false,
  });

  const handleCardClick = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleProjectClick = (e: React.MouseEvent, project: Project) => {
    // Prevent the card from flipping back when clicking a project item
    e.stopPropagation();
    console.log(`Exploring project: ${project.name}`);
    // You can add navigation logic here when actual project routes exist
  };

  const deckData: CardData[] = [
    {
      id: 'builder',
      title: 'THE BUILDER',
      suit: 'Spades',
      suitSymbol: '♠',
      suitClass: 'suit-gold',
      projectCount: 2,
      description: 'Crafting high-performance systems, clean architectures, and modular tools.',
      projects: [
        { name: 'CORO' },
        { name: 'ASAP Maps' },
      ],
    },
    {
      id: 'human',
      title: 'THE HUMAN',
      suit: 'Hearts',
      suitSymbol: '♥',
      suitClass: 'suit-crimson',
      projectCount: 1,
      description: 'Centering empathy, accessibility, and human-computer connection.',
      projects: [
        { name: 'DiaGuard' },
      ],
    },
    {
      id: 'visionary',
      title: 'THE VISIONARY',
      suit: 'Diamonds',
      suitSymbol: '♦',
      suitClass: 'suit-crimson',
      projectCount: 1,
      description: 'Exploring AI frontiers, intelligent agents, and future-forward concepts.',
      projects: [
        { name: 'Legalize' },
      ],
    },
    {
      id: 'explorer',
      title: 'THE EXPLORER',
      suit: 'Clubs',
      suitSymbol: '♣',
      suitClass: 'suit-gold',
      projectCount: 0,
      description: 'Researching novel paradigms, learning continuously, and charting unknown code.',
      projects: [], // Reserved for future projects
    },
  ];

  return (
    <section id="developer-deck-section" className="deck-section" aria-label="Developer Deck Categories">
      <div className="deck-glow" aria-hidden="true"></div>

      <div className="deck-header">
        <h2 className="deck-title">DEVELOPER DECK</h2>
        <p className="deck-subtitle">
          Four facets of my building journey. Click a card to reveal projects in that category.
        </p>
      </div>

      <div className="deck-grid">
        {deckData.map((card) => {
          const isFlipped = flippedCards[card.id];

          return (
            <div
              key={card.id}
              className="deck-card-wrapper"
              onClick={() => handleCardClick(card.id)}
              aria-expanded={isFlipped}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(card.id);
                }
              }}
              aria-label={`${card.title} playing card, showing ${card.projectCount} project${card.projectCount === 1 ? '' : 's'}.`}
            >
              <div className={`deck-card ${isFlipped ? 'flipped' : ''}`}>
                
                {/* --- FRONT FACE --- */}
                <div className={`card-face card-face-front ${card.suitClass}`}>
                  <div className="card-face-inner" aria-hidden="true"></div>

                  {/* Top-Left Corner Index */}
                  <div className={`card-index top-left ${card.suitClass}`}>
                    <span className="card-index-count">{card.projectCount}</span>
                    <span>{card.suitSymbol}</span>
                  </div>

                  {/* Huge Background Watermark */}
                  <div className={`card-watermark ${card.suitClass}`} aria-hidden="true">
                    {card.suitSymbol}
                  </div>

                  {/* Front Main Content */}
                  <div className="card-body-front">
                    <h3 className="card-category-title">{card.title}</h3>
                    <p className="card-category-desc">{card.description}</p>
                  </div>

                  {/* Tap/Click Action Indicator */}
                  <span className="card-action-text" aria-hidden="true">
                    TAP TO UNLOCK
                  </span>

                  {/* Bottom-Right Corner Index */}
                  <div className={`card-index bottom-right ${card.suitClass}`}>
                    <span className="card-index-count">{card.projectCount}</span>
                    <span>{card.suitSymbol}</span>
                  </div>
                </div>

                {/* --- BACK FACE --- */}
                <div className="card-face card-face-back">
                  <div className="card-face-inner" aria-hidden="true"></div>

                  {/* Top-Left Index on Back */}
                  <div className="card-index top-left suit-gold">
                    <span className="card-index-count">{card.projectCount}</span>
                    <span>{card.suitSymbol}</span>
                  </div>

                  {/* Center Watermark on Back */}
                  <div className="card-watermark suit-gold" style={{ opacity: 0.02 }} aria-hidden="true">
                    {card.suitSymbol}
                  </div>

                  {/* Back Main Content */}
                  <div className="card-body-back">
                    <h3 className="card-back-title">{card.title} PROJECTS</h3>
                    
                    {card.projects.length > 0 ? (
                      <div className="projects-list">
                        {card.projects.map((project, idx) => (
                          <div
                            key={idx}
                            className="project-item"
                            onClick={(e) => handleProjectClick(e, project)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                handleProjectClick(e as any, project);
                              }
                            }}
                          >
                            <span className="project-name">{project.name}</span>
                            <span className="project-arrow" aria-hidden="true">→</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="projects-empty">
                        Reserved for future projects. Building in stealth mode...
                      </div>
                    )}
                  </div>

                  {/* Flip Back Trigger */}
                  <button className="btn-flip-back" type="button" aria-label="Close project viewer">
                    Flip Card Back
                  </button>

                  {/* Bottom-Right Index on Back */}
                  <div className="card-index bottom-right suit-gold">
                    <span className="card-index-count">{card.projectCount}</span>
                    <span>{card.suitSymbol}</span>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DeveloperDeck;
