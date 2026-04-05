import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const liveDemos = [
  {
    title: "Neurify",
    subtitle: "Neuro-Symbolic RAG Agent",
    url: "https://neurify.streamlit.app",
    label: "RAG · NLP · GPT-4o",
    accent: { color: "hsl(var(--primary))", bg: "hsl(var(--primary) / 0.08)", border: "hsl(var(--primary) / 0.25)" },
  },
  {
    title: "L.R.A",
    subtitle: "Legal Research Assistant",
    url: "https://lara-legal-assistant.streamlit.app",
    label: "LangGraph · LLaMA 3",
    accent: { color: "hsl(270 60% 65%)", bg: "hsl(270 60% 65% / 0.08)", border: "hsl(270 60% 65% / 0.25)" },
  },
  {
    title: "Forged Signature",
    subtitle: "Deep Learning Authentication",
    url: "https://forged-signature-verification.vercel.app",
    label: "Siamese Net · 90% Acc",
    accent: { color: "hsl(200 80% 60%)", bg: "hsl(200 80% 60% / 0.08)", border: "hsl(200 80% 60% / 0.25)" },
  },
];

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
});

const LiveDemoSection = () => {
  return (
    <section
      id="live-demo"
      className="py-24 px-6 relative overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Background glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          // backgroundImage:
          //   "radial-gradient(ellipse 55% 35% at 50% 100%, hsl(var(--primary) / 0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-16">
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: "hsl(var(--primary))" }}
          >
            Live Demos
          </p>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(1.9rem, 4vw, 2.8rem)",
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "hsl(var(--foreground))",
              margin: "0 0 0.75rem",
            }}
          >
            Try them
            <br />
            live, right now.
          </h2>
          <p style={{ fontSize: "0.95rem", color: "hsl(var(--muted-foreground))", margin: 0 }}>
            Deployed and running — click any card to open.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))",
            gap: "1.25rem",
          }}
        >
          {liveDemos.map((demo, i) => (
            <motion.a
              key={demo.title}
              href={demo.url}
              target="_blank"
              rel="noopener noreferrer"
              {...fadeUp(i * 0.08 + 0.1)}
              whileHover={{ y: -4 }}
              style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: 14,
                border: "1px solid hsl(var(--border))",
                background: "hsl(var(--card))",
                overflow: "hidden",
                textDecoration: "none",
                transition: "border-color 0.25s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = demo.accent.border;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--border))";
              }}
            >
              {/* Top strip */}
              <div
                style={{
                  height: 3,
                  background: `linear-gradient(90deg, ${demo.accent.color}, ${demo.accent.bg})`,
                }}
              />

              {/* Body */}
              <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1, gap: "1rem" }}>
                {/* Icon circle */}
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: demo.accent.bg,
                    border: `1px solid ${demo.accent.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: demo.accent.color,
                  }}
                >
                  <ArrowUpRight size={18} />
                </div>

                {/* Text */}
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: "hsl(var(--foreground))",
                      margin: "0 0 4px",
                      lineHeight: 1.3,
                    }}
                  >
                    {demo.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      color: "hsl(var(--muted-foreground))",
                      margin: 0,
                    }}
                  >
                    {demo.subtitle}
                  </p>
                </div>

                {/* Footer */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "0.875rem",
                    borderTop: "1px solid hsl(var(--border))",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 500,
                      letterSpacing: "0.04em",
                      color: demo.accent.color,
                      background: demo.accent.bg,
                      border: `1px solid ${demo.accent.border}`,
                      padding: "3px 9px",
                      borderRadius: 999,
                    }}
                  >
                    {demo.label}
                  </span>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      color: demo.accent.color,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    Open ↗
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveDemoSection;
