import React, { useId } from "react";

/** 渐变颜色配置 */
interface GradientColors {
  light: string;
  middle?: string;
  dark: string;
}

interface StepProgressBarProps {
  total?: number;
  current: number;
  width?: number;
  containerHeight?: number;
  barHeight?: number;
  gap?: number;
  gradientColors?: GradientColors;
}

const StepProgressBar: React.FC<StepProgressBarProps> = ({
  total = 50,
  current,
  width = 600,
  containerHeight = 20,
  barHeight = 10,
  gap = 6,
  gradientColors = {
    light: "#a5f3fc",
    middle: "#22d3ee",
    dark: "#0f766e",
  },
}) => {
  /** 🔑 关键：生成唯一 id */
  const uid = useId();
  const gradientId = `progressGradient-${uid}`;
  const clipId = `progressClip-${uid}`;

  const safeCurrent = Math.max(0, Math.min(current, total));

  const offsetY = Math.round((containerHeight - barHeight) / 2);

  const segmentWidth = (width - gap * (total - 1)) / total;

  const activeWidth =
    safeCurrent > 0 ? safeCurrent * segmentWidth + (safeCurrent - 1) * gap : 0;

  return (
    <svg
      width={width}
      height={containerHeight}
      viewBox={`0 0 ${width} ${containerHeight}`}
      preserveAspectRatio="xMinYMid meet"
      shapeRendering="crispEdges"
    >
      <defs>
        {/* ===== 连续渐变（左浅 → 右深） ===== */}
        <linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          x1={activeWidth || 1}
          y1={0}
          x2={0}
          y2={0}
        >
          <stop offset="0%" stopColor={gradientColors.light} />

          {gradientColors.middle && (
            <stop offset="40%" stopColor={gradientColors.middle} />
          )}

          <stop offset="100%" stopColor={gradientColors.dark} />
        </linearGradient>

        {/* ===== 已完成区域裁剪 ===== */}
        <clipPath id={clipId}>
          {Array.from({ length: safeCurrent }).map((_, i) => {
            const x = i * (segmentWidth + gap);
            return (
              <rect
                key={i}
                x={x}
                y={offsetY}
                width={segmentWidth}
                height={barHeight}
                rx={barHeight / 2}
                ry={barHeight / 2}
              />
            );
          })}
        </clipPath>
      </defs>

      {/* ===== 渐变进度层 ===== */}
      {safeCurrent > 0 && (
        <rect
          x={0}
          y={offsetY}
          width={activeWidth}
          height={barHeight}
          fill={`url(#${gradientId})`}
          clipPath={`url(#${clipId})`}
        />
      )}

      {/* ===== 未完成段 ===== */}
      {Array.from({ length: total - safeCurrent }).map((_, i) => {
        const index = i + safeCurrent;
        const x = index * (segmentWidth + gap);

        return (
          <rect
            key={index}
            x={x}
            y={offsetY}
            width={segmentWidth}
            height={barHeight}
            rx={barHeight / 2}
            ry={barHeight / 2}
            fill="#1f2933"
            opacity={0.35}
          />
        );
      })}
    </svg>
  );
};

export default StepProgressBar;
