import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#" },
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

      const sections = links
        .map((l) => l.href.replace("#", ""))
        .filter(Boolean);
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
        background: scrolled ? "hsl(var(--background) / 0.55)" : "transparent",
        backdropFilter: scrolled ? "blur(18px) saturate(160%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(18px) saturate(160%)" : "none",
        borderBottom: scrolled
          ? "1px solid hsl(var(--border) / 0.4)"
          : "1px solid transparent",
        transition:
          "background 0.4s ease, border-color 0.4s ease, padding 0.3s ease",
        padding: scrolled ? "0.55rem 0" : "1rem 0",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{ textDecoration: "none", display: "flex", alignItems: "baseline", gap: 1 }}
        >
          <span
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "1.2rem",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "hsl(var(--foreground))",
            }}
          >
            Sachin
          </span>
          <span
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "1.2rem",
              color: "hsl(var(--primary))",
            }}
          >
            .
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: 2 }}>
          {links.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
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
                  padding: "0.38rem 0.7rem",
                  borderRadius: 7,
                  background: isActive
                    ? "hsl(var(--foreground) / 0.07)"
                    : "transparent",
                  transition: "color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "hsl(var(--foreground))";
                    el.style.background = "hsl(var(--foreground) / 0.06)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "hsl(var(--muted-foreground))";
                    el.style.background = "transparent";
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
              marginLeft: "0.6rem",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "hsl(var(--background))",
              background: "hsl(var(--primary))",
              textDecoration: "none",
              padding: "0.4rem 1rem",
              borderRadius: 7,
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.opacity = "0.85";
              el.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }}
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
            border: "1px solid hsl(var(--border) / 0.6)",
            borderRadius: 7,
            width: 34,
            height: 34,
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
            el.style.borderColor = "hsl(var(--border) / 0.6)";
            el.style.color = "hsl(var(--muted-foreground))";
          }}
        >
          {menuOpen ? <X size={15} /> : <Menu size={15} />}
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
              borderTop: "1px solid hsl(var(--border) / 0.4)",
              background: "hsl(var(--background) / 0.75)",
              backdropFilter: "blur(18px) saturate(160%)",
              WebkitBackdropFilter: "blur(18px) saturate(160%)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                maxWidth: 1100,
                margin: "0 auto",
                padding: "0.75rem 1.5rem 1.25rem",
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              {links.map((link, i) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.035, duration: 0.22 }}
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: isActive ? 600 : 400,
                      color: isActive
                        ? "hsl(var(--foreground))"
                        : "hsl(var(--muted-foreground))",
                      textDecoration: "none",
                      padding: "0.55rem 0.7rem",
                      borderRadius: 7,
                      background: isActive
                        ? "hsl(var(--foreground) / 0.07)"
                        : "transparent",
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
                          flexShrink: 0,
                        }}
                      />
                    )}
                  </motion.a>
                );
              })}

              <a
                href="mailto:sachinofficial223204@gmail.com"
                onClick={() => setMenuOpen(false)}
                style={{
                  marginTop: "0.4rem",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "hsl(var(--background))",
                  background: "hsl(var(--primary))",
                  textDecoration: "none",
                  padding: "0.65rem 1rem",
                  borderRadius: 7,
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
