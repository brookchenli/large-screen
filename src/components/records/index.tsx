import Panel from "@/components/panel";
import "./index.less";
import recordsIcon1 from "@/assets/records_icon1.png";

export default function Records() {
  const records = [
    {
      label: "标签名称1",
      value: 34201,
      icon: recordsIcon1,
    },
    {
      label: "标签名称2",
      value: 34201,
      icon: recordsIcon1,
    },
    {
      label: "标签名称3",
      value: 34201,
      icon: recordsIcon1,
    },
    {
      label: "标签名称4",
      value: 34201,
      icon: recordsIcon1,
    },
  ];
  return (
    <Panel title="记录条数">
      <div className="records">
        {records.map((record) => (
          <div className="records-item">
            <img src={record.icon} alt="icon" className="records-item-icon" />
            <div className="records-item-right">
              <div className="records-item-right-value">{record.value}</div>
              <div className="records-item-right-label">{record.label}</div>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
