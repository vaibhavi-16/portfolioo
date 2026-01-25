import "./style.css";
import { useState, useEffect } from "react";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

export default function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme === "light" ? "light" : "";
  }, [theme]);

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
          alignItems: "center"
        }}
      >
        {/* DOWNLOAD RESUME */}
        <a
          href="/Vaibhavi_Resume.pdf"
          download
          className="top-resume-btn"
        >
          ⬇ Download Resume
        </a>

        {/* THEME TOGGLE */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="theme-btn"
        >
          {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
        </button>
      </div>

      <Hero />

      <main className="container">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
      </main>

      <Footer />
    </>
  );
}
