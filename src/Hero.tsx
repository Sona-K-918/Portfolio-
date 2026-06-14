import React from 'react';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section id="hero-section" className="hero-container" aria-label="Developer Portfolio Hero">
      {/* Background visual components */}
      <div className="hero-glow" aria-hidden="true"></div>
      <div className="hero-grid" aria-hidden="true"></div>

      <div className="hero-content">
        {/* Left Side: Developer Info & Call to Actions */}
        <div className="hero-left">
          <span className="hero-greeting animate-fade-in delay-1">
            Welcome to my space
          </span>
          
          <h1 id="hero-name-heading" className="hero-name animate-fade-in delay-2">
            SONAKSHI KAUSHIK
          </h1>

          <div className="hero-tagline animate-fade-in delay-3" aria-label="Professional focus">
            <span>Full Stack Developer</span>
            <span className="tagline-dot" aria-hidden="true">•</span>
            <span>AI Builder</span>
            <span className="tagline-dot" aria-hidden="true">•</span>
            <span>Problem Solver</span>
          </div>

          <p className="hero-description animate-fade-in delay-4">
            Building technology that solves real-world problems through software, AI and human-centered innovation.
          </p>

          <div className="hero-ctas animate-fade-in delay-5">
            <button 
              id="cta-view-projects" 
              className="btn btn-primary"
              onClick={() => {
                document.getElementById('developer-deck-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              type="button"
            >
              View Projects
            </button>
            <button 
              id="cta-contact-me" 
              className="btn btn-secondary"
              onClick={() => {
                window.location.href = 'mailto:sonakshikaushik@example.com?subject=Contact%20from%20Portfolio';
              }}
              type="button"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Side: Elegant Glassmorphism Initials Card */}
        <div className="hero-right">
          <div className="profile-card-wrapper animate-fade-in delay-4">
            <div 
              className="profile-card" 
              role="img" 
              aria-label="Sonakshi Kaushik Developer Profile Badge"
            >
              {/* Card Top / Header */}
              <div className="card-header">
                <span className="card-system-info">PORTFOLIO v1.0</span>
                <div className="card-status">
                  <span className="status-dot" aria-hidden="true"></span>
                  <span>BUILDING</span>
                </div>
              </div>

              {/* Central Badge with rotating rings and Initials */}
              <div className="card-badge-container">
                <div className="badge-ring-outer" aria-hidden="true"></div>
                <div className="badge-ring-inner" aria-hidden="true"></div>
                <div className="badge-core">
                  <span className="badge-initials">SK</span>
                </div>
              </div>

              {/* Card Bottom / Footer Info */}
              <div className="card-footer">
                <div className="card-meta-row">
                  <span className="card-meta-label">ROLE</span>
                  <span className="card-meta-value">STUDENT BUILDER</span>
                </div>
                <div className="card-meta-row">
                  <span className="card-meta-label">PATH</span>
                  <span className="card-meta-value">FULL STACK & AI</span>
                </div>
                <div className="card-signature">
                  S. KAUSHIK
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
