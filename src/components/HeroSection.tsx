"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { CircularHUD } from "./CircularHUD";
import { person } from "@/resources";

// ── Impact Metrics Data ──────────────────────────────────────────────────────
const impactMetrics = [
  {
    value: "< 1s",
    label: "Vector Search Latency",
    detail: "Local Ollama & ChromaDB",
  },
  {
    value: "100% Edge",
    label: "Zero Cloud API Leaks",
    detail: "Zero 3rd-Party Cloud API Leaks",
  },
  {
    value: "Real-Time",
    label: "Multi-Object Vision Tracking",
    detail: "YOLOv8 & Supervision",
  },
  {
    value: "200+ Hrs",
    label: "DEPI MCIT AI Specialization",
    detail: "AI Automation Track",
  },
];

export function HeroSection() {
  const fullText = "> Building intelligent, production-ready AI solutions.";
  const [displayedText, setDisplayedText] = useState("");

  // Typewriter effect with reduced-motion support
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setDisplayedText(fullText);
      return;
    }

    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleOpenTerminal = (e: React.MouseEvent) => {
    e.preventDefault();
    const terminalElem = document.getElementById("terminal");
    if (terminalElem) {
      terminalElem.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const input = terminalElem.querySelector("input");
        if (input) input.focus();
      }, 500);
    }
  };

  return (
    <section
      className="hero-soc-container"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        padding: "24px 0 32px 0",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <div className="ambient-glow-overlay" />

      {/* ── Top Row: Text + Avatar ── */}
      <div
        className="hero-top-row"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "48px",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left Column: Text & CTAs */}
        <div
          className="hero-left-column"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            maxWidth: "600px",
            flex: 1,
          }}
        >
          {/* Alert Pill */}
          <div className="alert-pill" style={{ marginBottom: "16px" }}>
            <span className="alert-pill-dot" />
            <span>[STATUS] Neural Core Online // Ready for Deployment</span>
          </div>

          {/* Main Headline */}
          <h1
            style={{
              margin: "0 0 12px 0",
              fontSize: "clamp(2.75rem, 6vw, 4.5rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              fontFamily: "var(--font-heading), -apple-system, BlinkMacSystemFont, sans-serif",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ color: "#f8fafc" }}>ABDELRAHMAN</span>
            <span
              style={{
                color: "#06b6d4",
                textShadow: "0 0 20px rgba(6, 182, 212, 0.5), 0 0 45px rgba(6, 182, 212, 0.25)",
              }}
            >
              RIZK
            </span>
          </h1>

          {/* Subtitle */}
          <div
            style={{
              color: "#94a3b8",
              fontWeight: 600,
              fontSize: "clamp(1.05rem, 2.2vw, 1.25rem)",
              letterSpacing: "0.03em",
              fontFamily: "var(--font-heading), -apple-system, sans-serif",
              marginBottom: "14px",
            }}
          >
            {"AI Engineer  ·  Machine Learning  ·  Deep Learning"}
          </div>

          {/* Typing effect */}
          <div
            style={{
              fontFamily: "var(--font-code, monospace)",
              color: "#06b6d4",
              fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)",
              letterSpacing: "0.04em",
              marginBottom: "28px",
              display: "flex",
              alignItems: "center",
              minHeight: "1.6em",
            }}
          >
            <span>{displayedText}</span>
            <span className="matrix-cursor">_</span>
          </div>

          {/* Action Buttons */}
          <div
            className="hero-buttons-row"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px",
              alignItems: "center",
            }}
          >
            <a
              id="hero-resume-btn"
              href="/resume.pdf"
              download="Abdelrahman_Rizk_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="matrix-btn"
            >
              [ RESUME ↓ ]
            </a>
            <a
              id="hero-github-btn"
              href="https://github.com/abdorizk61"
              target="_blank"
              rel="noopener noreferrer"
              className="matrix-btn"
            >
              [ GITHUB ↗ ]
            </a>
            <button
              id="hero-terminal-btn"
              type="button"
              onClick={handleOpenTerminal}
              className="matrix-btn"
            >
              [ TERMINAL ⌘ ]
            </button>
          </div>
        </div>

        {/* Right Column: Avatar */}
        <div
          className="hero-right-column"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0,
            position: "relative",
            zIndex: 1,
          }}
        >
          <CircularHUD src={person.avatar} alt={person.name} size={220} />
        </div>
      </div>

      {/* ── Impact Metrics Bar (Hero / Showcase) ── */}
      <div className="metrics-bar" style={{ position: "relative", zIndex: 1 }}>
        {impactMetrics.map((metric) => (
          <div key={metric.label} className="metrics-bar-item">
            <span
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                fontWeight: 800,
                fontFamily: "var(--font-code, monospace)",
                color: "#06b6d4",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              {metric.value}
            </span>
            <span
              style={{
                fontSize: "0.82rem",
                fontWeight: 600,
                color: "#e2e8f0",
                letterSpacing: "0.02em",
              }}
            >
              {metric.label}
            </span>
            <span
              style={{
                fontSize: "0.72rem",
                color: "#94a3b8",
                fontFamily: "var(--font-code, monospace)",
              }}
            >
              {metric.detail}
            </span>
          </div>
        ))}
      </div>

      {/* Responsive Styling */}
      <style jsx>{`
        @media (max-width: 860px) {
          .hero-top-row {
            flex-direction: column-reverse !important;
            text-align: center !important;
            gap: 36px !important;
          }
          .hero-left-column {
            align-items: center !important;
            max-width: 100% !important;
          }
          .hero-buttons-row {
            justify-content: center !important;
          }
          .metrics-bar {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .metrics-bar {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
