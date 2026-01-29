import "./index.less";
import Panel from "../panel";
import { useData } from "@/hooks/useData";

export default function Log() {
  const { summary } = useData();  
  const { data = [], title = '', focusedIndex = 1 } = summary?.rightSide?.row1?.col2 ?? {};

  return (
    <Panel classNames="log" title={title}>
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
    </Panel>
  );
}
