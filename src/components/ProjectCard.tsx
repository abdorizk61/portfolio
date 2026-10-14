"use client";

import React, { useState } from "react";
import { Carousel } from "@once-ui-system/core";
import type { ProjectData } from "@/data";

// ─── Tag colour map ───────────────────────────────────────────────────────────
const TAG_PALETTE: Record<string, { bg: string; color: string; border: string }> = {
  Python: { bg: "rgba(6,182,212,0.1)", color: "#67e8f9", border: "rgba(6,182,212,0.3)" },
  PyTorch: { bg: "rgba(239,68,68,0.1)", color: "#fca5a5", border: "rgba(239,68,68,0.3)" },
  TensorFlow: { bg: "rgba(251,146,60,0.1)", color: "#fdba74", border: "rgba(251,146,60,0.3)" },
  LangChain: { bg: "rgba(16,185,129,0.1)", color: "#6ee7b7", border: "rgba(16,185,129,0.3)" },
  Ollama: { bg: "rgba(16,185,129,0.08)", color: "#6ee7b7", border: "rgba(16,185,129,0.25)" },
  ChromaDB: { bg: "rgba(139,92,246,0.1)", color: "#c4b5fd", border: "rgba(139,92,246,0.3)" },
  Streamlit: { bg: "rgba(255,75,75,0.08)", color: "#fca5a5", border: "rgba(255,75,75,0.25)" },
  Gradio: { bg: "rgba(251,191,36,0.08)", color: "#fde68a", border: "rgba(251,191,36,0.25)" },
  Docker: { bg: "rgba(6,182,212,0.1)", color: "#67e8f9", border: "rgba(6,182,212,0.3)" },
  YOLOv8: { bg: "rgba(16,185,129,0.1)", color: "#6ee7b7", border: "rgba(16,185,129,0.3)" },
  OpenCV: { bg: "rgba(34,197,94,0.1)", color: "#86efac", border: "rgba(34,197,94,0.3)" },
  Scikit: { bg: "rgba(249,115,22,0.1)", color: "#fdba74", border: "rgba(249,115,22,0.3)" },
  Pandas: { bg: "rgba(99,102,241,0.1)", color: "#a5b4fc", border: "rgba(99,102,241,0.3)" },
  RAG: { bg: "rgba(6,182,212,0.12)", color: "#22d3ee", border: "rgba(6,182,212,0.4)" },
  "Scikit-Learn": { bg: "rgba(249,115,22,0.1)", color: "#fdba74", border: "rgba(249,115,22,0.3)" },
  "Scikit-learn": { bg: "rgba(249,115,22,0.1)", color: "#fdba74", border: "rgba(249,115,22,0.3)" },
  NumPy: { bg: "rgba(6,182,212,0.1)", color: "#67e8f9", border: "rgba(6,182,212,0.3)" },
  "Machine Learning": { bg: "rgba(168,85,247,0.1)", color: "#d8b4fe", border: "rgba(168,85,247,0.3)" },
  "Tabular ML & Classification": { bg: "rgba(6,182,212,0.14)", color: "#67e8f9", border: "rgba(6,182,212,0.4)" },
  "Tabular ML": { bg: "rgba(6,182,212,0.14)", color: "#67e8f9", border: "rgba(6,182,212,0.4)" },
  Classification: { bg: "rgba(168,85,247,0.14)", color: "#d8b4fe", border: "rgba(168,85,247,0.4)" },
};

const DEFAULT_TAG = {
  bg: "rgba(255,255,255,0.04)",
  color: "#94a3b8",
  border: "rgba(255,255,255,0.1)",
};

// ─── Types ────────────────────────────────────────────────────────────────────
export interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  liveDemo?: string;
  tags?: string[];
  index?: number;
  /** Structured project data for dual view, metrics, and architecture */
  projectData?: ProjectData;
}

