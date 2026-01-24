import "./index.less";
import Radar from "@/components/radar";
import warningIcon1 from "@/assets/warning-icon1.png";
import warningIcon2 from "@/assets/warning-icon2.png";
import warningIcon3 from "@/assets/warning-icon3.png";
import warningIcon4 from "@/assets/warning-icon4.png";
import warningIcon5 from "@/assets/warning-icon5.png";
// import StepProgressBar from "@/components/progress-step/step-progress-bar";
import DiscreteProgressBar from "@/components/discrete-progress-bar";
import mock from "@/assets/mock.json";
import Panel from "../panel";
interface WarningItem {
  label: string;
  value: number;
  text: string;
  percentage: number;
  unit: string;
}

interface WarningItem2 {
  label: string;
  value: number;
  percentage: number;
  gradientColors: {
    light: string;
    middle: string;
    dark: string;
  };
}

export default function Warning() {
  const data1 = mock.data.right_side.row1.col1.data1 as WarningItem[];
  const data2 = mock.data.right_side.row1.col1.data2 as WarningItem2[];
  const title = mock.data.right_side.row1.col1.title;
  const warningIcons = [
    warningIcon1,
    warningIcon2,
    warningIcon3,
    warningIcon4,
    warningIcon5,
  ];

  const radarColors: string[] = ["#1C60FE", "#FF3D00", "#FF8A00", "#FFFFFF"];

  const progressBarColors: string[] = [
    "#00BABA",
    "#00BABA",
    "#00BABA",
    "#C13803",
    "#FFFFFF",
  ];
  return (
    <Panel classNames="warning" title={title}>
      <div className="warning-content-section1">
        {data1.map((item, index) => (
          <div className="warning-content-section1-item" key={item.label}>
            <Radar
              color={radarColors[index % radarColors.length]}
              percentage={item.percentage}
            />
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
        {data2.map((item, index) => (
          <div className="warning-content-section2-item" key={item.label}>
            <div
              className="warning-content-section2-item-icon"
              style={{ backgroundImage: `url(${warningIcons[index]})` }}
            ></div>
            <div className="warning-content-section2-item-label">
              {item.label}
            </div>
            <div className="warning-content-section2-item-percentage">
              <DiscreteProgressBar
                total={item.value}
                current={item.percentage}
                completedGradient={[progressBarColors[index], "#FFFFFF"]}
                pendingGradient={["#000000", "#FFFFFF"]}
              />
            </div>
            <div className="warning-content-section2-item-value">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
