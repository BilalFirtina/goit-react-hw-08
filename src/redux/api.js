import axios from "axios";
export const api = axios.create({
  baseURL: "https://connections-api.goit.global",
  headers: { "Content-Type": "application/json" },
});

export const setAuthHeader = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  delete api.defaults.headers.common.Authorization;
};

api.interceptors.response.use(
  (res) => res,
  (err) => {
    const status = err.response?.status;
    if (status === 401) {
      alert("Oturumunuzun süresi dolmuş. Lütfen tekrar giriş yapın.");
    }
    return Promise.reject(err);
  }
);
