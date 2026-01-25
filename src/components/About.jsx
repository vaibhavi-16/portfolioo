import { useRef } from "react";
import useTilt from "../useTilt";

export default function About() {
  const ref = useRef(null);
  useTilt(ref);

  return (
    <section className="card animate-left animate-delay-1 jiggle" ref={ref}>
      <h2>About Me</h2>

      <p>
        I am an MBA candidate specialising in Sales and Marketing, with practical
        exposure to real estate and premium hospitality environments. I bring
        hands-on experience in lead generation, cold outreach, client
        engagement, and supporting early-stage sales pipelines.
      </p>

      <p>
        I am skilled at understanding market needs, building strong customer
        relationships, and supporting revenue-driven initiatives through
        structured follow-ups, site visits, and consultative selling. I am
        actively seeking entry-level opportunities in Sales, Business
        Development, or Marketing where I can contribute to scalable growth and
        brand success.
      </p>
    </section>
  );
}
