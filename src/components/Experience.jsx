import { useRef } from "react";
import useTilt from "../useTilt";

export default function Experience() {
  const ref = useRef(null);
  useTilt(ref);

  return (
    <section ref={ref} className="card animate-right animate-delay-3 jiggle">
      <h2>Internship Experience</h2>

      <div className="experience-block">
        <h3>Trainee – Rajdhani Homes Pvt. Ltd., Ranchi</h3>
        <span>Real Estate Sales & Marketing</span>
        <ul>
          <li>Generated and qualified real estate leads through cold calling, referrals, and site visits.</li>
          <li>Supported end-to-end sales pipeline including follow-ups, client engagement, and documentation.</li>
          <li>Assisted in property exhibitions and marketing activities to increase inquiries.</li>
          <li>Conducted 12+ site visits and supported deal movement in the conversion funnel.</li>
          <li>Analysed client requirements and recommended suitable property solutions.</li>
        </ul>
      </div>

      <div className="experience-block">
        <h3>Trainee – Royal Orchid Hotels, Bangalore</h3>
        <ul>
          <li>Supported front-office and service teams to deliver high-quality customer experiences.</li>
          <li>Handled guest coordination and issue resolution.</li>
          <li>Assisted service operations in a premium hospitality environment.</li>
        </ul>
      </div>

      <div className="experience-block">
        <h3>Trainee – Radisson Blu Hotel, Ranchi</h3>
        <ul>
          <li>Assisted daily operations and service quality improvement initiatives.</li>
          <li>Managed customer interactions and service coordination.</li>
        </ul>
      </div>

      <div className="resume-box">
        <p>Download my detailed resume</p>
        <a href="/Aman_Resume.pdf" download className="resume-btn">
          ⬇ Download Resume
        </a>
      </div>
    </section>
  );
}
