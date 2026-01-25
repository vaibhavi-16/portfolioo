import { useRef } from "react";
import useTilt from "../useTilt";

export default function About() {
  const ref = useRef(null);
  useTilt(ref);

  return (
    <section className="card animate-left animate-delay-1 jiggle" ref={ref}>
      <h2>About Me</h2>
      <p>
        I am a Full Stack Developer with 4+ years of experience designing,
        building, and scaling enterprise and data-driven web platforms.
        My core expertise lies in Python, Django, FastAPI, and cloud-native
        systems.
      </p>

      <p>
        I have worked extensively on microservices architecture, system
        design, performance optimization, and large-scale distributed
        systems in retail and fintech domains. I enjoy owning products
        end-to-end and transforming complex business requirements into
        reliable technical solutions.
      </p>
    </section>
  );
}
