"use client";

import React, { useState, useRef, useEffect, useCallback, KeyboardEvent } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type LineType = "input" | "output" | "success" | "warning" | "error" | "blank" | "divider";

interface TextLine {
  type: Exclude<LineType, "blank" | "divider">;
  text: string;
  /** Render text as raw HTML — use only for trusted internal strings */
  html?: boolean;
}
interface BlankLine {
  type: "blank";
}
interface DividerLine {
  type: "divider";
}

type OutputLine = TextLine | BlankLine | DividerLine;

// ─── Colour map ───────────────────────────────────────────────────────────────

const COLORS: Record<string, string> = {
  input: "#f1f5f9", // near-white  – what the user typed
  output: "#94a3b8", // slate-400   – normal output
  success: "#00FF41", // Matrix neon green
  warning: "#fbbf24", // amber-400   – accent / headers
  error: "#f87171", // red-400     – error messages
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

const hr = (): OutputLine => ({ type: "divider" });

const out = (text: string, type: TextLine["type"] = "output"): OutputLine => ({ type, text });

const link = (label: string, href: string, external = false): OutputLine => ({
  type: "output",
  html: true,
  text: `<a href="${href}" style="color:#00FF41;text-decoration:underline;cursor:pointer;" ${external ? 'target="_blank" rel="noopener noreferrer"' : 'target="_self"'}>${label}</a>`,
});

// ─── Command registry ─────────────────────────────────────────────────────────

const COMMANDS: Record<string, () => OutputLine[]> = {
  help: () => [
    hr(),
    out("  Available Commands", "warning"),
    hr(),
    { type: "blank" },
    out("  about      —  Bio & engineering background"),
    out("  skills     —  Categorised tech stack"),
    out("  projects   —  Featured projects with links"),
    out("  contact    —  GitHub, LinkedIn & email"),
    out("  clear      —  Reset terminal output"),
    out("  help       —  Show this message"),
    { type: "blank" },
    out("  Tip: use ↑ / ↓ to navigate command history.", "warning"),
    { type: "blank" },
  ],

  about: () => [
    hr(),
    out("  Abdelrahman Rizk  —  AI & Machine Learning Engineer", "warning"),
    hr(),
    { type: "blank" },
    out("  📍  Giza, Egypt"),
    out("  🎓  B.Sc. Computer Science — Capital University (exp. 2028)"),
    out("  🏫  AI Diploma — EraaSoft Academy  (2026)"),
    out("  🏅  ML Program — Creativa Hub / ITIDA  (2025)"),
    { type: "blank" },
    out("  Core Focus Areas:", "warning"),
    out("    ▸  Computer Science & Software Architecture"),
    out("    ▸  Machine Learning & Deep Learning engineering"),
    out("    ▸  Retrieval-Augmented Generation (RAG) with local LLMs"),
    out("    ▸  AI Automation & Production Telemetry Systems"),
    { type: "blank" },
    out("  Available for:", "success"),
    out("    ML Engineering roles  ·  GenAI & RAG consulting"),
    out("    Computer Vision contracts  ·  ML Instruction"),
    { type: "blank" },
  ],

  skills: () => [
    hr(),
    out("  Core Technologies & Stack", "warning"),
    hr(),
    { type: "blank" },
    out("  [ Core Stack ]", "success"),
    out("    Python   PyTorch   LangChain   Ollama"),
    out("    ChromaDB   Docker   YOLOv8   Linux (Fedora)"),
    { type: "blank" },
    out("  [ Machine Learning & Deep Learning ]", "success"),
    out("    Scikit-learn   TensorFlow   Pandas   NumPy"),
    { type: "blank" },
    out("  [ Deployment & Interfaces ]", "success"),
    out("    Streamlit   Gradio   Docker   FastAPI"),
    { type: "blank" },
  ],

  projects: () => [
    hr(),
    out("  Featured Projects (Cyber Dossiers)", "warning"),
    hr(),
    { type: "blank" },
    out("  [1]  Egyptian Real Estate Price Prediction", "success"),
    out("       Stacking ensembles & cyber-HUD telemetry dashboard — Scikit-Learn + Streamlit."),
    link("       🔗  View project →", "/work/egyptian-real-estate-valuation"),
    { type: "blank" },
    out("  [2]  AI Research Assistant (RAG)", "success"),
    out("       Private offline Q&A over documents — LangChain + Ollama + ChromaDB."),
    link("       🔗  View project →", "/work/ai-research-assistant-rag"),
    { type: "blank" },
    out("  [2]  HR Analytics — Attrition Prediction", "success"),
    out("       Employee attrition classifier with explainability layer."),
    link("       🔗  View project →", "/work/hr-analytics-attrition"),
    { type: "blank" },
    out("  [3]  Real-Time Object Tracking (YOLO)", "success"),
    out("       Multi-object detection & tracking — YOLOv8 + Supervision."),
    link("       🔗  View project →", "/work/object-tracking-yolo"),
    { type: "blank" },
    out("  [4]  Diabetes Classification (ANN)", "success"),
    out("       Neural network classifier with Streamlit dashboard."),
    link("       🔗  View project →", "/work/diabetes-classification"),
    { type: "blank" },
    out("  [5]  Predictive Regression Modelling", "success"),
    out("       Regularised regression with full feature-engineering pipeline."),
    link("       🔗  View project →", "/work/predictive-regression-modeling"),
    { type: "blank" },
  ],

  contact: () => [
    hr(),
    out("  Contact & Profiles", "warning"),
    hr(),
    { type: "blank" },
    out("  GitHub   ", "success"),
    link("  →  github.com/abdorizk61", "https://github.com/abdorizk61", true),
    { type: "blank" },
    out("  LinkedIn ", "success"),
    link(
      "  →  linkedin.com/in/abdelrahman-rizk-33b67b345",
      "https://www.linkedin.com/in/abdelrahman-rizk-33b67b345",
      true,
    ),
    { type: "blank" },
    out("  Kaggle   ", "success"),
    link("  →  kaggle.com/abdoelmaghraby", "https://www.kaggle.com/abdoelmaghraby", true),
    { type: "blank" },
    out("  Email    ", "success"),
    link("  →  rizkabdo61@gmail.com", "mailto:rizkabdo61@gmail.com"),
    { type: "blank" },
  ],
};

// ─── Boot / welcome output ────────────────────────────────────────────────────

const BOOT_LINES: OutputLine[] = [
  out("  Abdelrahman Rizk — AI & ML Engineer Portfolio Shell [v2.4.0]", "success"),
  out("  AI & Machine Learning Engineer // Cairo, Egypt", "output"),
  hr(),
  out("  Type 'help' to view available commands, or click any command button below.", "warning"),
  { type: "blank" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function InteractiveTerminal() {
  const [lines, setLines] = useState<OutputLine[]>(BOOT_LINES);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new output
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  // Autofocus on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const execCommand = useCallback((raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const echo: OutputLine = { type: "input", text: `$ ${raw}` };

    if (!cmd) {
      setLines((prev) => [...prev, echo]);
      return;
    }

    // Persist to history
    setCmdHistory((prev) => [raw, ...prev]);
    setHistoryIdx(-1);

    if (cmd === "clear") {
      setLines([]);
      return;
    }

    const handler = COMMANDS[cmd];
    const response: OutputLine[] = handler
      ? handler()
      : [
          { type: "error", text: `  bash: ${cmd}: command not found` },
          { type: "output", text: "  Type 'help' to see available commands." },
          { type: "blank" },
        ];

    setLines((prev) => [...prev, echo, ...response]);
  }, []);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      execCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHistoryIdx((prev) => {
        const next = Math.min(prev + 1, cmdHistory.length - 1);
        setInput(cmdHistory[next] ?? "");
        return next;
      });
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setHistoryIdx((prev) => {
        const next = Math.max(prev - 1, -1);
        setInput(next === -1 ? "" : (cmdHistory[next] ?? ""));
        return next;
      });
    } else if (e.key === "Tab") {
      e.preventDefault();
      // Simple tab-completion
      const partial = input.trim().toLowerCase();
      if (partial) {
        const matches = Object.keys(COMMANDS).filter((k) => k.startsWith(partial));
        if (matches.length === 1) setInput(matches[0]);
      }
    }
  };

  const focusInput = () => inputRef.current?.focus();

  const renderLine = (line: OutputLine, i: number) => {
    if (line.type === "blank") {
      return <div key={i} style={{ height: "5px" }} aria-hidden />;
    }
    if (line.type === "divider") {
      return (
        <div
          key={i}
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.07)",
            margin: "4px 0",
          }}
          aria-hidden
        />
      );
    }

    const isInput = line.type === "input";
    return (
      <div
        key={i}
        style={{
          fontSize: "clamp(11px, 2vw, 13px)",
          lineHeight: "1.75",
          color: COLORS[line.type] ?? COLORS.output,
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          fontFamily: "inherit",
          ...(isInput ? { opacity: 0.85 } : {}),
        }}
      >
        {line.html ? <span dangerouslySetInnerHTML={{ __html: line.text }} /> : line.text}
      </div>
    );
  };

  return (
    <div
      style={{
        width: "100%",
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.09)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04)",
        fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Courier New', monospace",
      }}
    >
      {/* ─── Title Bar ─────────────────────────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "11px 18px",
          background: "rgba(24,24,27,0.98)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          userSelect: "none",
        }}
      >
        {/* Traffic-light dots */}
        {(["#ff5f57", "#febc2e", "#28c840"] as const).map((bg, idx) => (
          <span
            key={idx}
            title={["Close", "Minimise", "Maximise"][idx]}
            style={{
              width: 13,
              height: 13,
              borderRadius: "50%",
              background: bg,
              display: "inline-block",
              flexShrink: 0,
              boxShadow: `0 0 0 1px rgba(0,0,0,0.25)`,
            }}
          />
        ))}

        {/* Centred title */}
        <span
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: "12px",
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "0.04em",
            marginRight: "39px", // compensate for 3×13px dots + 2×8px gaps
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          guest@abdelrahman-rizk: ~
        </span>
      </div>

      {/* ─── Terminal Body ──────────────────────────────────────────────────── */}
      <div
        ref={bodyRef}
        onClick={focusInput}
        style={{
          background: "rgba(10,10,12,0.97)",
          padding: "16px 20px",
          minHeight: "220px",
          maxHeight: "380px",
          overflowY: "auto",
          cursor: "text",
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(255,255,255,0.18) transparent",
        }}
      >
        {/* Output history */}
        {lines.map(renderLine)}

        {/* Active input row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "4px",
            gap: "8px",
          }}
        >
          {/* Prompt */}
          <span
            style={{
              color: "#4ade80",
              fontSize: "clamp(12px, 2vw, 13px)",
              flexShrink: 0,
              userSelect: "none",
              fontWeight: 600,
            }}
          >
            $
          </span>

          {/* Input field */}
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck={false}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            aria-label="Terminal input"
            style={{
              flex: 1,
              minWidth: 0,
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#f8fafc",
              fontSize: "clamp(12px, 2vw, 13px)",
              fontFamily: "inherit",
              caretColor: "#4ade80",
            }}
          />
        </div>

        {/* Scroll anchor */}
        <div ref={bottomRef} />
      </div>

      {/* ─── Command Chips (High Contrast Action Bar) ───────────────────────── */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "8px",
          padding: "10px 18px",
          background: "rgba(17,17,22,0.98)",
          borderTop: "1px solid rgba(255,255,255,0.09)",
        }}
      >
        <span
          style={{
            fontSize: "11px",
            color: "rgba(255,255,255,0.45)",
            marginRight: "4px",
            userSelect: "none",
            letterSpacing: "0.05em",
          }}
        >
          COMMANDS:
        </span>
        {["help", "about", "skills", "projects", "contact", "clear"].map((cmd) => (
          <button
            key={cmd}
            onClick={() => {
              execCommand(cmd);
              inputRef.current?.focus();
            }}
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.22)",
              borderRadius: "6px",
              color: "#f8fafc",
              fontSize: "12px",
              fontWeight: 600,
              fontFamily: "inherit",
              padding: "5px 12px",
              cursor: "pointer",
              transition: "all 0.18s ease",
              lineHeight: "1.4",
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(16,185,129,0.2)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(52,211,153,0.7)";
              (e.currentTarget as HTMLButtonElement).style.color = "#34d399";
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 3px 10px rgba(16,185,129,0.25)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.08)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.22)";
              (e.currentTarget as HTMLButtonElement).style.color = "#f8fafc";
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.3)";
            }}
          >
            <span style={{ color: "#34d399", fontSize: "11px", opacity: 0.85 }}>$</span> {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
