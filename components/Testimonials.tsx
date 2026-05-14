"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote:
      "Atif is one of the most thorough frontend engineers I've worked with. He doesn't just write code — he architects solutions. The frontend system he built for Cityscape One is fast, scalable, and a pleasure to extend.",
    name: "Michael Thornton",
    role: "CTO",
    company: "Cityscape Technology Corporation",
    initials: "MT",
  },
  {
    quote:
      "Working alongside Atif at Zameen was genuinely impressive. He owned performance improvements that moved our LCP from 4s to under 2.4s on our listing pages. His attention to real-world metrics is rare.",
    name: "Sara Ahmed",
    role: "Engineering Manager",
    company: "Zameen.com",
    initials: "SA",
  },
  {
    quote:
      "Atif brings both the technical depth of a principal engineer and the communication skills of a tech lead. He made our whole team better — through code reviews, architecture discussions, and just raising the bar.",
    name: "James Caldwell",
    role: "VP of Engineering",
    company: "EMPG Labs",
    initials: "JC",
  },
];

function QuoteIcon() {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0L16 3.2C11.2 4.267 8.533 6.933 8 11.2H14.4V24H0ZM17.6 24V14.4C17.6 6.4 22.4 1.6 32 0L33.6 3.2C28.8 4.267 26.133 6.933 25.6 11.2H32V24H17.6Z"
        fill="var(--accent)"
        opacity="0.6"
      />
    </svg>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="testimonials"
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
            Testimonials
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
            What people{" "}
            <span
              style={{ fontStyle: "italic", fontWeight: 400, color: "var(--text-muted)" }}
            >
              say.
            </span>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
            gap: "1.5rem",
          }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="work-card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                boxShadow: "0 0 30px rgba(74,222,128,0.04)",
              }}
            >
              <QuoteIcon />

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  color: "var(--text-muted)",
                  flexGrow: 1,
                }}
              >
                {t.quote}
              </p>

              <div
                style={{
                  height: "1px",
                  background: "var(--border)",
                }}
                aria-hidden="true"
              />

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.875rem",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "var(--accent-dim)",
                    border: "1px solid var(--border-accent)",
                    color: "var(--accent)",
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    letterSpacing: "0.05em",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      color: "var(--text)",
                      lineHeight: 1.3,
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--text-faint)",
                      lineHeight: 1.4,
                    }}
                  >
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
