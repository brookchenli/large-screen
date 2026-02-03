
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
import "./index.less";  
import Panel from "../panel";
import { useData } from "@/hooks/useData";
export default function DailyCollection1() {
  const { summary } = useData();
  const { xdata = [], ydata = [], title = '' } = summary?.leftSide?.row4 ?? {};

  // 单组每日采集量数据
  const collectData = ydata;

  const option = {
    backgroundColor: "transparent",
    grid: {
      left: 40,
      right: 20,
      top: 20,
      bottom: 30,
    },
    xAxis: {
      type: "category",
      data: xdata,
      axisLine: {
        lineStyle: { color: "#666" },
      },
      axisLabel: {
        show: true,
        fontSize: 18,
        color: "#ffffff",
      },
      axisTick: { show: false },
    },
    yAxis: {
      type: "value",
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.15)",
        },
      },
      axisLabel: {
        show: true,
        fontSize: 18,
        color: "#ffffff",
      },
    },
    series: [
      {
        name: "采集量",
        type: "line",
        smooth: true,
        symbol: "none",
        data: collectData,
        lineStyle: {
          width: 0, // 🔑 隐藏折线，只要面积
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1, // 上 → 下
            [
              { offset: 0, color: "rgba(59,130,246,0.85)" },
              { offset: 0.6, color: "rgba(59,130,246,0.35)" },
              { offset: 1, color: "rgba(59,130,246,0.05)" },
            ]
          ),
        },
      },
    ],
  };

  return (
    <Panel classNames="daily-collection-1" title={title} isBig={true}>
      <div className="daily-collection-1-content">
        <ReactECharts
          option={option}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </Panel>
  );
};
