"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const statusRows = [
  { label: "role", value: "Lead Frontend @ Cityscape Technology" },
  { label: "building", value: "aidrips.com — AI tools directory (SaaS)" },
  { label: "learning", value: "LLM context engineering & agent patterns" },
  { label: "stack", value: "Next.js 15 · Prisma · Tailwind v4 · Claude API" },
  { label: "reading", value: "Software Architecture: The Hard Parts — Ford & Richards" },
  { label: "available", value: "Yes — remote roles" },
];

const focusCards = [
  {
    category: "Currently Exploring",
    content:
      "AI-native fullstack patterns, LLM tool use, autonomous agents, and prompt engineering for production systems.",
  },
  {
    category: "Side Project",
    content:
      "AI Drips — an AI tools directory with Paddle billing. Currently at v1.2 with 200+ tools listed.",
  },
  {
    category: "Location",
    content:
      "Lahore, Pakistan · Open to full remote worldwide · Available immediately",
  },
];

export default function Now() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="now"
      className="section-pad"
      ref={ref}
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>
            Now
          </p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "var(--text)",
              lineHeight: 1.1,
            }}
          >
            What I&apos;m doing{" "}
            <span
              style={{ fontStyle: "italic", fontWeight: 400, color: "var(--text-muted)" }}
            >
              right now.
            </span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 480px), 1fr))",
            gap: "2rem",
            alignItems: "start",
          }}
        >
          {/* Left: Terminal panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              background: "var(--bg-secondary)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            {/* Terminal top bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1rem",
                borderBottom: "1px solid var(--border)",
                background: "var(--bg-tertiary)",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#ff5f57",
                  flexShrink: 0,
                }}
              />
              <span
                aria-hidden="true"
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#febc2e",
                  flexShrink: 0,
                }}
              />
              <span
                aria-hidden="true"
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#28c840",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: "0.75rem",
                  color: "var(--text-faint)",
                  marginLeft: "0.5rem",
                }}
              >
                status.current
              </span>
            </div>

            {/* Status rows */}
            <div
              style={{
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.875rem",
              }}
            >
              {statusRows.map((row, i) => (
                <motion.div
                  key={row.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    flexWrap: "wrap",
                    alignItems: "baseline",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains), monospace",
                      fontSize: "0.75rem",
                      color: "var(--accent)",
                      letterSpacing: "0.06em",
                      flexShrink: 0,
                    }}
                  >
                    {row.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains), monospace",
                      fontSize: "0.75rem",
                      color: "var(--text-faint)",
                      flexShrink: 0,
                    }}
                  >
                    :
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains), monospace",
                      fontSize: "0.8125rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.5,
                    }}
                  >
                    {row.value}
                  </span>
                </motion.div>
              ))}

              {/* Action links */}
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.25rem" }}>
                <a
                  href="https://cal.com/iamatifriaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.3rem",
                    fontFamily: "var(--font-jetbrains), monospace", fontSize: "0.75rem",
                    fontWeight: 600, color: "#0a0a0a", background: "var(--accent)",
                    border: "1px solid var(--accent)", borderRadius: "4px",
                    padding: "0.35rem 0.7rem", textDecoration: "none",
                    transition: "background 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#6ee79a"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--accent)"; }}
                >
                  Book a Call
                </a>
                <a
                  href="mailto:atifriaz.se@gmail.com"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.3rem",
                    fontFamily: "var(--font-jetbrains), monospace", fontSize: "0.75rem",
                    color: "var(--text-muted)", background: "transparent",
                    border: "1px solid var(--border)", borderRadius: "4px",
                    padding: "0.35rem 0.7rem", textDecoration: "none",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,237,230,0.25)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                  }}
                >
                  Email
                </a>
              </div>

              {/* Blinking cursor */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  marginTop: "0.25rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: "0.75rem",
                    color: "var(--accent)",
                  }}
                >
                  $
                </span>
                <span
                  aria-hidden="true"
                  style={{
                    display: "inline-block",
                    width: "8px",
                    height: "15px",
                    background: "var(--accent)",
                    animation: "heroBlink 1s step-end infinite",
                    opacity: 0.8,
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Focus cards */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {focusCards.map((card, i) => (
              <motion.div
                key={card.category}
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  padding: "1.25rem 1.5rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: "0.6rem",
                    opacity: 0.85,
                  }}
                >
                  {card.category}
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    color: "var(--text-muted)",
                  }}
                >
                  {card.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timestamp */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{
            marginTop: "2.5rem",
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: "0.75rem",
            color: "var(--text-faint)",
          }}
        >
          // Last updated · May 2026
        </motion.p>
      </div>
    </section>
  );
}
