"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AvailabilityBadge() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function checkMobile() {
      setIsMobile(window.innerWidth <= 480);
    }
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const show = visible && !dismissed && !isMobile;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
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
            padding: "0.85rem 1.1rem",
            maxWidth: "272px",
          }}
        >
          {/* Header row */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", marginBottom: "0.75rem" }}>
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
                marginTop: "4px",
              }}
            />
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "0.75rem",
                color: "var(--text)",
                lineHeight: 1.4,
                margin: 0,
              }}>
                Available for hire
              </p>
              <p style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "0.75rem",
                color: "var(--text-faint)",
                lineHeight: 1.4,
                margin: "0.15rem 0 0",
              }}>
                Open to remote worldwide
              </p>
            </div>
            {/* Close button */}
            <button
              onClick={() => setDismissed(true)}
              aria-label="Dismiss"
              style={{
                background: "none",
                border: "none",
                color: "var(--text-faint)",
                fontSize: "0.875rem",
                lineHeight: 1,
                padding: 0,
                flexShrink: 0,
                cursor: "pointer",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-faint)"; }}
            >
              ×
            </button>
          </div>

          {/* Action buttons */}
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <a
              href="https://cal.com/iamatifriaz"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.35rem",
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "#0a0a0a",
                background: "var(--accent)",
                border: "1px solid var(--accent)",
                borderRadius: "4px",
                padding: "0.4rem 0.65rem",
                textDecoration: "none",
                transition: "background 0.2s, box-shadow 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#6ee79a";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 14px rgba(74,222,128,0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--accent)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Calendar icon */}
              <svg width="11" height="11" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <rect x="1" y="2" width="12" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M1 5.5h12M4.5 1v2.5M9.5 1v2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              Book a Call
            </a>
            <a
              href="mailto:atifriaz.se@gmail.com"
              style={{
                flex: 1,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.35rem",
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                background: "transparent",
                border: "1px solid var(--border)",
                borderRadius: "4px",
                padding: "0.4rem 0.65rem",
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,237,230,0.25)";
                (e.currentTarget as HTMLElement).style.color = "var(--text)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
              }}
            >
              {/* Email icon */}
              <svg width="11" height="11" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 3.5A1.5 1.5 0 012.5 2h9A1.5 1.5 0 0113 3.5v7a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 011 10.5v-7zM2 3l5 4 5-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Email
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
