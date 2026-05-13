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
      className="hero-section"
    >
      {/* Grid background — full section */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
        backgroundSize: "60px 60px", opacity: 0.3, pointerEvents: "none",
      }} />
      {/* Vignette — pulls harder on the right so grid doesn't fight the photo */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 80% 80% at 30% 50%, transparent 10%, var(--bg) 90%)",
        pointerEvents: "none",
      }} />

      {/* ── Fixed-width container — aligned with all other sections ── */}
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 hero-inner">

        {/* LEFT: text column */}
        <div className="hero-text">
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
              fontSize: "clamp(2.5rem, 4.5vw, 5.25rem)", lineHeight: 1.05,
              fontWeight: 700, color: "var(--text)", marginBottom: "1.5rem",
            }}>
              <span style={{ display: "block" }}>Frontend</span>
              <span style={{ display: "block" }}>
                Developer.{" "}
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

        {/* RIGHT: photo column — bleeds to viewport edge */}
        <motion.div
          className="hero-photo-col"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, ease: [0.22, 0.61, 0.36, 1], delay: 0.3 }}
        >
          {/* Green accent glow behind the photo */}
          <div aria-hidden="true" className="hero-glow" />

          {/* Thin accent vertical line — left edge separator */}
          <div aria-hidden="true" style={{
            position: "absolute", left: 0, top: "10%", bottom: "10%", width: "1px",
            background: "linear-gradient(to bottom, transparent, var(--accent) 40%, transparent)",
            opacity: 0.4, zIndex: 2,
          }} />

          {/* Photo wrapper — fills column, bleeds to right */}
          <div className="hero-photo-wrap">
            <Image
              src="/atifriaz.png"
              alt="Atif Riaz — Lead Frontend Engineer"
              width={800}
              height={800}
              priority
              sizes="(max-width: 900px) 92vw, 48vw"
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                objectFit: "cover",
                objectPosition: "center top",
                filter: "contrast(1.06) brightness(1.0) saturate(0.9)",
              }}
            />

            {/* Seamless bottom fade into page bg */}
            <div aria-hidden="true" style={{
              position: "absolute", bottom: 0, left: 0, right: 0, height: "40%",
              background: "linear-gradient(to top, var(--bg) 25%, transparent 100%)",
              pointerEvents: "none", zIndex: 1,
            }} />
            {/* Left edge blends into text column */}
            <div aria-hidden="true" style={{
              position: "absolute", top: 0, left: 0, bottom: 0, width: "35%",
              background: "linear-gradient(to right, var(--bg) 0%, transparent 100%)",
              pointerEvents: "none", zIndex: 1,
            }} />
          </div>

          {/* Floating name chip */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            style={{
              position: "absolute",
              bottom: "35%",
              right: "1rem",
              background: "rgba(10,10,10,0.82)",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              padding: "0.55rem 0.85rem",
              backdropFilter: "blur(20px)",
              zIndex: 4,
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
          gap: "0.4rem", pointerEvents: "none", zIndex: 10,
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
        /* ── Hero section shell ── */
        .hero-section {
          min-height: 100svh;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: 5rem;
          padding-bottom: 6rem;
        }

        /* ── Two-column grid inside fixed container ── */
        .hero-inner {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: center;
        }

        /* ── Text column ── */
        .hero-text {
          /* inherits container padding */
        }

        /* ── Photo column ── */
        .hero-photo-col {
          position: relative;
          width: 100%;
          display: flex;
          align-items: stretch;
        }

        .hero-photo-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
        }

        /* Glow */
        .hero-glow {
          position: absolute;
          inset: -10% -5%;
          background: radial-gradient(ellipse 70% 60% at 60% 50%, rgba(74,222,128,0.12) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        /* ── Desktop: side-by-side, equal columns ── */
        @media (min-width: 900px) {
          .hero-inner {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }

          .hero-photo-wrap {
            aspect-ratio: unset;
            height: min(80vh, 700px);
            min-height: 480px;
          }
        }

        /* ── Mobile: stacked ── */
        @media (max-width: 899px) {
          .hero-photo-wrap {
            aspect-ratio: 1 / 1;
            max-width: 420px;
            margin: 0 auto;
          }
        }

        /* ── Keyframes ── */
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
