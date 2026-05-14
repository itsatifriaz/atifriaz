"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    period: "2022 — Present",
    title: "Lead Frontend & Principal Software Engineer",
    company: "Cityscape Technology Corporation",
    location: "Mississauga, Canada (Remote)",
    current: true,
  },
  {
    period: "2020 — 2022",
    title: "Staff Software Engineer (Frontend)",
    company: "Dubizzle Labs / EMPG",
    location: "Lahore, Pakistan",
    current: false,
  },
  {
    period: "2017 — 2022",
    title: "Staff Software Engineer (Frontend)",
    company: "Zameen.com",
    location: "Lahore, Pakistan",
    current: false,
  },
  {
    period: "2016 — 2017",
    title: "Lead Frontend Developer",
    company: "Concept Beans",
    location: "Lahore, Pakistan",
    current: false,
  },
  {
    period: "2014 — 2016",
    title: "Frontend Developer",
    company: "Concept Beans",
    location: "Lahore, Pakistan",
    current: false,
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{ borderTop: "1px solid var(--border)" }}
      className="section-pad"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>
            Experience
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
            Where I&apos;ve{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                color: "var(--text-muted)",
              }}
            >
              worked.
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative", maxWidth: "720px" }}>
          {/* Vertical line */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "3px",
              top: "6px",
              bottom: 0,
              width: "1px",
              background:
                "linear-gradient(to bottom, var(--accent), var(--border) 80%, transparent)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  display: "flex",
                  gap: "1.75rem",
                  paddingBottom: i < experiences.length - 1 ? "2.5rem" : 0,
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    flexShrink: 0,
                    paddingTop: "6px",
                  }}
                >
                  <div className="timeline-dot" />
                </div>

                {/* Content */}
                <div style={{ paddingBottom: "0.5rem" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "1rem",
                      flexWrap: "wrap",
                      marginBottom: "0.35rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains), monospace",
                        fontSize: "0.75rem",
                        letterSpacing: "0.08em",
                        color: exp.current ? "var(--accent)" : "var(--text-faint)",
                      }}
                    >
                      {exp.period}
                    </span>
                    {exp.current && (
                      <span
                        style={{
                          fontFamily: "var(--font-jetbrains), monospace",
                          fontSize: "0.75rem",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "var(--accent)",
                          background: "var(--accent-dim)",
                          border: "1px solid var(--border-accent)",
                          borderRadius: "3px",
                          padding: "0.15rem 0.45rem",
                        }}
                      >
                        Current
                      </span>
                    )}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.0625rem",
                      fontWeight: 600,
                      color: "var(--text)",
                      marginBottom: "0.25rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {exp.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    {exp.company}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-jetbrains), monospace",
                      fontSize: "0.75rem",
                      color: "var(--text-faint)",
                      marginTop: "0.2rem",
                    }}
                  >
                    {exp.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
