import { motion } from "framer-motion";
import { Bot, Brain, Code2, Database, Cpu } from "lucide-react";

const workAreas = [
  { icon: Bot, text: "LLM systems and optimized RAG pipelines", tag: "LLM" },
  { icon: Brain, text: "Multi-agent AI architectures and workflow automation", tag: "Agents" },
  { icon: Cpu, text: "Neuro-symbolic reasoning and validation layers", tag: "Reasoning" },
  { icon: Database, text: "Machine learning and deep learning applications", tag: "ML/DL" },
  { icon: Code2, text: "Backend systems using FastAPI and API integrations", tag: "Backend" },
];

const strengths = [
  "Strong foundation in data structures, algorithms, and system design",
  "Building efficient and scalable AI systems",
  "Mentoring 100+ students as Technical Coordinator at AI/ML Hub",
  "Leading workshops, hackathons, and hands-on sessions in ML & GenAI",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-6 overflow-hidden"
      style={{
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Subtle background grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          // backgroundImage:
          //   "radial-gradient(circle at 70% 20%, hsla(var(--primary) / 0.06) 0%, transparent 60%), " +
          //   "linear-gradient(90deg, hsla(var(--border) / 0.4) 1px, transparent 1px), " +
          //   "linear-gradient(0deg, hsla(var(--border) / 0.4) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 48px 48px, 48px 48px",
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
            About
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight"
            style={{
              fontFamily: "'DM Serif Display', serif",
              background: "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--muted-foreground)) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Building AI that
            <br />
            works in production.
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Left: Intro + Strengths */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-2 space-y-6"
          >
            <motion.div variants={fadeUp}>
              <p className="text-sm leading-7 text-muted-foreground">
                AI/ML developer focused on production-ready intelligent systems —
                LLMs, RAG pipelines, and multi-agent architectures that integrate
                vector databases with scalable backends.
              </p>
            </motion.div>

            {/* Strengths */}
            <motion.div variants={fadeUp} className="pt-2">
              <p
                className="text-[10px] font-bold tracking-[0.18em] uppercase mb-4"
                style={{ color: "hsl(var(--primary))" }}
              >
                Strengths
              </p>
              <ul className="space-y-3">
                {strengths.map((s, i) => (
                  <motion.li
                    key={s}
                    variants={fadeUp}
                    className="flex gap-3 text-sm text-muted-foreground"
                  >
                    <span
                      className="mt-1 shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold"
                      style={{
                        background: "hsl(var(--primary) / 0.12)",
                        color: "hsl(var(--primary))",
                      }}
                    >
                      {i + 1}
                    </span>
                    <span className="leading-6">{s}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right: Work Areas */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-3 space-y-3"
          >
            <motion.p
              variants={fadeUp}
              className="text-[10px] font-bold tracking-[0.18em] uppercase mb-5"
              style={{ color: "hsl(var(--primary))" }}
            >
              What I Work On
            </motion.p>

            {workAreas.map(({ icon: Icon, text, tag }, i) => (
              <motion.div
                key={text}
                variants={fadeUp}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="group flex items-center gap-4 p-4 rounded-xl cursor-default"
                style={{
                  border: "1px solid hsl(var(--border))",
                  background: "hsl(var(--card))",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--primary) / 0.4)";
                  (e.currentTarget as HTMLElement).style.background = "hsl(var(--primary) / 0.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--border))";
                  (e.currentTarget as HTMLElement).style.background = "hsl(var(--card))";
                }}
              >
                {/* Icon */}
                <div
                  className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{
                    background: "hsl(var(--primary) / 0.1)",
                    color: "hsl(var(--primary))",
                  }}
                >
                  <Icon size={15} />
                </div>

                {/* Text */}
                <span className="text-sm text-muted-foreground flex-1 leading-5">{text}</span>

                {/* Tag */}
                <span
                  className="shrink-0 text-[10px] font-semibold px-2 py-1 rounded-md tracking-wide"
                  style={{
                    background: "hsl(var(--primary) / 0.08)",
                    color: "hsl(var(--primary))",
                  }}
                >
                  {tag}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
