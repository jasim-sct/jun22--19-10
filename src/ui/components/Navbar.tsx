"use client";

import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("#");
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  // Prevent scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""} ${sidebarOpen ? "sidebar-active" : ""}`}>
        <div className="nav-container">
          <a href="#" className="logo" onClick={() => { setActiveTab("#"); setSidebarOpen(false); }}>
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

          {/* Hamburger Menu Button */}
          <button 
            className={`hamburger-menu ${sidebarOpen ? "open" : ""}`}
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle Menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </header>

      {/* Sidebar Backdrop Overlay */}
      <div 
        className={`sidebar-backdrop ${sidebarOpen ? "show" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Content-sized Mobile Sidebar Menu */}
      <div className={`mobile-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <a href="#" className="logo" onClick={() => { setActiveTab("#"); setSidebarOpen(false); }}>
            <svg className="logo-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="11" stroke="#0F172A" stroke-width="3.8" />
              <path d="M23.5 23.5C21.5 25.5 18.5 26.5 16 26.5" stroke="#2563EB" stroke-width="3.8" stroke-linecap="round" />
              <circle cx="23.5" cy="23.5" r="2.5" fill="#2563EB" />
            </svg>
            <span>Olum</span>
          </a>
          <button 
            className="sidebar-close" 
            onClick={() => setSidebarOpen(false)}
            aria-label="Close Menu"
          >
            &times;
          </button>
        </div>

        <nav className="sidebar-links">
          <a 
            href="#how-it-works" 
            className={activeTab === "#how-it-works" ? "active" : ""}
            onClick={() => setSidebarOpen(false)}
          >
            How it works
          </a>
          <a 
            href="#local-businesses" 
            className={activeTab === "#local-businesses" ? "active" : ""}
            onClick={() => setSidebarOpen(false)}
          >
            For Local Businesses
          </a>
          <a 
            href="#pricing" 
            className={activeTab === "#pricing" ? "active" : ""}
            onClick={() => setSidebarOpen(false)}
          >
            Pricing
          </a>
          <a 
            href="#resources" 
            className={activeTab === "#resources" ? "active" : ""}
            onClick={() => setSidebarOpen(false)}
          >
            Resources
          </a>
        </nav>

        <div className="sidebar-actions">
          <a href="#login" className="btn-login" onClick={() => setSidebarOpen(false)}>Log in</a>
          <a href="#signup" className="btn-signup" onClick={() => setSidebarOpen(false)}>Sign up</a>
        </div>
      </div>
    </>
  );
}
