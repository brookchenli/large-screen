import "./index.less";
import mock from "@/assets/mock.json";

export default function Log() {
  const data = mock.data.right_side.row1.col2.data as LogItem[];
  const title = mock.data.right_side.row1.col2.title;

  const focusedIndex = 4;
  return (
    <div className="log">
      <div className="log-header">
        <div className="log-header-title">{title}</div>
      </div>
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
