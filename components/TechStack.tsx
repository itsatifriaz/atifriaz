"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stackGroups = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Angular", "Vue.js", "Nuxt", "TypeScript", "JavaScript"],
    ai: false,
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "SCSS/SASS", "Bootstrap", "CSS3"],
    ai: false,
  },
  {
    category: "Backend & CMS",
    items: ["Node.js", "Strapi", "WordPress", "PHP", "GraphQL", "REST APIs"],
    ai: false,
  },
  {
    category: "Data & State",
    items: ["Prisma", "PostgreSQL", "Redux", "Zustand", "TanStack Query"],
    ai: false,
  },
  {
    category: "Analytics & Marketing",
    items: ["Mixpanel", "Hotjar", "Google Analytics", "GTM", "Facebook Pixel", "Customer.io"],
    ai: false,
  },
  {
    category: "DevOps & Tools",
    items: ["Git/GitHub", "CI/CD", "AWS S3", "Webpack", "Vite", "Docker"],
    ai: false,
  },
  {
    category: "AI Tools & IDEs",
    aiLabel: "AI-Powered Workflow",
    items: ["Claude Code", "GitHub Copilot", "Cursor", "OpenAI Codex"],
    ai: true,
  },
];

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="stack"
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
            Technologies
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
            Tools &amp;{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                color: "var(--text-muted)",
              }}
            >
              Technologies.
            </span>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
            gap: "1rem",
          }}
        >
          {stackGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className={`stack-group${group.ai ? " ai-group" : ""}`}
              style={
                group.ai
                  ? { gridColumn: "1 / -1" }
                  : {}
              }
            >
              {group.ai && group.aiLabel && (
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: "0.75rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: "0.6rem",
                  }}
                >
                  ✦ {group.aiLabel}
                </p>
              )}
              <h3
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: group.ai ? "var(--accent)" : "var(--text-muted)",
                  marginBottom: "0.9rem",
                  opacity: group.ai ? 1 : 0.8,
                }}
              >
                {group.category}
              </h3>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0",
                  margin: "-0.2rem",
                }}
              >
                {group.items.map((item) => (
                  <span key={item} className="stack-item">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
