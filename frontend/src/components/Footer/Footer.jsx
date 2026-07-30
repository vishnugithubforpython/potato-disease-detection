import styles from './Footer.module.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <span className={styles.logoIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 2C8.5 2 6 4.5 6 8c0 3.5 2 6 4 8.5 1.5 1.8 2 3.5 2 3.5s.5-1.7 2-3.5c2-2.5 4-5 4-8.5 0-3.5-2.5-6-6-6z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span>Potato Disease Detection System</span>
        </div>

        <p className={styles.copyright}>
          &copy; {year} PotatoDetect. Powered by AI for smarter farming.
        </p>

        <div className={styles.badges}>
          <span className={styles.badge}>React 19</span>
          <span className={styles.badge}>FastAPI</span>
          <span className={styles.badge}>TensorFlow</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
