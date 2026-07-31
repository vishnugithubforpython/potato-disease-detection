import { useRef, useState, useCallback } from 'react';
import ImagePreview from '../ImagePreview/ImagePreview';
import styles from './UploadCard.module.css';

function UploadCard({ selectedFile, previewUrl, onFileSelect, onClear }) {
  const galleryInputRef = useRef(null);
  const cameraInputRef = useRef(null);
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

  const openGallery = () => {
    galleryInputRef.current?.click();
  };

  const openCamera = () => {
    cameraInputRef.current?.click();
  };

  return (
    <div className={styles.card}>
      <input
        ref={galleryInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className={styles.hiddenInput}
        aria-hidden="true"
        tabIndex={-1}
      />
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileChange}
        className={styles.hiddenInput}
        aria-hidden="true"
        tabIndex={-1}
      />

      {!previewUrl ? (
        <div
          className={`${styles.dropzone} ${isDragging ? styles.dropzoneActive : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          aria-label="Drag and drop potato leaf image"
        >
          <div className={styles.dropzoneIcon}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
          </div>
          <h3 className={styles.dropzoneTitle}>Drag & drop your image here</h3>
          <p className={styles.dropzoneSubtitle}>or choose an option below</p>
          <div className={styles.actionButtons}>
            <button
              type="button"
              className={styles.browseBtn}
              onClick={openGallery}
            >
              📁 Choose from Gallery
            </button>
            <button
              type="button"
              className={styles.browseBtn}
              onClick={openCamera}
            >
              📷 Take Photo
            </button>
          </div>
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
