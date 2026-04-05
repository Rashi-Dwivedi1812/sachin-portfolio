import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Live Demo", href: "#live-demo" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section tracker
      const sections = links.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        fontFamily: "'DM Sans', sans-serif",
        transition: "all 0.3s ease",
        borderBottom: scrolled ? "1px solid hsl(var(--border))" : "1px solid transparent",
        background: scrolled
          ? "hsl(var(--background) / 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: scrolled ? "0.65rem 1.5rem" : "1.1rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "padding 0.3s ease",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
        </a>

        {/* Desktop links */}
        <div
          className="hidden md:flex"
          style={{ alignItems: "center", gap: "0.25rem" }}
        >
          {links.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: "0.82rem",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive
                    ? "hsl(var(--foreground))"
                    : "hsl(var(--muted-foreground))",
                  textDecoration: "none",
                  padding: "0.4rem 0.75rem",
                  borderRadius: 8,
                  background: isActive ? "hsl(var(--secondary))" : "transparent",
                  transition: "color 0.2s, background 0.2s",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.color = "hsl(var(--foreground))";
                    (e.currentTarget as HTMLElement).style.background = "hsl(var(--secondary))";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.color = "hsl(var(--muted-foreground))";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }
                }}
              >
                {link.label}
              </a>
            );
          })}

          {/* CTA */}
          <a
            href="mailto:sachinofficial223204@gmail.com"
            style={{
              marginLeft: "0.5rem",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "hsl(var(--background))",
              background: "hsl(var(--primary))",
              textDecoration: "none",
              padding: "0.42rem 1rem",
              borderRadius: 8,
              transition: "opacity 0.2s",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            Hire me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "transparent",
            border: "1px solid hsl(var(--border))",
            borderRadius: 8,
            width: 36,
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "hsl(var(--muted-foreground))",
            cursor: "pointer",
            transition: "border-color 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = "hsl(var(--primary) / 0.5)";
            el.style.color = "hsl(var(--primary))";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = "hsl(var(--border))";
            el.style.color = "hsl(var(--muted-foreground))";
          }}
        >
          {menuOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{
              borderTop: "1px solid hsl(var(--border))",
              background: "hsl(var(--background) / 0.97)",
              backdropFilter: "blur(14px)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                maxWidth: 1100,
                margin: "0 auto",
                padding: "1rem 1.5rem 1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              {links.map((link, i) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))",
                      textDecoration: "none",
                      padding: "0.6rem 0.75rem",
                      borderRadius: 8,
                      background: isActive ? "hsl(var(--secondary))" : "transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: "hsl(var(--primary))",
                        }}
                      />
                    )}
                  </motion.a>
                );
              })}

              {/* Mobile CTA */}
              <a
                href="mailto:sachinofficial223204@gmail.com"
                onClick={() => setMenuOpen(false)}
                style={{
                  marginTop: "0.5rem",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "hsl(var(--background))",
                  background: "hsl(var(--primary))",
                  textDecoration: "none",
                  padding: "0.7rem 1rem",
                  borderRadius: 8,
                  textAlign: "center",
                }}
              >
                Hire me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
