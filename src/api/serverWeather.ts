import axios from "axios";

// https://devapi.qweather.com/v7/weather/now?key=${key}&location=${location}

const weatherUrl = "https://devapi.qweather.com/v7/weather/now";
const key = "5663f610db044c70bc2fa9464161706b";
const location = "101200101";

export const weatherApi = axios.create({
  baseURL: `${weatherUrl}?key=${key}&location=${location}`,
  timeout: 10000,
});
