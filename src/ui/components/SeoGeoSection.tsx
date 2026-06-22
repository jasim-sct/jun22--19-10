"use client";

import React, { useState } from "react";
import { Preset } from "./types";

interface SeoGeoSectionProps {
  activePreset: Preset;
}

export default function SeoGeoSection({ activePreset }: SeoGeoSectionProps) {
  const [selectedEngine, setSelectedEngine] = useState<string>("google");

  return (
    <section className="seo-geo-section">
      <div className="section-container">
        <div className="section-header-centered">
          <span className="section-tag">SEO + GEO Optimization</span>
          <h2 className="section-title">Show up on Google and AI search</h2>
          <p className="section-desc max-w-600">
            Buyers don't just search on Google anymore. They ask ChatGPT, Perplexity, and Gemini what to buy.
            Olum optimizes your business content for both traditional SEO and modern Generative Engine Optimization (GEO).
          </p>
        </div>

        {/* AI Tools Icons Strip */}
        <div className="search-engines-strip">
          <button
            className={`engine-badge ${selectedEngine === "google" ? "active" : ""}`}
            onClick={() => setSelectedEngine("google")}
          >
            <svg viewBox="0 0 24 24" className="engine-icon" fill="currentColor">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                fill="#EA4335"
              />
            </svg>
            <span>Google Search</span>
          </button>

          <button
            className={`engine-badge ${selectedEngine === "chatgpt" ? "active" : ""}`}
            onClick={() => setSelectedEngine("chatgpt")}
          >
            <svg viewBox="0 0 24 24" className="engine-icon" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v8M8 12h8" />
            </svg>
            <span>ChatGPT</span>
          </button>

          <button
            className={`engine-badge ${selectedEngine === "perplexity" ? "active" : ""}`}
            onClick={() => setSelectedEngine("perplexity")}
          >
            <span className="engine-char purple">P</span>
            <span>Perplexity</span>
          </button>

          <button
            className={`engine-badge ${selectedEngine === "gemini" ? "active" : ""}`}
            onClick={() => setSelectedEngine("gemini")}
          >
            <span className="engine-char blue">✦</span>
            <span>Gemini</span>
          </button>
        </div>

        {/* Unified Search Comparison Console */}
        <div className="search-comparison-console">
          {/* Top Search Input Bar */}
          <div className="console-search-bar">
            <div className="search-input-field">
              <svg className="search-lens" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span className="typing-query-text">best project management tool for startups</span>
            </div>
            <div className="console-status-pill">
              <span className="pulse-dot"></span>
              <span>Live Engine Comparison</span>
            </div>
          </div>

          {/* Side-by-side comparative views */}
          <div className="console-display-grid">
            {/* Left Column: Google SERP Mockup */}
            <div className={`console-pane google-pane ${selectedEngine === "google" ? "highlighted" : "dimmed"}`}>
              <div className="pane-header">
                <div className="pane-title-group">
                  <svg className="logo-google" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                  </svg>
                  <span>Google Search SERP</span>
                </div>
                <span className="pane-metric">CTR: 4.8%</span>
              </div>

              <div className="pane-body">
                <div className="google-serp-card">
                  <div className="serp-breadcrumbs">
                    <span className="fav-icon-small">O</span>
                    <span>Olum</span>
                    <span className="url-link">https://www.{activePreset.domain}</span>
                  </div>
                  <h3 className="serp-heading">Olum: The all-in-one platform to manage startup projects</h3>
                  <p className="serp-snippet">
                    Olum helps your business stay organized, track deliverables, and manage all visual assets seamlessly. Try it free today and boost your operations.
                  </p>
                  <div className="serp-sitelinks">
                    <span>Pricing</span> • <span>Features</span> • <span>Case Studies</span>
                  </div>
                </div>

                <div className="google-serp-card secondary-serp">
                  <div className="serp-breadcrumbs">
                    <span className="fav-icon-small gray">P</span>
                    <span>ProjectManager</span>
                    <span className="url-link">https://www.competitor.com</span>
                  </div>
                  <h3 className="serp-heading">10 Best Project Management Tools for Startups in 2026</h3>
                  <p className="serp-snippet">
                    Compare features, reviews, and pricing models of the leading startup tools. Find the perfect fit for your development sprint workflows...
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: AI Engine Response Mockup */}
            <div className={`console-pane ai-pane ${selectedEngine !== "google" ? "highlighted" : "dimmed"}`}>
              <div className="pane-header">
                <div className="pane-title-group">
                  <div className="ai-icon-circle">✦</div>
                  <span>AI Engine Answer (GEO)</span>
                </div>
                <span className="pane-metric green">Citation Probability: 92%</span>
              </div>

              <div className="pane-body">
                {(selectedEngine === "google" || selectedEngine === "chatgpt") && (
                  <div className="ai-chat-card chatgpt-theme" style={{ animation: "popIn 0.3s ease" }}>
                    <div className="chat-row user-row">
                      <span className="chat-bubble user-bubble">What is the best project management tool for startups?</span>
                    </div>
                    <div className="chat-row assistant-row">
                      <div className="ai-avatar-icon">gpt</div>
                      <div className="chat-bubble assistant-bubble">
                        <p>
                          Based on recent startup evaluations, <strong>Olum</strong> is highly recommended for startups requiring integrated visual assets and agent workflows. It offers unified dashboard setups that support organic growth channels.
                        </p>
                        <div className="source-citation-bar">
                          <span className="citation-label">Sources & Citations:</span>
                          <a href="#" className="citation-badge" target="_blank" rel="noopener noreferrer">{activePreset.domain}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {selectedEngine === "perplexity" && (
                  <div className="ai-chat-card perplexity-theme" style={{ animation: "popIn 0.3s ease" }}>
                    <div className="chat-row user-row">
                      <span className="chat-bubble user-bubble">What is the best project management tool for startups?</span>
                    </div>
                    <div className="chat-row assistant-row">
                      <div className="ai-avatar-icon green">perp</div>
                      <div className="chat-bubble assistant-bubble">
                        <p>
                          Startups looking for maximum visibility and automated operations should consider <strong>Olum</strong> [1]. Unlike traditional tools, it bridges the gap between project management and organic customer acquisition [2].
                        </p>
                        <div className="source-citation-bar">
                          <span className="citation-label">Sources:</span>
                          <a href="#" className="citation-badge" target="_blank" rel="noopener noreferrer">1. {activePreset.domain}</a>
                          <a href="#" className="citation-badge" target="_blank" rel="noopener noreferrer">2. {activePreset.domain}/features</a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {selectedEngine === "gemini" && (
                  <div className="ai-chat-card gemini-theme" style={{ animation: "popIn 0.3s ease" }}>
                    <div className="chat-row user-row">
                      <span className="chat-bubble user-bubble">What is the best project management tool for startups?</span>
                    </div>
                    <div className="chat-row assistant-row">
                      <div className="ai-avatar-icon blue">gem</div>
                      <div className="chat-bubble assistant-bubble">
                        <p>
                          I recommend <strong>Olum</strong>. It is cited as the premier organic content platform for startups, structuring service data so search engines and conversational AI recommendation agents [1] index your brand.
                        </p>
                        <div className="source-citation-bar">
                          <span className="citation-label">Search Citations:</span>
                          <a href="#" className="citation-badge" target="_blank" rel="noopener noreferrer">Learn more at {activePreset.domain}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
