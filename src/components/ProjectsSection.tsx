import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  tags: string[];
  description: string[];
  liveUrl?: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "Neurify",
    subtitle: "Neuro-Symbolic RAG Agent",
    tags: ["LLMs", "NLP", "Neuro-Symbolic AI", "Agentic AI", "RAG"],
    description: [
      "Iterative retrieval pipeline with 10 passages/query, reranking & query reformulation.",
      "Neuro-symbolic validation using RoBERTa-MNLI with 0.80 reliability threshold.",
      "344 MB FAISS vector index with OpenAI embeddings + GPT-4o-mini inference.",
    ],
    liveUrl: "https://neurify.streamlit.app",
    githubUrl: "https://github.com/sachin-m15/Neurify-Neuro-Symbolic-Agentic-AI",
  },
  {
    title: "L.R.A",
    subtitle: "Legal Research Assistant",
    tags: ["LLMs", "Multi-Agent Systems", "RAG", "LangGraph"],
    description: [
      "LangGraph multi-agent pipeline with 6 reasoning stages powered by LLaMA 3 8B.",
      "384-dim FAISS vector DB from 1000-char legal document chunks.",
      "Integrated vector search with Tavily web retrieval + FastAPI endpoints.",
    ],
    liveUrl: "https://lara-legal-assistant.streamlit.app",
    githubUrl: "https://github.com/sachin-m15/LARA-legal-Assistant",
  },
  {
    title: "Forged Signature Verification",
    subtitle: "Deep Learning Authentication System",
    tags: ["Deep Learning", "Computer Vision", "TensorFlow"],
    description: [
      "DL signature verification pipeline processing 224×224 RGB images.",
      "Siamese Neural Network achieving 90% verification accuracy.",
    ],
    githubUrl: "https://github.com/sachin-m15/Forged-Signature-Verification",
    liveUrl: "https://forged-signature-verification.vercel.app",
  },
];

const moreProjects = [
  {
    title: "Sentiment Analyzer",
    subtitle: "LLM-powered sentiment analysis",
    tags: ["Transformer", "NLP", "LLM"],
    githubUrl: "https://github.com/sachin-m15/Transcript-Analyzer",
    liveUrl: "https://transcript-analyzergit-dp7f5bkbwg8pkxt4urubfc.streamlit.app/",
  },
  {
    title: "Video Transcript AI",
    subtitle: "LLM-Powered RAG Q&A System",
    tags: ["RAG", "LangChain", "FAISS"],
    githubUrl: "https://github.com/sachin-m15/Transcript-based-RAG-",
  },
  {
    title: "Pokémon Battle Predictor",
    subtitle: "Ensemble ML-Based Battle Outcome Predictor",
    tags: ["Scikit-learn", "Ensemble ML"],
    githubUrl: "https://github.com/sachin-m15/Pokemon-Battle-Predictor",
  },
  {
    title: "Movie Recommendation System",
    subtitle: "Content-Based Movie Recommender",
    tags: ["Pandas", "Content-Based Filtering"],
    githubUrl: "https://github.com/sachin-m15/Movie-Recommender/tree/main",
  },
  {
    title: "Diabetes Prediction System",
    subtitle: "ML-Based Health Risk Predictor",
    tags: ["Scikit-learn", "Healthcare AI"],
    githubUrl: "https://github.com/sachin-m15/Diabetes-Prediction/tree/main",
  },
];

