import axios from "axios";

export const tashanApi = axios.create({
  baseURL: "http://192.168.5.227:8081",
  timeout: 10000,
});

tashanApi.interceptors.request.use((config) => {
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlQ29kZSI6InN1cGVyX2FkbWluIiwidHlwZSI6ImFjY2VzcyIsInVzZXJJZCI6MiwidXNlcm5hbWUiOiJhZG1pbiIsInN1YiI6ImFkbWluIiwiaWF0IjoxNzY5NjU2MTEzLCJleHAiOjE3Njk2NTcwMTN9.xBLOwUUAjCNCqMQaQxa6bz4wwkOU0sG-_HL2l6rZKMY"
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
