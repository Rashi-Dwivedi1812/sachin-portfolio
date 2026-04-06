import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology (B.Tech), Computer Science",
    institution: "Jaypee Institute of Information Technology, Noida",
    year: "2023 – 2027",
    status: "Ongoing",
    description:
      "Specializing in AI/ML with strong foundations in data structures and system design. Built multiple real-world projects including LLM systems, RAG pipelines, and multi-agent architectures.",
    highlights: ["LLM Systems", "RAG Pipelines", "Multi-Agent AI", "System Design"],
    icon: GraduationCap,
    accent: { color: "hsl(var(--primary))", bg: "hsl(var(--primary) / 0.08)", border: "hsl(var(--primary) / 0.25)" },
  },
  {
    degree: "Class XII — ISC",
    institution: "Boys' High School & College, Prayagraj",
    year: "2023",
    status: "Completed",
    description: "Completed higher secondary education with a focus on science and mathematics.",
    highlights: ["Science", "Mathematics"],
    icon: BookOpen,
    accent: { color: "hsl(270 60% 65%)", bg: "hsl(270 60% 65% / 0.08)", border: "hsl(270 60% 65% / 0.25)" },
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const EducationSection = () => {
  return (
    <section
      id="education"
      className="py-24 px-6 relative overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Background */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(ellipse 55% 40% at 100% 20%, hsl(270 60% 65% / 0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: "hsl(var(--primary))" }}
          >
            Education
          </p>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(1.9rem, 4vw, 2.8rem)",
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "hsl(var(--foreground))",
              margin: 0,
            }}
          >
            Where it all
            <br />
            started.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              left: 19,
              top: 0,
              bottom: 0,
              width: 1,
              background:
                "linear-gradient(to bottom, hsl(var(--primary) / 0.4), hsl(270 60% 65% / 0.15) 80%, transparent)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {education.map((edu, i) => {
              const Icon = edu.icon;
              return (
                <motion.div
                  key={edu.degree}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  style={{ display: "flex", gap: "1.75rem", alignItems: "flex-start" }}
                >
                  {/* Timeline node */}
                  <div style={{ flexShrink: 0, position: "relative", zIndex: 1 }}>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: edu.accent.bg,
                        border: `1px solid ${edu.accent.border}`,
                        color: edu.accent.color,
                      }}
                    >
                      <Icon size={16} />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    style={{
                      flex: 1,
                      borderRadius: 14,
                      border: "1px solid hsl(var(--border))",
                      background: "hsl(var(--card))",
                      overflow: "hidden",
                      transition: "border-color 0.25s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = edu.accent.border;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--border))";
                    }}
                  >
                    {/* Top strip */}
                    <div
                      style={{
                        height: 3,
                        background: `linear-gradient(90deg, ${edu.accent.color}, ${edu.accent.bg})`,
                      }}
                    />

                    <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
                      {/* Header row */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "space-between",
                          gap: 12,
                          marginBottom: "0.5rem",
                          flexWrap: "wrap",
                        }}
                      >
                        <h3
                          style={{
                            fontSize: "1rem",
                            fontWeight: 600,
                            color: "hsl(var(--foreground))",
                            margin: 0,
                            lineHeight: 1.35,
                          }}
                        >
                          {edu.degree}
                        </h3>

                        {/* Status + Year badges */}
                        <div style={{ display: "flex", gap: 6, flexShrink: 0, alignItems: "center" }}>
                          <span
                            style={{
                              fontSize: "0.65rem",
                              fontWeight: 600,
                              letterSpacing: "0.08em",
                              textTransform: "uppercase",
                              padding: "3px 9px",
                              borderRadius: 999,
                              background: edu.accent.bg,
                              color: edu.accent.color,
                              border: `1px solid ${edu.accent.border}`,
                            }}
                          >
                            {edu.status}
                          </span>
                          <span
                            style={{
                              fontSize: "0.72rem",
                              padding: "3px 9px",
                              borderRadius: 999,
                              border: "1px solid hsl(var(--border))",
                              background: "hsl(var(--background))",
                              color: "hsl(var(--muted-foreground))",
                            }}
                          >
                            {edu.year}
                          </span>
                        </div>
                      </div>

                      {/* Institution */}
                      <p
                        style={{
                          fontSize: "0.85rem",
                          fontWeight: 500,
                          color: edu.accent.color,
                          margin: "0 0 0.875rem",
                        }}
                      >
                        {edu.institution}
                      </p>

                      {/* Description */}
                      <p
                        style={{
                          fontSize: "0.865rem",
                          color: "hsl(var(--muted-foreground))",
                          lineHeight: 1.7,
                          margin: "0 0 1.1rem",
                        }}
                      >
                        {edu.description}
                      </p>

                      {/* Highlights */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {edu.highlights.map((h) => (
                          <span
                            key={h}
                            style={{
                              fontSize: "0.7rem",
                              fontWeight: 500,
                              padding: "4px 11px",
                              borderRadius: 8,
                              background: edu.accent.bg,
                              color: edu.accent.color,
                              border: `1px solid ${edu.accent.border}`,
                            }}
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
