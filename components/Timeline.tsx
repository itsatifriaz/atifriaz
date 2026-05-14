"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    period: "2022 — Present",
    title: "Lead Frontend & Principal Software Engineer",
    company: "Cityscape Technology Corporation",
    location: "Mississauga, Canada (Remote)",
    current: true,
  },
  {
    period: "2020 — 2022",
    title: "Staff Software Engineer (Frontend)",
    company: "Dubizzle Labs / EMPG",
    location: "Lahore, Pakistan",
    current: false,
  },
  {
    period: "2017 — 2022",
    title: "Staff Software Engineer (Frontend)",
    company: "Zameen.com",
    location: "Lahore, Pakistan",
    current: false,
  },
  {
    period: "2016 — 2017",
    title: "Lead Frontend Developer",
    company: "Concept Beans",
    location: "Lahore, Pakistan",
    current: false,
  },
  {
    period: "2014 — 2016",
    title: "Frontend Developer",
    company: "Concept Beans",
    location: "Lahore, Pakistan",
    current: false,
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="section-border section-pad"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-14"
        >
          <p className="section-label mb-3">
            Experience
          </p>
          <h2 className="font-display section-heading">
            Where I&apos;ve{" "}
            <span className="heading-italic">
              worked.
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-[720px]">
          {/* Vertical line */}
          <div aria-hidden="true" className="timeline-line" />

          <div className="flex flex-col">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-7"
                style={{ paddingBottom: i < experiences.length - 1 ? "2.5rem" : 0 }}
              >
                {/* Dot */}
                <div className="shrink-0 pt-[6px]">
                  <div className="timeline-dot" />
                </div>

                {/* Content */}
                <div className="pb-2">
                  <div className="flex items-baseline gap-4 flex-wrap mb-[0.35rem]">
                    <span className={`mono-xs-wide ${exp.current ? "text-accent" : "text-faint"}`}>
                      {exp.period}
                    </span>
                    {exp.current && (
                      <span className="badge-current">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="card-heading mb-1">
                    {exp.title}
                  </h3>
                  <p className="company-text">
                    {exp.company}
                  </p>
                  <p className="mono-xs text-faint mt-[0.2rem]">
                    {exp.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
