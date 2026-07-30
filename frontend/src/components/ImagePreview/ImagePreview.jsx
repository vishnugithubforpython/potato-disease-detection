import styles from './ImagePreview.module.css';

function formatFileSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function ImagePreview({ previewUrl, fileName, fileSize, onClear }) {
  return (
    <div className={styles.preview}>
      <div className={styles.imageWrapper}>
        <img src={previewUrl} alt="Selected potato leaf" className={styles.image} />
        <div className={styles.overlay}>
          <button
            type="button"
            className={styles.clearBtn}
            onClick={onClear}
            aria-label="Remove image"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
      <div className={styles.meta}>
        <div className={styles.fileInfo}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          <span className={styles.fileName}>{fileName}</span>
        </div>
        {fileSize && <span className={styles.fileSize}>{formatFileSize(fileSize)}</span>}
      </div>
    </div>
  );
}

export default ImagePreview;
