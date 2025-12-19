import "./index.less";
import ProgressCircle from "@/components/progress-circle";

interface BarItem {
  label: string;
  value: number;
  color: string;
  percentage: number;
}

export default function Storage() {
  // 示例数据，实际应该从 API 获取
  const usagePercentage = 70.0;
  const barData: BarItem[] = [
    { label: "标签名称1", value: 201, color: "#00BFFF", percentage: 50.0 }, // 蓝色
    { label: "标签名称2", value: 178, color: "#00FF7F", percentage: 30.0 }, // 绿色
    { label: "标签名称3", value: 189, color: "#FFA500", percentage: 50.0 }, // 橙色
  ];

  return (
    <div className="storage">
      <div className="storage-header"></div>
      <div className="storage-content">
        <div className="storage-content-left">
          <div className="storage-content-left-title">使用情况</div>
          <div className="storage-content-left-content">
            <ProgressCircle
              percentage={usagePercentage}
              size={120}
              ringColor="#3877f2"
              color="#3877f2"
            />
          </div>
        </div>
        <div className="storage-content-right">
          {barData.map((item) => (
            <div className="storage-item" key={item.label}>
              <div className="storage-item-top">
                <div className="storage-item-top-label">{item.label}</div>
                <div className="storage-item-top-value">{item.value}</div>
              </div>
              <div className="storage-item-bottom">
                <div
                  className="storage-item-bottom-progress"
                  style={{
                    width: `${item.percentage}%`,
                    backgroundColor: item.color,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
