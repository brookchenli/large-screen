import "./index.less";
import ProgressRectangle from "@/components/progress-rectangle";
export default function Records() {
  const tasks = [
    {
      label: "任务1",
      value1: 80,
      value2: 20,
      total: 200,
      index: "01",
    },
    {
      label: "任务2",
      value1: 80,
      value2: 20,
      total: 300,
      index: "02",
    },
    {
      label: "任务3",
      value1: 80,
      value2: 20,
      total: 100,
      index: "03",
    },
  ];
  return (
    <div className="tasks">
      <div className="tasks-header">
        <div className="tasks-header-title">分任务统计</div>
      </div>
      <div className="tasks-content">
        {tasks.map((task, index) => (
          <div className="tasks-item" key={index}>
            <div className="tasks-item-top">
              <div className="tasks-item-top-left">
                <div className="tasks-item-top-left-index">{task.index}</div>
                <div className="tasks-item-top-left-label">{task.label}</div>
              </div>
              <div className="tasks-item-top-right">
                <span className="tasks-item-top-right-value1">
                  {task.value1}
                </span>
                <span className="tasks-item-top-right-separator">/</span>
                <span className="tasks-item-top-right-value2">
                  {task.value2}
                </span>
              </div>
            </div>
            <div className="tasks-item-bottom">
              <ProgressRectangle
                leftPercent={(task.value1 / task.total) * 100}
                rightPercent={(task.value2 / task.total) * 100}
                width={430}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
