import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <p>© 2026 Sharmaine M. Iglesia. Built with Next.js.</p>
        <a href="#home">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
