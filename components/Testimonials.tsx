"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote:
      "Atif is one of the most thorough frontend engineers I've worked with. He doesn't just write code — he architects solutions. The frontend system he built for Cityscape One is fast, scalable, and a pleasure to extend.",
    name: "Michael Thornton",
    role: "CTO",
    company: "Cityscape Technology Corporation",
    initials: "MT",
  },
  {
    quote:
      "Working alongside Atif at Zameen was genuinely impressive. He owned performance improvements that moved our LCP from 4s to under 2.4s on our listing pages. His attention to real-world metrics is rare.",
    name: "Sara Ahmed",
    role: "Engineering Manager",
    company: "Zameen.com",
    initials: "SA",
  },
  {
    quote:
      "Atif brings both the technical depth of a principal engineer and the communication skills of a tech lead. He made our whole team better — through code reviews, architecture discussions, and just raising the bar.",
    name: "James Caldwell",
    role: "VP of Engineering",
    company: "EMPG Labs",
    initials: "JC",
  },
];

function QuoteIcon() {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0L16 3.2C11.2 4.267 8.533 6.933 8 11.2H14.4V24H0ZM17.6 24V14.4C17.6 6.4 22.4 1.6 32 0L33.6 3.2C28.8 4.267 26.133 6.933 25.6 11.2H32V24H17.6Z"
        fill="var(--accent)"
        opacity="0.6"
      />
    </svg>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="testimonials"
      className="section-pad section-border"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-14"
        >
          <p className="section-label mb-3">
            Testimonials
          </p>
          <h2 className="font-display section-heading">
            What people{" "}
            <span className="heading-italic">
              say.
            </span>
          </h2>
        </motion.div>

        <div className="grid-auto-fill-320">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="work-card testimonial-card flex flex-col gap-6"
            >
              <div className="quote-icon">
                <QuoteIcon />
              </div>

              <p className="text-body grow">
                {t.quote}
              </p>

              <hr aria-hidden="true" className="card-divider" />

              <div className="flex items-center gap-[0.875rem]">
                <div className="avatar">
                  {t.initials}
                </div>
                <div>
                  <p className="person-name">
                    {t.name}
                  </p>
                  <p className="person-role">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
