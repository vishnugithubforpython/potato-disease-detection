import styles from './Loader.module.css';

function Loader({ message = 'Analyzing your image...' }) {
  return (
    <div className={styles.loader} role="status" aria-live="polite">
      <div className={styles.spinner}>
        <div className={styles.ring} />
        <div className={styles.ring} />
        <div className={styles.ring} />
        <div className={styles.leaf}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 2C8.5 2 6 4.5 6 8c0 3.5 2 6 4 8.5 1.5 1.8 2 3.5 2 3.5s.5-1.7 2-3.5c2-2.5 4-5 4-8.5 0-3.5-2.5-6-6-6z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      <p className={styles.message}>{message}</p>
      <div className={styles.dots}>
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export default Loader;
