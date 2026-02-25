// src/services/apiClient.js
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
  timeout: 10_000,
});

// request auth header
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// response error handling (example)
api.interceptors.response.use(
  (res) => res,
  (err) => {
    // global error handling, refresh token logic, logging, etc.
    return Promise.reject(err);
  },
);

export default api;
