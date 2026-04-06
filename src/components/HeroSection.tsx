import { motion } from "framer-motion";
import { ArrowRight, FileText, Github, Linkedin } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Background layers */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% -10%, hsl(var(--primary) / 0.08) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(hsl(var(--border) / 0.25) 1px, transparent 1px), " +
            "linear-gradient(90deg, hsl(var(--border) / 0.25) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl w-full">

        {/* Availability badge */}
        <motion.div {...fadeUp(0.05)} className="mb-8">
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full"
            style={{
              border: "1px solid hsl(var(--primary) / 0.3)",
              background: "hsl(var(--primary) / 0.07)",
              color: "hsl(var(--primary))",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "hsl(var(--primary))",
                boxShadow: "0 0 6px hsl(var(--primary))",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
            Open to AI/ML Roles
          </span>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-7"
        >
          <div
            style={{
              padding: 3,
              borderRadius: "50%",
              background: "linear-gradient(135deg, hsl(var(--primary) / 0.6), hsl(var(--primary) / 0.1) 60%, hsl(var(--primary) / 0.4))",
            }}
          >
            <div
              style={{
                width: 112,
                height: 112,
                borderRadius: "50%",
                overflow: "hidden",
                background: "hsl(var(--background))",
              }}
            >
              <img
                src="/image_1.png"
                alt="Sachin Mishra"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.2)}
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(2.4rem, 6vw, 4rem)",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "hsl(var(--foreground))",
            marginBottom: "0.5rem",
          }}
        >
          Sachin Mishra
        </motion.h1>

        {/* Role */}
        <motion.p
          {...fadeUp(0.28)}
          style={{
            fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            fontWeight: 500,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "hsl(var(--primary))",
            marginBottom: "1.25rem",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          LLM Systems · RAG Engineer · Multi-Agent
        </motion.p>

        {/* Value prop */}
        <motion.p
          {...fadeUp(0.35)}
          style={{
            fontSize: "0.975rem",
            lineHeight: 1.8,
            color: "hsl(var(--muted-foreground))",
            maxWidth: 480,
            marginBottom: "2.5rem",
          }}
        >
          Building scalable LLM systems with RAG pipelines and multi-agent
          architectures — from prototype to production.
        </motion.p>

        {/* CTA row */}
        <motion.div
          {...fadeUp(0.42)}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
          {/* Primary */}
          <a
            href="#projects"
            className="group"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "0.75rem 1.75rem",
              borderRadius: 10,
              fontSize: "0.875rem",
              fontWeight: 600,
              letterSpacing: "0.01em",
              color: "hsl(var(--background))",
              background: "hsl(var(--primary))",
              border: "none",
              cursor: "pointer",
              transition: "opacity 0.2s, transform 0.2s",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "0.88";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            View Projects
            <ArrowRight size={15} style={{ transition: "transform 0.2s" }} />
          </a>

          {/* Secondary buttons */}
          {[
            { href: "/Sachin_Mishra_CV.pdf", icon: <FileText size={14} />, label: "Resume", target: "_blank" },
            { href: "https://github.com/sachin-m15", icon: <Github size={14} />, label: "GitHub", target: "_blank" },
            { href: "https://www.linkedin.com/in/sachin-mishra-325444271/", icon: <Linkedin size={14} />, label: "LinkedIn", target: "_blank" },
          ].map(({ href, icon, label, target }) => (
            <a
              key={label}
              href={href}
              target={target}
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                padding: "0.75rem 1.4rem",
                borderRadius: 10,
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "hsl(var(--foreground))",
                background: "transparent",
                border: "1px solid hsl(var(--border))",
                cursor: "pointer",
                transition: "border-color 0.2s, color 0.2s, background 0.2s, transform 0.2s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "hsl(var(--primary) / 0.5)";
                el.style.color = "hsl(var(--primary))";
                el.style.background = "hsl(var(--primary) / 0.05)";
                el.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "hsl(var(--border))";
                el.style.color = "hsl(var(--foreground))";
                el.style.background = "transparent";
                el.style.transform = "translateY(0)";
              }}
            >
              {icon}
              {label}
            </a>
          ))}
        </motion.div>

        {/* Stats strip */}
        <motion.div
          {...fadeUp(0.5)}
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "100+", label: "Students Mentored" },
            { value: "RAG", label: "Production Pipelines" },
            { value: "FastAPI", label: "Backend Systems" },
          ].map(({ value, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <p
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "hsl(var(--foreground))",
                  margin: 0,
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                {value}
              </p>
              <p
                style={{
                  fontSize: "0.72rem",
                  color: "hsl(var(--muted-foreground))",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <a
          href="#about"
          style={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            color: "hsl(var(--muted-foreground))",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "hsl(var(--primary))")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "hsl(var(--muted-foreground))")}
        >
          <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Scroll
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ animation: "bounce 1.8s ease-in-out infinite" }}
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
