// axiosClient.js
import axios from "axios";

/**
 * Central axios instance. Reads BACKEND_URL from env if available.
 * Exports request helper functions to standardize responses.
 */

const BASE_URL = process.env.BACKEND_URL || process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

const client = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});

// Simple response wrapper
const handleResponse = (promise) =>
  promise
    .then(res => ({ success: true, data: res.data }))
    .catch(err => {
      const error = err?.response?.data || err.message || "Network Error";
      return { success: false, error };
    });

// Optional: Basic retry interceptor (1 retry)
client.interceptors.response.use(
  response => response,
  async error => {
    const config = error.config;
    if (!config || config.__retry) return Promise.reject(error);
    config.__retry = true;
    await new Promise(r => setTimeout(r, 300)); // 300ms backoff
    return client(config);
  }
);

export { client as axiosClient, handleResponse };
export default client;
