
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
import "./index.less";  
import Panel from "../panel";
import { useData } from "@/hooks/useData";
export default function DailyCollection1() {
  const { summary } = useData();
  const { xdata = [], ydata = [], title = '' } = summary?.leftSide?.row4 ?? {};

  let showXData = xdata;
  if (xdata.length > 0) {
    // 获取当前时间，从前天开始往前，指定xdata.length天，每天的日期，格式为1月23日。日期越大越靠后
    const newXData = [];
    for (let i = xdata.length - 1; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i -2);
      newXData.push(date.toLocaleDateString('zh-CN', { month: '2-digit', day: '2-digit' }));
    }
    showXData = newXData;
  }

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
      data: showXData,
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
        type: "bar",
        barWidth: "40%",
        data: collectData,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1, // 上 → 下
            [
              { offset: 0, color: "rgba(59,130,246,0.85)" },
              { offset: 0.6, color: "rgba(59,130,246,0.85)" },
              { offset: 1, color: "rgba(59,130,246,0.85)" },
            ]
          ),
          borderRadius: [4, 4, 0, 0],
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
