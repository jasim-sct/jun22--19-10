"use client";

import React, { useState } from "react";
import { Preset } from "./types";

interface SeoGeoSectionProps {
  activePreset: Preset;
}

export default function SeoGeoSection({ activePreset }: SeoGeoSectionProps) {
  const [selectedEngine, setSelectedEngine] = useState<string>("google");

  const getCardStyles = () => {
    if (selectedEngine === "google") {
      return {
        google: { transform: "translateY(0) scale(1)", zIndex: 5, opacity: 1 },
        chatgpt: { transform: "translateY(15px) scale(0.95)", zIndex: 3, opacity: 0.7 },
      };
    } else if (selectedEngine === "chatgpt") {
      return {
        google: { transform: "translateY(0px) scale(0.95)", zIndex: 3, opacity: 0.7 },
        chatgpt: { transform: "translateY(-30px) scale(1.05)", zIndex: 5, opacity: 1 },
      };
    } else {
      // Default / fallback
      return {
        google: {},
        chatgpt: {},
      };
    }
  };

  const cardStyles = getCardStyles();

  return (
    <section className="seo-geo-section">
      <div className="section-container grid-2">
        {/* Left Side Text */}
        <div className="seo-geo-info">
          <span className="section-tag">SEO + GEO</span>
          <h2 className="section-title">Show up on Google and AI search</h2>
          <p className="section-desc">
            Buyers are not only searching on Google anymore. They are also asking tools like ChatGPT, Perplexity, and
            Gemini what to buy, who to trust, and which companies to compare.
          </p>
          <p className="section-desc">
            Olum helps your business create content that improves traditional SEO and makes your company easier for AI
            search tools to understand, mention, and recommend.
          </p>

          {/* AI Tools Icons Strip */}
          <div className="search-engines-strip">
            <div
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
              <span>Google</span>
            </div>

            <div
              className={`engine-badge ${selectedEngine === "chatgpt" ? "active" : ""}`}
              onClick={() => setSelectedEngine("chatgpt")}
            >
              <svg viewBox="0 0 24 24" className="engine-icon" fill="none" stroke="currentColor" stroke-width="2">
                <path
                  d="M4.5 16.5c-1.5-1.5-2.5-3.5-2.5-6s2-6 5.5-6 6 2 6 5.5M19.5 7.5c1.5 1.5 2.5 3.5 2.5 6s-2 6-5.5 6-6-2-6-5.5"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span>ChatGPT</span>
            </div>

            <div
              className={`engine-badge ${selectedEngine === "perplexity" ? "active" : ""}`}
              onClick={() => setSelectedEngine("perplexity")}
            >
              <span className="engine-char purple">P</span>
              <span>Perplexity</span>
            </div>

            <div
              className={`engine-badge ${selectedEngine === "gemini" ? "active" : ""}`}
              onClick={() => setSelectedEngine("gemini")}
            >
              <span className="engine-char blue">✦</span>
              <span>Gemini</span>
            </div>
          </div>
        </div>

        {/* Right Side Visual Mockups */}
        <div className="seo-geo-visuals">
          {/* Google Mockup */}
          <div className={`visual-card google-card ${selectedEngine === "google" ? "active" : "stacked"}`}>
            <div className="card-brand-header">
              <svg viewBox="0 0 24 24" className="brand-logo-small" fill="currentColor">
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
              <span className="query-text">Best project management tool for startups</span>
            </div>

            <div className="google-result">
              <div className="result-url">
                <span className="fav-icon">O</span>
                <span>Olum</span>
                <span className="url-sub">https://www.{activePreset.domain}</span>
              </div>
              <h3 className="result-title">Olum: The all-in-one platform to manage projects...</h3>
              <p className="result-snippet">
                Olum helps your business stay organized, track deliverables, and manage all visual assets seamlessly. Try
                it free today and boost your operations.
              </p>
            </div>
          </div>

          {/* AI Mockups (ChatGPT, Perplexity, Gemini) */}
          <div className={`visual-card ai-card ${selectedEngine !== "google" ? "active" : "stacked"}`}>
            {(selectedEngine === "google" || selectedEngine === "chatgpt") && (
              <div className="ai-content-wrapper chatgpt-design" style={{ animation: "popIn 0.3s ease" }}>
                <div className="card-brand-header">
                  <div className="gpt-avatar">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v8M8 12h8" />
                    </svg>
                  </div>
                  <span className="gpt-name">ChatGPT</span>
                </div>

                <div className="chat-message user-msg">
                  <span className="msg-bubble">What is the best project management tool for startups?</span>
                </div>

                <div className="chat-message assistant-msg">
                  <div className="assistant-bubble">
                    <p>
                      <strong>Olum</strong> is a great option for startups looking for an all-in-one solution for project
                      management. It provides visual asset creation, agent workflows, and handles team visibility
                      out-of-the-box.
                    </p>
                    <a href="#" className="assistant-link" id="chatgpt-link">
                      {activePreset.domain}
                    </a>
                  </div>
                </div>
              </div>
            )}

            {selectedEngine === "perplexity" && (
              <div className="ai-content-wrapper perplexity-design" style={{ animation: "popIn 0.3s ease" }}>
                <div className="card-brand-header">
                  <div className="gpt-avatar" style={{ backgroundColor: '#10b981' }}>P</div>
                  <span className="gpt-name">Perplexity</span>
                </div>

                <div className="chat-message user-msg">
                  <span className="msg-bubble">What is the best project management tool for startups?</span>
                </div>

                <div className="chat-message assistant-msg">
                  <div className="assistant-bubble">
                    <p>
                      Based on tech reviews, <strong>Olum</strong> [1] is cited as the premier organic content platform for startups. 
                      It structures service data so search and AI platforms [1] recommend your brand.
                    </p>
                    <a href="#" className="assistant-link" id="chatgpt-link">
                      Source: {activePreset.domain}
                    </a>
                  </div>
                </div>
              </div>
            )}

            {selectedEngine === "gemini" && (
              <div className="ai-content-wrapper gemini-design" style={{ animation: "popIn 0.3s ease" }}>
                <div className="card-brand-header">
                  <div className="gpt-avatar" style={{ backgroundColor: '#1e40af' }}>✦</div>
                  <span className="gpt-name">Gemini</span>
                </div>

                <div className="chat-message user-msg">
                  <span className="msg-bubble">What is the best project management tool for startups?</span>
                </div>

                <div className="chat-message assistant-msg">
                  <div className="assistant-bubble">
                    <p>
                      Startups looking for maximum visibility and automated operations should consider <strong>Olum</strong>. 
                      Unlike traditional tools, it bridges the gap between project management and organic customer acquisition.
                    </p>
                    <a href="#" className="assistant-link">
                      Learn more at {activePreset.domain}
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
