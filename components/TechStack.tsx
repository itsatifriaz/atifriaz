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
            Technologies
          </p>
          <h2 className="font-display section-heading">
            Tools &amp;{" "}
            <span className="heading-italic">
              Technologies.
            </span>
          </h2>
        </motion.div>

        <div className="grid-auto-fill-tech">
          {stackGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className={`stack-group${group.ai ? " ai-group" : ""}`}
              style={group.ai ? { gridColumn: "1 / -1" } : {}}
            >
              {group.ai && group.aiLabel && (
                <p className="section-label mb-[0.6rem]">
                  ✦ {group.aiLabel}
                </p>
              )}
              <h3
                className={`mono-xs-upper mb-[0.9rem] ${group.ai ? "text-accent" : "text-muted"}`}
                style={{ opacity: group.ai ? 1 : 0.8 }}
              >
                {group.category}
              </h3>
              <div className="stack-items-wrap">
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
