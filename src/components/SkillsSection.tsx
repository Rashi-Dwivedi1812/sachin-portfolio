import { motion } from "framer-motion";

const skillCategories = [
  {
    label: "Languages",
    tag: "01",
    skills: ["Python", "C++", "C"],
    accent: { color: "hsl(var(--primary))", bg: "hsl(var(--primary) / 0.08)", border: "hsl(var(--primary) / 0.22)" },
  },
  {
    label: "Tools & Platforms",
    tag: "02",
    skills: ["Git", "GitHub", "Linux", "Docker", "AWS"],
    accent: { color: "hsl(200 80% 60%)", bg: "hsl(200 80% 60% / 0.08)", border: "hsl(200 80% 60% / 0.22)" },
  },
  {
    label: "Frameworks & Libraries",
    tag: "03",
    skills: ["TensorFlow", "Keras", "Scikit-learn", "OpenCV", "Hugging Face", "LangChain", "LangGraph", "CrewAI", "FAISS", "FastAPI", "Streamlit"],
    accent: { color: "hsl(270 60% 65%)", bg: "hsl(270 60% 65% / 0.08)", border: "hsl(270 60% 65% / 0.22)" },
  },
  {
    label: "Core Areas",
    tag: "04",
    skills: ["Generative AI", "Machine Learning", "Deep Learning", "LLMs", "RAG", "Multi-Agent Systems", "NLP", "Neuro-Symbolic AI", "Computer Vision"],
    accent: { color: "hsl(35 90% 58%)", bg: "hsl(35 90% 58% / 0.08)", border: "hsl(35 90% 58% / 0.22)" },
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const SkillsSection = () => {
  return (
    <section
      id="skills"
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
            "radial-gradient(ellipse 55% 40% at 0% 50%, hsl(var(--primary) / 0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
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
            Skills
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
            Tools I think
            <br />
            and build with.
          </h2>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 380px), 1fr))",
            gap: "1.25rem",
          }}
        >
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                borderRadius: 14,
                border: "1px solid hsl(var(--border))",
                background: "hsl(var(--card))",
                overflow: "hidden",
                transition: "border-color 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = cat.accent.border;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--border))";
              }}
            >
              {/* Top strip */}
              <div
                style={{
                  height: 3,
                  background: `linear-gradient(90deg, ${cat.accent.color}, ${cat.accent.bg})`,
                }}
              />

              <div style={{ padding: "1.25rem 1.4rem 1.5rem" }}>
                {/* Label row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "hsl(var(--foreground))",
                      margin: 0,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {cat.label}
                  </h3>
                  <span
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      color: cat.accent.color,
                      background: cat.accent.bg,
                      border: `1px solid ${cat.accent.border}`,
                      padding: "3px 9px",
                      borderRadius: 999,
                    }}
                  >
                    {cat.tag}
                  </span>
                </div>

                {/* Skills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.04 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 500,
                        padding: "5px 12px",
                        borderRadius: 8,
                        background: "hsl(var(--secondary))",
                        color: "hsl(var(--secondary-foreground))",
                        border: "1px solid hsl(var(--border))",
                        cursor: "default",
                        transition: "background 0.18s, color 0.18s, border-color 0.18s",
                        display: "inline-block",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = cat.accent.bg;
                        el.style.color = cat.accent.color;
                        el.style.borderColor = cat.accent.border;
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = "hsl(var(--secondary))";
                        el.style.color = "hsl(var(--secondary-foreground))";
                        el.style.borderColor = "hsl(var(--border))";
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Count footer */}
                <p
                  style={{
                    fontSize: "0.68rem",
                    color: "hsl(var(--muted-foreground))",
                    margin: "1rem 0 0",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {cat.skills.length} {cat.skills.length === 1 ? "skill" : "skills"}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
