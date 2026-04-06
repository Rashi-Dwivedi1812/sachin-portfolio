import { motion } from "framer-motion";
import { Briefcase, Users, Calendar, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "AI Agent Developer Intern",
    organization: "Ushree (Clone Futura)",
    period: "Oct 2025 — Jan 2026",
    points: [
      "Built 4 autonomous AI agents for 50+ operational task categories",
      "Integrated into 34k+ line production system with 120+ APIs",
      "Automated 30+ workflows, reducing manual workload by 40%",
    ],
    stats: [
      { value: "4", label: "AI Agents" },
      { value: "120+", label: "APIs" },
      { value: "40%", label: "Less manual work" },
    ],
  },
  {
    type: "leadership",
    title: "Technical Head",
    organization: "AI/ML Hub",
    period: "2025 — 2026",
    points: [
      "Mentored 100+ students in ML and generative AI",
      "Organized 5+ workshops, hackathons, and technical events",
      "Built a strong AI/ML community within the institute",
    ],
    stats: [
      { value: "100+", label: "Students" },
      { value: "5+", label: "Events" },
      { value: "GenAI", label: "Focus area" },
    ],
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

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 relative overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Background accent */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(ellipse 60% 40% at 100% 80%, hsl(var(--primary) / 0.05) 0%, transparent 70%)",
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
            Experience
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
            Where I've built
            <br />
            and led.
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
                "linear-gradient(to bottom, hsl(var(--primary) / 0.4), hsl(var(--primary) / 0.1) 80%, transparent)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ display: "flex", gap: "1.75rem", alignItems: "flex-start" }}
              >
                {/* Timeline dot */}
                <div style={{ flexShrink: 0, position: "relative", zIndex: 1 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        exp.type === "work"
                          ? "hsl(var(--primary) / 0.12)"
                          : "hsl(270 60% 60% / 0.12)",
                      border: `1px solid ${
                        exp.type === "work"
                          ? "hsl(var(--primary) / 0.3)"
                          : "hsl(270 60% 60% / 0.3)"
                      }`,
                      color:
                        exp.type === "work"
                          ? "hsl(var(--primary))"
                          : "hsl(270 60% 65%)",
                    }}
                  >
                    {exp.type === "work" ? (
                      <Briefcase size={16} />
                    ) : (
                      <Users size={16} />
                    )}
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
                    (e.currentTarget as HTMLElement).style.borderColor =
                      exp.type === "work"
                        ? "hsl(var(--primary) / 0.35)"
                        : "hsl(270 60% 60% / 0.35)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "hsl(var(--border))";
                  }}
                >
                  {/* Card top strip */}
                  <div
                    style={{
                      height: 3,
                      background:
                        exp.type === "work"
                          ? "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary) / 0.2))"
                          : "linear-gradient(90deg, hsl(270 60% 65%), hsl(270 60% 65% / 0.2))",
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
                        marginBottom: "1rem",
                      }}
                    >
                      <div>
                        <h3
                          style={{
                            fontSize: "1rem",
                            fontWeight: 600,
                            color: "hsl(var(--foreground))",
                            margin: "0 0 3px",
                            lineHeight: 1.3,
                          }}
                        >
                          {exp.title}
                        </h3>
                        <p
                          style={{
                            fontSize: "0.82rem",
                            color: "hsl(var(--muted-foreground))",
                            margin: 0,
                          }}
                        >
                          {exp.organization}
                        </p>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                          fontSize: "0.72rem",
                          color: "hsl(var(--muted-foreground))",
                          whiteSpace: "nowrap",
                          flexShrink: 0,
                          padding: "4px 10px",
                          borderRadius: 999,
                          border: "1px solid hsl(var(--border))",
                          background: "hsl(var(--background))",
                        }}
                      >
                        <Calendar size={10} />
                        {exp.period}
                      </div>
                    </div>

                    {/* Points */}
                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.25rem", display: "flex", flexDirection: "column", gap: 8 }}>
                      {exp.points.map((point, j) => (
                        <li
                          key={j}
                          style={{
                            display: "flex",
                            gap: 10,
                            fontSize: "0.865rem",
                            color: "hsl(var(--muted-foreground))",
                            lineHeight: 1.6,
                          }}
                        >
                          <span
                            style={{
                              marginTop: 7,
                              flexShrink: 0,
                              width: 5,
                              height: 5,
                              borderRadius: "50%",
                              background:
                                exp.type === "work"
                                  ? "hsl(var(--primary))"
                                  : "hsl(270 60% 65%)",
                            }}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Stats strip */}
                    <div
                      style={{
                        display: "flex",
                        gap: 12,
                        paddingTop: "1rem",
                        borderTop: "1px solid hsl(var(--border))",
                      }}
                    >
                      {exp.stats.map(({ value, label }) => (
                        <div key={label} style={{ flex: 1 }}>
                          <p
                            style={{
                              fontSize: "1rem",
                              fontWeight: 600,
                              margin: "0 0 2px",
                              color:
                                exp.type === "work"
                                  ? "hsl(var(--primary))"
                                  : "hsl(270 60% 65%)",
                            }}
                          >
                            {value}
                          </p>
                          <p
                            style={{
                              fontSize: "0.68rem",
                              color: "hsl(var(--muted-foreground))",
                              margin: 0,
                              letterSpacing: "0.05em",
                              textTransform: "uppercase",
                            }}
                          >
                            {label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
