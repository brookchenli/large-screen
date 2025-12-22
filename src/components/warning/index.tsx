import "./index.less";
import Radar from "@/components/radar";
import warningIcon1 from "@/assets/warning-icon1.png";
import warningIcon2 from "@/assets/warning-icon1.png";
import warningIcon3 from "@/assets/warning-icon1.png";
import warningIcon4 from "@/assets/warning-icon1.png";
import warningIcon5 from "@/assets/warning-icon1.png";
import ProgressStep from "@/components/progress-step";
import StepProgressBar from "@/components/progress-step/step-progress-bar";

export default function Warning() {
  const data = [
    {
      label: "标签名称1",
      value: 100,
      text: "正常运行设备",
      percentage: 50,
      unit: "台",
    },
    {
      label: "标签名称2",
      value: 200,
      text: "异常设备",
      percentage: 50,
      unit: "台",
    },
    {
      label: "标签名称3",
      value: 300,
      text: "离线设备",
      percentage: 50,
      unit: "台",
    },
    {
      label: "标签名称4",
      value: 400,
      text: "设备总数",
      percentage: 50,
      unit: "台",
    },
  ];
  const data2 = [
    {
      label: "标签名称1",
      icon: warningIcon1,
      value: 50,
      percentage: 20,
      gradientColors: {
        light: "#a5f3fc",
        middle: "#22d3ee",
        dark: "#0f766e",
      },
    },
    {
      label: "标签名称2",
      icon: warningIcon1,
      value: 50,
      percentage: 50,
      gradientColors: {
        light: "#a5f3fc",
        middle: "#22d3ee",
        dark: "#0f766e",
      },
    },
    {
      label: "标签名称3",
      icon: warningIcon1,
      value: 50,
      percentage: 30,
      gradientColors: {
        light: "#FFE7BA",
        middle: "#FFD180",
        dark: "#FFBB38",
      },
    },
    {
      label: "标签名称4",
      icon: warningIcon1,
      value: 50,
      percentage: 10,
      gradientColors: {
        light: "#a5f3fc",
        middle: "#22d3ee",
        dark: "#0f766e",
      },
    },
    {
      label: "标签名称5",
      icon: warningIcon1,
      value: 50,
      percentage: 2,
      gradientColors: {
        light: "#FF0000",
        middle: "#FF0000",
        dark: "#FF0000",
      },
    },
  ];
  return (
    <div className="warning">
      <div className="warning-header">
        <div className="warning-header-title">警告提示</div>
      </div>
      <div className="warning-content-section1">
        {data.map((item) => (
          <div className="warning-content-section1-item" key={item.label}>
            <Radar />
            <div className="warning-content-section1-item-info">
              <div className="warning-content-section1-item-info-value">
                <span>{item.percentage}% </span>
                <span>{item.value}</span>
                <span className="warning-content-section1-item-info-value-unit">
                  {item.unit}
                </span>
              </div>
              <div className="warning-content-section1-item-info-text">
                {item.text}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="warning-content-section2">
        {data2.map((item) => (
          <div className="warning-content-section2-item" key={item.label}>
            <div
              className="warning-content-section2-item-icon"
              style={{ backgroundImage: item.icon ? `url(${item.icon})` : "" }}
            ></div>
            <div className="warning-content-section2-item-label">
              {item.label}
            </div>
            <div className="warning-content-section2-item-percentage">
              <StepProgressBar
                total={item.value}
                current={item.percentage}
                width={263}
                barHeight={6}
                containerHeight={14}
                gap={3}
                gradientColors={item.gradientColors}
              />
            </div>
            <div className="warning-content-section2-item-value">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
