import { useRef } from "react";
import useTilt from "../useTilt";

export default function Skills() {
  const ref = useRef(null);
  useTilt(ref);

  return (
    <section className="card animate-right animate-delay-2 jiggle" ref={ref}>
      <h2>Skills</h2>
      <ul className="skill-list">
        <li>Python</li>
        <li>Django, FastAPI, Flask</li>
        <li>REST APIs & Microservices</li>
        <li>SQL (MySQL, PostgreSQL)</li>
        <li>Redis, Celery, Async Systems</li>
        <li>Vue.js, JavaScript, HTML, CSS</li>
        <li>Azure, Docker, Kubernetes, CI/CD</li>
        <li>System Design & Performance</li>
      </ul>
    </section>
  );
}
