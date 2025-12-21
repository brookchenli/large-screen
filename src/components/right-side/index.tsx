import "./index.less";
import Warning from "@/components/warning";
import Log from "@/components/log";
import Scenario from "@/components/scenario";
export default function RightSide() {
  return (
    <div className="right-side">
      <div className="right-side-row1">
        <Warning />
        <Log />
      </div>
      <div className="right-side-row2">
        <Scenario />
      </div>
    </div>
  );
}