// ─── Sub-components ───────────────────────────────────────────────────────────
function TechTag({ label }: { label: string }) {
  const palette = TAG_PALETTE[label] ?? DEFAULT_TAG;
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 9px",
        borderRadius: "4px",
        fontSize: "10px",
        fontFamily: "var(--font-code, monospace)",
        letterSpacing: "0.05em",
        background: palette.bg,
        color: palette.color,
        border: `1px solid ${palette.border}`,
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

function ActionButton({
  href,
  label,
  variant = "secondary",
  external = false,
}: {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  external?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const isPrimary = variant === "primary";

  const primaryStyle: React.CSSProperties = {
    background: hovered ? "#22d3ee" : "#06b6d4",
    color: "#000000",
    border: "1px solid #06b6d4",
    fontWeight: 700,
    boxShadow: hovered
      ? "0 0 20px rgba(6,182,212,0.5), 0 2px 10px rgba(0,0,0,0.5)"
      : "0 0 12px rgba(6,182,212,0.3)",
    transform: hovered ? "translateY(-1px)" : "translateY(0)",
  };

  const secondaryStyle: React.CSSProperties = {
    background: hovered ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.03)",
    color: hovered ? "#f1f5f9" : "#94a3b8",
    border: `1px solid ${hovered ? "rgba(6,182,212,0.35)" : "rgba(255,255,255,0.1)"}`,
    fontWeight: 500,
    transform: hovered ? "translateY(-1px)" : "translateY(0)",
  };

  return (
    <a
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "6px 16px",
        borderRadius: "6px",
        fontSize: "11px",
        fontFamily: "var(--font-code, monospace)",
        letterSpacing: "0.06em",
        textDecoration: "none",
        transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
        whiteSpace: "nowrap",
        ...(isPrimary ? primaryStyle : secondaryStyle),
      }}
    >
      {label}
    </a>
  );
}

