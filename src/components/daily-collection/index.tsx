import "./index.less";
import Panel from "@/components/panel";
import ReactECharts from "echarts-for-react";

export default function DailyCollection() {
  const option = {
    title: {
      text: "每日采集量1",
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
    <Panel title="每日采集量">
      <ReactECharts
        option={option}
        style={{ height: "100%", width: "100%", backgroundColor: "red" }}
      />
    </Panel>
  );
}
