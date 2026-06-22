import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-bottom-container">
        <div className="footer-logo">
          <svg className="logo-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="11" stroke="#0F172A" stroke-width="3.8" />
            <path d="M23.5 23.5C21.5 25.5 18.5 26.5 16 26.5" stroke="#2563EB" stroke-width="3.8" stroke-linecap="round" />
            <circle cx="23.5" cy="23.5" r="2.5" fill="#2563EB" />
          </svg>
          <span>Olum</span>
        </div>
        <p className="copyright-text">© 2026 Olum Inc. All rights reserved. Designed with ultimate precision.</p>
      </div>
    </footer>
  );
}
