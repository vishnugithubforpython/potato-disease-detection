import { useState, useCallback } from 'react';
import UploadCard from '../../components/UploadCard/UploadCard';
import PredictionCard from '../../components/PredictionCard/PredictionCard';
import Loader from '../../components/Loader/Loader';
import { predictDisease } from '../../services/api';
import styles from './Home.module.css';

function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileSelect = useCallback((file) => {
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    setPrediction(null);
    setError(null);
  }, []);

  const handleClear = useCallback(() => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setSelectedFile(null);
    setPreviewUrl(null);
    setPrediction(null);
    setError(null);
  }, [previewUrl]);

  const handlePredict = async () => {
    if (!selectedFile) return;

    setIsLoading(true);
    setError(null);
    setPrediction(null);

    try {
      const result = await predictDisease(selectedFile);
      setPrediction(result);
    } catch (err) {
      const message =
        err.response?.data?.detail ||
        err.message ||
        'Failed to analyze the image. Please try again.';
      setError(typeof message === 'string' ? message : 'Prediction failed.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            AI-Powered Detection
          </div>
          <h1 className={styles.heroTitle}>
            Potato Disease
            <span className={styles.heroTitleAccent}> Detection</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Upload a potato leaf image and let AI identify the disease within seconds.
          </p>
        </div>
        <div className={styles.heroDecoration} aria-hidden="true">
          <div className={styles.heroOrb1} />
          <div className={styles.heroOrb2} />
          <div className={styles.heroOrb3} />
        </div>
      </section>

      {/* Upload & Prediction Section */}
      <section className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.uploadSection}>
            <UploadCard
              selectedFile={selectedFile}
              previewUrl={previewUrl}
              onFileSelect={handleFileSelect}
              onClear={handleClear}
            />

            <button
              type="button"
              className={`${styles.predictBtn} ${!selectedFile ? styles.predictBtnDisabled : ''}`}
              onClick={handlePredict}
              disabled={!selectedFile || isLoading}
            >
              {isLoading ? (
                <>
                  <span className={styles.btnSpinner} />
                  Analyzing...
                </>
              ) : (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                  Predict Disease
                </>
              )}
            </button>

            {error && (
              <div className={styles.error} role="alert">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>{error}</span>
              </div>
            )}
          </div>

          <div className={styles.resultSection}>
            {isLoading && <Loader />}
            {!isLoading && prediction && <PredictionCard prediction={prediction} />}
            {!isLoading && !prediction && (
              <div className={styles.placeholder}>
                <div className={styles.placeholderIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 2 6 4 8.5 1.5 1.8 2 3.5 2 3.5s.5-1.7 2-3.5c2-2.5 4-5 4-8.5 0-3.5-2.5-6-6-6z" />
                  </svg>
                </div>
                <h3 className={styles.placeholderTitle}>Results will appear here</h3>
                <p className={styles.placeholderText}>
                  Upload a potato leaf image and click Predict to get instant AI-powered disease analysis.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
