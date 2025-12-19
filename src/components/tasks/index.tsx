import Panel from "@/components/panel";
import "./index.less";
import recordsIcon1 from "@/assets/records_icon1.png";

export default function Records() {
  const tasks = [
    {
      label: "任务1",
      value1: 80,
      value2: 20,
      total: 200,
    },
    {
      label: "任务2",
      value1: 80,
      value2: 20,
      total: 300,
    },
    {
      label: "任务3",
      value1: 80,
      value2: 20,
      total: 100,
    },
  ];
  return (
    <Panel title="分任务统计">
      <div className="tasks">
        {tasks.map((task, index) => (
          <div className="tasks-item" key={index}>
            <div className="tasks-item-top">
              <div className="tasks-item-top-left">
                <div className="tasks-item-top-left-index">{index + 1}</div>
                <div className="tasks-item-top-left-label">{task.label}</div>
              </div>
              <div className="tasks-item-top-right">
                <span className="tasks-item-top-right-value">
                  {task.value1}
                </span>
                <span className="tasks-item-top-right-total">
                  /{task.total}
                </span>
              </div>
            </div>
            <div className="tasks-item-bottom">
              <div className="tasks-item-bottom-blue">12</div>
              <div className="tasks-item-bottom-green">34</div>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
