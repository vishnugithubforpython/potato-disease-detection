import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
});

/**
 * Send a potato leaf image to the FastAPI backend for disease prediction.
 * @param {File} imageFile - The image file to analyze
 * @returns {Promise<{ class: string, confidence: number, predictionTime: number }>}
 */
export async function predictDisease(imageFile) {
  const formData = new FormData();
  formData.append('file', imageFile);

  const startTime = performance.now();

  const response = await apiClient.post('/predict', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  const predictionTime = Math.round(performance.now() - startTime);

  return {
    class: response.data.class,
    confidence: response.data.confidence,
    predictionTime,
  };
}

export default apiClient;
