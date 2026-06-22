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
            <span>ANTHROPIC</span>
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
            <span>UBISOFT</span>
          </div>
          {/* Oracle */}
          <div className="brand-logo oracle">
            <span>ORACLE</span>
          </div>
          {/* Airbus */}
          <div className="brand-logo airbus">
            <span>AIRBUS</span>
          </div>
          {/* J&J */}
          <div className="brand-logo johnson">
            <span>Johnson & Johnson</span>
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
