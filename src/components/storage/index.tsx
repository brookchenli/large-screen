import "./index.less";
import ProgressCircle from "@/components/progress-circle";
import mock from "@/assets/mock.json";

interface BarItem {
  label: string;
  value: number;
  total: number;
  color: string;
}

export default function Storage() {
  // 示例数据，实际应该从 API 获取
  const usagePercentage = mock.data.left_side.row1.col1.percentage as number;
  const barData: BarItem[] = mock.data.left_side.row1.col1.data as BarItem[];
  const title = mock.data.left_side.row1.col1.title;
  return (
    <div className="storage">
      <div className="storage-header">
        <div className="storage-header-title">{title}</div>
      </div>
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
                    width: `${(item.value / item.total) * 100}%`,
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
