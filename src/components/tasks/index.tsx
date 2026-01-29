import "./index.less";
import ProgressRectangle from "@/components/progress-rectangle";
import Panel from "../panel";
import { useData } from "@/hooks/useData";

export default function Tasks() {
  const { summary } = useData();
  const { title = '', data: tasks = [] } = summary?.leftSide?.row2?.col1 ?? {};
  return (
    <Panel classNames="tasks" title={title}>
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
                width={650}
              />
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
