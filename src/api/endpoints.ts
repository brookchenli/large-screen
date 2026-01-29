import { tashanApi } from "./serverTashan";
import { weatherApi } from "./serverWeather";   


export async function fetchSummary() {
  const res = await tashanApi.get("/api/v1/screen/all");
  return res.data;
}


export async function fetchWeather() {
  const res = await weatherApi.get("");
  return res.data;
}