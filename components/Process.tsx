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
            Approach
          </p>
          <h2 className="font-display section-heading">
            How I{" "}
            <span className="heading-italic">
              work.
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Horizontal connector line — desktop only */}
          {isDesktop && (
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={inView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              aria-hidden="true"
              className="process-connector"
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
                className="flex flex-col gap-4"
              >
                <div className="step-number">
                  {step.number}
                </div>
                <h3 className="card-heading">
                  {step.title}
                </h3>
                <p className="desc-body">
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
