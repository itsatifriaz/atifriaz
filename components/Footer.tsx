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
