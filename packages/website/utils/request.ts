import axios from "axios";
import storage from "store";

// Creating an Axios instance
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
  timeout: import.meta.env.VITE_APP_API_TIMEOUT,
});

const token = storage.get("authorization");

// Error interceptor
const errorHandler = (error: object) => {
  return Promise.reject(error);
};

// Request interceptor
request.interceptors.request.use((config) => {
  if (token) {
    config.headers["authorization"] = token;
  }
  return config;
}, errorHandler);

// Response interceptor
request.interceptors.response.use((response) => {
  storage.set("authorization", response.headers["authorization"]);
  return response.data;
}, errorHandler);

export default request;
