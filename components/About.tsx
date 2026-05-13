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

          {/* Right: Visual + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            {/* Abstract shape / photo placeholder */}
            <div
              style={{
                aspectRatio: "4/3",
                background: "var(--bg-secondary)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Decorative geometric pattern */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `
                    radial-gradient(circle at 30% 30%, rgba(74, 222, 128, 0.06) 0%, transparent 50%),
                    radial-gradient(circle at 70% 70%, rgba(74, 222, 128, 0.04) 0%, transparent 50%)
                  `,
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "20%",
                  left: "15%",
                  width: "70%",
                  height: "60%",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  transform: "rotate(6deg)",
                  opacity: 0.5,
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "25%",
                  left: "20%",
                  width: "60%",
                  height: "50%",
                  border: "1px solid rgba(74, 222, 128, 0.15)",
                  borderRadius: "4px",
                  transform: "rotate(-3deg)",
                }}
              />
              <div
                style={{
                  position: "relative",
                  textAlign: "center",
                }}
              >
                <div
                  className="font-display"
                  style={{
                    fontSize: "4rem",
                    fontWeight: 700,
                    color: "var(--accent)",
                    lineHeight: 1,
                    opacity: 0.9,
                  }}
                >
                  AR
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--text-faint)",
                    marginTop: "0.5rem",
                  }}
                >
                  Atif Riaz
                </p>
              </div>
            </div>

            {/* Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1px",
                background: "var(--border)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    background: "var(--bg-secondary)",
                    padding: "1.5rem 1.25rem",
                  }}
                >
                  <div
                    className="font-display"
                    style={{
                      fontSize: "1.875rem",
                      fontWeight: 700,
                      color: "var(--accent)",
                      lineHeight: 1,
                      marginBottom: "0.4rem",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-jetbrains), monospace",
                      fontSize: "0.625rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--text-faint)",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
