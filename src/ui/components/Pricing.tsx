"use client";

import React, { useState } from "react";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Starter",
      desc: "Perfect for local clinics, shops and early stage startups.",
      price: billingCycle === "monthly" ? 99 : 79,
      features: [
        "Up to 5 SEO Pages / mo",
        "4 AI Blog Articles / mo",
        "10 Social Media Posts / mo",
        "GBP & Review replies",
        "Standard email support",
      ],
      cta: "Start free trial",
      popular: false,
    },
    {
      name: "Growth",
      desc: "Ideal for growing brands requiring multichannel search visibility.",
      price: billingCycle === "monthly" ? 249 : 199,
      features: [
        "Up to 20 SEO Pages / mo",
        "12 AI Blog Articles / mo",
        "30 Social Media Posts / mo",
        "GEO search engine optimization",
        "Full review auto-replies",
        "Priority Slack support",
      ],
      cta: "Go Unlimited Growth",
      popular: true,
    },
    {
      name: "Enterprise",
      desc: "For larger organizations needing customized agents & SLA integrations.",
      price: "Custom",
      features: [
        "Unlimited custom assets",
        "Dedicated custom agents",
        "Unlimited users & seats",
        "Custom API & webhook actions",
        "Dedicated Account Executive",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section className="pricing-section" id="pricing">
      <div className="section-container">
        <span className="section-tag center">PRICING</span>
        <h2 className="section-title center">Simple pricing for visible growth</h2>
        
        {/* Toggle Switch */}
        <div className="pricing-toggle-wrapper">
          <button 
            className={`toggle-btn ${billingCycle === "monthly" ? "active" : ""}`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>
          <button 
            className={`toggle-btn ${billingCycle === "yearly" ? "active" : ""}`}
            onClick={() => setBillingCycle("yearly")}
          >
            Yearly <span className="discount-tag">Save 20%</span>
          </button>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`pricing-card ${plan.popular ? "popular-card" : ""}`}
            >
              {plan.popular && <span className="popular-badge">MOST POPULAR</span>}
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-desc">{plan.desc}</p>
                <div className="price-display">
                  {typeof plan.price === "number" ? (
                    <>
                      <span className="currency">$</span>
                      <span className="amount">{plan.price}</span>
                      <span className="period">/mo</span>
                    </>
                  ) : (
                    <span className="amount">{plan.price}</span>
                  )}
                </div>
              </div>

              <ul className="plan-features">
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx}>
                    <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button className={`btn-plan ${plan.popular ? "btn-popular" : "btn-normal"}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
