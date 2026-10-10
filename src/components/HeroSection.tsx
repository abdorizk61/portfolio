"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { CircularHUD } from "./CircularHUD";
import { person } from "@/resources";

export function HeroSection() {
  const fullText = "> Building intelligent systems.";
  const [displayedText, setDisplayedText] = useState("");

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 60);

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
        alignItems: "center",
        justifyContent: "space-between",
        gap: "48px",
        padding: "24px 0 32px 0",
        boxSizing: "border-box",
      }}
    >
      {/* ── Left Column: Text & CTAs ── */}
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
        {/* 1. Alert Pill */}
        <div className="alert-pill" style={{ marginBottom: "16px" }}>
          <span className="alert-pill-dot" />
          <span>[ALERT] SEV-HIGH: AI Talent detected. Ready for deployment.</span>
        </div>

        {/* 2. Main Headline (H1): Huge, bold sans-serif font */}
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
          <span style={{ color: "#ffffff" }}>ABDELRAHMAN</span>
          <span
            style={{
              color: "#00FF41",
              textShadow: "0 0 20px rgba(0, 255, 65, 0.7), 0 0 45px rgba(0, 255, 65, 0.35)",
            }}
          >
            RIZK
          </span>
        </h1>

        {/* 3. Subtitle / Roles: White, bold, distinct */}
        <div
          style={{
            color: "#ffffff",
            fontWeight: 700,
            fontSize: "clamp(1.05rem, 2.2vw, 1.25rem)",
            letterSpacing: "0.03em",
            fontFamily: "var(--font-heading), -apple-system, sans-serif",
            marginBottom: "14px",
          }}
        >
          {"AI Engineer // Machine Learning // Deep Learning"}
        </div>

        {/* 4. Typing effect line: Neon green monospace with blinking cursor */}
        <div
          style={{
            fontFamily: "var(--font-code, monospace)",
            color: "#00FF41",
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

        {/* 5. Action Buttons: Outlined neon green, solid green on hover */}
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
            target="_blank"
            rel="noopener noreferrer"
            className="matrix-btn"
          >
            [ RESUME ]
          </a>
          <a
            id="hero-github-btn"
            href="https://github.com/abdorizk61"
            target="_blank"
            rel="noopener noreferrer"
            className="matrix-btn"
          >
            [ GITHUB ]
          </a>
          <button
            id="hero-terminal-btn"
            type="button"
            onClick={handleOpenTerminal}
            className="matrix-btn"
          >
            [ OPEN TERMINAL ]
          </button>
        </div>
      </div>

      {/* ── Right Column: Circular Profile Avatar with Target Rings ── */}
      <div
        className="hero-right-column"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <CircularHUD src={person.avatar} alt={person.name} size={220} />
      </div>

      {/* ── Responsive Styling ── */}
      <style jsx>{`
        @media (max-width: 860px) {
          .hero-soc-container {
            flex-direction: column-reverse !important;
            text-align: center !important;
            gap: 36px !important;
            padding-top: 12px !important;
          }
          .hero-left-column {
            align-items: center !important;
            max-width: 100% !important;
          }
          .hero-buttons-row {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}

