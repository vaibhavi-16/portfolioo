export default function Footer() {
  return (
    <footer className="footer">
      <h2>Let’s Connect</h2>

      <p style={{ maxWidth: "720px", margin: "10px auto 26px", opacity: 0.85 }}>
        I’m open to Sales, Business Development, and Marketing opportunities where I can
        contribute to revenue growth, client acquisition, and brand building.
      </p>

      <p>
        📧 Email:{" "}
        <a href="mailto:amanrahi7599@gmail.com">amanrahi7599@gmail.com</a>
      </p>

      <p>📞 Phone: +91 84340 06247</p>

      <p>📍 Location: Bengaluru, India</p>

      <p>
        🔗 LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/aman-a885621b7/"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/aman-a885621b7
        </a>
      </p>

      <div style={{ marginTop: "26px", color: "var(--accent)", fontWeight: 600 }}>
        Let’s explore how I can add value to your organization.
      </div>

      <p className="footer-note">
        © {new Date().getFullYear()} Aman
      </p>
    </footer>
  );
}
