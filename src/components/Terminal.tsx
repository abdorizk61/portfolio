"use client";

import React, { useState, useRef, useEffect, KeyboardEvent } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

type OutputLine =
  | { type: "input"; text: string }
  | { type: "output"; text: string; isHTML?: boolean }
  | { type: "error"; text: string }
  | { type: "blank" };

// ─── Command Definitions ─────────────────────────────────────────────────────

const COMMANDS: Record<string, () => OutputLine[]> = {
  help: () => [
    { type: "output", text: "Available commands:" },
    { type: "output", text: "  about     — Background in Computer Science & Machine Learning" },
    { type: "output", text: "  skills    — Tech stack & tools" },
    { type: "output", text: "  projects  — Featured projects with links" },
    { type: "output", text: "  clear     — Clear terminal output" },
    { type: "output", text: "  help      — Show this help message" },
  ],

  about: () => [
    { type: "output", text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" },
    { type: "output", text: "  Abdelrahman Rizk — AI & Machine Learning Engineer" },
    { type: "output", text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" },
    { type: "blank" },
    { type: "output", text: "  📍 Location : Giza, Egypt" },
    { type: "output", text: "  🎓 Degree   : B.Sc. Computer Science — Capital University" },
    { type: "output", text: "  🏫 Training : AI Diploma — EraaSoft Academy" },
    { type: "blank" },
    {
      type: "output",
      text: "  Specialising in Retrieval-Augmented Generation (RAG) pipelines,",
    },
    {
      type: "output",
      text: "  real-time Computer Vision systems, and predictive ML modelling.",
    },
    {
      type: "output",
      text: "  Available for ML Engineering roles, GenAI consulting,",
    },
    { type: "output", text: "  and Computer Vision development contracts." },
    { type: "blank" },
  ],

  skills: () => [
    { type: "output", text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" },
    { type: "output", text: "  Tech Stack" },
    { type: "output", text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" },
    { type: "blank" },
    { type: "output", text: "  [Languages]" },
    { type: "output", text: "    • Python" },
    { type: "blank" },
    { type: "output", text: "  [AI / ML / DL]" },
    { type: "output", text: "    • PyTorch  • TensorFlow  • Scikit-learn" },
    { type: "output", text: "    • LangChain  • Ollama  • ChromaDB" },
    { type: "blank" },
    { type: "output", text: "  [Computer Vision]" },
    { type: "output", text: "    • YOLOv8  • OpenCV  • Supervision" },
    { type: "blank" },
    { type: "output", text: "  [Deployment & UI]" },
    { type: "output", text: "    • Streamlit  • Gradio  • Docker" },
    { type: "blank" },
    { type: "output", text: "  [Dev Workflow]" },
    { type: "output", text: "    • Git / GitHub  • Linux (Fedora)  • n8n" },
    { type: "blank" },
  ],

  projects: () => [
    { type: "output", text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" },
    { type: "output", text: "  Featured Projects" },
    { type: "output", text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" },
    { type: "blank" },
    { type: "output", text: "  [1] AI Research Assistant (RAG)" },
    { type: "output", text: "      Private offline Q&A over documents using LangChain + Ollama." },
    {
      type: "output",
      isHTML: true,
      text: `      🔗 <a href="/work/ai-research-assistant-rag" style="color:#00FF41;text-decoration:underline;" target="_self">View project →</a>`,
    },
    { type: "blank" },
    { type: "output", text: "  [2] Real-Time Object Tracking (YOLO)" },
    { type: "output", text: "      Multi-object detection & tracking using YOLOv8 + Supervision." },
    {
      type: "output",
      isHTML: true,
      text: `      🔗 <a href="/work/object-tracking-yolo" style="color:#00FF41;text-decoration:underline;" target="_self">View project →</a>`,
    },
    { type: "blank" },
    { type: "output", text: "  [3] Diabetes Classification (ANN)" },
    { type: "output", text: "      Neural network classifier with Streamlit dashboard." },
    {
      type: "output",
      isHTML: true,
      text: `      🔗 <a href="/work/diabetes-classification" style="color:#00FF41;text-decoration:underline;" target="_self">View project →</a>`,
    },
    { type: "blank" },
    { type: "output", text: "  [4] Predictive Regression Modelling" },
    {
      type: "output",
      text: "      Regularised regression with full feature engineering pipeline.",
    },
    {
      type: "output",
      isHTML: true,
      text: `      🔗 <a href="/work/predictive-regression-modeling" style="color:#00FF41;text-decoration:underline;" target="_self">View project →</a>`,
    },
    { type: "blank" },
    { type: "output", text: "  [5] HR Analytics — Attrition Prediction" },
    { type: "output", text: "      Employee attrition classification with explainability layer." },
    {
      type: "output",
      isHTML: true,
      text: `      🔗 <a href="/work/hr-analytics-attrition" style="color:#00FF41;text-decoration:underline;" target="_self">View project →</a>`,
    },
    { type: "blank" },
    {
      type: "output",
      isHTML: true,
      text: `  GitHub: <a href="https://github.com/abdorizk61" style="color:#00FF41;text-decoration:underline;" target="_blank" rel="noopener noreferrer">github.com/abdorizk61</a>`,
    },
    { type: "blank" },
  ],
};

// ─── Welcome Banner ───────────────────────────────────────────────────────────

const WELCOME_LINES: OutputLine[] = [
  { type: "output", text: "  ██████╗  ██████╗ ██████╗ ████████╗" },
  { type: "output", text: "  ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝" },
  { type: "output", text: "  ██████╔╝██║   ██║██████╔╝   ██║   " },
  { type: "output", text: "  ██╔═══╝ ██║   ██║██╔══██╗   ██║   " },
  { type: "output", text: "  ██║     ╚██████╔╝██║  ██║   ██║   " },
  { type: "output", text: "  ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   " },
  { type: "blank" },
  { type: "output", text: "  Welcome to Abdelrahman's interactive portfolio terminal." },
  { type: "output", text: '  Type "help" to see available commands.' },
  { type: "blank" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function Terminal() {
  const [lines, setLines] = useState<OutputLine[]>(WELCOME_LINES);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom whenever output changes
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const runCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const inputLine: OutputLine = { type: "input", text: raw };

    if (!cmd) {
      setLines((prev) => [...prev, inputLine, { type: "blank" }]);
      return;
    }

    // Save to history
    setHistory((prev) => [raw, ...prev]);
    setHistoryIdx(-1);

    if (cmd === "clear") {
      setLines([]);
      return;
    }

    const handler = COMMANDS[cmd];
    const response: OutputLine[] = handler
      ? handler()
      : [
          {
            type: "error",
            text: `Command not found: "${cmd}". Type "help" for available commands.`,
          },
          { type: "blank" },
        ];

    setLines((prev) => [...prev, inputLine, ...response]);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      runCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHistoryIdx((prev) => {
        const next = Math.min(prev + 1, history.length - 1);
        setInput(history[next] ?? "");
        return next;
      });
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setHistoryIdx((prev) => {
        const next = Math.max(prev - 1, -1);
        setInput(next === -1 ? "" : (history[next] ?? ""));
        return next;
      });
    }
  };

  const focusInput = () => inputRef.current?.focus();

  return (
    <div
      style={{
        width: "100%",
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
        fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
        background: "transparent",
      }}
    >
      {/* ── Title Bar ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 16px",
          background: "rgba(30,30,30,0.95)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          userSelect: "none",
        }}
      >
        {/* Traffic light dots */}
        <span
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "#ff5f56",
            display: "inline-block",
          }}
        />
        <span
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "#ffbd2e",
            display: "inline-block",
          }}
        />
        <span
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "#27c93f",
            display: "inline-block",
          }}
        />

        {/* Title */}
        <span
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: "12px",
            color: "rgba(255,255,255,0.45)",
            letterSpacing: "0.03em",
            marginRight: "36px" /* balance the dots */,
          }}
        >
          guest@abdelrahman-portfolio: ~
        </span>
      </div>

      {/* ── Terminal Body ── */}
      <div
        onClick={focusInput}
        style={{
          background: "rgba(13,13,15,0.97)",
          padding: "20px 24px",
          minHeight: "340px",
          maxHeight: "480px",
          overflowY: "auto",
          cursor: "text",
          /* Thin scrollbar */
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(255,255,255,0.15) transparent",
        }}
      >
        {/* Output lines */}
        {lines.map((line, i) => {
          if (line.type === "blank") {
            return <div key={i} style={{ height: "6px" }} />;
          }

          const colorMap: Record<string, string> = {
            input: "#e2e8f0",
            output: "#94a3b8",
            error: "#f87171",
          };

          const prefix =
            line.type === "input" ? (
              <span style={{ color: "#4ade80", marginRight: "6px" }}>$</span>
            ) : null;

          const isHTMLLine = line.type === "output" && line.isHTML;
          return (
            <div
              key={i}
              style={{
                fontSize: "13px",
                lineHeight: "1.7",
                color: colorMap[line.type] ?? "#94a3b8",
                whiteSpace: "pre-wrap",
                wordBreak: "break-all",
              }}
            >
              {prefix}
              {isHTMLLine ? <span dangerouslySetInnerHTML={{ __html: line.text }} /> : line.text}
            </div>
          );
        })}

        {/* ── Input Row ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "4px",
          }}
        >
          <span
            style={{
              color: "#4ade80",
              fontSize: "13px",
              marginRight: "6px",
              flexShrink: 0,
            }}
          >
            $
          </span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck={false}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#e2e8f0",
              fontSize: "13px",
              fontFamily: "inherit",
              caretColor: "#4ade80",
            }}
          />
        </div>

        {/* Scroll anchor */}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
