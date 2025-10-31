import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: false,
});


api.interceptors.request.use((config) => {
  const token = localStorage.getItem("@nexusvault:token");
  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err?.response?.status === 401) {
      localStorage.removeItem('@nexusvault:token');
      window.location.href = '/login';
    }
    return Promise.reject(err);
  }
);

export default api;
