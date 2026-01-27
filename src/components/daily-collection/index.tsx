import "./index.less";
import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";
import mock from "@/assets/mock.json";
import Panel from "../panel";
export default function DailyCollection() {
  const xData = mock.data.left_side.row3.xData;
  const yData = mock.data.left_side.row3.yData;
  const title = mock.data.left_side.row3.title;
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
      data: xData,
      axisLabel: {
        show: true,
        fontSize: 18,
        color: "#ffffff",
      },
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: true,
        fontSize: 18,
        color: "#ffffff",
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
        data: yData,
      },
    ],
  };
  return (
    <Panel classNames="daily-collection" title={title} isBig={true}>
      <div className="daily-collection-content">
        <ReactECharts
          option={option}
          style={{ height: "100%", width: "100%" }}
        />
      </div>
    </Panel>
  );
}
