import React from "react";

/**
 * NewRadar 组件 Props
 */
interface NewRadarProps {
  /** 扇形角度（0-360度） */
  angle: number;
  /** 基础颜色（十六进制格式，如 #3a7bd5） */
  color: string;
  /** 组件尺寸（宽高相同） */
  size?: number;
  /** 是否显示百分比文字 */
  showPercentage?: boolean;
  /** 是否显示半径线 */
  showRadiusLines?: boolean;
  /** 自定义className */
  className?: string;
}

/**
 * NewRadar - 角度方向透明度渐变扇形图组件
 *
 * @description
 * 实现沿着扇形角度方向的线性透明度渐变：
 * - 0度位置的半径：完全透明（0%）
 * - 目标角度的半径：完全不透明（100%）
 * - 中间各角度：线性渐变
 *
 * @example
 * ```tsx
 * <NewRadar angle={120} color="#3a7bd5" size={300} />
 * ```
 */
const NewRadar: React.FC<NewRadarProps> = ({
  angle,
  color,
  size = 56,
  showRadiusLines = true,
  className = "",
}) => {
  /**
   * 将十六进制颜色转换为RGB对象
   */
  const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 0, g: 0, b: 0 };
  };

  // 计算百分比
  // const percentage = Math.round((angle / 360) * 100);

  // 圆心和半径
  const radius = size / 2;
  const centerX = radius;
  const centerY = radius;

  // 起始角度（从12点方向开始，即-90度）
  const startAngle = -90;

  // 如果角度为0或负数，返回空SVG
  if (angle <= 0) {
    return <svg width={size} height={size} className={className} />;
  }

  const rgb = hexToRgb(color);

  // 将扇形分成多个小片段，每个片段有不同的透明度
  // 分段数量：角度越大分段越多，但不超过100段
  const segments = Math.min(Math.ceil(angle), 100);
  const segmentAngle = angle / segments;

  const paths: React.ReactElement[] = [];

  // 生成每个分段
  for (let i = 0; i < segments; i++) {
    const currentAngle = startAngle + i * segmentAngle;
    const nextAngle = startAngle + (i + 1) * segmentAngle;

    const currentRad = (currentAngle * Math.PI) / 180;
    const nextRad = (nextAngle * Math.PI) / 180;

    const startX = centerX + radius * Math.cos(currentRad);
    const startY = centerY + radius * Math.sin(currentRad);
    const endX = centerX + radius * Math.cos(nextRad);
    const endY = centerY + radius * Math.sin(nextRad);

    // 计算当前分段的透明度（从0到1线性变化）
    const opacity = (i + 1) / segments;

    const pathData = [
      `M ${centerX} ${centerY}`,
      `L ${startX} ${startY}`,
      `A ${radius} ${radius} 0 0 1 ${endX} ${endY}`,
      `Z`,
    ].join(" ");

    paths.push(
      <path
        key={i}
        d={pathData}
        fill={`rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity * 0.6})`}
        stroke="none"
      />
    );
  }

  return (
    <svg width={size} height={size} className={`overflow-visible ${className}`}>
      {/* 渲染所有分段 */}
      {paths}

      {/* 半径线（可选） */}
      {showRadiusLines && angle > 5 && (
        <>
          {/* 起始半径线（0度位置） */}
          <line
            x1={centerX}
            y1={centerY}
            x2={centerX + radius * Math.cos((startAngle * Math.PI) / 180)}
            y2={centerY + radius * Math.sin((startAngle * Math.PI) / 180)}
            stroke={color}
            strokeWidth="1"
            opacity="0.18"
          />
          {/* 结束半径线（目标角度位置） */}
          <line
            x1={centerX}
            y1={centerY}
            x2={
              centerX +
              radius * Math.cos(((startAngle + angle) * Math.PI) / 180)
            }
            y2={
              centerY +
              radius * Math.sin(((startAngle + angle) * Math.PI) / 180)
            }
            stroke={color}
            strokeWidth="2"
            opacity="0.48"
          />
        </>
      )}
    </svg>
  );
};

export default NewRadar;
