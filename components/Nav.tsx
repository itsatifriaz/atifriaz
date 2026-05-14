"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(10, 10, 10, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
      }}
    >
      <nav aria-label="Main navigation" className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          aria-label="Atif Riaz home"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "var(--accent)",
            letterSpacing: "0.04em",
          }}
        >
          AR
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-hover"
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: "0.75rem",
                  letterSpacing: "0.08em",
                  color: "var(--text-muted)",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--text)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--text-muted)")
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://cal.com/iamatifriaz"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: "0.45rem 1rem", fontSize: "0.75rem" }}
          >
            Book a Call
          </a>
          <a
            href="mailto:atifriaz.se@gmail.com"
            className="btn-ghost"
            style={{ padding: "0.45rem 1rem", fontSize: "0.75rem" }}
          >
            Email
          </a>
        </div>

        {/* Mobile menu button */}
        <MobileMenu />
      </nav>
    </motion.header>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-menu"
        style={{
          background: "transparent",
          border: "1px solid var(--border)",
          borderRadius: "4px",
          padding: "0.4rem 0.6rem",
          color: "var(--text-muted)",
          cursor: "pointer",
          fontSize: "0.75rem",
          fontFamily: "var(--font-jetbrains), monospace",
        }}
      >
        {open ? "✕" : "☰"}
      </button>
      {open && (
        <motion.div
          id="mobile-nav-menu"
          role="menu"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            right: 0,
            background: "var(--bg-secondary)",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            padding: "0.75rem",
            minWidth: "160px",
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                color: "var(--text-muted)",
                padding: "0.5rem 0.75rem",
                borderRadius: "4px",
                transition: "color 0.2s ease, background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--text)";
                (e.currentTarget as HTMLElement).style.background = "var(--bg-tertiary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </div>
  );
}
