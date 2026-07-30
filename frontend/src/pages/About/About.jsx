import styles from './About.module.css';

const FEATURES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 2 6 4 8.5 1.5 1.8 2 3.5 2 3.5s.5-1.7 2-3.5c2-2.5 4-5 4-8.5 0-3.5-2.5-6-6-6z" />
      </svg>
    ),
    title: 'Leaf Image Analysis',
    description:
      'Upload a clear photo of a potato leaf and our AI model analyzes visual patterns to detect disease.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'Instant Results',
    description:
      'Get predictions in seconds with confidence scores, helping you take action before diseases spread.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: 'Three Class Detection',
    description:
      'Identifies Early Blight, Late Blight, and Healthy plants with high accuracy using deep learning.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Modern Interface',
    description:
      'A clean, responsive design built for farmers and researchers — works on desktop, tablet, and mobile.',
  },
];

const DISEASES = [
  {
    name: 'Early Blight',
    className: 'earlyBlight',
    symptoms: 'Dark concentric rings on lower leaves, yellowing, premature leaf drop.',
    action: 'Apply fungicides, rotate crops, and remove infected debris.',
  },
  {
    name: 'Late Blight',
    className: 'lateBlight',
    symptoms: 'Water-soaked lesions, white mold on leaf undersides, rapid plant collapse.',
    action: 'Remove infected plants immediately. Use copper-based fungicides preventively.',
  },
  {
    name: 'Healthy',
    className: 'healthy',
    symptoms: 'Vibrant green leaves with no spots, lesions, or discoloration.',
    action: 'Continue regular monitoring, proper watering, and balanced fertilization.',
  },
];

function About() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>About the System</h1>
          <p className={styles.subtitle}>
            An AI-powered tool designed to help farmers detect potato diseases early,
            reducing crop loss and improving yield.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>How It Works</h2>
        <div className={styles.features}>
          {FEATURES.map((feature) => (
            <div key={feature.title} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDesc}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Diseases We Detect</h2>
        <div className={styles.diseases}>
          {DISEASES.map((disease) => (
            <div key={disease.name} className={styles.diseaseCard}>
              <span className={`${styles.diseaseBadge} ${styles[disease.className]}`}>
                {disease.name}
              </span>
              <div className={styles.diseaseContent}>
                <div>
                  <h4 className={styles.diseaseLabel}>Symptoms</h4>
                  <p className={styles.diseaseText}>{disease.symptoms}</p>
                </div>
                <div>
                  <h4 className={styles.diseaseLabel}>Recommended Action</h4>
                  <p className={styles.diseaseText}>{disease.action}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.techCard}>
          <h2 className={styles.techTitle}>Technology Stack</h2>
          <p className={styles.techDesc}>
            Built with React 19 and Vite on the frontend, FastAPI and TensorFlow on the backend.
            The model is trained on potato leaf images to classify three categories with high accuracy.
          </p>
          <div className={styles.techStack}>
            <span className={styles.techBadge}>React 19</span>
            <span className={styles.techBadge}>Vite</span>
            <span className={styles.techBadge}>FastAPI</span>
            <span className={styles.techBadge}>TensorFlow</span>
            <span className={styles.techBadge}>Axios</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
