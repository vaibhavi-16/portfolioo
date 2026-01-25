import { useRef } from "react";
import useTilt from "../useTilt";

export default function Education() {
  const ref = useRef(null);
  useTilt(ref);

  return (
  <section className="card education-card animate-right animate-delay-4 jiggle" ref={ref}>
      <h2>Education</h2>
      <div className="education-item">
        B.Tech in Computer Science – BPUT University (2018–2022)
      </div>
    </section>
  );
}
