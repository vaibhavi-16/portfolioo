import "./style.css";
import { useState, useEffect } from "react";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import WhyMe from "./components/WhyMe";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [showControls, setShowControls] = useState(true);
  const [gradient, setGradient] = useState("theme-redblue");

  useEffect(() => {
    document.body.className = `${theme === "light" ? "light" : ""} ${gradient}`;

    const handleScroll = () => {
      setShowControls(window.scrollY < 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [theme, gradient]);

  return (
    <>
      {/* TOP RIGHT CONTROLS */}
      <div
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          zIndex: 999,
          display: "flex",
          gap: "12px",
          alignItems: "center",
          opacity: showControls ? 1 : 0,
          transform: showControls ? "translateY(0)" : "translateY(-20px)",
          pointerEvents: showControls ? "auto" : "none",
          transition: "all 0.4s ease"
        }}
      >
        <a href="/Aman_Resume.pdf" download className="top-resume-btn">
          ⬇ Download Resume
        </a>

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="theme-btn"
        >
          {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
        </button>
      </div>

      {/* RIGHT SIDE GRADIENT TOOLBAR (ONLY IN DARK MODE) */}
      {theme === "dark" && (
        <div
          style={{
            position: "fixed",
            right: 18,
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            zIndex: 998,
            background: "rgba(0,0,0,0.35)",
            padding: "12px",
            borderRadius: "22px",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.12)"
          }}
        >
          <ColorDot color="#ff1e4d" onClick={() => setGradient("theme-redblue")} />
          <ColorDot color="#3b82f6" onClick={() => setGradient("theme-blue")} />
          <ColorDot color="#8b5cf6" onClick={() => setGradient("theme-purple")} />
          <ColorDot color="#000000" onClick={() => setGradient("theme-black")} />
          <ColorDot color="#10b981" onClick={() => setGradient("theme-green")} />
          <ColorDot color="#ff00cc" onClick={() => setGradient("theme-cyber")} />
        </div>
      )}


      <Hero />

      <main className="container">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <WhyMe />
        <Education />
      </main>

      <Footer />
    </>
  );
}

/* SMALL COLOR BUTTON */
function ColorDot({ color, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: 18,
        height: 18,
        borderRadius: "50%",
        background: color,
        cursor: "pointer",
        boxShadow: "0 0 10px " + color,
        transition: "transform 0.2s ease"
      }}
      onMouseEnter={e => (e.target.style.transform = "scale(1.2)")}
      onMouseLeave={e => (e.target.style.transform = "scale(1)")}
    />
  );
}
