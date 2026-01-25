import { useRef } from "react";
import useTilt from "../useTilt";

export default function Project() {
  const ref = useRef(null);
  useTilt(ref);

  return (
    <section className="card animate-left animate-delay-3 jiggle" ref={ref}>
      <h2>Certifications</h2>

      <div className="project-card">Business Marketing – Technology Focus (NPTEL)</div>
      <div className="project-card">Foundations of Digital Marketing & E-commerce – Google</div>
      <div className="project-card">Excel Skills Certification – JP Morgan (Forage)</div>
      <div className="project-card">Digital Marketing Strategy – Simplilearn</div>
      <div className="project-card">Investment Risk Management – Coursera</div>
    </section>
  );
}
