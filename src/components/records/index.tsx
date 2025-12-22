import "./index.less";

import recordsIcon1 from "@/assets/records_icon1.png";
import recordsIcon2 from "@/assets/records_icon2.png";
import recordsIcon3 from "@/assets/records_icon3.png";
import recordsIcon4 from "@/assets/records_icon4.png";
interface RecordItem {
  label: string;
  value: number;
  icon: string;
}

export default function Records() {
  // 示例数据，实际应该从 API 获取
  const recordData: RecordItem[] = [
    { label: "标签名称1", value: 323012, icon: recordsIcon1 },
    { label: "标签名称2", value: 123012, icon: recordsIcon2 },
    { label: "标签名称3", value: 123012, icon: recordsIcon3 },
    { label: "标签名称4", value: 321245, icon: recordsIcon4 },
  ];

  return (
    <div className="records">
      <div className="records-header">
        <div className="records-header-title">记录条数</div>
      </div>
      <div className="records-content">
        {recordData.map((item) => (
          <div className="records-content-item" key={item.label}>
            <div
              className="records-content-item-icon"
              style={{ backgroundImage: `url(${item.icon})` }}
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
