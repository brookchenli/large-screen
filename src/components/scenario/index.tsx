import "./index.less";
import mock from "@/assets/mock.json";

interface ScenarioItem {
  title: string;
  time: string;
  color: string;
  status: string;
}
export default function Scenario() {
  const data = mock.data.right_side.row2.data as ScenarioItem[];
  const title = mock.data.right_side.row2.title;
  return (
    <div className="scenario">
      <div className="scenario-header">
        <div className="scenario-header-title">{title}</div>
      </div>
      <div className="scenario-content">
        {data.map((item, index) => (
          <div className="scenario-content-item" key={index}>
            <div className="scenario-content-item-status">
              <div
                className="scenario-content-item-status-icon"
                style={{ backgroundColor: item.color }}
              ></div>
              <div className="scenario-content-item-status-text">
                {item.status}
              </div>
            </div>
            <div className="scenario-content-item-bottom">
              <div className="scenario-content-item-bottom-left">
                <div className="scenario-content-item-bottom-left-play"></div>
                <div className="scenario-content-item-bottom-left-title">
                  {item.title}
                </div>
              </div>
              <div className="scenario-content-item-right">{item.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
