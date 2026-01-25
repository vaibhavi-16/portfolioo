import { useRef } from "react";
import useTilt from "../useTilt";

export default function Skills() {
  const ref = useRef(null);
  useTilt(ref);

  return (
    <section className="card animate-right animate-delay-2 jiggle" ref={ref}>
      <h2>Skills</h2>

      <ul className="skill-list">
        <li>Lead Generation & Cold Calling</li>
        <li>Customer Acquisition</li>
        <li>Sales Funnel Management</li>
        <li>Client Relationship Management</li>
        <li>Email & WhatsApp Marketing</li>
        <li>CRM Tools & Lead Tracking</li>
        <li>Google Analytics (GA4)</li>
        <li>Google Tag Manager</li>
        <li>MS Excel (Pivot Tables, Lookups)</li>
        <li>Market Research & Reporting</li>
        <li>Cross-functional Coordination</li>
        <li>Professional Communication</li>
      </ul>
    </section>
  );
}
