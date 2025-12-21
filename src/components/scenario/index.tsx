import "./index.less";

export default function Scenario() {
  const data = [
    {
      title: "Scenario 1",
      time: "12:00:00",
      color: "red",
      status: "监控中",
    },
    {
      title: "Scenario 2",
      time: "12:00:00",
      color: "blue",
      status: "已结束",
    },
    {
      title: "Scenario 3",
      time: "12:00:00",
      color: "green",
      status: "已结束",
    },
    {
      title: "Scenario 4",
      time: "12:00:00",
      color: "yellow",
      status: "已结束",
    },
  ];
  return (
    <div className="scenario">
      <div className="scenario-header"></div>
      <div className="scenario-content">
        {data.map((item) => (
          <div className="scenario-content-item" key={item.title}>
            <div className="scenario-content-item-status">
              <div className="scenario-content-item-status-icon"></div>
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
