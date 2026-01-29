import axios from "axios";

export const tashanApi = axios.create({
  baseURL: "http://192.168.5.227:8081",
  timeout: 10000,
});

tashanApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (config.url?.includes("/api/v1/screen/all")) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
