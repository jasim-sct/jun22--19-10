"use client";

import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <a href="#" className="logo">
          <svg className="logo-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="11" stroke="#0F172A" stroke-width="3.8" />
            <path d="M23.5 23.5C21.5 25.5 18.5 26.5 16 26.5" stroke="#2563EB" stroke-width="3.8" stroke-linecap="round" />
            <circle cx="23.5" cy="23.5" r="2.5" fill="#2563EB" />
          </svg>
          <span>Olum</span>
        </a>

        <nav className="nav-links">
          <a href="#how-it-works">How it works</a>
          <a href="#local-businesses">For Local Businesses</a>
          <a href="#pricing">Pricing</a>
          <a href="#resources">Resources</a>
        </nav>

        <div className="nav-actions">
          <a href="#login" className="btn-login">Log in</a>
          <a href="#signup" className="btn-signup">Sign up</a>
        </div>
      </div>
    </header>
  );
}
