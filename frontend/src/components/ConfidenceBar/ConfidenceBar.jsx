import { useEffect, useState } from 'react';
import styles from './ConfidenceBar.module.css';

function ConfidenceBar({ confidence, badgeClass = 'healthy' }) {
  const [width, setWidth] = useState(0);
  const percent = Math.round(confidence * 100);

  // Animate bar fill on mount
  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setWidth(percent);
    });
    return () => cancelAnimationFrame(timer);
  }, [percent]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        <div
          className={`${styles.fill} ${styles[badgeClass]}`}
          style={{ width: `${width}%` }}
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Confidence: ${percent}%`}
        />
      </div>
      <div className={styles.labels}>
        <span>0%</span>
        <span>50%</span>
        <span>100%</span>
      </div>
    </div>
  );
}

export default ConfidenceBar;