const accentColors = [
  { pill: "hsl(var(--primary))", pillBg: "hsl(var(--primary) / 0.1)", strip: "hsl(var(--primary))", stripEnd: "hsl(var(--primary) / 0.15)" },
  { pill: "hsl(270 60% 65%)", pillBg: "hsl(270 60% 65% / 0.1)", strip: "hsl(270 60% 65%)", stripEnd: "hsl(270 60% 65% / 0.15)" },
  { pill: "hsl(200 80% 60%)", pillBg: "hsl(200 80% 60% / 0.1)", strip: "hsl(200 80% 60%)", stripEnd: "hsl(200 80% 60% / 0.15)" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
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
            "radial-gradient(ellipse 50% 40% at 10% 30%, hsl(var(--primary) / 0.05) 0%, transparent 70%)",
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
            Projects
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
            What I've built
            <br />
            from scratch.
          </h2>
        </motion.div>

        {/* Featured Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
            gap: "1.25rem",
            marginBottom: "3rem",
          }}
        >
          {projects.map((project, i) => {
            const accent = accentColors[i % accentColors.length];
            return (
              <motion.div
                key={project.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  borderRadius: 14,
                  border: "1px solid hsl(var(--border))",
                  background: "hsl(var(--card))",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  transition: "border-color 0.25s, transform 0.25s",
                  cursor: "default",
                }}
                whileHover={{ y: -3 }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${accent.pill}55`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--border))";
                }}
              >
                {/* Top accent strip */}
                <div
                  style={{
                    height: 3,
                    background: `linear-gradient(90deg, ${accent.strip}, ${accent.stripEnd})`,
                  }}
                />

                <div style={{ padding: "1.25rem 1.4rem 1.4rem", display: "flex", flexDirection: "column", flex: 1 }}>
                  {/* Title row */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.875rem" }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3
                        style={{
                          fontSize: "1.05rem",
                          fontWeight: 600,
                          color: "hsl(var(--foreground))",
                          margin: "0 0 3px",
                          lineHeight: 1.3,
                        }}
                      >
                        {project.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.78rem",
                          color: "hsl(var(--muted-foreground))",
                          margin: 0,
                        }}
                      >
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Action icons */}
                    <div style={{ display: "flex", gap: 8, flexShrink: 0, marginLeft: 10 }}>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: 8,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: `1px solid ${accent.pill}44`,
                            background: accent.pillBg,
                            color: accent.pill,
                            transition: "opacity 0.2s",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
                          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                        >
                          <ArrowUpRight size={13} />
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: 8,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "1px solid hsl(var(--border))",
                          background: "transparent",
                          color: "hsl(var(--muted-foreground))",
                          transition: "color 0.2s, border-color 0.2s",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.color = accent.pill;
                          el.style.borderColor = `${accent.pill}44`;
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.color = "hsl(var(--muted-foreground))";
                          el.style.borderColor = "hsl(var(--border))";
                        }}
                      >
                        <Github size={13} />
                      </a>
                    </div>
                  </div>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: "1rem" }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "0.68rem",
                          padding: "3px 9px",
                          borderRadius: 999,
                          background: accent.pillBg,
                          color: accent.pill,
                          border: `1px solid ${accent.pill}33`,
                          fontWeight: 500,
                          letterSpacing: "0.02em",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <ul style={{ flex: 1, listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 7 }}>
                    {project.description.map((desc, j) => (
                      <li
                        key={j}
                        style={{
                          display: "flex",
                          gap: 9,
                          fontSize: "0.825rem",
                          color: "hsl(var(--muted-foreground))",
                          lineHeight: 1.6,
                        }}
                      >
                        <span
                          style={{
                            marginTop: 8,
                            flexShrink: 0,
                            width: 4,
                            height: 4,
                            borderRadius: "50%",
                            background: accent.pill,
                          }}
                        />
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: "1rem",
            }}
          >
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "hsl(var(--primary))",
                margin: 0,
                whiteSpace: "nowrap",
              }}
            >
              More Projects
            </p>
            <div style={{ flex: 1, height: 1, background: "hsl(var(--border))" }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {moreProjects.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  padding: "0.75rem 1rem",
                  borderRadius: 10,
                  border: "1px solid hsl(var(--border))",
                  background: "hsl(var(--card))",
                  textDecoration: "none",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "hsl(var(--primary) / 0.3)";
                  el.style.background = "hsl(var(--primary) / 0.03)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "hsl(var(--border))";
                  el.style.background = "hsl(var(--card))";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1, minWidth: 0 }}>
                  <h4
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "hsl(var(--foreground))",
                      margin: 0,
                      flexShrink: 0,
                    }}
                  >
                    {project.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      color: "hsl(var(--muted-foreground))",
                      margin: 0,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                    className="hidden sm:block"
                  >
                    {project.subtitle}
                  </p>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                  <div style={{ display: "flex", gap: 5 }}>
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "0.65rem",
                          padding: "2px 8px",
                          borderRadius: 999,
                          background: "hsl(var(--primary) / 0.08)",
                          color: "hsl(var(--primary))",
                          border: "1px solid hsl(var(--primary) / 0.2)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Github
                    size={14}
                    style={{ color: "hsl(var(--muted-foreground))", flexShrink: 0 }}
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
