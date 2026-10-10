"use client";

import React, { useState } from "react";
import { Carousel } from "@once-ui-system/core";

// ─── Tag colour map ───────────────────────────────────────────────────────────

const TAG_PALETTE: Record<string, { bg: string; color: string; border: string }> = {
  Python: { bg: "rgba(59,130,246,0.12)", color: "#93c5fd", border: "rgba(59,130,246,0.35)" },
  PyTorch: { bg: "rgba(239,68,68,0.1)", color: "#fca5a5", border: "rgba(239,68,68,0.3)" },
  TensorFlow: { bg: "rgba(251,146,60,0.1)", color: "#fdba74", border: "rgba(251,146,60,0.3)" },
  LangChain: { bg: "rgba(16,185,129,0.1)", color: "#6ee7b7", border: "rgba(16,185,129,0.3)" },
  Ollama: { bg: "rgba(16,185,129,0.08)", color: "#6ee7b7", border: "rgba(16,185,129,0.25)" },
  ChromaDB: { bg: "rgba(139,92,246,0.1)", color: "#c4b5fd", border: "rgba(139,92,246,0.3)" },
  Streamlit: { bg: "rgba(255,75,75,0.08)", color: "#fca5a5", border: "rgba(255,75,75,0.25)" },
  Gradio: { bg: "rgba(251,191,36,0.08)", color: "#fde68a", border: "rgba(251,191,36,0.25)" },
  Docker: { bg: "rgba(14,165,233,0.1)", color: "#7dd3fc", border: "rgba(14,165,233,0.3)" },
  YOLOv8: { bg: "rgba(16,185,129,0.1)", color: "#6ee7b7", border: "rgba(16,185,129,0.3)" },
  OpenCV: { bg: "rgba(34,197,94,0.1)", color: "#86efac", border: "rgba(34,197,94,0.3)" },
  Scikit: { bg: "rgba(249,115,22,0.1)", color: "#fdba74", border: "rgba(249,115,22,0.3)" },
  Pandas: { bg: "rgba(99,102,241,0.1)", color: "#a5b4fc", border: "rgba(99,102,241,0.3)" },
  RAG: { bg: "rgba(16,185,129,0.12)", color: "#34d399", border: "rgba(16,185,129,0.4)" },
  "Scikit-learn": { bg: "rgba(249,115,22,0.1)", color: "#fdba74", border: "rgba(249,115,22,0.3)" },
  NumPy: { bg: "rgba(6,182,212,0.1)", color: "#67e8f9", border: "rgba(6,182,212,0.3)" },
  "Machine Learning": {
    bg: "rgba(168,85,247,0.1)",
    color: "#d8b4fe",
    border: "rgba(168,85,247,0.3)",
  },
  "Tabular ML & Classification": {
    bg: "rgba(14,165,233,0.14)",
    color: "#7dd3fc",
    border: "rgba(14,165,233,0.4)",
  },
  "Tabular ML": { bg: "rgba(14,165,233,0.14)", color: "#7dd3fc", border: "rgba(14,165,233,0.4)" },
  Classification: { bg: "rgba(168,85,247,0.14)", color: "#d8b4fe", border: "rgba(168,85,247,0.4)" },
};

const DEFAULT_TAG = {
  bg: "rgba(255,255,255,0.06)",
  color: "#94a3b8",
  border: "rgba(255,255,255,0.15)",
};

// ─── Types ────────────────────────────────────────────────────────────────────

interface ProjectCardProps {
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
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
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
    background: hovered ? "#00E559" : "#00FF41",
    color: "#000000",
    border: "1px solid #00FF41",
    fontWeight: 700,
    boxShadow: hovered
      ? "0 0 20px rgba(0,255,65,0.7), 0 2px 10px rgba(0,0,0,0.5)"
      : "0 0 12px rgba(0,255,65,0.4)",
    transform: hovered ? "translateY(-1px)" : "translateY(0)",
  };

  const secondaryStyle: React.CSSProperties = {
    background: hovered ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)",
    color: hovered ? "#f1f5f9" : "#94a3b8",
    border: `1px solid ${hovered ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.12)"}`,
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
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
        letterSpacing: "0.08em",
        textDecoration: "none",
        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        whiteSpace: "nowrap",
        ...(isPrimary ? primaryStyle : secondaryStyle),
      }}
    >
      {label}
    </a>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

