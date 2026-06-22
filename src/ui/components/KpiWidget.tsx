"use client";

import React from "react";
import { Preset } from "./types";
import { AnimatedCount } from "./AssetsSection";

interface KpiWidgetProps {
  activePreset: Preset;
}

export default function KpiWidget({ activePreset }: KpiWidgetProps) {
  // Calculations based on the active preset
  const postsPerWeek = Math.max(2, Math.round(activePreset.total / 4));
  const keywordCoverage = activePreset.seo * 18;
  const hoursSaved = activePreset.total * 2; // e.g. 2 hours per asset

  return (
    <section className="kpi-section" id="kpi-dashboard">
      <div className="section-container compact-kpi">
        <span className="section-tag center">VALUE PROJECTION</span>
        <h2 className="section-title center compact-title">Executive Value Summary</h2>
        <p className="section-desc center text-center-kpi">
          Estimated monthly value projection for <span className="highlight-kpi">{activePreset.domain}</span> based on autonomous agent workflows.
        </p>

        <div className="kpi-grid">
          {/* KPI Card 1 */}
          <div className="kpi-card">
            <div className="kpi-icon-wrapper blue-glow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </div>
            <div className="kpi-info-box">
              <span className="kpi-label">Content Asset Yield</span>
              <div className="kpi-value-wrapper">
                <span className="kpi-value">
                  <AnimatedCount value={postsPerWeek} />
                </span>
                <span className="kpi-unit">posts / wk</span>
              </div>
              <p className="kpi-desc">Consistent automated publishing across blogs, SEO channels, and social networks.</p>
            </div>
          </div>

          {/* KPI Card 2 */}
          <div className="kpi-card">
            <div className="kpi-icon-wrapper emerald-glow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" />
                <path d="m16 10-4 4-2-2" />
              </svg>
            </div>
            <div className="kpi-info-box">
              <span className="kpi-label">Footprint Expansion</span>
              <div className="kpi-value-wrapper">
                <span className="kpi-value">
                  +<AnimatedCount value={keywordCoverage} />
                </span>
                <span className="kpi-unit">topics</span>
              </div>
              <p className="kpi-desc">New search intent pages and generative citation targets covered and optimized.</p>
            </div>
          </div>

          {/* KPI Card 3 */}
          <div className="kpi-card">
            <div className="kpi-icon-wrapper amber-glow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div className="kpi-info-box">
              <span className="kpi-label">Executive Time Saved</span>
              <div className="kpi-value-wrapper">
                <span className="kpi-value">
                  <AnimatedCount value={hoursSaved} />
                </span>
                <span className="kpi-unit">hrs / mo</span>
              </div>
              <p className="kpi-desc">Hours reclaimed from copywriting, content formatting, and review answering tasks.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
