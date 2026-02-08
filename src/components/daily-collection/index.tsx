import "./index.less";
import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";
import Panel from "../panel";
import { useData } from "@/hooks/useData";
export default function DailyCollection() {
  const { summary } = useData();
  const { xdata = [], ydata = [], title = '' } = summary?.leftSide?.row3 ?? {};
  let showXData = xdata;
  if (xdata.length > 0) {
    // 
    // 获取当前时间，从前天开始往前，指定xdata.length天，每天的日期，格式为1月23日。日期越大越靠后
    const newXData = [];
    for (let i = xdata.length - 1; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i -2);
      newXData.push(date.toLocaleDateString('zh-CN', { month: '2-digit', day: '2-digit' }));
    }
    showXData = newXData;
  }
  // 修改折线图为直方图
  const option = {
    title: {
      text: title,
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
      data: showXData,
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
        data: ydata,  
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
