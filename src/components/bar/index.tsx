import { useState, useEffect, useCallback } from "react";
import "./index.less";
import thermometerIcon from "@/assets/温度计.png";
import humidityIcon from "@/assets/空气湿度.png";
import mock from "@/assets/mock.json";

// 定义组件接收的 Props 类型
import WeatherIcon from "./weather-icons";
export default function Bar() {
  const [time, setTime] = useState(new Date());
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [weatherIcon, setWeatherIcon] = useState("100");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getWeather = useCallback(async () => {
    const { key, location } = mock.weather;
    const url = `https://devapi.qweather.com/v7/weather/now?key=${key}&location=${location}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.now;
  }, []);

  useEffect(() => {
    getWeather().then((data) => {
      setTemperature(data.temp);
      setHumidity(data.humidity);
      setWeatherIcon(data.icon);
    });
    const timer = setInterval(() => {
      const date = new Date();
      const minutes = date.getMinutes();
      if (minutes === 30) {
        getWeather();
      }
    }, 1000 * 60 * 30);
    return () => clearInterval(timer);
  }, [getWeather]);

  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const getWeekday = (date: Date) => {
    const weekdays = ["日", "一", "二", "三", "四", "五", "六"];
    return `星期${weekdays[date.getDay()]}`;
  };

  return (
    <div className="bar">
      <div className="bar-time">{formatTime(time)}</div>
      <div className="bar-date">{formatDate(time)}</div>
      <div className="bar-weekday">{getWeekday(time)}</div>
      <div className="bar-separator"></div>
      <div className="bar-weather">
        {/* <img src={weatherIcon} alt="weather" className="bar-weather-icon" /> */}
        {/* <DynamicWeatherIcon
          code={weatherIcon}
          size={22}
          color={weatherIcon === "100" ? "#FFD700" : "#888"}
        /> */}
        {/* <img
          src={`https://icons.qweather.com/assets/icons/${weatherIcon}.svg`}
          alt={""}
          width={22}
          height={22}
          className="bar-weather-icon"
        /> */}
        <WeatherIcon
          icon={weatherIcon}
          size={30}
          color={weatherIcon === "100" ? "#FFD700" : "#888"}
        />
      </div>
      <div className="bar-temperature">
        <img src={thermometerIcon} alt="thermometer" className="bar-icon" />
        <span className="bar-value">{temperature}°C</span>
      </div>
      <div className="bar-humidity">
        <img src={humidityIcon} alt="humidity" className="bar-icon" />
        <span className="bar-value">{humidity}%</span>
      </div>
    </div>
  );
}
