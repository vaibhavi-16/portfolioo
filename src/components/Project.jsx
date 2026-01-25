import { useRef } from "react";
import useTilt from "../useTilt";

export default function Project() {
  const ref = useRef(null);
  useTilt(ref);

  return (
    <section className="card animate-left animate-delay-3 jiggle" ref={ref}>
      <h2>Key Projects</h2>

      <div className="project-card">
        <h3>Central Pricing Application</h3>
        <p>
          Enterprise pricing intelligence platform for retail operations.
          Built scalable FastAPI services, secure REST APIs, distributed
          caching, and real-time analytics dashboards.
        </p>
      </div>

      <div className="project-card">
        <h3>PriceScope Platform</h3>
        <p>
          Retail competitor monitoring and dynamic pricing system.
          Improved system performance by 80% using async services,
          Redis caching, and optimized SQL queries.
        </p>
      </div>

      <div className="project-card">
        <h3>Margin Estimation Tool</h3>
        <p>
          Financial forecasting system enabling leadership teams to make
          data-driven pricing and revenue decisions. Reduced manual
          analysis time by 40%.
        </p>
      </div>
    </section>
  );
}
