"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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

function FadeUp({ children, delay = 0, style, as = "div" }: {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
  as?: "div" | "p" | "h1" | "span";
}) {
  const Tag = motion[as] as React.ElementType;
  return (
    <Tag
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1], delay }}
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
      style={{ paddingTop: "5rem", paddingBottom: "6rem" }}
    >
      {/* Grid bg */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
        backgroundSize: "60px 60px", opacity: 0.3, pointerEvents: "none",
      }} />
      {/* Vignette */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 90% 70% at 40% 50%, transparent 20%, var(--bg) 100%)",
        pointerEvents: "none",
      }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full hero-grid">
        {/* LEFT: text */}
        <div>
          <FadeUp delay={0} style={{ marginBottom: "2rem" }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              fontFamily: "var(--font-jetbrains), monospace", fontSize: "0.6875rem",
              letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)",
              background: "var(--bg-secondary)", border: "1px solid var(--border)",
              borderRadius: "20px", padding: "0.35rem 0.9rem",
            }}>
              <span style={{
                width: "6px", height: "6px", background: "var(--accent)",
                borderRadius: "50%", display: "inline-block",
                boxShadow: "0 0 6px var(--accent)", animation: "heroPulse 2s ease-in-out infinite",
              }} />
              Open to Remote Opportunities
            </span>
          </FadeUp>

          <FadeUp delay={0.1} style={{ marginBottom: "1rem" }}>
            <div style={{
              fontFamily: "var(--font-jetbrains), monospace", fontSize: "0.75rem",
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "var(--accent)", minHeight: "1.2em",
            }}>
              <span>{typed}</span>
              <span style={{
                display: "inline-block", width: "2px", height: "0.85em",
                background: "var(--accent)", marginLeft: "2px", verticalAlign: "middle",
                animation: "heroBlink 1s step-end infinite",
              }} />
            </div>
          </FadeUp>

          <FadeUp delay={0.2} as="h1">
            <h1 className="font-display" style={{
              fontSize: "clamp(2.5rem, 5.5vw, 5.25rem)", lineHeight: 1.05,
              fontWeight: 700, color: "var(--text)", marginBottom: "1.5rem",
            }}>
              <span style={{ display: "block" }}>Lead Frontend</span>
              <span style={{ display: "block" }}>
                Engineer.{" "}
                <span style={{ fontWeight: 400, fontStyle: "italic", color: "var(--text-muted)" }}>
                  Building
                </span>
              </span>
              <span style={{ display: "block", color: "var(--accent)", fontStyle: "italic", fontWeight: 400 }}>
                interfaces that scale.
              </span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.35} as="p">
            <p style={{
              fontSize: "1rem", lineHeight: 1.7, color: "var(--text-muted)",
              maxWidth: "480px", marginBottom: "2.5rem",
            }}>
              10+ years shipping high-traffic products at{" "}
              <span style={{ color: "var(--text)" }}>Zameen.com</span> &amp;{" "}
              <span style={{ color: "var(--text)" }}>Cityscape Technology, Canada</span>.
            </p>
          </FadeUp>

          <FadeUp delay={0.5}>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="#work" className="btn-primary">
                View My Work
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="/resume.pdf" download className="btn-ghost">
                Download Resume
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 1v8M3 9l4 4 4-4M1 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </FadeUp>
        </div>

        {/* RIGHT: photo */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1], delay: 0.35 }}
          style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "flex-start" }}
        >
          {/* Thin accent vertical line — left edge */}
          <div aria-hidden="true" style={{
            position: "absolute", left: "-1.5rem", top: "15%", bottom: "15%", width: "1px",
            background: "linear-gradient(to bottom, transparent, var(--accent) 40%, transparent)",
            opacity: 0.5,
          }} />

          {/* Photo wrapper — natural square crop, fade at bottom */}
          <div style={{ position: "relative", width: "100%", maxWidth: "400px" }}>
            <Image
              src="/atifriaz.png"
              alt="Atif Riaz — Lead Frontend Engineer"
              width={800}
              height={800}
              priority
              sizes="(max-width: 900px) 90vw, 400px"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
                filter: "contrast(1.06) brightness(1.0) saturate(0.9)",
              }}
            />
            {/* Seamless bottom fade into page */}
            <div aria-hidden="true" style={{
              position: "absolute", bottom: 0, left: 0, right: 0, height: "45%",
              background: "linear-gradient(to top, var(--bg) 30%, transparent 100%)",
              pointerEvents: "none",
            }} />
            {/* Side fades */}
            <div aria-hidden="true" style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to right, var(--bg) 0%, transparent 12%, transparent 88%, var(--bg) 100%)",
              pointerEvents: "none",
            }} />
          </div>

          {/* Floating name chip */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            style={{
              position: "absolute",
              bottom: "40%",
              right: "0.5rem",
              background: "rgba(10,10,10,0.82)",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              padding: "0.55rem 0.85rem",
              backdropFilter: "blur(20px)",
            }}
          >
            <div style={{
              fontFamily: "var(--font-jetbrains), monospace", fontSize: "0.6rem",
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "var(--accent)", marginBottom: "0.2rem",
            }}>
              Atif Riaz
            </div>
            <div style={{
              fontFamily: "var(--font-jetbrains), monospace", fontSize: "0.55rem",
              letterSpacing: "0.08em", color: "var(--text-faint)",
            }}>
              Lead Frontend Engineer
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        style={{
          position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center",
          gap: "0.4rem", pointerEvents: "none",
        }}
      >
        <span style={{
          fontFamily: "var(--font-jetbrains), monospace", fontSize: "0.6rem",
          letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-faint)",
        }}>scroll</span>
        <div style={{
          width: "1px", height: "40px",
          background: "linear-gradient(to bottom, var(--text-faint), transparent)",
        }} />
      </motion.div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }
        @media (min-width: 900px) {
          .hero-grid { grid-template-columns: 1.1fr 0.9fr; }
        }
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
