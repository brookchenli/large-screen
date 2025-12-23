import "./index.less";
import ProgressRectangle from "@/components/progress-rectangle";
import mock from "@/assets/mock.json";

interface TaskItem {
  label: string;
  value1: number;
  value2: number;
  total: number;
  index: string;
}
export default function Records() {
  const title = mock.data.left_side.row2.col1.title;
  const tasks = mock.data.left_side.row2.col1.data as TaskItem[];
  return (
    <div className="tasks">
      <div className="tasks-header">
        <div className="tasks-header-title">{title}</div>
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
