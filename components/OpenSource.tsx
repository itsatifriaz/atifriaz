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
      className="section-pad section-border"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-14"
        >
          <p className="section-label mb-3">
            Open Source
          </p>
          <h2 className="font-display section-heading">
            Code I&apos;ve{" "}
            <span className="heading-italic">
              shared.
            </span>
          </h2>
        </motion.div>

        <div className="grid-auto-fill-300">
          {repos.map((repo, i) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="work-card flex flex-col gap-4"
            >
              {/* Top row: name + arrow link */}
              <div className="flex justify-between items-start">
                <h3 className="card-heading">
                  {repo.name}
                </h3>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${repo.name} on GitHub`}
                  className="icon-btn"
                >
                  <ArrowIcon />
                </a>
              </div>

              {/* Description */}
              <p className="desc-body grow">
                {repo.desc}
              </p>

              {/* Bottom row: lang + stars + forks */}
              <div className="flex items-center flex-wrap gap-4">
                <div className="flex items-center gap-[0.4rem]">
                  {/* lang-dot keeps runtime color */}
                  <span
                    className="lang-dot"
                    style={{ background: repo.color }}
                    aria-hidden="true"
                  />
                  <span className="mono-xs text-faint">
                    {repo.lang}
                  </span>
                </div>
                <div className="flex items-center gap-[0.3rem]">
                  <span className="mono-xs text-faint">
                    ★ {repo.stars}
                  </span>
                </div>
                <div className="flex items-center gap-[0.3rem]">
                  <span className="text-faint">
                    <ForkIcon />
                  </span>
                  <span className="mono-xs text-faint">
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
