import React from "react";
import "./index.less";

interface SkewProgressBarProps {
  width?: number;
  backgroundHeight?: number; // 背景高度
  barHeight?: number; // 进度条高度
  skew?: number;
  leftPercent: number;
  rightPercent: number;
}

const ProgressRectangle: React.FC<SkewProgressBarProps> = ({
  width = 600,
  backgroundHeight = 20,
  barHeight = 10,
  skew = 18,
  leftPercent,
  rightPercent,
}) => {
  const totalPercent = leftPercent + rightPercent;
  if (totalPercent > 100) {
    console.warn("leftPercent + rightPercent 不能超过 100%");
  }

  const offsetY = (backgroundHeight - barHeight) / 2;

  const leftWidth = (width * leftPercent) / 100;
  const rightWidth = (width * rightPercent) / 100;

  /**
   * 左侧：左直右斜
   */
  const leftPoints = `
    0,${offsetY}
    ${leftWidth},${offsetY}
    ${leftWidth - skew},${offsetY + barHeight}
    0,${offsetY + barHeight}
  `;

  /**
   * 右侧：平行四边形（切口吻合）
   */
  const rightX = leftWidth;
  const rightPoints = `
    ${rightX + skew},${offsetY}
    ${rightX + rightWidth + skew},${offsetY}
    ${rightX + rightWidth},${offsetY + barHeight}
    ${rightX},${offsetY + barHeight}
  `;

  return (
    <svg
      width={width + skew}
      height={backgroundHeight}
      viewBox={`0 0 ${width + skew} ${backgroundHeight}`}
    >
      {/* 背景轨道 */}
      <rect
        x={0}
        y={0}
        width={width}
        height={backgroundHeight}
        rx={2}
        fill="rgba(129, 129, 129, 0.15)"
        opacity={0.6}
      />

      {/* 左侧进度（处置） */}
      <polygon points={leftPoints} fill="rgba(56, 119, 242, 1)" />

      {/* 右侧进度（平行四边形 + 边框） */}
      <polygon
        points={rightPoints}
        fill="rgba(0, 176, 93, 0.2)"
        stroke="rgba(0, 176, 93, 1)"
        strokeWidth={2}
      />
    </svg>
  );
};

export default ProgressRectangle;
