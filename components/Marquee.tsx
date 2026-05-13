"use client";

import { motion } from "framer-motion";

const items = [
  "React",
  "Next.js",
  "Angular",
  "Vue",
  "Nuxt",
  "TypeScript",
  "Tailwind CSS",
  "Strapi",
  "GraphQL",
  "PostgreSQL",
  "Prisma",
  "Node.js",
  "Claude Code",
  "GitHub Copilot",
  "Cursor",
  "OpenAI Codex",
  "CI/CD",
  "AWS S3",
  "SEO",
  "Framer Motion",
  "Redux",
  "Zustand",
  "Vite",
  "Docker",
];

const AI_ITEMS = new Set(["Claude Code", "GitHub Copilot", "Cursor", "OpenAI Codex"]);

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        overflow: "hidden",
        padding: "0.85rem 0",
        background: "var(--bg-secondary)",
      }}
      aria-hidden="true"
    >
      <div
        className="animate-marquee"
        style={{
          display: "flex",
          width: "max-content",
          gap: "2.5rem",
          alignItems: "center",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "0.6875rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: AI_ITEMS.has(item) ? "var(--accent)" : "var(--text-faint)",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              whiteSpace: "nowrap",
            }}
          >
            {item}
            <span
              style={{
                display: "inline-block",
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                background: AI_ITEMS.has(item)
                  ? "var(--accent)"
                  : "var(--text-faint)",
                opacity: 0.5,
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
