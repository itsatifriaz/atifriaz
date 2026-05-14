"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Theme = "dark" | "light";

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = document.documentElement.getAttribute("data-theme") as Theme;
    setTheme(stored === "light" ? "light" : "dark");
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch {}
  }

  // Render a placeholder during SSR to avoid hydration mismatch
  if (!mounted) {
    return <div className="theme-toggle-placeholder" />;
  }

  const isLight = theme === "light";

  return (
    <motion.button
      onClick={toggle}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      whileTap={{ scale: 0.9 }}
      className="theme-toggle"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: isLight ? 12 : -12, opacity: 0, rotate: isLight ? -30 : 30 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: isLight ? -12 : 12, opacity: 0, rotate: isLight ? 30 : -30 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          {isLight ? <SunIcon /> : <MoonIcon />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
