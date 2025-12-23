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
  const Icon = getWeatherIconComponent(icon);

  return <Icon width={size} height={size} style={{ color }} />;
};

export default WeatherIcon;
