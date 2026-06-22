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
  const [hoveredAsset, setHoveredAsset] = useState<string | null>(null);

  const renderPreviewContent = () => {
    switch (hoveredAsset) {
      case "seo":
        return (
          <div className="preview-content seo-preview">
            <span className="preview-badge-tag">SEO PAGE MOCKUP</span>
            <div className="google-serp">
              <span className="serp-url">https://{activePreset.domain || "yourbusiness.com"} › solutions</span>
              <h4 className="serp-title">Top Local Growth & Optimization Solutions</h4>
              <p className="serp-desc">Discover the ultimate guide on scaling operations. Read expert answers on marketing automation and search footprints tailored for {activePreset.name || "your business"}.</p>
            </div>
            <div className="preview-metrics">
              <div className="metric">
                <span className="m-val">98/100</span>
                <span className="m-lbl">SEO Score</span>
              </div>
              <div className="metric">
                <span className="m-val">+2.4k</span>
                <span className="m-lbl">Monthly Clicks</span>
              </div>
            </div>
          </div>
        );
      case "blog":
        return (
          <div className="preview-content blog-preview">
            <span className="preview-badge-tag">BLOG ARTICLE PREVIEW</span>
            <h4 className="blog-title">How organic visibility beats paid spend</h4>
            <span className="blog-meta">4 min read · Created by Olum AI Agent</span>
            <p className="blog-body">Traditional local ads are getting more expensive. In this breakdown, we show how organic citation and generative local search indexing outperformed paid campaigns by 240%...</p>
          </div>
        );
      case "linkedin":
        return (
          <div className="preview-content social-preview linkedin">
            <span className="preview-badge-tag">LINKEDIN POST DRAFT</span>
            <div className="social-header">
              <div className="avatar"></div>
              <div className="meta">
                <span className="name">{activePreset.name || "Your Business"}</span>
                <span className="sub">1d · Edited · 🌐</span>
              </div>
            </div>
            <p className="social-text">🚀 Real local search visibility isn't about bidding on keywords anymore. It is about answering real questions where they occur. We just published our complete handbook on organic growth...</p>
            <div className="social-stats">👍 14 Likes · 2 Comments</div>
          </div>
        );
      case "instagram":
        return (
          <div className="preview-content social-preview instagram">
            <span className="preview-badge-tag">INSTAGRAM SLIDE DRAFT</span>
            <div className="insta-visual-box">
              <span className="insta-text">HOW TO GROW LOCAL VISIBILITY</span>
            </div>
            <p className="social-text"><b>{activePreset.name ? activePreset.name.replace(/\s+/g, "").toLowerCase() : "yourbusiness"}</b> Organic citations & local GEO placements are changing the search game. Slide to see our 3 steps! 👉 #growth #marketing #localbiz</p>
          </div>
        );
      case "replies":
        return (
          <div className="preview-content replies-preview">
            <span className="preview-badge-tag">FORUM ANSWER SUGGESTION</span>
            <div className="forum-post">
              <span className="forum-author">r/Austin · Posted by u/marketing_head</span>
              <p className="forum-body">“Any local agencies recommendations for SEO & content strategy in Austin? Need someone who actually knows the area.”</p>
            </div>
            <div className="forum-reply">
              <div className="avatar">O</div>
              <div className="reply-body">
                <p>Hey! If you want a data-first approach, look into {activePreset.name || "your business"}. They handle organic search and local citation automation dynamically. Worth checking their presets.</p>
              </div>
            </div>
          </div>
        );
      case "faqs":
        return (
          <div className="preview-content faqs-preview">
            <span className="preview-badge-tag">SCHEMA FAQ SCHEMA</span>
            <div className="faq-box">
              <span className="q">Q: What local areas do you serve?</span>
              <p className="a">A: We serve the entire metro area, specializing in clinic and retail visibility across downtown and local business hubs.</p>
            </div>
            <div className="faq-box">
              <span className="q">Q: How can we request a custom quote?</span>
              <p className="a">A: Get in touch via our website domain scanner or book a direct dashboard consultation.</p>
            </div>
          </div>
        );
      case "updates":
        return (
          <div className="preview-content updates-preview">
            <span className="preview-badge-tag">HOMEPAGE HERO UPDATE</span>
            <div className="banner-alert">
              <span className="badge">UPDATE</span>
              <span className="msg">Check our live local visibility score tool now open for all local clients.</span>
            </div>
            <p className="desc-text">This dynamic update has been draft-optimized for high CTR on your homepage hero section.</p>
          </div>
        );
      default:
        return null;
    }
  };

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

        {/* Right Output Card with Desktop Slide-out Preview Panel */}
        <div className={`assets-card-wrapper ${hoveredAsset ? "has-preview" : ""}`}>
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
              <div 
                className={`output-row ${hoveredAsset === "seo" ? "hovered" : ""}`}
                onMouseEnter={() => setHoveredAsset("seo")}
                onMouseLeave={() => setHoveredAsset(null)}
                onFocus={() => setHoveredAsset("seo")}
                onBlur={() => setHoveredAsset(null)}
                tabIndex={0}
              >
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

              <div 
                className={`output-row ${hoveredAsset === "blog" ? "hovered" : ""}`}
                onMouseEnter={() => setHoveredAsset("blog")}
                onMouseLeave={() => setHoveredAsset(null)}
                onFocus={() => setHoveredAsset("blog")}
                onBlur={() => setHoveredAsset(null)}
                tabIndex={0}
              >
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

              <div 
                className={`output-row ${hoveredAsset === "linkedin" ? "hovered" : ""}`}
                onMouseEnter={() => setHoveredAsset("linkedin")}
                onMouseLeave={() => setHoveredAsset(null)}
                onFocus={() => setHoveredAsset("linkedin")}
                onBlur={() => setHoveredAsset(null)}
                tabIndex={0}
              >
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

              <div 
                className={`output-row ${hoveredAsset === "instagram" ? "hovered" : ""}`}
                onMouseEnter={() => setHoveredAsset("instagram")}
                onMouseLeave={() => setHoveredAsset(null)}
                onFocus={() => setHoveredAsset("instagram")}
                onBlur={() => setHoveredAsset(null)}
                tabIndex={0}
              >
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

              <div 
                className={`output-row ${hoveredAsset === "replies" ? "hovered" : ""}`}
                onMouseEnter={() => setHoveredAsset("replies")}
                onMouseLeave={() => setHoveredAsset(null)}
                onFocus={() => setHoveredAsset("replies")}
                onBlur={() => setHoveredAsset(null)}
                tabIndex={0}
              >
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

              <div 
                className={`output-row ${hoveredAsset === "faqs" ? "hovered" : ""}`}
                onMouseEnter={() => setHoveredAsset("faqs")}
                onMouseLeave={() => setHoveredAsset(null)}
                onFocus={() => setHoveredAsset("faqs")}
                onBlur={() => setHoveredAsset(null)}
                tabIndex={0}
              >
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

              <div 
                className={`output-row ${hoveredAsset === "updates" ? "hovered" : ""}`}
                onMouseEnter={() => setHoveredAsset("updates")}
                onMouseLeave={() => setHoveredAsset(null)}
                onFocus={() => setHoveredAsset("updates")}
                onBlur={() => setHoveredAsset(null)}
                tabIndex={0}
              >
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

          {/* Desktop Preview Panel */}
          <div className={`asset-live-preview-card ${hoveredAsset ? "visible" : ""}`}>
            <div className="preview-card-inner">
              {renderPreviewContent() || (
                <div className="preview-empty-state">
                  <svg className="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <p>Hover over any asset row to preview generated content live</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
