import "./index.less";
import staffIcon1 from "@/assets/prize-1.png";
import staffIcon2 from "@/assets/prize-2.png";
import staffIcon3 from "@/assets/prize-3.png";
import staffIcon4 from "@/assets/prize-4.png";
import mock from "@/assets/mock.json";

interface StaffItem {
  label: string;
  value: number;
  total: number;
  index: string;
}
export default function Staff() {
  const title = mock.data.left_side.row2.col2.title;
  const staffData = mock.data.left_side.row2.col2.data as StaffItem[];
  const icons = [staffIcon1, staffIcon2, staffIcon3, staffIcon4];
  const prizes = [true, true, true, false, false];
  const colors = ["#3877f2", "#00BFFF", "#00FF7F", "#FFA500", "#FF0000"];

  return (
    <div className="staff">
      <div className="staff-header">
        <div className="staff-header-title">{title}</div>
      </div>
      <div className="staff-content">
        {staffData.map((staff, index) => (
          <div className="staff-item" key={index}>
            <div
              className={`staff-item-index ${
                !prizes[index] ? "staff-item-index-white" : ""
              }`}
              style={{ backgroundImage: `url(${icons[index]})` }}
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
                  backgroundColor: colors[index],
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
