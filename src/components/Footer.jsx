export default function Footer() {
  return (
    <footer className="footer">
      <h2>Contact</h2>

      <p>
        📧 Email:
        <a href="mailto:siddhantkumar6091@gmail.com">
          siddhantkumar6091@gmail.com
        </a>
      </p>

      <p>
        💻 GitHub:
        <a
          href="https://github.com/siddhantkumar6091-rgb"
          target="_blank"
        >
          github.com/siddhantkumar6091-rgb
        </a>
      </p>

      <p>
        🔗 LinkedIn:
        <a href="https://www.linkedin.com/in/siddhant-kumar-768757262?utm_source=share_via&utm_content=profile&utm_medium=member_androidlinkedin.com/in/SIDDHANT KUMAR." target="_blank">
          linkedin.com/in/SIDDHANT KUMAR.

        </a>
      </p>

      <p className="footer-note">
        © {new Date().getFullYear()} Siddhant Kumar
      </p>
    </footer>
  );
}
