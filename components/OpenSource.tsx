"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const repos = [
  {
    name: "aidrips",
    url: "https://github.com/itsatifriaz/aidrips",
    desc: "AI tools directory — solo SaaS with Paddle billing, NextAuth v5, admin panel, and tool submission pipeline.",
    lang: "TypeScript",
    color: "#3178c6",
    stars: 48,
    forks: 9,
  },
  {
    name: "nextjs-seo-kit",
    url: "https://github.com/itsatifriaz/nextjs-seo-kit",
    desc: "Opinionated Next.js starter with structured data schemas, sitemap, robots.txt, and OG image generation preconfigured.",
    lang: "TypeScript",
    color: "#3178c6",
    stars: 124,
    forks: 31,
  },
  {
    name: "react-perf-utils",
    url: "https://github.com/itsatifriaz/react-perf-utils",
    desc: "Lightweight React performance utilities: component profiling, render-count hooks, and INP measurement helpers.",
    lang: "JavaScript",
    color: "#f0db4f",
    stars: 67,
    forks: 14,
  },
];

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M2 10L10 2M10 2H4M10 2v6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ForkIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm0 2.122a2.25 2.25 0 1 0-1.5 0v.878A2.25 2.25 0 0 0 5.75 8.5h1.5v2.128a2.251 2.251 0 1 0 1.5 0V8.5h1.5a2.25 2.25 0 0 0 2.25-2.25v-.878a2.25 2.25 0 1 0-1.5 0v.878a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 6.25v-.878zm3.75 7.378a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm3-8.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z" />
    </svg>
  );
}

export default function OpenSource() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="open-source"
      className="section-pad"
      ref={ref}
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>
            Open Source
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
            Code I&apos;ve{" "}
            <span
              style={{ fontStyle: "italic", fontWeight: 400, color: "var(--text-muted)" }}
            >
              shared.
            </span>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
            gap: "1.25rem",
          }}
        >
          {repos.map((repo, i) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="work-card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {/* Top row: name + arrow link */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.0625rem",
                    fontWeight: 600,
                    color: "var(--text)",
                    fontFamily: "var(--font-jetbrains), monospace",
                  }}
                >
                  {repo.name}
                </h3>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${repo.name} on GitHub`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "30px",
                    height: "30px",
                    border: "1px solid var(--border)",
                    borderRadius: "50%",
                    color: "var(--text-muted)",
                    transition: "border-color 0.2s, color 0.2s, background 0.2s",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                    (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                    (e.currentTarget as HTMLElement).style.background = "var(--accent-dim)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                >
                  <ArrowIcon />
                </a>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.65,
                  color: "var(--text-muted)",
                  flexGrow: 1,
                }}
              >
                {repo.desc}
              </p>

              {/* Bottom row: lang + stars + forks */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: repo.color,
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains), monospace",
                      fontSize: "0.75rem",
                      color: "var(--text-faint)",
                    }}
                  >
                    {repo.lang}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains), monospace",
                      fontSize: "0.75rem",
                      color: "var(--text-faint)",
                    }}
                  >
                    ★ {repo.stars}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                  <span style={{ color: "var(--text-faint)" }}>
                    <ForkIcon />
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains), monospace",
                      fontSize: "0.75rem",
                      color: "var(--text-faint)",
                    }}
                  >
                    {repo.forks}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
