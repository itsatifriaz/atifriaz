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
      className="section-pad section-border"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-14"
        >
          <p className="section-label mb-3">
            Now
          </p>
          <h2 className="font-display section-heading">
            What I&apos;m doing{" "}
            <span className="heading-italic">
              right now.
            </span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid-auto-fill-now">
          {/* Left: Terminal panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="terminal-panel"
          >
            {/* Terminal top bar */}
            <div className="terminal-bar">
              <span aria-hidden="true" className="terminal-dot-red" />
              <span aria-hidden="true" className="terminal-dot-yellow" />
              <span aria-hidden="true" className="terminal-dot-green" />
              <span className="mono-xs text-faint ml-2">
                status.current
              </span>
            </div>

            {/* Status rows */}
            <div className="terminal-body">
              {statusRows.map((row, i) => (
                <motion.div
                  key={row.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                  className="flex gap-2 flex-wrap items-baseline"
                >
                  <span className="mono-xs-narrow text-accent shrink-0">
                    {row.label}
                  </span>
                  <span className="mono-xs text-faint shrink-0">
                    :
                  </span>
                  <span className="mono-sm text-muted leading-[1.5]">
                    {row.value}
                  </span>
                </motion.div>
              ))}

              {/* Action links */}
              <div className="flex gap-2 flex-wrap mt-1">
                <a
                  href="https://cal.com/iamatifriaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn-primary"
                >
                  Book a Call
                </a>
                <a
                  href="mailto:atifriaz.se@gmail.com"
                  className="action-btn-ghost"
                >
                  Email
                </a>
              </div>

              {/* Blinking cursor */}
              <div className="flex items-center gap-[0.4rem] mt-1">
                <span className="mono-xs text-accent">$</span>
                <span aria-hidden="true" className="blink-block" />
              </div>
            </div>
          </motion.div>

          {/* Right: Focus cards */}
          <div className="flex flex-col gap-4">
            {focusCards.map((card, i) => (
              <motion.div
                key={card.category}
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                className="focus-card"
              >
                <p className="section-label mb-[0.6rem]">
                  {card.category}
                </p>
                <p className="desc-body">
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
          className="timestamp-comment mt-10"
        >
          // Last updated · May 2026
        </motion.p>
      </div>
    </section>
  );
}
