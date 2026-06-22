"use client";

import React from "react";
import { Preset, PRESETS } from "./types";

interface HeroProps {
  domainInput: string;
  setDomainInput: (val: string) => void;
  activePreset: Preset;
  setActivePreset: (preset: Preset) => void;
  startAnalysis: () => void;
  triggerCountAnimation: (preset: Preset) => void;
}

export default function Hero({
  domainInput,
  setDomainInput,
  activePreset,
  setActivePreset,
  startAnalysis,
  triggerCountAnimation,
}: HeroProps) {
  
  const handlePresetClick = (domain: string) => {
    setDomainInput(domain);
    const preset = PRESETS[domain] || PRESETS["default"];
    setActivePreset(preset);
    triggerCountAnimation(preset);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      startAnalysis();
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-background"></div>
      <div className="hero-container">
        {/* Pill Badge */}
        <div className="hero-badge">
          <svg className="badge-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 1.5C8 1.5 9 5 10.5 6.5C12 8 15.5 8 15.5 8C15.5 8 12 9 10.5 10.5C9 12 8 15.5 8 15.5C8 15.5 7 12 5.5 10.5C4 9 0.5 8 0.5 8C0.5 8 4 8 5.5 6.5C7 5 8 1.5 8 1.5Z"
              fill="#2563EB"
            />
          </svg>
          <span>AI platform for SEO, GEO & Growth</span>
        </div>

        {/* Main Heading */}
        <h1 className="hero-title">AI Platform to Grow<br />Your Business Visibility</h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Enter your domain. Olum uses real search, competitor, and online conversation data to create SEO pages, blogs,
          social posts, replies, and website updates through AI agents.
        </p>

        {/* Domain Analyzer Box */}
        <div className="analyzer-container">
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
              aria-label="Domain input"
            />
            <button className="btn-analyze" onClick={startAnalysis} id="analyze-btn">
              <span>Analyze my business</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Examples */}
        <div className="examples-wrapper">
          <span className="examples-label">Try with an example:</span>
          <div className="example-tags">
            <button
              className={`tag-btn ${activePreset.domain === "acme-saas.com" ? "active" : ""}`}
              onClick={() => handlePresetClick("acme-saas.com")}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M2 12h20" />
              </svg>
              <span>SaaS company</span>
            </button>

            <button
              className={`tag-btn ${activePreset.domain === "austindental.com" ? "active" : ""}`}
              onClick={() => handlePresetClick("austindental.com")}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Local clinic</span>
            </button>

            <button
              className={`tag-btn ${activePreset.domain === "summitledger.com" ? "active" : ""}`}
              onClick={() => handlePresetClick("summitledger.com")}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
              <span>Accounting firm</span>
            </button>

            <button
              className={`tag-btn ${activePreset.domain === "soleshoes.com" ? "active" : ""}`}
              onClick={() => handlePresetClick("soleshoes.com")}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                <line x1="7" y1="7" x2="7.01" y2="7" />
              </svg>
              <span>D2C brand</span>
            </button>
          </div>
        </div>
      </div>

      {/* Trust Container stretching up to 90% of screen width */}
      <div className="hero-trust-container">
        <p className="trust-text">
          Trusted by businesses that want to show up on Google, AI search, social platforms, and online conversations.
        </p>

        <div className="logo-strip">
          {/* Adobe */}
          <div className="brand-logo adobe">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.58 2H22v20L14.58 2zM9.42 2H2v20L9.42 2zm2.76 11.2l3.1 7.2h-3.4l-1.9-4.8H7l4 4.8h1.2z" />
            </svg>
            <span>Adobe</span>
          </div>
          {/* Anthropic */}
          <div className="brand-logo anthropic">
            <svg viewBox="0 0 140 24" fill="currentColor" height="16" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.2 2.7h4.8l8.2 18.6h-4.8L14.6 16H6.8l-1.8 5.3H.2L8.2 2.7zm2.4 4.8L7.8 12.5h5.6L10.6 7.5zM29.5 2.7h4.8v9.4l7.6-9.4H47L39 12.8l8.5 8.5h-5.8l-7.4-7.4v7.4h-4.8V2.7zm22 0H56v6.5h7.2V2.7H68v18.6h-4.8v-7.3H56v7.3h-4.5V2.7zM78.2 2.7h8.2c3.8 0 6.6 2.2 6.6 5.8 0 3.6-2.8 5.8-6.6 5.8H83v7H78.2V2.7zm4.8 7.3h3.4c1.6 0 2.6-.8 2.6-2.2s-1-2.2-2.6-2.2h-3.4v4.4zM99.5 2.7h8.2c3.8 0 6.6 2.2 6.6 5.8 0 2.8-1.7 5.1-4.2 5.6l4.8 8.6h-5.4l-4.2-7.8h-1.8v7.8H99.5V2.7zm4.8 7.3h3.4c1.6 0 2.6-.8 2.6-2.2s-1-2.2-2.6-2.2h-3.4v4.4zM121 2.7c5.8 0 10 4.2 10 9.3s-4.2 9.3-10 9.3-10-4.2-10-9.3 4.2-9.3 10-9.3zm0 14.3c3.2 0 5.4-2.4 5.4-5s-2.2-5-5.4-5-5.4 2.4-5.4 5 2.2 5 5.4 5z" />
            </svg>
            <span className="sr-only">Anthropic</span>
          </div>
          {/* Ubisoft */}
          <div className="brand-logo ubisoft">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-4.75-3.85-8.5-8.5-8.5S5 7.25 5 12c0 3.81 3.09 6.9 6.9 6.9 3.04 0 5.5-2.46 5.5-5.5 0-2.2-1.8-4-4-4s-3.1 1.8-3.1 3.7c0 1.1.9 1.9 1.9 1.9.8 0 1.3-.5 1.3-1.1 0-.6-.5-.9-.9-.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Ubisoft</span>
          </div>
          {/* Oracle */}
          <div className="brand-logo oracle">
            <svg viewBox="0 0 120 25" fill="currentColor" height="15" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 0C5.6 0 0 5.6 0 12.5S5.6 25 12.5 25 25 19.4 25 12.5 19.4 0 12.5 0zm0 19.6c-3.9 0-7.1-3.2-7.1-7.1S8.6 5.4 12.5 5.4s7.1 3.2 7.1 7.1-3.2 7.1-7.1 7.1zm19.6-18.4h5.4v11c0 2.5 1.5 4 3.8 4s3.8-1.5 3.8-4V1.2h5.4v11c0 5-3.5 8.2-9.2 8.2s-9.2-3.2-9.2-8.2V1.2zm23 0H60v18.6h-4.5V1.2zm12 0h8.5c4 0 6.5 2.2 6.5 5.4 0 2.4-1.4 4.3-3.6 4.9l4.5 8.3h-5.2l-3.9-7.5h-2.3v7.5H60.5V1.2zm4.5 7h4c1.8 0 2.8-.8 2.8-2.2s-1-2.2-2.8-2.2h-4v4.4zm17.6-7h4.8l8.2 18.6h-4.8l-1.8-4.5H84.6l-1.8 4.5H78l8.2-18.6zm2.4 4.8l-2.8 7.4h5.6l-2.8-7.4zm17 0V1.2h4.5v18.6h-4.5zm10.5 0h8.5v3.8h-8.5v3.8h7.2v3.8h-7.2v3.8H119v3.8h-13.5V1.2z" />
            </svg>
            <span className="sr-only">Oracle</span>
          </div>
          {/* Airbus */}
          <div className="brand-logo airbus">
            <svg viewBox="0 0 110 20" fill="currentColor" height="14" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.2 2h4.8l8.2 16h-4.8l-1.8-3.8H7.8l-1.8 3.8H1.2L9.2 2zm2.4 4.2L8.8 11.2h5.6L11.6 6.2zM24 2h4.5v16H24V2zm11 0h8.2c3.8 0 6.6 2 6.6 5.2 0 2.4-1.4 4.3-3.6 4.9l4.5 5.9h-5.2l-3.9-5.3h-2.3v5.3H35V2zm4.5 6.5h4c1.6 0 2.6-.7 2.6-1.9s-1-1.9-2.6-1.9h-4v3.8zm17-6.5h8.2c3.8 0 6.6 2 6.6 5.2 0 2-1 3.6-2.8 4.4 2 1 2.8 2.6 2.8 4.6 0 3.2-2.8 5.2-6.6 5.2h-8.2V2zm4.5 6.5h3.6c1.6 0 2.6-.7 2.6-1.9s-1-1.9-2.6-1.9h-3.6v3.8zm0 7h3.6c1.6 0 2.6-.7 2.6-1.9s-1-1.9-2.6-1.9h-3.6v3.8zm18-13.5h4.5v11c0 2.5 1.5 4 3.8 4s3.8-1.5 3.8-4V2h4.5v11c0 5-3.5 8-9.2 8s-9.2-3-9.2-8V2zm22 0h8.5v3.8h-8.5v3.8h7.2v3.8h-7.2v3.8h8.5v3.8h-13V2z" />
            </svg>
            <span className="sr-only">Airbus</span>
          </div>
          {/* J&J */}
          <div className="brand-logo johnson">
            <svg viewBox="0 0 160 28" fill="currentColor" height="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 24c-2.4 0-4.5-1.2-5.8-3.2-1.2-1.8-1.5-4.2-.8-6.5l2.2-7.2h3l-2.2 7.2c-.5 1.7-.3 3.4.5 4.6.8 1.2 2.2 2 3.8 2s2.8-.8 3.5-2.2l4.8-15.4c.5-1.5-.2-2.5-1.8-2.5h-1.5V1.2h3.5c1.8 0 3 .8 3.5 2.5l-4.5 14.5c-.8 2.6-3 4.8-6.2 5.8-1 .3-2.1.5-3.2.5zm19.5-6.5c-1.5 0-2.8-.8-3.5-2.2-1-1.8-.8-4 .5-5.5 1.2-1.5 3.2-2.2 4.8-2.2s2.8.8 3.5 2.2c1 1.8.8 4-.5 5.5-1.2 1.5-3.2 2.2-4.8 2.2zm0-8.5c-1.2 0-2.4.6-3 1.6-.7 1.1-.8 2.5-.2 3.6.6 1 1.8 1.6 3 1.6s2.4-.6 3-1.6c.7-1.1.8-2.5.2-3.6-.6-1-1.8-1.6-3-1.6zM46.2 2c0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1zm.8 5.2h2.5L46 22H43l3.5-14.8zm11 14.8c-2.5 0-4.5-1.5-5.2-3.8H56c.5 1.2 1.8 2 3.2 2 1.8 0 3-1 3.5-2.5l2.2-7.2c-.8.8-1.8 1.2-3 1.2-2.4 0-4.5-1.8-5.2-4.2-.8-2.4.2-4.8 2.2-6 1.8-1.1 4.2-.8 5.2.8l2.2-7.2h3l-5.8 18.6c-.8 2.6-3 4.8-6.2 5.8-1 .3-2 .5-3.1.5zm3.8-14.8c-1.2 0-2.4.6-3 1.6-.7 1.1-.8 2.5-.2 3.6.6 1 1.8 1.6 3 1.6s2.4-.6 3-1.6c.7-1.1.8-2.5.2-3.6-.6-1-1.8-1.6-3-1.6zM76.5 22c-2.5 0-4.5-1.5-5.2-3.8h3.2c.5 1.2 1.8 2 3.2 2 1.8 0 3-1 3.5-2.5l1.5-4.8c-.8.8-1.8 1.2-3 1.2-2.4 0-4.5-1.8-5.2-4.2-.8-2.4.2-4.8 2.2-6 1.8-1.1 4.2-.8 5.2.8l1.5-4.8h3l-4.8 15.4c-.8 2.6-3 4.8-6.2 5.8-1 .3-2 .5-3.1.5zm3.8-14.8c-1.2 0-2.4.6-3 1.6-.7 1.1-.8 2.5-.2 3.6.6 1 1.8 1.6 3 1.6s2.4-.6 3-1.6c.7-1.1.8-2.5.2-3.6-.6-1-1.8-1.6-3-1.6zm22-3h3l-4.5 14.5c-.8 2.6-3 4.8-6.2 5.8-1 .3-2.1.5-3.2.5-2.4 0-4.5-1.2-5.8-3.2-1.2-1.8-1.5-4.2-.8-6.5l2.2-7.2h3l-2.2 7.2c-.5 1.7-.3 3.4.5 4.6.8 1.2 2.2 2 3.8 2s2.8-.8 3.5-2.2l4.8-15.4zm16 8.5c0-1.8.8-3.4 2.2-4.4 1.5-1 3.4-1.2 5-1.2s3 .2 4 .8l-1.2 2.2c-.8-.4-1.8-.8-2.8-.8-1.2 0-2.4.6-3 1.6-.5 1.1-.5 2.5 0 3.6.6 1 1.8 1.6 3 1.6.8 0 1.8-.4 2.5-.8L129 17c-1.2.8-2.6 1.2-4.2 1.2-2.4 0-4.5-1.2-5.8-3.2-1.2-1.8-1.5-4.2-.8-6.5zm19-8.5c0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1zm.8 5.2h2.5l-3.5 11.2h-3l3.5-11.2z" />
            </svg>
            <span className="sr-only">Johnson & Johnson</span>
          </div>
          {/* American Airlines */}
          <div className="brand-logo american">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 75L50 15H35L15 75Z" fill="#C0162B" />
              <path d="M55 75L85 25H70L50 75H55Z" fill="#00225A" />
              <path d="M45 55L60 30H55L40 55H45Z" fill="#7A8B99" />
            </svg>
            <span>American Airlines</span>
          </div>
        </div>
      </div>
    </section>
  );
}
