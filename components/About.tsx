"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "5+", label: "Major Products" },
  { value: "2", label: "Countries" },
  { value: "1M+", label: "Users Reached" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="section-pad"
      ref={ref}
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
          }}
          className="lg:grid-cols-2"
        >
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label" style={{ marginBottom: "1rem" }}>
              About
            </p>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: "var(--text)",
                marginBottom: "2rem",
              }}
            >
              A frontend engineer who{" "}
              <span
                style={{ fontStyle: "italic", fontWeight: 400, color: "var(--text-muted)" }}
              >
                thinks in systems.
              </span>
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                fontSize: "0.9375rem",
                lineHeight: 1.75,
                color: "var(--text-muted)",
              }}
            >
              <p>
                I&apos;ve spent 10+ years building interfaces people actually
                use — from{" "}
                <span style={{ color: "var(--text)" }}>Zameen.com</span>{" "}
                serving millions of Pakistani users, to{" "}
                <span style={{ color: "var(--text)" }}>
                  Cityscape Technology
                </span>{" "}
                helping Canadian homebuyers navigate the GTA market.
              </p>
              <p>
                My work sits at the intersection of frontend engineering,
                product thinking, and performance. I don&apos;t just ship
                features — I care about load time, SEO, accessibility, and the
                developer experience left behind for the next engineer.
              </p>
              <p>
                I also leverage the latest AI-powered tools —{" "}
                <span style={{ color: "var(--accent)" }}>Claude Code</span>,{" "}
                <span style={{ color: "var(--accent)" }}>GitHub Copilot</span>,{" "}
                <span style={{ color: "var(--accent)" }}>Cursor</span>, and{" "}
                <span style={{ color: "var(--accent)" }}>OpenAI Codex</span> —
                as a core part of my workflow. This isn&apos;t a trend for me;
                it&apos;s how I consistently deliver more, faster, without
                cutting corners.
              </p>
              <p>
                Currently based in{" "}
                <span style={{ color: "var(--text)" }}>Lahore, Pakistan</span>.
                Open to remote roles worldwide.
              </p>
            </div>

            {/* AI badge */}
            <div style={{ marginTop: "2rem" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  background: "var(--accent-dim)",
                  border: "1px solid var(--border-accent)",
                  borderRadius: "4px",
                  padding: "0.4rem 0.8rem",
                }}
              >
                ✦ AI-Native Workflow
              </span>
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "3rem 2rem",
              alignContent: "start",
              paddingTop: "4rem",
            }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
              >
                <div
                  className="font-display"
                  style={{
                    fontSize: "clamp(2.25rem, 4vw, 3rem)",
                    fontWeight: 700,
                    color: "var(--accent)",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: "0.625rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--text-faint)",
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
