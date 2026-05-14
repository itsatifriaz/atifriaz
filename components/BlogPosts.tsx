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
    <span className={isDev ? "badge-dev" : "badge-hashnode"}>
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
            Writing
          </p>
          <h2 className="font-display section-heading">
            Thoughts I&apos;ve{" "}
            <span className="heading-italic">
              published.
            </span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid-auto-fill-460">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="work-card flex flex-col gap-4 relative"
            >
              {/* Platform badge top-right */}
              <div className="flex justify-between items-start gap-3">
                <h3 className="card-heading grow">
                  {post.title}
                </h3>
                <PlatformBadge platform={post.platform} />
              </div>

              {/* Excerpt */}
              <p className="text-sm-body grow">
                {post.excerpt}
              </p>

              {/* Footer row */}
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="mono-xs text-faint">
                  {post.date} · {post.readTime}
                </span>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Read: ${post.title}`}
                  className="icon-btn"
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
          className="mt-12 text-center"
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
