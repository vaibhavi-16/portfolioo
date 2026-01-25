import { useRef } from "react";
import useTilt from "../useTilt";

export default function About() {
  const ref = useRef(null);
  useTilt(ref);

  return (
    <section className="card" ref={ref}>
      <h2>About Me</h2>
      <p>
        I am a Full Stack Developer with strong knowledge of frontend
        and backend technologies.
      </p>
    </section>
  );
}
