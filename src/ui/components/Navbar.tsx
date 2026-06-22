"use client";

import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll Spy logic
      const sections = ["how-it-works", "local-businesses", "pricing", "resources"];
      let currentSection = "#";
      
      const scrollPosition = window.scrollY + 250; // offset for nav height and margin
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = `#${sectionId}`;
            break;
          }
        }
      }
      setActiveTab(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <a href="#" className="logo" onClick={() => setActiveTab("#")}>
          <svg className="logo-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="11" stroke="#0F172A" stroke-width="3.8" />
            <path d="M23.5 23.5C21.5 25.5 18.5 26.5 16 26.5" stroke="#2563EB" stroke-width="3.8" stroke-linecap="round" />
            <circle cx="23.5" cy="23.5" r="2.5" fill="#2563EB" />
          </svg>
          <span>Olum</span>
        </a>

        <nav className="nav-links">
          <a href="#how-it-works" className={activeTab === "#how-it-works" ? "active" : ""}>How it works</a>
          <a href="#local-businesses" className={activeTab === "#local-businesses" ? "active" : ""}>For Local Businesses</a>
          <a href="#pricing" className={activeTab === "#pricing" ? "active" : ""}>Pricing</a>
          <a href="#resources" className={activeTab === "#resources" ? "active" : ""}>Resources</a>
        </nav>

        <div className="nav-actions">
          <a href="#login" className="btn-login">Log in</a>
          <a href="#signup" className="btn-signup">Sign up</a>
        </div>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <div className="mobile-bottom-nav">
        <a href="#" className={`mobile-nav-item ${activeTab === "#" ? "active" : ""}`} onClick={() => setActiveTab("#")}>
          <svg className="mobile-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span>Home</span>
        </a>
        <a href="#how-it-works" className={`mobile-nav-item ${activeTab === "#how-it-works" ? "active" : ""}`}>
          <svg className="mobile-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
          <span>Process</span>
        </a>
        <a href="#local-businesses" className={`mobile-nav-item ${activeTab === "#local-businesses" ? "active" : ""}`}>
          <svg className="mobile-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>Local</span>
        </a>
        <a href="#pricing" className={`mobile-nav-item ${activeTab === "#pricing" ? "active" : ""}`}>
          <svg className="mobile-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <line x1="2" y1="10" x2="22" y2="10" />
          </svg>
          <span>Pricing</span>
        </a>
        <a href="#resources" className={`mobile-nav-item ${activeTab === "#resources" ? "active" : ""}`}>
          <svg className="mobile-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <span>FAQ</span>
        </a>
      </div>
    </header>
  );
}
