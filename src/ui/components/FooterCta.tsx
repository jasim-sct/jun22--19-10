"use client";

import React from "react";

interface FooterCtaProps {
  domainInput: string;
  setDomainInput: (val: string) => void;
  startAnalysis: () => void;
}

export default function FooterCta({
  domainInput,
  setDomainInput,
  startAnalysis,
}: FooterCtaProps) {

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      startAnalysis();
    }
  };

  return (
    <section className="footer-cta-section">
      <div className="cta-container">
        <h2 className="cta-title">Start with your website</h2>
        <p className="cta-subtitle">Enter your domain and see what Olum's AI agents can create for your business.</p>

        {/* Footer Input Box */}
        <div className="analyzer-container compact">
          <div className="analyzer-input-wrapper">
            <div className="input-icon-container">
              <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <input
              type="text"
              value={domainInput}
              onChange={(e) => setDomainInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Enter your domain (e.g. yourbusiness.com)"
              aria-label="Domain input footer"
            />
            <button className="btn-analyze" onClick={startAnalysis} id="analyze-btn-footer">
              <span>Analyze my business</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Features Strip */}
        <div className="cta-highlights">
          <div className="hl-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>No credit card required</span>
          </div>
          <div className="hl-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Takes 2 minutes</span>
          </div>
          <div className="hl-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
