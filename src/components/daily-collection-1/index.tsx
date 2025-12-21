import "./index.less";
import ReactECharts from "echarts-for-react";

export default function DailyCollection1() {
  const option = {
    title: {
      show: false,
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      data: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
      ],
    },
    yAxis: {
      type: "value",
    },
    grid: {
      left: "0%",
      right: "0%",
      bottom: "3%",
      top: "5%",
    },
    series: [
      {
        name: "PV",
        type: "line",
        data: [
          120, 200, 150, 80, 70, 120, 200, 150, 80, 70, 120, 200, 150, 80, 70,
          10,
        ],
      },
    ],
  };
  return (
    <div className="daily-collection1">
      <div className="daily-collection-header"></div>
      <div className="daily-collection-content">
        <ReactECharts
          option={option}
          style={{ height: "100%", width: "100%" }}
        />
      </div>
    </div>
  );
}
