"use client";

import React, { useEffect, useState } from "react";
import { Preset } from "./types";

interface AssetsSectionProps {
  activePreset: Preset;
}

interface AnimatedCountProps {
  value: number;
}

export function AnimatedCount({ value }: AnimatedCountProps) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    let current = displayValue;
    const target = value;
    if (current === target) return;

    const duration = 800; // ms
    const startTime = performance.now();
    const startValue = current;

    let animationFrameId: number;

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      if (elapsed >= duration) {
        setDisplayValue(target);
        return;
      }
      const progress = elapsed / duration;
      const easeProgress = progress * (2 - progress); // Ease out quad
      const nextValue = Math.round(startValue + (target - startValue) * easeProgress);
      setDisplayValue(nextValue);
      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameId);
  }, [value]);

  return <>{displayValue}</>;
}

export default function AssetsSection({ activePreset }: AssetsSectionProps) {
  return (
    <section className="assets-section">
      <div className="section-container grid-2">
        {/* Left Info */}
        <div className="assets-info">
          <span className="section-tag">WHAT OLUM CREATES</span>
          <h2 className="section-title">From your domain to ready-to-review growth assets</h2>
          <p className="section-desc">Olum's AI agents can create:</p>

          <ul className="features-list">
            <li>
              <div className="icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <circle cx="10" cy="13" r="2" />
                  <path d="m20 17-1.45-1.45" />
                </svg>
              </div>
              <span>
                <strong>SEO pages</strong> based on real customer searches
              </span>
            </li>
            <li>
              <div className="icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <span>
                <strong>Blog articles</strong> based on buyer questions
              </span>
            </li>
            <li>
              <div className="icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <span>
                <strong>Linkedin and Instagram posts</strong> based on market signals
              </span>
            </li>
            <li>
              <div className="icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <span>
                <strong>Reddit and Quora replies</strong> based on real conversations
              </span>
            </li>
            <li>
              <div className="icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <span>
                <strong>Website FAQs and page updates</strong> based on missing content
              </span>
            </li>
            <li>
              <div className="icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <span>
                <strong>GEO-ready content</strong> to help AI tools understand your business
              </span>
            </li>
          </ul>
        </div>

        {/* Right Output Card */}
        <div className="assets-card-wrapper">
          <div className="output-card">
            <div className="card-header">
              <span className="card-header-title">
                Sample output for{" "}
                <span id="current-domain-display" className="highlight-domain">
                  {activePreset.domain}
                </span>
              </span>
            </div>

            <div className="output-list">
              <div className="output-row">
                <div className="row-label">
                  <svg className="row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  <span>SEO Pages</span>
                </div>
                <span className="count-badge">
                  <AnimatedCount value={activePreset.seo} />
                </span>
              </div>

              <div className="output-row">
                <div className="row-label">
                  <svg className="row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                  <span>Blog Articles</span>
                </div>
                <span className="count-badge">
                  <AnimatedCount value={activePreset.blog} />
                </span>
              </div>

              <div className="output-row">
                <div className="row-label">
                  <svg className="row-icon icon-linkedin" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>LinkedIn Posts</span>
                </div>
                <span className="count-badge">
                  <AnimatedCount value={activePreset.linkedin} />
                </span>
              </div>

              <div className="output-row">
                <div className="row-label">
                  <svg className="row-icon icon-instagram" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span>Instagram Posts</span>
                </div>
                <span className="count-badge">
                  <AnimatedCount value={activePreset.instagram} />
                </span>
              </div>

              <div className="output-row">
                <div className="row-label">
                  <svg className="row-icon icon-reddit" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.85-1.64-6.29-1.72l1.37-4.31 3.79.8c.09 1.07.98 1.93 2.07 1.93 1.15 0 2.1-1 2.1-2.1s-.95-2.1-2.1-2.1c-1.05 0-1.92.77-2.06 1.78l-4.1-.87c-.28-.06-.56.12-.63.4l-1.64 5.17c-2.49.07-4.75.72-6.42 1.73-.55-.74-1.44-1.19-2.38-1.19-1.65 0-3 1.35-3 3 0 1.1.6 2.06 1.5 2.58-.08.41-.12.84-.12 1.27 0 4.14 4.83 7.5 10.78 7.5 5.95 0 10.78-3.36 10.78-7.5 0-.43-.04-.85-.11-1.26.89-.52 1.49-1.47 1.49-2.58zm-18.9 2.1c0-1.05.85-1.9 1.9-1.9s1.9.85 1.9 1.9c0 1.05-.85 1.9-1.9 1.9s-1.9-.85-1.9-1.9zm10.9 4.2c-1.68 1.68-4.88 1.68-6.56 0-.2-.2-.2-.51 0-.71.2-.2.51-.2.71 0 1.29 1.29 3.86 1.29 5.14 0 .2-.2.51-.2.71 0 .2.2.2.51 0 .71zm-.6-2.3c-1.05 0-1.9-.85-1.9-1.9 0-1.05.85-1.9 1.9-1.9s1.9.85 1.9 1.9c0 1.05-.85 1.9-1.9 1.9z" />
                  </svg>
                  <span>Reddit / Quora Replies</span>
                </div>
                <span className="count-badge">
                  <AnimatedCount value={activePreset.replies} />
                </span>
              </div>

              <div className="output-row">
                <div className="row-label">
                  <svg className="row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  <span>Website FAQs</span>
                </div>
                <span className="count-badge">
                  <AnimatedCount value={activePreset.faqs} />
                </span>
              </div>

              <div className="output-row">
                <div className="row-label">
                  <svg className="row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                  </svg>
                  <span>Website Updates</span>
                </div>
                <span className="count-badge">
                  <AnimatedCount value={activePreset.updates} />
                </span>
              </div>
            </div>

            <div className="card-footer">
              <span className="footer-label">Total assets created this week</span>
              <span className="total-badge" id="total-assets-count">
                <AnimatedCount value={activePreset.total} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
