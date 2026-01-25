import { useRef } from "react";
import useTilt from "../useTilt";

export default function Education() {
  const ref = useRef(null);
  useTilt(ref);

  return (
    <section className="card education-card animate-right animate-delay-4 jiggle" ref={ref}>
      <h2>Education</h2>

      <div className="education-item">
        Master of Business Administration (CGPA: 8.45) – Sarala Birla University, Ranchi
      </div>

      <div className="education-item">
        Bachelor in Hotel Management (74%) – Gurunanak Institute of Hotel Management, Kolkata
      </div>
    </section>
  );
}
