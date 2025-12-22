import "./index.less";

import React from "react";

interface SectorProps {
  radius?: number;
  angle: number; // 扇形角度 (0 - 360)
  startAngle?: number; // 起始角度，默认从正上方
  gradientId?: string;
  colors: [string, string]; // 渐变起止色
}

const Sector: React.FC<SectorProps> = ({
  radius = 37,
  angle,
  startAngle = -90,
  gradientId = "sectorGradient",
  colors = ["rgba(255, 61, 0, 1)", "rgba(255, 61, 0, 0)"],
}) => {
  const cx = radius;
  const cy = radius;

  const endAngle = startAngle + angle;

  const polarToCartesian = (deg: number) => {
    const rad = (deg * Math.PI) / 180;
    return {
      x: cx + radius * Math.cos(rad),
      y: cy + radius * Math.sin(rad),
    };
  };

  const start = polarToCartesian(startAngle);
  const end = polarToCartesian(endAngle);

  const largeArcFlag = angle > 180 ? 1 : 0;

  const d = `
    M ${cx} ${cy}
    L ${start.x} ${start.y}
    A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}
    Z
  `;

  return (
    <svg width={radius * 2} height={radius * 2}>
      <defs>
        {/* 径向渐变（更适合扇形） */}
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors[0]} />
          <stop offset="100%" stopColor={colors[1]} />
        </linearGradient>
      </defs>

      <path d={d} fill={`url(#${gradientId})`} />
    </svg>
  );
};

export default Sector;
