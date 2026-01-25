import { useRef } from "react";
import useTilt from "../useTilt";

export default function Skills() {
  const ref = useRef(null);
  useTilt(ref);

  return (
    <section className="card" ref={ref}>
      <h2>Skills</h2>
      <ul className="skill-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React JS</li>
        <li>Python</li>
        <li>Java</li>
        <li>API Calling</li>
      </ul>
    </section>
  );
}
