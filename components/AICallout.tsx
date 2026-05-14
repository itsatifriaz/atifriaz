"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function ClaudeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.235 7.545L10.09 30.455h4.807l2.416-4.954h10.297l2.417 4.954h4.883L22.235 7.545zm0 7.682l3.576 7.34h-7.153l3.577-7.34z" fill="currentColor"/>
    </svg>
  );
}

function CopilotIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.27 3.006C7.03 3.178 5.25 4.916 5 7.145a16.76 16.76 0 0 0-.083 1.756c.003.618.03 1.199.083 1.742.25 2.23 2.029 3.967 4.27 4.14.453.034.922.05 1.397.05.348 0 .691-.01 1.027-.029l2.527 3.192a.625.625 0 0 0 .491.237h.01a.625.625 0 0 0 .493-.244l2.463-3.193c.29.017.585.026.886.026.476 0 .944-.016 1.397-.05 2.241-.173 4.02-1.91 4.27-4.14.053-.543.08-1.124.083-1.742a16.76 16.76 0 0 0-.083-1.756c-.25-2.23-2.029-3.967-4.27-4.14A21.484 21.484 0 0 0 17.934 3c-.489 0-.972.009-1.441.028l-.494-.64C15.434 1.676 14.57 1.25 13.647 1.25h-3.294c-.923 0-1.787.426-2.352 1.138l-.494.64A21.484 21.484 0 0 0 6.065 3c-.265 0-.528.002-.795.006zM8.72 9.5a1.28 1.28 0 1 0 0-2.56 1.28 1.28 0 0 0 0 2.56zm6.56 0a1.28 1.28 0 1 0 0-2.56 1.28 1.28 0 0 0 0 2.56zm-6.155 2.844c.144.34.39.62.694.806a3.37 3.37 0 0 0 1.737.476c.638 0 1.23-.175 1.737-.476a1.77 1.77 0 0 0 .694-.806.375.375 0 1 1 .707.25 2.52 2.52 0 0 1-.984 1.144 4.12 4.12 0 0 1-2.154.638 4.12 4.12 0 0 1-2.154-.638 2.52 2.52 0 0 1-.984-1.144.375.375 0 0 1 .707-.25z" fill="currentColor"/>
    </svg>
  );
}

function CursorIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="currentColor"/>
      <path d="M10 8l12 8-6.5 1.5L14 24 10 8z" fill="#0a0a0a"/>
    </svg>
  );
}

function OpenAIIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zm-9.022 12.608a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zm-1.26-10.408a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0L4.1 14.197A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.843-3.372 2.02-1.168a.076.076 0 0 1 .071 0l4.724 2.727a4.5 4.5 0 0 1-.676 8.125v-5.677a.795.795 0 0 0-.296-.635zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.723-2.725a4.5 4.5 0 0 1 6.19 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" fill="currentColor"/>
    </svg>
  );
}

const tools = [
  { icon: <ClaudeIcon />, label: "Claude Code" },
  { icon: <CopilotIcon />, label: "GitHub Copilot" },
  { icon: <CursorIcon />, label: "Cursor" },
  { icon: <OpenAIIcon />, label: "OpenAI Codex" },
];

export default function AICallout() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "3rem 0",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Top row: label + body */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ marginBottom: "2rem" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            {/* Accent left bar */}
            <div style={{
              width: "3px", height: "1.1rem",
              background: "var(--accent)",
              borderRadius: "2px",
              flexShrink: 0,
            }} />
            <span style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--accent)",
            }}>
              AI-Enhanced Development
            </span>
          </div>

          <p style={{
            fontSize: "1rem",
            lineHeight: 1.7,
            color: "var(--text-muted)",
            maxWidth: "580px",
          }}>
            I build faster and smarter using the latest AI-powered IDEs and tools
            as a core part of my engineering workflow —{" "}
            <span style={{ color: "var(--text)" }}>
              not as a gimmick, but as a multiplier.
            </span>
          </p>
        </motion.div>

        {/* Tools row */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          {tools.map((tool, i) => (
            <motion.div
              key={tool.label}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1rem",
                border: "1px solid var(--border)",
                borderRadius: "6px",
                background: "var(--bg-secondary)",
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "0.75rem",
                letterSpacing: "0.06em",
                color: "var(--text-muted)",
                cursor: "default",
              }}
            >
              <span style={{ color: "var(--accent)", display: "flex", alignItems: "center" }}>
                {tool.icon}
              </span>
              {tool.label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
