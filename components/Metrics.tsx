"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    prefix: "",
    value: 1,
    suffix: "M+",
    label: "Users Reached",
    desc: "Monthly active users across Zameen.com & Cityscape",
  },
  {
    prefix: "",
    value: 10,
    suffix: "+",
    label: "Years Shipping",
    desc: "Building high-traffic products since 2014",
  },
  {
    prefix: "",
    value: 5,
    suffix: "+",
    label: "Products Launched",
    desc: "End-to-end ownership across 2 countries",
  },
  {
    prefix: "",
    value: 40,
    suffix: "%",
    label: "LCP Improvement",
    desc: "Core Web Vitals uplift at Zameen.com",
  },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [active, target, duration]);

  return count;
}

function StatCard({
  stat,
  index,
  inView,
}: {
  stat: (typeof stats)[number];
  index: number;
  inView: boolean;
}) {
  const count = useCountUp(stat.value, 1400, inView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      style={{
        borderTop: "1px solid var(--border-accent)",
        paddingTop: "1.75rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          fontWeight: 700,
          color: "var(--accent)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        {stat.prefix}
        {count}
        <span style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>{stat.suffix}</span>
      </div>
      <p
        style={{
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: "0.75rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--text)",
          marginTop: "0.25rem",
        }}
      >
        {stat.label}
      </p>
      <p
        style={{
          fontSize: "0.875rem",
          lineHeight: 1.65,
          color: "var(--text-muted)",
        }}
      >
        {stat.desc}
      </p>
    </motion.div>
  );
}

export default function Metrics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="metrics"
      className="section-pad"
      ref={ref}
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>
            Impact
          </p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "var(--text)",
              lineHeight: 1.1,
            }}
          >
            Numbers that{" "}
            <span
              style={{ fontStyle: "italic", fontWeight: 400, color: "var(--text-muted)" }}
            >
              matter.
            </span>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2rem 3rem",
          }}
          className="md:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
