import { useRef } from "react";
import useTilt from "../useTilt";

export default function Education() {
  const ref = useRef(null);
  useTilt(ref);

  return (
    <section className="card education-card" ref={ref}>
      <h2>Education</h2>

      <div className="education-item">
        <h3>Bachelor’s Degree / Diploma</h3>
        <p>Computer Science / Related Field</p>
        <span>2021 – 2025</span>
      </div>
    </section>
  );
}
