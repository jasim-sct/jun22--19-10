"use client";

import React, { useState } from "react";
import { Preset } from "./types";

interface LocalSectionProps {
  activePreset: Preset;
}

export default function LocalSection({ activePreset }: LocalSectionProps) {
  const [isMapDetailsVisible, setIsMapDetailsVisible] = useState(true);

  return (
    <section className="local-section" id="local-businesses">
      <div className="section-container">
        <div className="local-card-banner">
          {/* Left Side Content */}
          <div className="local-info">
            <div className="local-badge-title">
              <div className="pin-icon-box">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <span className="local-tag">OLUM LOCAL</span>
            </div>

            <h2 className="local-title">For local businesses</h2>
            <p className="local-desc">
              Improve Google Maps rankings, local search visibility, reviews, and location-based content.
            </p>

            <ul className="local-bullets">
              <li>
                <div className="bullet-check-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>Google Business Profile posts</span>
              </li>
              <li>
                <div className="bullet-check-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>Local FAQs</span>
              </li>
              <li>
                <div className="bullet-check-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>Review replies</span>
              </li>
              <li>
                <div className="bullet-check-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>Semi-local page copy</span>
              </li>
              <li>
                <div className="bullet-check-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>Service replies</span>
              </li>
            </ul>
          </div>

          {/* Middle Column: Map Widget */}
          <div className="map-card" style={{ cursor: !isMapDetailsVisible ? "pointer" : "default" }} onClick={() => !isMapDetailsVisible && setIsMapDetailsVisible(true)}>
            {/* Premium Map Background SVG */}
            <div className="map-bg">
              <svg viewBox="0 0 300 400" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={{ backgroundColor: "#E8ECE9" }}>
                {/* Green Parks */}
                <path d="M 0,0 C 60,30 80,100 50,150 C 30,180 10,220 0,250 Z" fill="#D2E7D6" />
                <path d="M 220,50 C 270,40 300,100 300,150 L 300,0 Z" fill="#D2E7D6" />
                <path d="M 120,280 C 180,260 220,320 200,380 C 180,400 130,400 120,380 Z" fill="#D2E7D6" />

                {/* Streets */}
                <path d="M -10,180 C 100,160 200,240 310,210" stroke="#FFFFFF" strokeWidth="12" fill="none" />
                <path d="M -10,180 C 100,160 200,240 310,210" stroke="#FBD38D" strokeWidth="4" fill="none" />

                <path d="M 80,-10 L 100,410" stroke="#FFFFFF" strokeWidth="8" fill="none" />
                <path d="M 220,-10 L 190,410" stroke="#FFFFFF" strokeWidth="8" fill="none" />
                <path d="M -10,80 L 310,100" stroke="#FFFFFF" strokeWidth="6" fill="none" />
                <path d="M -10,300 L 310,320" stroke="#FFFFFF" strokeWidth="6" fill="none" />

                {/* Blue pulse halo and core */}
                <g transform="translate(150, 160)">
                  <circle cx="0" cy="0" r="16" fill="rgba(37, 99, 235, 0.15)" />
                  <circle cx="0" cy="0" r="8" fill="#FFFFFF" />
                  <circle cx="0" cy="0" r="6" fill="#2563EB" />
                </g>

                {/* Red pin marker */}
                <g transform="translate(220, 120)">
                  <path d="M 0,0 C -4,-4 -6,-9 -6,-13 C -6,-19.6 0,-24 0,-24 C 0,-24 6,-19.6 6,-13 C 6,-9 4,-4 0,0 Z" fill="#EF4444" />
                  <circle cx="0" cy="-13" r="2.5" fill="#FFFFFF" />
                </g>

                {/* Green pin marker */}
                <g transform="translate(70, 260)">
                  <path d="M 0,0 C -4,-4 -6,-9 -6,-13 C -6,-19.6 0,-24 0,-24 C 0,-24 6,-19.6 6,-13 C 6,-9 4,-4 0,0 Z" fill="#10B981" />
                  <circle cx="0" cy="-13" r="2.5" fill="#FFFFFF" />
                </g>
              </svg>
            </div>

            {/* Floating Details Card */}
            {isMapDetailsVisible && (
              <div className="map-details-floating">
                <div className="map-details-header">
                  <span className="map-business-name" id="local-business-name">
                    {activePreset.name}
                  </span>
                  <button className="map-close-btn" onClick={(e) => {
                    e.stopPropagation();
                    setIsMapDetailsVisible(false);
                  }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="map-rating">
                  <span className="rating-num">4.8</span>
                  <div className="stars">
                    <span className="star-fill">★</span>
                    <span className="star-fill">★</span>
                    <span className="star-fill">★</span>
                    <span className="star-fill">★</span>
                    <span className="star-fill">★</span>
                  </div>
                  <span className="review-count">(215)</span>
                </div>

                <span className="map-type" id="local-business-type">
                  {activePreset.type}
                </span>

                <div className="map-actions">
                  <span className="map-dist">12 mins away</span>
                  <button className="btn-directions">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.43 10.43l-8.86-8.86a2.007 2.007 0 0 0-2.83 0L1.88 10.43a2.007 2.007 0 0 0 0 2.83l8.86 8.86c.78.78 2.05.78 2.83 0l8.86-8.86c.78-.78.78-2.05 0-2.83zM14 13h-4v3H8v-5h6V9l4 4-4 4v-4z" />
                    </svg>
                    <span>Directions</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Actions Card */}
          <div className="actions-card">
            <span className="actions-title">This week's local actions</span>

            <div className="actions-list">
              <label className="action-item">
                <input type="checkbox" defaultChecked disabled />
                <span className="custom-checkbox"></span>
                <span className="action-text">Publish 1 GBP post</span>
              </label>

              <label className="action-item">
                <input type="checkbox" defaultChecked disabled />
                <span className="custom-checkbox"></span>
                <span className="action-text">Reply to 5 reviews</span>
              </label>

              <label className="action-item">
                <input type="checkbox" defaultChecked disabled />
                <span className="custom-checkbox"></span>
                <span className="action-text">Add 4 FAQs to website</span>
              </label>

              <label className="action-item">
                <input type="checkbox" defaultChecked disabled />
                <span className="custom-checkbox"></span>
                <span className="action-text">Create 2 Instagram posts</span>
              </label>

              <label className="action-item">
                <input type="checkbox" defaultChecked disabled />
                <span className="custom-checkbox"></span>
                <span className="action-text">Add missing services</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
