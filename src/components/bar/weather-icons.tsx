// src/components/WeatherIcon.tsx
import React from "react";
import { getWeatherIconComponent } from "@/assets/weather-icons";

interface Props {
  icon: string;
  size?: number;
  color?: string;
}

const WeatherIcon: React.FC<Props> = ({
  icon,
  size = 48,
  color = "currentColor",
}) => {
  console.log("icon:", icon);
  const IconComponent = getWeatherIconComponent(icon);
  return React.createElement(IconComponent, {
    width: size,
    height: size,
    style: { color },
  });
};

export default WeatherIcon;
