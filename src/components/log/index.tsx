import "./index.less";

export default function Log() {
  const data = [
    {
      position: "xxx",
      ism: "xxx",
      suspected: "xxx",
      IGG: "xxx",
    },
    {
      position: "THE BRONX1",
      ism: "1",
      suspected: "2",
      IGG: "1",
    },
    {
      position: "THE BRONX2",
      ism: "1",
      suspected: "2",
      IGG: "1",
    },
    {
      position: "THE BRONX3",
      ism: "1",
      suspected: "2",
      IGG: "1",
    },
    {
      position: "THE BRONX4",
      ism: "1",
      suspected: "2",
      IGG: "1",
    },
    {
      position: "THE BRONX5",
      ism: "1",
      suspected: "2",
      IGG: "1",
    },
    {
      position: "THE BRONX6",
      ism: "1",
      suspected: "2",
      IGG: "1",
    },
    {
      position: "THE BRONX7",
      ism: "1",
      suspected: "2",
      IGG: "1",
    },
  ];

  const focusedIndex = 4;
  return (
    <div className="log">
      <div className="log-header"></div>
      <div className="log-content">
        {data.map((item, index) => {
          if (index === 0) {
            return (
              <div className="log-content-item " key={index}>
                <div
                  className="log-content-item-icon"
                  style={{
                    visibility: "hidden",
                  }}
                ></div>
                <div className="log-content-item-position ">POSITION</div>
                <div className="log-content-item-ism">ISM</div>
                <div className="log-content-item-suspected">SUSPECTED</div>
                <div className="log-content-item-igg">IGG</div>
              </div>
            );
          } else {
            return (
              <div
                className={`log-content-item ${
                  index === focusedIndex
                    ? "log-content-item-focused"
                    : "log-content-item-unfocused"
                }`}
                key={index}
              >
                <div
                  className="log-content-item-icon"
                  style={{
                    visibility: index === focusedIndex ? "visible" : "hidden",
                  }}
                ></div>
                <div className="log-content-item-position">{item.position}</div>
                <div className="log-content-item-ism">{item.ism}</div>
                <div className="log-content-item-suspected">
                  {item.suspected}
                </div>
                <div className="log-content-item-igg">{item.IGG}</div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
