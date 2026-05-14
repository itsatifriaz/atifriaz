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

function FadeUp({ children, delay = 0, className, as = "div" }: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "p" | "h1" | "span";
}) {
  const Tag = motion[as] as React.ElementType;
  return (
    <Tag
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1], delay }}
      className={className}
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
      <div aria-hidden="true" className="hero-grid-bg" />
      {/* Vignette — pulls harder on the right so grid doesn't fight the photo */}
      <div aria-hidden="true" className="hero-vignette" />

      {/* ── Fixed-width container — aligned with all other sections ── */}
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 hero-inner">

        {/* LEFT: text column */}
        <div className="hero-text">
          <FadeUp delay={0} className="mb-8">
            <span className="hero-pill">
              <span className="pulse-dot" />
              Open to Remote Opportunities
            </span>
          </FadeUp>

          <FadeUp delay={0.1} className="mb-4">
            <div className="mono-xs-upper text-accent typed-role-area">
              <span>{typed}</span>
              <span className="blink-cursor" />
            </div>
          </FadeUp>

          <FadeUp delay={0.2} as="h1">
            <h1 className="font-display hero-heading">
              <span className="block">Frontend</span>
              <span className="block">
                Developer.{" "}
                <span className="heading-italic">
                  Building
                </span>
              </span>
              <span className="block heading-accent">
                interfaces that scale.
              </span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.35} as="p">
            <p className="hero-body-text">
              10+ years shipping high-traffic products at{" "}
              <span className="text-primary">Zameen.com</span> &amp;{" "}
              <span className="text-primary">Cityscape Technology, Canada</span>.
            </p>
          </FadeUp>

          <FadeUp delay={0.5}>
            <div className="flex gap-4 flex-wrap">
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
          <div aria-hidden="true" className="hero-accent-line" />

          {/* Photo wrapper — fills column, bleeds to right */}
          <div className="hero-photo-wrap">
            <Image
              src="/atifriaz.png"
              alt="Atif Riaz — Lead Frontend Engineer"
              width={800}
              height={800}
              priority
              sizes="(max-width: 900px) 92vw, 48vw"
              className="hero-photo-img"
            />

            {/* Seamless bottom fade */}
            <div aria-hidden="true" className="hero-fade-bottom" />
            {/* Top fade */}
            <div aria-hidden="true" className="hero-fade-top" />
            {/* Left edge blends into text column */}
            <div aria-hidden="true" className="hero-fade-left" />
            {/* Right edge fade */}
            <div aria-hidden="true" className="hero-fade-right" />
          </div>

          {/* Floating name chip */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="hero-name-chip"
          >
            <div className="mono-xs-upper text-accent mb-[0.2rem]">
              Atif Riaz
            </div>
            <div className="mono-xs-wide text-faint">
              Lead Frontend Engineer
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-[0.4rem] pointer-events-none z-10"
      >
        <span className="scroll-hint-text">scroll</span>
        <div className="hero-scroll-line" />
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

        /* ── Desktop: text-heavy left, photo right ── */
        @media (min-width: 900px) {
          .hero-inner {
            grid-template-columns: 1.6fr 1fr;
            gap: 2rem;
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
