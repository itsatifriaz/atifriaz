"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AvailabilityBadge() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check viewport width on mount and resize
    function checkMobile() {
      setIsMobile(window.innerWidth <= 480);
    }
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const show = visible && !dismissed && !isMobile;

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="mailto:atifriaz.se@gmail.com"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "1.5rem",
            zIndex: 100,
            background: "rgba(10,10,10,0.9)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid var(--border-accent)",
            borderRadius: "8px",
            padding: "0.75rem 1.1rem",
            display: "flex",
            alignItems: "flex-start",
            gap: "0.75rem",
            textDecoration: "none",
            maxWidth: "260px",
          }}
          aria-label="Available for hire — email atifriaz.se@gmail.com"
        >
          {/* Pulse dot */}
          <span
            aria-hidden="true"
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--accent)",
              boxShadow: "0 0 8px var(--accent)",
              animation: "heroPulse 1.8s ease-in-out infinite",
              flexShrink: 0,
              marginTop: "3px",
            }}
          />

          {/* Text content */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <p
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "0.75rem",
                color: "var(--text)",
                lineHeight: 1.4,
                margin: 0,
              }}
            >
              Available for hire
            </p>
            <p
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "0.75rem",
                color: "var(--text-faint)",
                lineHeight: 1.4,
                margin: 0,
                marginTop: "0.15rem",
              }}
            >
              Open to remote · atifriaz.se@gmail.com
            </p>
          </div>

          {/* Close button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setDismissed(true);
            }}
            aria-label="Dismiss availability badge"
            style={{
              background: "none",
              border: "none",
              color: "var(--text-faint)",
              fontSize: "0.875rem",
              lineHeight: 1,
              padding: "0",
              flexShrink: 0,
              marginTop: "-1px",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--text)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--text-faint)";
            }}
          >
            ×
          </button>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
