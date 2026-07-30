import { useRef, useState, useCallback } from 'react';
import ImagePreview from '../ImagePreview/ImagePreview';
import styles from './UploadCard.module.css';

function UploadCard({ selectedFile, previewUrl, onFileSelect, onClear }) {
  const inputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files?.[0];
      if (file && file.type.startsWith('image/')) {
        onFileSelect(file);
      }
    },
    [onFileSelect],
  );

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  const handleBrowse = () => {
    inputRef.current?.click();
  };

  return (
    <div className={styles.card}>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className={styles.hiddenInput}
        aria-hidden="true"
      />

      {!previewUrl ? (
        <div
          className={`${styles.dropzone} ${isDragging ? styles.dropzoneActive : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          role="button"
          tabIndex={0}
          onClick={handleBrowse}
          onKeyDown={(e) => e.key === 'Enter' && handleBrowse()}
          aria-label="Upload potato leaf image"
        >
          <div className={styles.dropzoneIcon}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
          </div>
          <h3 className={styles.dropzoneTitle}>Drag & drop your image here</h3>
          <p className={styles.dropzoneSubtitle}>
            or click to browse from your device
          </p>
          <button
            type="button"
            className={styles.browseBtn}
            onClick={(e) => {
              e.stopPropagation();
              handleBrowse();
            }}
          >
            Browse Files
          </button>
          <p className={styles.hint}>Supports JPG, PNG, WEBP — Max 10MB</p>
        </div>
      ) : (
        <ImagePreview
          previewUrl={previewUrl}
          fileName={selectedFile?.name}
          fileSize={selectedFile?.size}
          onClear={onClear}
        />
      )}
    </div>
  );
}

export default UploadCard;
