import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    display: "sachinofficial223204@gmail.com",
    href: "mailto:sachinofficial223204@gmail.com",
    accent: "#e879f9",
  },
  {
    icon: Phone,
    label: "Phone",
    display: "+91 73765 62159",
    href: "tel:+917376562159",
    accent: "#38bdf8",
  },
  {
    icon: MapPin,
    label: "Location",
    display: "Noida, India",
    accent: "#fb923c",
  },
  {
    icon: Github,
    label: "GitHub",
    display: "github.com/sachin-m15",
    href: "https://github.com/sachin-m15",
    accent: "#a78bfa",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    display: "linkedin.com/in/sachin-mishra",
    href: "https://www.linkedin.com/in/sachin-mishra-325444271/",
    accent: "#60a5fa",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);
    emailjs
      .sendForm(
        "service_mehqiz1",
        "template_bdxtpr8",
        formRef.current,
        "7bF70EuO8emoldLIs"
      )
      .then(() => {
        setSent(true);
        formRef.current?.reset();
        setLoading(false);
        setTimeout(() => setSent(false), 4000);
      })
      .catch(() => {
        alert("Failed to send. Please try again.");
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      style={{
        position: "relative",
        padding: "7rem 1.5rem",
        overflow: "hidden",
        background: "hsl(var(--background))",
      }}
    >
      {/* Decorative glow blobs */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, hsla(270,80%,60%,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-5%",
          left: "-8%",
          width: 360,
          height: 360,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, hsla(200,80%,60%,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", maxWidth: 1040, margin: "0 auto" }}>
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "4rem" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "4px 14px",
              borderRadius: 999,
              border: "1px solid hsl(var(--primary) / 0.3)",
              background: "hsl(var(--primary) / 0.06)",
              marginBottom: "1.25rem",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "hsl(var(--primary))",
                boxShadow: "0 0 6px hsl(var(--primary))",
              }}
            />
            <span
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "hsl(var(--primary))",
                fontWeight: 500,
              }}
            >
              Contact
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.6rem)",
              fontWeight: 600,
              color: "hsl(var(--foreground))",
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Let's build something{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--primary)), #38bdf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              together.
            </span>
          </h2>
          <p
            style={{
              marginTop: "0.75rem",
              color: "hsl(var(--muted-foreground))",
              fontSize: "1rem",
              maxWidth: 420,
            }}
          >
            Have an idea or a project? Drop me a message — I usually respond within 24 hours.
          </p>
        </motion.div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2.5rem",
            alignItems: "start",
          }}
        >
          {/* LEFT — Contact Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {contacts.map(({ icon: Icon, label, display, href, accent }, i) => {
              const Tag = href ? motion.a : motion.div;
              return (
                <Tag
                  key={label}
                  href={href as string}
                  target={href ? "_blank" : undefined}
                  rel={href ? "noopener noreferrer" : undefined}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "0.9rem 1.1rem",
                    borderRadius: 14,
                    border: "1px solid hsl(var(--border))",
                    background: "hsl(var(--card))",
                    textDecoration: "none",
                    cursor: href ? "pointer" : "default",
                    backdropFilter: "blur(6px)",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = `${accent}55`;
                    el.style.boxShadow = `0 0 0 1px ${accent}22, 0 4px 24px ${accent}18`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "hsl(var(--border))";
                    el.style.boxShadow = "none";
                  }}
                >
                  {/* Icon box */}
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: `${accent}14`,
                      border: `1px solid ${accent}30`,
                      color: accent,
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={16} strokeWidth={1.8} />
                  </div>

                  {/* Text */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p
                      style={{
                        fontSize: "0.68rem",
                        color: "hsl(var(--muted-foreground))",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        margin: 0,
                        marginBottom: 2,
                      }}
                    >
                      {label}
                    </p>
                    <p
                      style={{
                        fontSize: "0.88rem",
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

                  {href && (
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.8}
                      style={{ color: "hsl(var(--muted-foreground))", flexShrink: 0 }}
                    />
                  )}
                </Tag>
              );
            })}
          </div>

          {/* RIGHT — Form */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              padding: "2rem",
              borderRadius: 18,
              border: "1px solid hsl(var(--border))",
              background: "hsl(var(--card))",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              backdropFilter: "blur(8px)",
            }}
          >
            <div style={{ marginBottom: "0.25rem" }}>
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 600,
                  color: "hsl(var(--foreground))",
                  margin: 0,
                  letterSpacing: "-0.02em",
                }}
              >
                Send a message
              </h3>
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "hsl(var(--muted-foreground))",
                  margin: "4px 0 0",
                }}
              >
                I'll get back to you as soon as possible.
              </p>
            </div>

            {/* Form fields */}
            {[
              { name: "user_email", placeholder: "your@email.com", label: "Email", type: "email", required: true },
              { name: "user_name", placeholder: "Your name", label: "Name", required: true },
              { name: "subject", placeholder: "What's this about?", label: "Subject" },
            ].map((field) => (
              <div key={field.name} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label
                  style={{
                    fontSize: "0.72rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "hsl(var(--muted-foreground))",
                    fontWeight: 500,
                  }}
                >
                  {field.label}
                  {field.required && (
                    <span style={{ color: "hsl(var(--primary))", marginLeft: 3 }}>*</span>
                  )}
                </label>
                <input
                  name={field.name}
                  type={field.type || "text"}
                  placeholder={field.placeholder}
                  required={field.required}
                  style={{
                    padding: "0.65rem 0.9rem",
                    borderRadius: 10,
                    border: "1px solid hsl(var(--border))",
                    background: "hsl(var(--background))",
                    color: "hsl(var(--foreground))",
                    fontSize: "0.88rem",
                    outline: "none",
                    width: "100%",
                    boxSizing: "border-box",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "hsl(var(--primary) / 0.6)";
                    e.target.style.boxShadow = "0 0 0 3px hsl(var(--primary) / 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "hsl(var(--border))";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
            ))}

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label
                style={{
                  fontSize: "0.72rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "hsl(var(--muted-foreground))",
                  fontWeight: 500,
                }}
              >
                Message <span style={{ color: "hsl(var(--primary))" }}>*</span>
              </label>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                required
                style={{
                  padding: "0.65rem 0.9rem",
                  borderRadius: 10,
                  border: "1px solid hsl(var(--border))",
                  background: "hsl(var(--background))",
                  color: "hsl(var(--foreground))",
                  fontSize: "0.88rem",
                  outline: "none",
                  width: "100%",
                  boxSizing: "border-box",
                  resize: "vertical",
                  fontFamily: "inherit",
                  lineHeight: 1.6,
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "hsl(var(--primary) / 0.6)";
                  e.target.style.boxShadow = "0 0 0 3px hsl(var(--primary) / 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "hsl(var(--border))";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            <motion.button
              type="submit"
              disabled={loading || sent}
              whileTap={{ scale: 0.97 }}
              style={{
                marginTop: "0.25rem",
                padding: "0.75rem",
                borderRadius: 10,
                border: "none",
                background: sent
                  ? "hsl(142 70% 42%)"
                  : "hsl(var(--primary))",
                color: "white",
                fontWeight: 600,
                fontSize: "0.9rem",
                cursor: loading || sent ? "default" : "pointer",
                letterSpacing: "-0.01em",
                transition: "background 0.3s, opacity 0.2s",
                opacity: loading ? 0.7 : 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              }}
            >
              {sent ? (
                <>
                  <span>✓</span> Message sent!
                </>
              ) : loading ? (
                "Sending..."
              ) : (
                <>
                  Send message <ArrowUpRight size={15} strokeWidth={2} />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
