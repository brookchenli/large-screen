import "./index.less";
import Storage from "@/components/storage";
import Records from "@/components/records";
import Tasks from "@/components/tasks";
import Staff from "@/components/staff";
import DailyCollection from "@/components/daily-collection";
export default function LeftSide() {
  return (
    <div className="left-side">
      <div className="left-side-row1">
        <Storage />
        <Records />
      </div>
      <div className="left-side-row2">
        <Tasks />
        <Tasks />
      </div>

      {/* <div className="row">
          <div className="col">
            <Tasks />
          </div>
          <div className="col">
            <Staff />
          </div>
        </div>
        <div className="row">
          <DailyCollection />
        </div>
        <div className="row">每日采集量2</div> */}
    </div>
  );
}
