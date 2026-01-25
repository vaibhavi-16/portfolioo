import "./style.css";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Education from "./components/Education";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Hero />

      <main className="container">
        <About />
        <Skills />
        <Projects />
        <Education />
      </main>

      <Footer />
    </>
  );
}
