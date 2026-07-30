import ConfidenceBar from '../ConfidenceBar/ConfidenceBar';
import styles from './PredictionCard.module.css';

const DISEASE_CONFIG = {
  'Early Blight': {
    badgeClass: 'earlyBlight',
    icon: '⚠',
    description: 'Fungal disease causing dark spots on leaves. Treat with fungicides and improve air circulation.',
  },
  'Late Blight': {
    badgeClass: 'lateBlight',
    icon: '🔴',
    description: 'Serious fungal disease. Remove affected plants immediately and apply copper-based fungicides.',
  },
  Healthy: {
    badgeClass: 'healthy',
    icon: '✓',
    description: 'Your potato plant appears healthy. Continue regular monitoring and care.',
  },
};

function PredictionCard({ prediction }) {
  const { class: diseaseName, confidence, predictionTime } = prediction;
  const config = DISEASE_CONFIG[diseaseName] || DISEASE_CONFIG['Healthy'];
  const confidencePercent = Math.round(confidence * 100);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.iconWrapper}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <div>
          <h3 className={styles.title}>Prediction Result</h3>
          <p className={styles.subtitle}>Analysis complete</p>
        </div>
      </div>

      <div className={styles.result}>
        <span className={`${styles.badge} ${styles[config.badgeClass]}`}>
          <span className={styles.badgeIcon}>{config.icon}</span>
          {diseaseName}
        </span>

        <div className={styles.confidenceSection}>
          <div className={styles.confidenceHeader}>
            <span className={styles.confidenceLabel}>Confidence</span>
            <span className={styles.confidenceValue}>{confidencePercent}%</span>
          </div>
          <ConfidenceBar confidence={confidence} badgeClass={config.badgeClass} />
        </div>

        <p className={styles.description}>{config.description}</p>

        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>Processed in {predictionTime}ms</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PredictionCard;
