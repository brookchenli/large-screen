import "./index.less";
import Panel from "@/components/panel";
import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";

export default function DailyCollection() {
  const option = {
    title: {
      text: "每日采集量1",
      show: false,
    },
    tooltip: {
      trigger: "axis",
    },
    grid: {
      left: "0%",
      right: "0%",
      top: "0%",
      bottom: "0%",
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
      splitLine: {
        show: false,
      },
    },
    series: [
      {
        name: "PV",
        type: "line",
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(56, 119, 242, 0.5)",
            },
            {
              offset: 1,
              color: "rgba(0, 176, 93, 0.2)",
            },
          ]),
        },
        smooth: true,
        data: [
          120, 200, 150, 80, 70, 120, 200, 150, 80, 70, 120, 200, 150, 80, 70,
          10,
        ],
      },
    ],
  };
  return (
    <Panel title="每日采集量">
      <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />
    </Panel>
  );
}
