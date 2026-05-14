"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "5+", label: "Major Products" },
  { value: "2", label: "Countries" },
  { value: "1M+", label: "Users Reached" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="section-pad section-border"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-4">
              About
            </p>
            <h2 className="font-display section-heading mb-8">
              A frontend engineer who{" "}
              <span className="heading-italic">
                thinks in systems.
              </span>
            </h2>

            <div className="flex flex-col gap-5 text-body">
              <p>
                I&apos;ve spent 10+ years building interfaces people actually
                use — from{" "}
                <span className="text-primary">Zameen.com</span>{" "}
                serving millions of Pakistani users, to{" "}
                <span className="text-primary">
                  Cityscape Technology
                </span>{" "}
                helping Canadian homebuyers navigate the GTA market.
              </p>
              <p>
                My work sits at the intersection of frontend engineering,
                product thinking, and performance. I don&apos;t just ship
                features — I care about load time, SEO, accessibility, and the
                developer experience left behind for the next engineer.
              </p>
              <p>
                I also leverage the latest AI-powered tools —{" "}
                <span className="text-accent">Claude Code</span>,{" "}
                <span className="text-accent">GitHub Copilot</span>,{" "}
                <span className="text-accent">Cursor</span>, and{" "}
                <span className="text-accent">OpenAI Codex</span> —
                as a core part of my workflow. This isn&apos;t a trend for me;
                it&apos;s how I consistently deliver more, faster, without
                cutting corners.
              </p>
              <p>
                Currently based in{" "}
                <span className="text-primary">Lahore, Pakistan</span>.
                Open to remote roles worldwide.
              </p>
            </div>

            {/* AI badge */}
            <div className="mt-8">
              <span className="ai-badge">
                ✦ AI-Native Workflow
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