// ─── Architecture Pipeline ────────────────────────────────────────────────────
function ArchitecturePipeline({ steps }: { steps: { label: string; description?: string }[] }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "10px",
        padding: "20px 18px",
        justifyContent: "center",
      }}
    >
      {steps.map((step, i) => (
        <React.Fragment key={step.label}>
          <div className="arch-step">
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                color: "#e2e8f0",
                fontFamily: "var(--font-code, monospace)",
              }}
            >
              {step.label}
            </span>
            {step.description && (
              <span
                style={{
                  fontSize: "0.68rem",
                  color: "#94a3b8",
                  lineHeight: 1.3,
                }}
              >
                {step.description}
              </span>
            )}
          </div>
          {i < steps.length - 1 && <span className="arch-arrow">→</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

// ─── Category label mapping ──────────────────────────────────────────────────
const CATEGORY_LABELS: Record<string, string> = {
  rag: "GENERATIVE AI & RAG",
  cv: "COMPUTER VISION",
  ml: "MACHINE LEARNING & ANALYTICS",
};

// ─── Main Component ───────────────────────────────────────────────────────────
export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  link,
  liveDemo,
  tags = [],
  index = 0,
  projectData,
}) => {
  const [cardHovered, setCardHovered] = useState(false);
  const [activeView, setActiveView] = useState<"output" | "architecture">("output");

  const prjNum = String(index + 1).padStart(2, "0");
  const categoryLabel = projectData
    ? CATEGORY_LABELS[projectData.category] || "PROJECT"
    : "PROJECT";

  const metrics = projectData?.metrics || [];
  const archSteps = projectData?.architecture || [];

  return (
    <div
      className="glass-card"
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
      style={{
        width: "100%",
        overflow: "hidden",
        background: cardHovered ? "rgba(13, 17, 23, 0.9)" : "rgba(23, 23, 23, 0.7)",
        borderColor: cardHovered ? "rgba(6, 182, 212, 0.4)" : "rgba(255, 255, 255, 0.08)",
        boxShadow: cardHovered
          ? "0 12px 48px rgba(6, 182, 212, 0.12), 0 0 0 1px rgba(6, 182, 212, 0.25)"
          : "0 4px 24px rgba(0, 0, 0, 0.5)",
      }}
    >
      {/* ── Dossier Header ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 18px",
          borderBottom: `1px solid ${cardHovered ? "rgba(6,182,212,0.2)" : "rgba(255,255,255,0.06)"}`,
          background: "rgba(0,0,0,0.3)",
          transition: "border-color 0.3s ease",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-code, monospace)",
            fontSize: "11px",
            letterSpacing: "0.1em",
            color: cardHovered ? "#22d3ee" : "#67e8f9",
            opacity: cardHovered ? 1 : 0.75,
            transition: "color 0.3s ease, opacity 0.3s ease",
          }}
        >
          [PRJ-{prjNum}] // {categoryLabel}
        </span>

        {/* Status badge */}
        <span
          style={{
            fontFamily: "var(--font-code, monospace)",
            fontSize: "10px",
            letterSpacing: "0.08em",
            color: "#10b981",
            background: "rgba(16,185,129,0.08)",
            border: "1px solid rgba(16,185,129,0.3)",
            borderRadius: "4px",
            padding: "2px 8px",
          }}
        >
          ● DEPLOYED
        </span>
      </div>

      {/* ── Impact Metric Badges ── */}
      {metrics.length > 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            padding: "10px 18px",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            background: "rgba(6, 182, 212, 0.02)",
          }}
        >
          {metrics.map((m) => (
            <span key={m.label} className="metric-badge">
              <span>{m.icon}</span>
              <span>{m.label}</span>
            </span>
          ))}
        </div>
      )}

      {/* ── Dual-View Toggle (Output / Architecture) ── */}
      {archSteps.length > 0 && (
        <div
          style={{
            display: "flex",
            gap: "0",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(0,0,0,0.2)",
          }}
        >
          {(["output", "architecture"] as const).map((view) => (
            <button
              key={view}
              type="button"
              onClick={() => setActiveView(view)}
              style={{
                flex: 1,
                padding: "9px 16px",
                background: activeView === view ? "rgba(6,182,212,0.08)" : "transparent",
                border: "none",
                borderBottom: activeView === view ? "2px solid #06b6d4" : "2px solid transparent",
                color: activeView === view ? "#06b6d4" : "#94a3b8",
                fontFamily: "var(--font-code, monospace)",
                fontSize: "0.76rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {view === "output" ? "◉ Output / Demo" : "⚙ System Architecture"}
            </button>
          ))}
        </div>
      )}

      {/* ── Card Visual Area ── */}
      {activeView === "output" ? (
        /* Image carousel */
        images.length > 0 && (
          <div
            style={{
              overflow: "hidden",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              background: "#0d1117",
              aspectRatio: "16 / 9",
              width: "100%",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                aspectRatio: "16 / 9",
                transform: cardHovered ? "scale(1.025)" : "scale(1)",
                transition: "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
              }}
            >
              <Carousel
                aspectRatio="16 / 9"
                sizes="(max-width: 960px) 100vw, 960px"
                items={images.map((image) => ({
                  slide: image,
                  alt: title,
                }))}
              />
            </div>
          </div>
        )
      ) : (
        /* Architecture Flow Pipeline View */
        <div
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(6,182,212,0.02)",
            minHeight: "180px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArchitecturePipeline steps={archSteps} />
        </div>
      )}

      {/* ── Body ── */}
      <div
        style={{
          padding: "20px 20px 22px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        {/* Title */}
        <h2
          style={{
            margin: 0,
            fontSize: "clamp(18px, 2.5vw, 22px)",
            fontWeight: 700,
            lineHeight: 1.25,
            color: "#f1f5f9",
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h2>

        {/* Description */}
        {description?.trim() && (
          <p
            style={{
              margin: 0,
              fontSize: "13.5px",
              lineHeight: 1.65,
              color: "#94a3b8",
            }}
          >
            {description}
          </p>
        )}

        {/* Tech tags */}
        {tags.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
            }}
          >
            {tags.map((tag) => (
              <TechTag key={tag} label={tag} />
            ))}
          </div>
        )}

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: "rgba(255,255,255,0.06)",
            margin: "2px 0",
          }}
        />

        {/* Action buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            alignItems: "center",
          }}
        >
          {liveDemo ? (
            <ActionButton href={liveDemo} label="[ LIVE DEMO ↗ ]" variant="primary" external />
          ) : (
            <ActionButton href={href} label="[ VIEW PROJECT ↗ ]" variant="primary" />
          )}
          <ActionButton
            href={link ? link : "https://github.com/abdorizk61"}
            label="[ CODEBASE ↗ ]"
            variant="secondary"
            external
          />
        </div>
      </div>
    </div>
  );
};
