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
          className="availability-badge"
        >
          {/* Header row */}
          <div className="flex items-start gap-[0.65rem] mb-3">
            {/* Pulse dot */}
            <span
              aria-hidden="true"
              className="pulse-dot-offset"
            />
            <div className="flex-1 min-w-0">
              <p className="mono-xs text-primary leading-[1.4] m-0">
                Available for hire
              </p>
              <p className="mono-xs text-faint leading-[1.4] mt-[0.15rem] mb-0">
                Open to remote worldwide
              </p>
            </div>
            {/* Close button */}
            <button
              onClick={() => setDismissed(true)}
              aria-label="Dismiss"
              className="close-btn"
            >
              ×
            </button>
          </div>

          {/* Action buttons */}
          <div className="flex gap-2">
            <a
              href="https://cal.com/iamatifriaz"
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn-primary"
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
              className="action-btn-ghost"
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
