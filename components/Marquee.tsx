"use client";

const items = [
  "React",
  "Next.js",
  "Angular",
  "Vue",
  "Nuxt",
  "TypeScript",
  "Tailwind CSS",
  "Strapi",
  "GraphQL",
  "PostgreSQL",
  "Prisma",
  "Node.js",
  "Claude Code",
  "GitHub Copilot",
  "Cursor",
  "OpenAI Codex",
  "CI/CD",
  "AWS S3",
  "SEO",
  "Framer Motion",
  "Redux",
  "Zustand",
  "Vite",
  "Docker",
];

const AI_ITEMS = new Set(["Claude Code", "GitHub Copilot", "Cursor", "OpenAI Codex"]);

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="marquee-container" aria-hidden="true">
      <div className="animate-marquee marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`marquee-item ${AI_ITEMS.has(item) ? "text-accent" : "text-faint"}`}
          >
            {item}
            <span
              className="marquee-dot"
              style={{ background: AI_ITEMS.has(item) ? "var(--accent)" : "var(--text-faint)" }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
