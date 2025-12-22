import "./index.less";
import staffIcon1 from "@/assets/prize-1.png";
import staffIcon2 from "@/assets/prize-2.png";
import staffIcon3 from "@/assets/prize-3.png";
import staffIcon4 from "@/assets/prize-4.png";

export default function Staff() {
  const staffData = [
    {
      label: "标签名称1",
      value: 23456,
      total: 100000,
      index: "1",
      icon: staffIcon1,
      showPrize: true,
      color: "#3877f2",
    },
    {
      label: "标签名称2",
      value: 60,
      total: 100,
      index: "2",
      icon: staffIcon2,
      showPrize: true,
      color: "#00BFFF",
    },
    {
      label: "标签名称3",
      value: 90,
      total: 100,
      index: "3",
      icon: staffIcon3,
      showPrize: true,
      color: "#00FF7F",
    },
    {
      label: "标签名称4",
      value: 40,
      total: 100,
      index: "4",
      icon: staffIcon4,
      showPrize: false,
      color: "#FFA500",
    },
    {
      label: "标签名称5",
      value: 76,
      total: 100,
      index: "5",
      icon: staffIcon4,
      showPrize: false,
      color: "#FF0000",
    },
  ];
  return (
    <div className="staff">
      <div className="staff-header">
        <div className="staff-header-title">分员工统计</div>
      </div>
      <div className="staff-content">
        {staffData.map((staff, index) => (
          <div className="staff-item" key={index}>
            <div
              className={`staff-item-index ${
                !staff.showPrize ? "staff-item-index-white" : ""
              }`}
              style={{ backgroundImage: `url(${staff.icon})` }}
            >
              {staff.index}
            </div>
            <div className="staff-item-label">{staff.label}</div>
            <div className="staff-item-value">{staff.value}</div>
            <div className="staff-item-progress">
              <div
                className="staff-item-progress-bar"
                style={{
                  width: `${(staff.value / staff.total) * 100}%`,
                  backgroundColor: staff.color,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
