"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    name: "Cityscape One",
    url: "https://cityscapeone.com",
    description:
      "Technology-driven real estate brokerage platform. Led full frontend architecture, SEO optimization, and analytics integration for Canada's GTA market.",
    stack: ["Vue.js", "Nuxt", "Mapbox", "GTM", "Hotjar"],
    role: "Lead Frontend Architect",
  },
  {
    name: "Zameen.com",
    url: "https://zameen.com",
    description:
      "Pakistan's #1 property portal serving millions of users. Staff Engineer on high-traffic search, listing, and map experiences.",
    stack: ["React", "Next.js", "SCSS", "WordPress", "SEO", "AMP"],
    role: "Staff Software Engineer",
  },
  {
    name: "AI Drips",
    url: "https://aidrips.com",
    description:
      "AI tools directory — solo-built SaaS product with Paddle monetization, admin panel, and tool submission system.",
    stack: ["Next.js 15", "Prisma", "PostgreSQL", "NextAuth v5", "Paddle", "Tailwind"],
    role: "Solo Founder & Engineer",
  },
  {
    name: "EMPG Labs Portfolio Sites",
    url: "https://dubizzle.com",
    description:
      "Rebuilt and maintained portfolio/blog sites across 5 major real estate brands in MENA and Pakistan — Dubizzle, Bayut, OLX Pakistan, Bproperty, Mubawwab.",
    stack: ["WordPress", "Next.js", "Strapi", "SCSS", "Bootstrap"],
    role: "Staff Software Engineer",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
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

export default function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="section-pad" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>
            Selected Work
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
            Projects I&apos;ve{" "}
            <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--text-muted)" }}>
              shipped.
            </span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 480px), 1fr))",
            gap: "1.25rem",
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: (typeof projects)[number];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="work-card"
      style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
    >
      {/* Top row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <h3
            style={{
              fontSize: "1.125rem",
              fontWeight: 600,
              color: "var(--text)",
              marginBottom: "0.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            {project.name}
          </h3>
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--accent)",
              opacity: 0.8,
            }}
          >
            {project.role}
          </span>
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
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
          aria-label={`Visit ${project.name}`}
        >
          <ArrowIcon />
        </a>
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: "0.9rem",
          lineHeight: 1.7,
          color: "var(--text-muted)",
          flexGrow: 1,
        }}
      >
        {project.description}
      </p>

      {/* Stack tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
        {project.stack.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
