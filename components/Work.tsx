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
          className="mb-14"
        >
          <p className="section-label mb-3">
            Selected Work
          </p>
          <h2 className="font-display section-heading">
            Projects I&apos;ve{" "}
            <span className="heading-italic">
              shipped.
            </span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid-auto-fill-480">
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
      className="work-card flex flex-col gap-5"
    >
      {/* Top row */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="card-heading-lg">
            {project.name}
          </h3>
          <span className="role-label">
            {project.role}
          </span>
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${project.name}`}
          className="icon-btn"
        >
          <ArrowIcon />
        </a>
      </div>

      {/* Description */}
      <p className="desc-body grow">
        {project.description}
      </p>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-[0.35rem]">
        {project.stack.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
