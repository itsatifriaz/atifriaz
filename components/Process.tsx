"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover & Scope",
    body: "I start by understanding the problem deeply: user goals, technical constraints, and business context. No assumptions, no shortcuts.",
  },
  {
    number: "02",
    title: "Architect & Plan",
    body: "I design component hierarchies, data flows, and performance budgets before writing a line of code. Systems thinking from day one.",
  },
  {
    number: "03",
    title: "Build & Ship",
    body: "Clean, typed, accessible code with CI/CD. I ship incrementally, get feedback early, and never sacrifice quality for speed.",
  },
  {
    number: "04",
    title: "Monitor & Iterate",
    body: "Analytics, error tracking, and Core Web Vitals guide what gets refined. Shipping is the beginning, not the end.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section
      id="process"
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
            Approach
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
            How I{" "}
            <span
              style={{ fontStyle: "italic", fontWeight: 400, color: "var(--text-muted)" }}
            >
              work.
            </span>
          </h2>
        </motion.div>

        <div style={{ position: "relative" }}>
          {/* Horizontal connector line — desktop only */}
          {isDesktop && (
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={inView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "1.75rem",
                left: "12.5%",
                right: "12.5%",
                height: "1px",
                background: "var(--border)",
                transformOrigin: "left",
                zIndex: 0,
              }}
            />
          )}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isDesktop ? "repeat(4, 1fr)" : "1fr",
              gap: isDesktop ? "2rem" : "2.5rem",
              position: "relative",
              zIndex: 1,
            }}
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                    fontWeight: 700,
                    color: "var(--accent)",
                    opacity: 0.3,
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {step.number}
                </div>
                <h3
                  style={{
                    fontSize: "1.0625rem",
                    fontWeight: 600,
                    color: "var(--text)",
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    color: "var(--text-muted)",
                  }}
                >
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
