import "./index.less";
import Panel from "@/components/panel";

interface BarItem {
  label: string;
  value: number;
  color: string;
  percentage: number;
}

export default function Storage() {
  // 示例数据，实际应该从 API 获取
  const usagePercentage = 50.0;
  const barData: BarItem[] = [
    { label: "标签名称1", value: 201, color: "#00BFFF", percentage: 50.0 }, // 蓝色
    { label: "标签名称2", value: 178, color: "#00FF7F", percentage: 30.0 }, // 绿色
    { label: "标签名称3", value: 189, color: "#FFA500", percentage: 50.0 }, // 橙色
  ];

  return (
    <Panel title="存储相关">
      <div className="storage">
        <div className="storage-left">
          <div className="storage-left-title">使用情况</div>
          <div className="storage-left-content">
            <div className="storage-left-content-circle"></div>
          </div>
        </div>
        <div className="storage-right">
          {barData.map((item) => (
            <div className="storage-right-bar-item">
              <div className="storage-right-bar-item-top">
                <div className="storage-right-bar-item-top-label">
                  {item.label}
                </div>
                <div className="storage-right-bar-item-top-value">
                  {item.value}
                </div>
              </div>
              <div className="storage-right-bar-item-bottom">
                <div
                  className="storage-right-bar-item-bottom-progress"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}
