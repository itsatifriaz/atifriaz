"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tools = [
  { icon: "🤖", label: "Claude Code" },
  { icon: "🧠", label: "GitHub Copilot" },
  { icon: "⚡", label: "Cursor" },
  { icon: "🔮", label: "OpenAI Codex" },
];

export default function AICallout() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="ai-strip">
      <div
        className="max-w-6xl mx-auto px-6"
        style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
          className="md:flex-row md:items-center md:justify-between"
        >
          {/* Text block */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut" }}
            style={{ maxWidth: "520px" }}
          >
            <p
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "0.6875rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "0.5rem",
              }}
            >
              AI-Enhanced Development
            </p>
            <p
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.65,
                color: "var(--text-muted)",
              }}
            >
              I build faster and smarter using the latest AI-powered IDEs and
              tools as a core part of my engineering workflow — not as a
              gimmick, but as a{" "}
              <span style={{ color: "var(--text)" }}>multiplier</span>.
            </p>
          </motion.div>

          {/* Pills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.6rem",
            }}
          >
            {tools.map((tool, i) => (
              <motion.span
                key={tool.label}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                className="ai-pill"
              >
                <span>{tool.icon}</span>
                {tool.label}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
