import React from "react";

export default function HowItWorks() {
  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="section-container">
        <span className="section-tag center">HOW IT WORKS</span>
        <h2 className="section-title center">Real data in. Ready content out.</h2>

        <div className="steps-grid">
          {/* Step 1 */}
          <div className="step-card">
            <div className="step-badge-wrapper">
              <span className="step-number">1</span>
            </div>
            <div className="step-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth=".7" />
                <line x1="3" y1="7" x2="21" y2="7" stroke="currentColor" strokeWidth="1" />
                <circle cx="5.5" cy="5" r="0.6" fill="currentColor" />
                <circle cx="8" cy="5" r="0.6" fill="currentColor" />
                <circle cx="13" cy="14" r="4" stroke="currentColor" strokeWidth="1" />
                <line x1="9" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="1" />
                <line x1="13" y1="10" x2="13" y2="18" stroke="currentColor" strokeWidth="1" />
                <path
                  d="M10.5 11.5C11.3 12.2 11.8 13.1 11.8 14C11.8 14.9 11.3 15.8 10.5 16.5"
                  stroke="currentColor"
                  strokeWidth="0.8"
                  fill="none"
                />
                <path
                  d="M15.5 11.5C14.7 12.2 14.2 13.1 14.2 14C14.2 14.9 14.7 15.8 15.5 16.5"
                  stroke="currentColor"
                  strokeWidth="0.8"
                  fill="none"
                />
              </svg>
            </div>
            <h3 className="step-title">Analyze your business</h3>
            <p className="step-desc">
              Olum reads your website to understand what you sell, who you serve, and where you are currently visible.
            </p>
          </div>

          {/* Connector 1 -> 2 */}
          <div className="step-connector">
            <svg className="connector-svg" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12H44M44 12L36 4M44 12L36 20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Step 2 */}
          <div className="step-card">
            <div className="step-badge-wrapper">
              <span className="step-number">2</span>
            </div>
            <div className="step-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="0.7" />
                <line x1="14.2" y1="14.2" x2="18" y2="18" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
                <path d="M7 12L9.2 8.5L11.2 12L14 7.5" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="step-title">Find real demand</h3>
            <p className="step-desc">
              Olum looks at search data, competitor visibility, online questions, and content gaps.
            </p>
          </div>

          {/* Connector 2 -> 3 */}
          <div className="step-connector">
            <svg className="connector-svg" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12H44M44 12L36 4M44 12L36 20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Step 3 */}
          <div className="step-card">
            <div className="step-badge-wrapper">
              <span className="step-number">3</span>
            </div>
            <div className="step-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M6 18V8H18" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11 13L13 11L15 13L18.5 9.5" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17 9.5H19V11.5" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                {/* Sparkles */}
                <path d="M 19 2.5 Q 19 4 20.5 4 Q 19 4 19 5.5 Q 19 4 17.5 4 Q 19 4 19 2.5 Z M 16 4 Q 16 5 17 5 Q 16 5 16 6 Q 16 5 15 5 Q 16 5 16 4 Z M 21 7.2 Q 21 8 21.8 8 Q 21 8 21 8.8 Q 21 8 20.2 8 Q 21 8 21 7.2 Z" fill="currentColor" />
              </svg>
            </div>
            <h3 className="step-title">Create the work</h3>
            <p className="step-desc">
              AI agents create blogs, SEO pages, social posts, replies, FAQs, and website updates for approval.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
