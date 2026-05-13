function DevToIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"/>
    </svg>
  );
}

function HashnodeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 337 337" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M168.5 0C75.4 0 0 75.4 0 168.5S75.4 337 168.5 337 337 261.6 337 168.5 261.6 0 168.5 0zm-9.6 95.8l87 87c5.3 5.3 5.3 13.9 0 19.2l-87 87c-5.3 5.3-13.9 5.3-19.2 0l-87-87c-5.3-5.3-5.3-13.9 0-19.2l87-87c5.3-5.3 13.9-5.3 19.2 0z"/>
    </svg>
  );
}

const blogs = [
  {
    label: "DEV.to",
    href: "https://dev.to/iamatifriaz",
    icon: <DevToIcon />,
    color: "#08090a",
    bg: "#ffffff",
  },
  {
    label: "Hashnode",
    href: "https://atifriaz.hashnode.dev/",
    icon: <HashnodeIcon />,
    color: "#2962FF",
    bg: "transparent",
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "1.75rem 0",
        background: "var(--bg)",
      }}
    >
      <div
        className="max-w-6xl mx-auto px-6"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: "0.6875rem",
            letterSpacing: "0.06em",
            color: "var(--text-faint)",
          }}
        >
          Designed &amp; built by{" "}
          <span style={{ color: "var(--text-muted)" }}>Atif Riaz</span> · 2026
        </span>

        {/* Blog links */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-faint)",
              marginRight: "0.5rem",
            }}
          >
            Blog
          </span>
          {blogs.map((b) => (
            <a
              key={b.href}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              title={b.label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "var(--text-faint)",
                padding: "0.3rem 0.65rem",
                borderRadius: "5px",
                border: "1px solid var(--border)",
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.08em",
                textDecoration: "none",
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = b.color === "#08090a" ? "#ffffff" : b.color;
                (e.currentTarget as HTMLAnchorElement).style.borderColor = b.color === "#08090a" ? "#ffffff" : b.color;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-faint)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
              }}
            >
              {b.icon}
              {b.label}
            </a>
          ))}
        </div>

        <span
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: "0.6875rem",
            letterSpacing: "0.06em",
            color: "var(--text-faint)",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
          }}
        >
          <span
            style={{
              width: "5px",
              height: "5px",
              background: "var(--accent)",
              borderRadius: "50%",
              display: "inline-block",
              boxShadow: "0 0 5px var(--accent)",
            }}
          />
          Open to remote
        </span>
      </div>
    </footer>
  );
}
