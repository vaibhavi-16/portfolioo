import { useRef } from "react";
import useTilt from "../useTilt";

export default function Experience() {
  const ref = useRef(null);
  useTilt(ref);

  return (
    <section
      ref={ref}
      className="card animate-right animate-delay-3 jiggle"
    >
      <h2>Work Experience</h2>

      <div className="experience-block">
        <h3>Senior Application Developer – Landmark Group (Data Labs)</h3>
        <span>Nov 2024 – Present | Bangalore, India</span>

        <ul>
          <li>
            Leading architecture, design, and development of enterprise-grade
            platforms supporting multiple business units.
          </li>
          <li>
            Spearheaded development of PriceScope, a retail pricing intelligence
            platform enabling competitor monitoring, dynamic pricing, and
            real-time analytics.
          </li>
          <li>
            Achieved 80% system performance improvement using FastAPI async
            services, Redis caching, Celery pipelines, and SQL optimization.
          </li>
          <li>
            Designed microservice-based systems, standardized REST APIs, and
            managed Azure CI/CD pipelines for cloud-native deployments.
          </li>
          <li>
            Took end-to-end ownership of business-critical products and mentored
            junior engineers.
          </li>
        </ul>
      </div>

      <div className="experience-block">
        <h3>Software Engineer – A Plus Topper</h3>
        <span>Jan 2022 – Nov 2024</span>

        <ul>
          <li>
            Core contributor to an algorithmic trading platform supporting
            thousands of active users.
          </li>
          <li>
            Built and scaled backend services using Python, Django, MySQL, Redis,
            and Celery-based background processing.
          </li>
          <li>
            Developed real-time data pipelines and financial analytics systems.
          </li>
          <li>
            Delivered multiple client-facing tools enabling data-driven trading
            and investment decisions.
          </li>
        </ul>
      </div>

      <div className="resume-box">
        <p>Want a detailed view of my experience?</p>

        <a href="/Vaibhavi_Resume.pdf" download className="resume-btn">
          ⬇ Download Resume
        </a>
      </div>
    </section>
  );
}
