"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
  "Lead Frontend Engineer",
  "Principal Software Engineer",
  "UI Architect",
  "React & Next.js Expert",
  "AI-Enhanced Developer",
];

function useTypingCycle(words: string[], speed = 60, pause = 2200) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed + Math.random() * 20);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }

    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return displayed;
}

function FadeUp({
  children,
  delay = 0,
  className,
  style,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: "div" | "p" | "h1" | "h2" | "span";
}) {
  const Tag = motion[as] as React.ElementType;
  return (
    <Tag
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1], delay }}
      className={className}
      style={style}
    >
      {children}
    </Tag>
  );
}

export default function Hero() {
  const typed = useTypingCycle(roles);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      style={{ paddingTop: "5rem", paddingBottom: "4rem" }}
    >
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.35,
          pointerEvents: "none",
        }}
      />
      {/* Radial fade overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 30%, var(--bg) 100%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Availability badge */}
        <FadeUp delay={0} style={{ marginBottom: "2.5rem" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "0.6875rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              background: "var(--bg-secondary)",
              border: "1px solid var(--border)",
              borderRadius: "20px",
              padding: "0.35rem 0.9rem",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                background: "var(--accent)",
                borderRadius: "50%",
                display: "inline-block",
                boxShadow: "0 0 6px var(--accent)",
                animation: "heroPulse 2s ease-in-out infinite",
              }}
            />
            Open to Remote Opportunities
          </span>
        </FadeUp>

        {/* Animated role title */}
        <FadeUp delay={0.1} style={{ marginBottom: "1.25rem" }}>
          <div
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent)",
            }}
          >
            <span>{typed}</span>
            <span
              style={{
                display: "inline-block",
                width: "2px",
                height: "0.85em",
                background: "var(--accent)",
                marginLeft: "2px",
                verticalAlign: "middle",
                animation: "heroBlink 1s step-end infinite",
              }}
            />
          </div>
        </FadeUp>

        {/* Main headline */}
        <FadeUp delay={0.2} as="h1">
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(2.75rem, 7vw, 6rem)",
              lineHeight: 1.05,
              fontWeight: 700,
              color: "var(--text)",
              marginBottom: "1.75rem",
              maxWidth: "900px",
            }}
          >
            <span style={{ display: "block" }}>Frontend</span>
            <span style={{ display: "block" }}>
              Developer.{" "}
              <span
                style={{
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "var(--text-muted)",
                }}
              >
                Building
              </span>
            </span>
            <span
              style={{
                display: "block",
                color: "var(--accent)",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              interfaces that scale.
            </span>
          </h1>
        </FadeUp>

        {/* Subtext */}
        <FadeUp delay={0.35} as="p">
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.65,
              color: "var(--text-muted)",
              maxWidth: "540px",
              marginBottom: "2.75rem",
            }}
          >
            10+ years shipping high-traffic products at{" "}
            <a href="https://www.zameen.com/" target="_blank"><span style={{ color: "var(--text)" }}>Zameen.com,</span></a> <a href="https://www.bayut.com/" target="_blank"><span style={{ color: "var(--text)" }}>Bayut.com,</span></a> &amp;{" "}
            <a href="https://www.cityscapeone.com/" target="_blank">
            <span style={{ color: "var(--text)" }}>
              CityscapeOne.com
            </span></a>
            .
          </p>
        </FadeUp>

        {/* CTAs */}
        <FadeUp delay={0.5}>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#work" className="btn-primary">
              View My Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M1 7h12M7 1l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="/resume.pdf" download className="btn-ghost">
              Download Resume
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M7 1v8M3 9l4 4 4-4M1 13h12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </FadeUp>

      </div>

      {/* Scroll hint — pinned to section bottom center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--text-faint)",
          }}
        >
          scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, var(--text-faint), transparent)",
          }}
        />
      </motion.div>

      <style>{`
        @keyframes heroBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes heroPulse {
          0%, 100% { box-shadow: 0 0 6px var(--accent); opacity: 1; }
          50% { box-shadow: 0 0 14px var(--accent); opacity: 0.7; }
        }
      `}</style>
    </section>
  );
}
