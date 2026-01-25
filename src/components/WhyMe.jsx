import { useRef } from "react";
import useTilt from "../useTilt";

export default function WhyMe() {
  const ref = useRef(null);
  useTilt(ref);

  return (
    <section className="card animate-right jiggle" ref={ref}>
      <h2>Why Hire Me?</h2>

      <ul className="highlight-list">
        <li>Strong professional communication and client presence.</li>
        <li>Comfortable with cold calling and field engagement.</li>
        <li>Ground experience in real estate and premium hospitality.</li>
        <li>MBA foundation combined with real-world execution.</li>
        <li>Highly adaptable, target-driven, and growth-focused mindset.</li>
      </ul>
    </section>
  );
}
