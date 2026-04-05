import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "sachinofficial223204@gmail.com",
    display: "sachinofficial223204@gmail.com",
    href: "mailto:sachinofficial223204@gmail.com",
    accent: { color: "hsl(var(--primary))", bg: "hsl(var(--primary) / 0.08)", border: "hsl(var(--primary) / 0.25)" },
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7376562159",
    display: "+91 73765 62159",
    href: "tel:+917376562159",
    accent: { color: "hsl(200 80% 60%)", bg: "hsl(200 80% 60% / 0.08)", border: "hsl(200 80% 60% / 0.25)" },
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Noida, India",
    display: "Noida, India",
    href: undefined,
    accent: { color: "hsl(35 90% 58%)", bg: "hsl(35 90% 58% / 0.08)", border: "hsl(35 90% 58% / 0.25)" },
  },
  {
    icon: Github,
    label: "GitHub",
    value: "sachin-m15",
    display: "github.com/sachin-m15",
    href: "https://github.com/sachin-m15",
    accent: { color: "hsl(270 60% 65%)", bg: "hsl(270 60% 65% / 0.08)", border: "hsl(270 60% 65% / 0.25)" },
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "sachin-mishra",
    display: "linkedin.com/in/sachin-mishra",
    href: "https://www.linkedin.com/in/sachin-mishra-325444271/",
    accent: { color: "hsl(210 90% 60%)", bg: "hsl(210 90% 60% / 0.08)", border: "hsl(210 90% 60% / 0.25)" },
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const ContactSection = () => {
  return (
    <section
      id="contact"
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
            "radial-gradient(ellipse 70% 50% at 50% 110%, hsl(var(--primary) / 0.07) 0%, transparent 65%)",
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
            Contact
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
            Let's build something
            <br />
            together.
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "hsl(var(--muted-foreground))",
              margin: 0,
              maxWidth: 420,
              lineHeight: 1.7,
            }}
          >
            Open to AI/ML roles, collaborations, and interesting projects. Drop a message anytime.
          </p>
        </motion.div>

        {/* Contact cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))",
            gap: "1rem",
            marginBottom: "4rem",
          }}
        >
          {contacts.map(({ icon: Icon, label, display, href, accent }, i) => {
            const isLink = !!href;
            const Tag = isLink ? motion.a : motion.div;
            const linkProps = isLink
              ? {
                  href,
                  target: href.startsWith("http") ? "_blank" : undefined,
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <Tag
                key={label}
                {...(linkProps as any)}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={isLink ? { y: -3 } : {}}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "1rem 1.25rem",
                  borderRadius: 12,
                  border: "1px solid hsl(var(--border))",
                  background: "hsl(var(--card))",
                  textDecoration: "none",
                  transition: "border-color 0.22s, background 0.22s",
                  cursor: isLink ? "pointer" : "default",
                  overflow: "hidden",
                  position: "relative",
                }}
                onMouseEnter={
                  isLink
                    ? (e: React.MouseEvent<HTMLElement>) => {
                        (e.currentTarget as HTMLElement).style.borderColor = accent.border;
                        (e.currentTarget as HTMLElement).style.background = accent.bg;
                      }
                    : undefined
                }
                onMouseLeave={
                  isLink
                    ? (e: React.MouseEvent<HTMLElement>) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--border))";
                        (e.currentTarget as HTMLElement).style.background = "hsl(var(--card))";
                      }
                    : undefined
                }
              >
                {/* Icon */}
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: accent.bg,
                    border: `1px solid ${accent.border}`,
                    color: accent.color,
                  }}
                >
                  <Icon size={15} />
                </div>

                {/* Text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "hsl(var(--muted-foreground))",
                      margin: "0 0 2px",
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 500,
                      color: "hsl(var(--foreground))",
                      margin: 0,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {display}
                  </p>
                </div>

                {/* Arrow for links */}
                {isLink && (
                  <ArrowUpRight
                    size={13}
                    style={{
                      flexShrink: 0,
                      color: accent.color,
                      opacity: 0.7,
                    }}
                  />
                )}
              </Tag>
            );
          })}
        </div>

        {/* Divider + Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.5 }}
          style={{
            borderTop: "1px solid hsl(var(--border))",
            paddingTop: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              color: "hsl(var(--muted-foreground))",
              margin: 0,
              letterSpacing: "0.04em",
            }}
          >
            Designed & built by{" "}
            <span style={{ color: "hsl(var(--foreground))", fontWeight: 600 }}>
              Sachin Mishra
            </span>
          </p>
          <p
            style={{
              fontSize: "0.72rem",
              color: "hsl(var(--muted-foreground))",
              margin: 0,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            {new Date().getFullYear()} · Noida, India
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
