export default function Footer() {
  return (
    <footer className="footer">
      <h2>Contact</h2>

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

      <p className="footer-note">
        © {new Date().getFullYear()} Aman
      </p>
    </footer>
  );
}
