"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const contactLinks = [
  {
    label: "Schedule a Call",
    href: "https://cal.com/iamatifriaz",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <rect x="1" y="2" width="12" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M1 5.5h12M4.5 1v2.5M9.5 1v2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M4 8h1.5M6.5 8H8M9.5 8H11M4 10.5h1.5M6.5 10.5H8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    primary: true,
  },
  {
    label: "Email Me",
    href: "mailto:atifriaz.se@gmail.com",
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
        <path
          d="M1 3.5A1.5 1.5 0 012.5 2h10A1.5 1.5 0 0114 3.5v8a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 11.5v-8zM2.5 3L7.5 7.5 12.5 3"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    primary: false,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/iamatifriaz",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M4 6v4M4 4.5v.01M6.5 10V7.5c0-1 .5-1.5 1.5-1.5s1.5.5 1.5 1.5V10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    primary: false,
  },
  {
    label: "X / Twitter",
    href: "https://twitter.com/iamatifriaz",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path
          d="M1 1l4.8 6L1 13h1.5l3.5-4.4L9.5 13H13L8 6.8 12.5 1H11L6.8 5l-3.3-4H1z"
          fill="currentColor"
        />
      </svg>
    ),
    primary: false,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="section-pad"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {/* Animated envelope */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: "2rem" }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              style={{ display: "inline-block" }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  border: "1px solid var(--border-accent)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "var(--accent-dim)",
                  margin: "0 auto",
                }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 5.5A2.5 2.5 0 014.5 3h13A2.5 2.5 0 0120 5.5v11a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 012 16.5v-11zM2 5.5L11 12l9-6.5"
                    stroke="var(--accent)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="section-label"
            style={{ marginBottom: "1rem" }}
          >
            Contact
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "var(--text)",
              marginBottom: "1.25rem",
            }}
          >
            Let&apos;s build something{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                color: "var(--accent)",
              }}
            >
              great.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "var(--text-muted)",
              marginBottom: "2.75rem",
            }}
          >
            Open to remote senior / lead / principal roles and freelance
            projects. Let&apos;s talk.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "0.85rem",
            }}
          >
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={link.primary ? "btn-primary" : "btn-ghost"}
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
