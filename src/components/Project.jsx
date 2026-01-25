import { useRef } from "react";
import useTilt from "../useTilt";

export default function Project() {
  const ref = useRef(null);
  useTilt(ref);

  return (
    <section className="card" ref={ref}>
      <h2>Projects</h2>

      <div className="project-card">
        <h3>Login Page</h3>
        <p>Secure login page with validation and clean UI.</p>
      </div>

      <div className="project-card">
        <h3>US Stock Price Tracker</h3>
        <p>Live US stock prices using API integration.</p>
      </div>

      <div className="project-card">
        <h3>Weather Forecast App</h3>
        <p>Real-time weather forecast using public APIs.</p>
      </div>
    </section>
  );
}
