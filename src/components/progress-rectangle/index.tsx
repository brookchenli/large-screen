import "./index.less";

interface ProgressRectangleProps {
  values: {
    percentage: number;
    color: string;
  }[];
  total?: number;
  width?: number | string; // 宽度，可以是数字（px）或字符串（如 "100%"）
}

export default function ProgressRectangle({
  values = [
    {
      percentage: 50,
      color: "#3877f2",
    },
    {
      percentage: 30,
      color: "#00FF7F",
    },
  ],
  total = 100,
  width = "100%",
}: ProgressRectangleProps) {
  // 确保两个值的总和不超过100%
  const normalizedValues = values.map((item) => ({
    ...item,
    percentage: Math.min(item.percentage, total),
  }));

  const sum = normalizedValues.reduce((acc, item) => acc + item.percentage, 0);
  const scale = sum > total ? total / sum : 1;

  const scaledValues = normalizedValues.map((item) => ({
    ...item,
    percentage: item.percentage * scale,
  }));

  // 计算每个进度条的宽度（基于百分比）
  const [firstValue, secondValue] = scaledValues;

  const widthStyle = typeof width === "number" ? `${width}px` : width;

  return (
    <div
      className="progress-rectangle"
      style={{ width: widthStyle } as React.CSSProperties}
    >
      {/* 第一个进度条（主要，蓝色） */}
      <div
        className="progress-rectangle-item progress-rectangle-item-primary"
        style={
          {
            width: `${firstValue.percentage}%`,
            "--progress-color": firstValue.color,
            "--progress-border-color": getLighterColor(firstValue.color),
          } as React.CSSProperties
        }
      >
        <div className="progress-rectangle-fill"></div>
      </div>

      {/* 第二个进度条（次要，绿色） */}
      {secondValue && secondValue.percentage > 0 && (
        <div
          className="progress-rectangle-item progress-rectangle-item-secondary"
          style={
            {
              width: `${secondValue.percentage}%`,
              "--progress-color": secondValue.color,
            } as React.CSSProperties
          }
        >
          <div className="progress-rectangle-fill"></div>
        </div>
      )}
    </div>
  );
}

// 获取更亮的颜色用于边框发光效果
function getLighterColor(color: string): string {
  // 简单的颜色变亮处理
  if (color.startsWith("#")) {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    // 增加亮度
    const lighten = (value: number) => Math.min(255, value + 60);

    return `rgb(${lighten(r)}, ${lighten(g)}, ${lighten(b)})`;
  }
  return color;
}
