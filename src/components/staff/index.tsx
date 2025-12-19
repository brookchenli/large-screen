import Panel from "@/components/panel";
import "./index.less";

export default function Staff() {
  const staff = [
    {
      label: "员工1",
      value: 20000,
      total: 100000,
    },
    {
      label: "员工2",
      value: 20000,
      total: 100000,
    },
    {
      label: "员工3",
      value: 20000,
      total: 100000,
    },
    {
      label: "员工4",
      value: 20000,
      total: 100000,
    },
    {
      label: "员工5",
      value: 20000,
      total: 100000,
    },
  ];
  return (
    <Panel title="分员工统计">
      <div className="staff">
        {staff.map((task, index) => (
          <div className="staff-item" key={index}>
            <div className="staff-item-index">{index + 1}</div>
            <div className="staff-item-label">{task.label}</div>
            <div className="staff-item-value">{task.value}</div>
            <div className="staff-item-progress-bar"></div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
