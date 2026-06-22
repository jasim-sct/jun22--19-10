"use client";

import React, { useEffect, useState } from "react";

interface AnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  domain: string;
  onViewPlan: () => void;
}

export default function AnalysisModal({
  isOpen,
  onClose,
  domain,
  onViewPlan,
}: AnalysisModalProps) {
  const [stepStates, setStepStates] = useState<("idle" | "active" | "completed")[]>([
    "idle",
    "idle",
    "idle",
    "idle",
  ]);
  const [isCtaEnabled, setIsCtaEnabled] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setStepStates(["idle", "idle", "idle", "idle"]);
      setIsCtaEnabled(false);
      return;
    }

    // Modal is opened: run stepper simulation
    setStepStates(["active", "idle", "idle", "idle"]);
    setIsCtaEnabled(false);

    let t1 = setTimeout(() => {
      setStepStates(["completed", "active", "idle", "idle"]);
    }, 1200);

    let t2 = setTimeout(() => {
      setStepStates(["completed", "completed", "active", "idle"]);
    }, 2600);

    let t3 = setTimeout(() => {
      setStepStates(["completed", "completed", "completed", "active"]);
    }, 3900);

    let t4 = setTimeout(() => {
      setStepStates(["completed", "completed", "completed", "completed"]);
      setIsCtaEnabled(true);
    }, 5200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="analysis-modal active" id="analysis-modal">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} id="modal-close-btn">
          &times;
        </button>

        <div className="modal-header-section">
          <div className="radar-box">
            <div className="radar-circle circle-1"></div>
            <div className="radar-circle circle-2"></div>
            <div className="radar-circle circle-3"></div>
            <svg className="radar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
          </div>
          <h3 className="modal-title">
            Analyzing <span className="highlight-blue">{domain}</span>
          </h3>
          <p className="modal-subtitle">Olum's autonomous AI agents are scanning and planning visibility strategies...</p>
        </div>

        <div className="progress-steps">
          {/* Step 1 */}
          <div
            className={`p-step ${stepStates[0] === "active" ? "active" : ""} ${
              stepStates[0] === "completed" ? "completed" : ""
            }`}
          >
            <div className="p-spinner"></div>
            <div className="p-check">✓</div>
            <span className="p-text">Crawling pages & identifying value propositions</span>
          </div>

          {/* Step 2 */}
          <div
            className={`p-step ${stepStates[1] === "active" ? "active" : ""} ${
              stepStates[1] === "completed" ? "completed" : ""
            }`}
          >
            <div className="p-spinner"></div>
            <div className="p-check">✓</div>
            <span className="p-text">Analyzing Google & AI search demand patterns</span>
          </div>

          {/* Step 3 */}
          <div
            className={`p-step ${stepStates[2] === "active" ? "active" : ""} ${
              stepStates[2] === "completed" ? "completed" : ""
            }`}
          >
            <div className="p-spinner"></div>
            <div className="p-check">✓</div>
            <span className="p-text">Simulating Reddit & LinkedIn topic conversation feeds</span>
          </div>

          {/* Step 4 */}
          <div
            className={`p-step ${stepStates[3] === "active" ? "active" : ""} ${
              stepStates[3] === "completed" ? "completed" : ""
            }`}
          >
            <div className="p-spinner"></div>
            <div className="p-check">✓</div>
            <span className="p-text">Compiling custom SEO & GEO visibility recommendation matrix</span>
          </div>
        </div>

        <div className="modal-footer-action">
          <button
            className="btn-primary-modal"
            disabled={!isCtaEnabled}
            onClick={onViewPlan}
            id="modal-cta-btn"
          >
            {isCtaEnabled ? "View Generated Plan" : "Analyzing..."}
          </button>
        </div>
      </div>
    </div>
  );
}
