import "./index.less";
import ProgressCircle from "@/components/progress-circle";
import Panel from "../panel";
import { useData } from "@/hooks/useData";

export default function Storage() {
  // 示例数据，实际应该从 API 获取
  const { summary } = useData();
  const colors = ['rgba(56, 119, 242, 1)', 'rgba(0, 176, 93, 1)', 'rgba(217, 176, 57, 1)'];
 
  const { percentage = 0, data: barData = [], title = '' } = summary?.leftSide?.row1?.col1 ?? {};
  return (
    <Panel title={title} classNames="storage">
      <div className="storage-content">
        <div className="storage-content-left">
          <div className="storage-content-left-title">使用情况</div>
          <div className="storage-content-left-content">
            <ProgressCircle
              percentage={percentage}
              size={180}
              ringColor="#3877f2"
              color="#3877f2"
            />
          </div>
        </div>
        <div className="storage-content-right">
          {barData.map((item, index) => (
            <div className="storage-item" key={item.label}>
              <div className="storage-item-top">
                <div className="storage-item-top-label">{item.label}</div>
                <div className="storage-item-top-value">{item.value}</div>
              </div>
              <div className="storage-item-bottom">
                <div
                  className="storage-item-bottom-progress"
                  style={{
                    width: `${((item.value ) / (item.total )) * 100}%`,
                    backgroundColor: colors[index % colors.length],
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}
