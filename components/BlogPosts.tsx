"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const posts = [
  {
    title: "How I cut Zameen.com's LCP by 40% without a framework change",
    platform: "DEV" as const,
    url: "https://dev.to/iamatifriaz",
    date: "Mar 2025",
    readTime: "8 min read",
    excerpt:
      "A practical walkthrough of lazy loading, image optimisation, and render-blocking resource elimination on a Next.js + WordPress hybrid stack.",
  },
  {
    title: "AI-Native Development: My daily workflow with Claude Code & Copilot",
    platform: "Hashnode" as const,
    url: "https://atifriaz.hashnode.dev",
    date: "Jan 2025",
    readTime: "6 min read",
    excerpt:
      "How I use AI tools not as autocomplete but as pair programmers — prompting strategies, context management, and when to override the model.",
  },
  {
    title: "Building AI Drips: Solo SaaS from zero to paying users in 6 weeks",
    platform: "DEV" as const,
    url: "https://dev.to/iamatifriaz",
    date: "Nov 2024",
    readTime: "10 min read",
    excerpt:
      "The full story behind aidrips.com — Next.js 15, Prisma, Paddle billing, and the decisions that saved weeks of development time.",
  },
  {
    title: "The Principal Engineer mindset: owning systems, not just features",
    platform: "Hashnode" as const,
    url: "https://atifriaz.hashnode.dev",
    date: "Sep 2024",
    readTime: "5 min read",
    excerpt:
      "What separates a senior from a principal isn't seniority — it's the scope of problems you choose to own and the quality of decisions you leave behind.",
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

function PlatformBadge({ platform }: { platform: "DEV" | "Hashnode" }) {
  const isDev = platform === "DEV";
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontFamily: "var(--font-jetbrains), monospace",
        fontSize: "0.75rem",
        fontWeight: 600,
        letterSpacing: "0.06em",
        padding: "0.2rem 0.5rem",
        borderRadius: "4px",
        border: isDev ? "1px solid rgba(255,255,255,0.13)" : "1px solid rgba(41,98,255,0.3)",
        background: isDev ? "#0a0a0a" : "rgba(41,98,255,0.12)",
        color: isDev ? "#ffffff" : "#2962FF",
        flexShrink: 0,
      }}
    >
      {platform}
    </span>
  );
}

export default function BlogPosts() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="writing"
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
            Writing
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
            Thoughts I&apos;ve{" "}
            <span
              style={{ fontStyle: "italic", fontWeight: 400, color: "var(--text-muted)" }}
            >
              published.
            </span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 460px), 1fr))",
            gap: "1.25rem",
          }}
        >
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="work-card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                position: "relative",
              }}
            >
              {/* Platform badge top-right */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.0625rem",
                    fontWeight: 600,
                    color: "var(--text)",
                    lineHeight: 1.4,
                    letterSpacing: "-0.01em",
                    flexGrow: 1,
                  }}
                >
                  {post.title}
                </h3>
                <PlatformBadge platform={post.platform} />
              </div>

              {/* Excerpt */}
              <p
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                  color: "var(--text-muted)",
                  flexGrow: 1,
                }}
              >
                {post.excerpt}
              </p>

              {/* Footer row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: "0.75rem",
                    color: "var(--text-faint)",
                  }}
                >
                  {post.date} · {post.readTime}
                </span>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Read: ${post.title}`}
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
            </motion.div>
          ))}
        </div>

        {/* Read all posts CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          style={{ marginTop: "3rem", textAlign: "center" }}
        >
          <a
            href="https://dev.to/iamatifriaz"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Read all posts →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
