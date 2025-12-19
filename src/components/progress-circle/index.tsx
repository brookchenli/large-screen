import { useEffect, useRef, useCallback } from "react";
import "./index.less";

interface ProgressCircleProps {
  percentage?: number; // 0-100
  color?: string; // 水位颜色
  size?: number; // 圆形大小（直径）
  ringColor?: string; // 外部圆环颜色
}

export default function ProgressCircle({
  percentage = 60,
  color = "#3877f2",
  size = 110,
  ringColor = "#3877f2",
}: ProgressCircleProps) {
  const waveRef = useRef<SVGPathElement>(null);

  // 创建波浪路径
  const createWavePath = useCallback(
    (offset: number, percent: number, circleSize: number): string => {
      const outerRadius = circleSize / 2;
      const ringWidth = 2;
      const gap = 2;
      const innerRadius = outerRadius - ringWidth - gap;
      const innerDiameter = innerRadius * 2;
      const innerCenterX = outerRadius;
      const innerCenterY = outerRadius;

      // 计算水位高度（从底部开始，基于直径的百分比）
      const waterHeight = (innerDiameter * percent) / 100;
      // 水位线y坐标：从圆的底部（innerCenterY + innerRadius）向上减去水位高度
      const waterLevel = innerCenterY + innerRadius - waterHeight;

      const waveLength = innerDiameter * 0.4;
      const waveHeight = 3;

      // 创建波浪路径（坐标相对于SVG viewBox）
      let path = "";
      const step = 1;
      let firstPoint = true;
      const startX = innerCenterX - innerRadius - waveLength;
      const endX = innerCenterX + innerRadius + waveLength;

      for (let x = startX; x <= endX; x += step) {
        const y =
          waterLevel +
          Math.sin(
            ((x - (innerCenterX - innerRadius)) / waveLength) * Math.PI * 2 +
              offset
          ) *
            waveHeight;

        if (firstPoint) {
          path += `M ${x} ${y}`;
          firstPoint = false;
        } else {
          path += ` L ${x} ${y}`;
        }
      }

      // 闭合路径（延伸到右侧和底部）
      path += ` L ${endX} ${innerCenterY + innerRadius}`;
      path += ` L ${startX} ${innerCenterY + innerRadius}`;
      path += ` Z`;

      return path;
    },
    []
  );

  useEffect(() => {
    if (!waveRef.current) return;

    let animationId: number;
    let offset = 0;

    const animate = () => {
      offset += 0.015;
      if (waveRef.current) {
        waveRef.current.setAttribute(
          "d",
          createWavePath(offset, percentage, size)
        );
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [percentage, size, createWavePath]);

  const outerRadius = size / 2;
  const ringWidth = 2;
  const gap = 2;
  const innerRadius = outerRadius - ringWidth - gap;
  const innerCenterX = outerRadius;
  const innerCenterY = outerRadius;

  return (
    <div className="progress-circle" style={{ width: size, height: size }}>
      <svg
        className="progress-circle-svg"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        {/* 外层圆环 */}
        <circle
          cx={outerRadius}
          cy={outerRadius}
          r={outerRadius - ringWidth / 2}
          fill="none"
          stroke={ringColor}
          strokeWidth={ringWidth}
        />

        {/* 内层圆形的遮罩 */}
        <defs>
          <clipPath id={`inner-circle-clip-${size}`}>
            <circle cx={innerCenterX} cy={innerCenterY} r={innerRadius} />
          </clipPath>
        </defs>

        {/* 波浪填充 */}
        <g clipPath={`url(#inner-circle-clip-${size})`}>
          <path
            ref={waveRef}
            d={createWavePath(0, percentage, size)}
            fill={color}
            opacity={0.85}
          />
        </g>

        {/* 内层圆边框（可选，如果需要显示圆形边界） */}
        <circle
          cx={innerCenterX}
          cy={innerCenterY}
          r={innerRadius}
          fill="none"
          stroke="transparent"
          strokeWidth="1"
        />
      </svg>

      {/* 百分比文字 */}
      <div className="progress-circle-text">{percentage.toFixed(0)}%</div>
    </div>
  );
}
