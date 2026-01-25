export default function Footer() {
  return (
    <footer className="footer">
      <h2>Contact</h2>

      <p>
        📧 Email:
        <a href="mailto:tandon16vaibhavi@gmail.com">
          tandon16vaibhavi@gmail.com
        </a>
      </p>

      <p>📞 Phone: +91 6205451214</p>

      <p>
        💻 GitHub:
        <a
          href="https://github.com/vaibhavi-16"
          target="_blank"
          rel="noreferrer"
        >
          github.com/vaibhavi-16
        </a>
      </p>

      <p>
        🔗 LinkedIn:
        <a
          href="https://www.linkedin.com/in/vaibhavi-kumari-8a64741b6/"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/vaibhavi-kumari
        </a>
      </p>

      <p className="footer-note">
        © {new Date().getFullYear()} Vaibhavi Kumari
      </p>
    </footer>
  );
}
