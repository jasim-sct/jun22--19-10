"use client";

import React, { useState } from "react";
import Navbar from "@/ui/components/Navbar";
import Hero from "@/ui/components/Hero";
import KpiWidget from "@/ui/components/KpiWidget";
import AssetsSection from "@/ui/components/AssetsSection";
import HowItWorks from "@/ui/components/HowItWorks";
import SeoGeoSection from "@/ui/components/SeoGeoSection";
import LocalSection from "@/ui/components/LocalSection";
import Pricing from "@/ui/components/Pricing";
import Faq from "@/ui/components/Faq";
import FooterCta from "@/ui/components/FooterCta";
import Footer from "@/ui/components/Footer";
import AnalysisModal from "@/ui/components/AnalysisModal";
import { Preset, PRESETS } from "@/ui/components/types";

export default function Home() {
  const [domainInput, setDomainInput] = useState("");
  const [activePreset, setActivePreset] = useState<Preset>(PRESETS["default"]);
  const [animationPreset, setAnimationPreset] = useState<Preset>(PRESETS["default"]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Triggered when an example tag is clicked (direct feedback)
  const triggerCountAnimation = (preset: Preset) => {
    setActivePreset(preset);
    setAnimationPreset(preset);
  };

  const startAnalysis = () => {
    const domain = domainInput.trim() || "yourbusiness.com";
    
    // Find preset or generate custom one
    let matchedPreset = PRESETS["default"];
    let found = false;
    for (const key in PRESETS) {
      if (key !== "default" && domain.toLowerCase().includes(key.split(".")[0])) {
        matchedPreset = PRESETS[key];
        found = true;
        break;
      }
    }

    if (!found && domain !== "yourbusiness.com") {
      const parts = domain.split(".");
      const cleanName = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
      
      const seo = Math.floor(Math.random() * 10) + 4;
      const blog = Math.floor(Math.random() * 8) + 3;
      const linkedin = Math.floor(Math.random() * 12) + 2;
      const instagram = Math.floor(Math.random() * 15) + 3;
      const replies = Math.floor(Math.random() * 8) + 2;
      const faqs = Math.floor(Math.random() * 10) + 5;
      const updates = Math.floor(Math.random() * 6) + 2;
      const total = seo + blog + linkedin + instagram + replies + faqs + updates;

      matchedPreset = {
        domain: domain,
        name: `${cleanName} & Co.`,
        type: `Business · Austin, TX`,
        seo,
        blog,
        linkedin,
        instagram,
        replies,
        faqs,
        updates,
        total,
      };
    }

    setActivePreset(matchedPreset);
    setIsModalOpen(true);
  };

  const handleViewPlan = () => {
    setIsModalOpen(false);
    
    // Scroll to the assets section
    const assetsSection = document.querySelector(".assets-section");
    if (assetsSection) {
      assetsSection.scrollIntoView({ behavior: "smooth", block: "center" });
      
      // Delay updating count display until scroll completes
      setTimeout(() => {
        setAnimationPreset(activePreset);
      }, 600);
    } else {
      setAnimationPreset(activePreset);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero
          domainInput={domainInput}
          setDomainInput={setDomainInput}
          activePreset={activePreset}
          setActivePreset={setActivePreset}
          startAnalysis={startAnalysis}
          triggerCountAnimation={triggerCountAnimation}
        />
        
        <KpiWidget activePreset={activePreset} />
        
        <AssetsSection activePreset={animationPreset} />
        
        <HowItWorks />
        
        <SeoGeoSection activePreset={activePreset} />
        
        <LocalSection activePreset={activePreset} />

        <Pricing />

        <Faq />
        
        <FooterCta
          domainInput={domainInput}
          setDomainInput={setDomainInput}
          startAnalysis={startAnalysis}
        />
      </main>
      <Footer />

      <AnalysisModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        domain={activePreset.domain}
        onViewPlan={handleViewPlan}
      />
    </>
  );
}
