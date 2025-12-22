import React from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

const DailyCollectionChart: React.FC = () => {
  const hours = Array.from({ length: 12 }, (_, i) => i + 1);

  // 单组每日采集量数据
  const collectData = [30, 85, 0, 28, 60, 20, 35, 26, 45, 0, 90, 45];

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
      data: hours.map((h) => `${h}`),
      axisLine: {
        lineStyle: { color: "#666" },
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
    <ReactECharts option={option} style={{ width: "100%", height: 300 }} />
  );
};

export default DailyCollectionChart;
