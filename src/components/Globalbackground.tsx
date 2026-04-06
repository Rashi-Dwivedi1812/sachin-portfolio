/**
 * GlobalBackground.tsx
 * Wrap your entire app with this once — in App.tsx or your root layout.
 *
 * Usage:
 *   import GlobalBackground from "./GlobalBackground";
 *   <GlobalBackground>
 *     <Navbar />
 *     <HeroSection />
 *     ...all other sections
 *   </GlobalBackground>
 */

import { ReactNode } from "react";

const GlobalBackground = ({ children }: { children: ReactNode }) => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Grid lines */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          backgroundImage:
            "linear-gradient(90deg, hsl(var(--border) / 0.35) 1px, transparent 1px), " +
            "linear-gradient(0deg, hsl(var(--border) / 0.35) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 100% 100% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 100% 100% at 50% 0%, black 40%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Top radial glow from primary */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          backgroundImage:
            "radial-gradient(ellipse 80% 40% at 50% -5%, hsl(var(--primary) / 0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Page content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default GlobalBackground;
