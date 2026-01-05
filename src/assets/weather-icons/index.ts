// src/assets/weather-icons/index.ts
import Icon100 from "./100.svg?react";
import Icon101 from "./101.svg?react";
import Icon102 from "./102.svg?react";
import Icon150 from "./150.svg?react";
import DefaultIcon from "./999.svg?react";

export const weatherIconMap = {
  "100": Icon100,
  "101": Icon101,
  "102": Icon102,
  "150": Icon150,
} as const;

export const getWeatherIconComponent = (icon?: string) => {
  return weatherIconMap[icon as keyof typeof weatherIconMap] || DefaultIcon;
};