const PRJ_LABELS: string[] = [
  "ML & RAG",
  "HR ANALYTICS",
  "COMPUTER VISION",
  "DEEP LEARNING",
  "REGRESSION",
  "AI PIPELINE",
];

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
}) => {
  const [cardHovered, setCardHovered] = useState(false);

  const prjNum = String(index + 1).padStart(2, "0");
  const lowerTitle = (title || "").toLowerCase();
  const lowerHref = (href || "").toLowerCase();

  let prjLabel = PRJ_LABELS[index % PRJ_LABELS.length];
  if (lowerTitle.includes("hr") || lowerTitle.includes("attrition") || lowerHref.includes("hr")) {
    prjLabel = "TABULAR ML & CLASSIFICATION";
  } else if (
    lowerTitle.includes("real estate") ||
    lowerHref.includes("real-estate") ||
    lowerTitle.includes("egyptian")
  ) {
    prjLabel = "VALUATION & REGRESSION";
  } else if (lowerTitle.includes("rag") || lowerHref.includes("rag")) {
    prjLabel = "ML & RAG";
  } else if (
    lowerTitle.includes("yolo") ||
    lowerTitle.includes("tracking") ||
    lowerHref.includes("yolo")
  ) {
    prjLabel = "COMPUTER VISION";
  } else if (lowerTitle.includes("diabetes") || lowerHref.includes("diabetes")) {
    prjLabel = "DEEP LEARNING";
  } else if (lowerTitle.includes("regression") || lowerHref.includes("regression")) {
    prjLabel = "REGRESSION";
  }

  return (
    <div
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
      style={{
        width: "100%",
        borderRadius: "14px",
        overflow: "hidden",
        border: `1px solid ${cardHovered ? "rgba(0, 255, 65, 0.45)" : "rgba(255, 255, 255, 0.08)"}`,
        background: cardHovered ? "#050f07" : "#020502",
        boxShadow: cardHovered
          ? "0 12px 48px rgba(0, 255, 65, 0.16), 0 0 0 1px rgba(0, 255, 65, 0.35)"
          : "0 4px 24px rgba(0, 0, 0, 0.65)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* ── Dossier Header ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 18px",
          borderBottom: `1px solid ${cardHovered ? "rgba(52,211,153,0.2)" : "rgba(255,255,255,0.06)"}`,
          background: "rgba(0,0,0,0.25)",
          transition: "border-color 0.3s ease",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        {/* Left: project ID */}
        <span
          style={{
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            fontSize: "11px",
            letterSpacing: "0.1em",
            color: cardHovered ? "#34d399" : "#6ee7b7",
            opacity: cardHovered ? 1 : 0.7,
            transition: "color 0.3s ease, opacity 0.3s ease",
          }}
        >
          [PRJ-{prjNum}] // {prjLabel}
        </span>

        {/* Right: status badge */}
        <span
          style={{
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            fontSize: "10px",
            letterSpacing: "0.08em",
            color: "#34d399",
            background: "rgba(52,211,153,0.08)",
            border: "1px solid rgba(52,211,153,0.25)",
            borderRadius: "4px",
            padding: "1px 8px",
          }}
        >
          ● DEPLOYED
        </span>
      </div>

      {/* ── Image carousel ── */}
      {images.length > 0 && (
        <div
          style={{
            overflow: "hidden",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            background: "#070a0f",
          }}
        >
          <div
            style={{
              transform: cardHovered ? "scale(1.045)" : "scale(1)",
              transition: "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
            }}
          >
            <Carousel
              sizes="(max-width: 960px) 100vw, 960px"
              items={images.map((image) => ({
                slide: image,
                alt: title,
              }))}
            />
          </div>
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
            fontSize: "clamp(17px, 2.5vw, 22px)",
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
              fontSize: "13px",
              lineHeight: 1.7,
              color: "#64748b",
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
            <ActionButton href={href} label="[ LIVE DEMO ↗ ]" variant="primary" />
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
