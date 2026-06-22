"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function Faq() {
  const faqs: FaqItem[] = [
    {
      question: "How does Olum gather search data?",
      answer: "Olum's AI agents query search APIs in real-time, monitor social conversation feeds (like Reddit and Quora), and scan competitor content pages. This highlights exact topics your buyers care about that you haven't written about yet.",
    },
    {
      question: "Will the AI content get flagged by search engines?",
      answer: "No. Olum does not publish blindly. It creates highly tailored drafts based on structural intent and your specified brand voice. You have full edit, reject, and approval control before anything goes live.",
    },
    {
      question: "What is GEO (Generative Engine Optimization)?",
      answer: "GEO is the practice of optimizing content to be easily parsed, cited, and referenced by LLM search platforms like ChatGPT, Perplexity, and Gemini. Olum structures your content so AI engines reference your business when answering queries.",
    },
    {
      question: "Can I customize the agent's writing tone and brand voice?",
      answer: "Absolutely. During setup, you input your style guides, vocabulary guidelines, product specifications, and serve constraints. The agents reference this brand playbook for every draft they write.",
    },
    {
      question: "How long does it take to see visibility results?",
      answer: "Local action changes (like GBP posts and review answers) often take effect within days. SEO pages and GEO engine indexing typically show incremental citation traffic growth within 4 to 8 weeks.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="resources">
      <div className="section-container compact-width">
        <span className="section-tag center">RESOURCES</span>
        <h2 className="section-title center">Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item-card ${isOpen ? "open" : ""}`}
              >
                <button 
                  className="faq-question-btn" 
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className="faq-toggle-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div className="faq-answer-wrapper">
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
