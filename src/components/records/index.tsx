import "./index.less";

import recordsIcon1 from "@/assets/records_icon1.png";
import recordsIcon2 from "@/assets/records_icon2.png";
import recordsIcon3 from "@/assets/records_icon3.png";
import recordsIcon4 from "@/assets/records_icon4.png";
import mock from "@/assets/mock.json";
interface RecordItem {
  label: string;
  value: number;
  icon: string;
}

export default function Records() {
  // 示例数据，实际应该从 API 获取
  const title = mock.data.left_side.row1.col2.title;
  const icons = [recordsIcon1, recordsIcon2, recordsIcon3, recordsIcon4];
  const recordData: RecordItem[] = mock.data.left_side.row1.col2
    .data as RecordItem[];

  return (
    <div className="records">
      <div className="records-header">
        <div className="records-header-title">{title}</div>
      </div>
      <div className="records-content">
        {recordData.map((item, index) => (
          <div className="records-content-item" key={index}>
            <div
              className="records-content-item-icon"
              style={{ backgroundImage: `url(${icons[index]})` }}
            ></div>
            <div className="records-content-item-right">
              <div className="records-content-item-right-value">
                {item.value}
              </div>
              <div className="records-content-item-right-label">
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
