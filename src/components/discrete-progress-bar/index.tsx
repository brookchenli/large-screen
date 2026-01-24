import React from "react";
import "./index.less";

interface DiscreteProgressBarProps {
  total?: number;
  current: number;

  /** [左侧浅色, 右侧深色] */
  completedGradient: [string, string];
  pendingGradient: [string, string];

  gap?: number;
}

/* ---------- 颜色工具 ---------- */

function hexToRgb(hex: string) {
  const h = hex.replace("#", "");
  return {
    r: parseInt(h.substring(0, 2), 16),
    g: parseInt(h.substring(2, 4), 16),
    b: parseInt(h.substring(4, 6), 16),
  };
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function interpolateColor(start: string, end: string, t: number) {
  const c1 = hexToRgb(start);
  const c2 = hexToRgb(end);

  return `rgb(
    ${Math.round(lerp(c1.r, c2.r, t))},
    ${Math.round(lerp(c1.g, c2.g, t))},
    ${Math.round(lerp(c1.b, c2.b, t))}
  )`;
}

/* ---------- 组件 ---------- */

const DiscreteProgressBar: React.FC<DiscreteProgressBarProps> = ({
  total = 50,
  current,
  completedGradient,
  pendingGradient,
  gap = 2,
}) => {
  return (
    <div
      className="discrete-progress"
      style={{
        gridTemplateColumns: `repeat(${total}, 1fr)`,
        gap,
      }}
    >
      {Array.from({ length: total }).map((_, index) => {
        let background = "";

        if (index < current) {
          // ===== 已完成：右 → 左加深 =====
          const ratio = current > 1 ? 1 - index / (current - 1) : 1;

          background = interpolateColor(
            completedGradient[0],
            completedGradient[1],
            ratio
          );
        } else {
          // ===== 未完成：右 → 左加深 =====
          const pendingCount = total - current;
          const pendingIndex = index - current;

          const ratio =
            pendingCount > 1 ? 1 - pendingIndex / (pendingCount - 1) : 1;

          background = interpolateColor(
            pendingGradient[0],
            pendingGradient[1],
            ratio
          );
        }

        return (
          <div
            key={index}
            className="progress-step"
            style={{ background, opacity: index < current ? 1 : 0.25 }}
          />
        );
      })}
    </div>
  );
};

export default DiscreteProgressBar;
