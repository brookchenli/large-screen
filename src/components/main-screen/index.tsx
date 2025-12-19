import "./index.less";
import { useState, useEffect } from "react";
import Bar from "@/components/bar";
import Storage from "@/components/storage";
import Records from "@/components/records";
import Tasks from "@/components/tasks";
import Staff from "@/components/staff";
const Index = () => {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState({
    temperature: 0,
    humidity: 0,
    wind: 0,
    precipitation: 0,
    visibility: 0,
  });

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div className="main-screen">
      <div className="main-screen-left">
        <div className="row">
          <div className="col">
            <Storage />
          </div>
          <div className="col">
            <Records />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Tasks />
          </div>
          <div className="col">
            <Staff />
          </div>
        </div>
        <div className="row">每日采集量1</div>
        <div className="row">每日采集量2</div>
      </div>

      {/* <Bar />
      <Storage /> */}
      {/* <div className="header">
        <div className="header-left"></div>
        <div className="header-center"></div>
        <div className="header-right">
          <div className="header-right-time">
            <span className="header-right-time-text">
              {time.toTimeString().slice(0, 8)}
            </span>
            <span className="header-right-time-text">
              {time.getFullYear()}-
              {(time.getMonth() + 1).toString().padStart(2, "0")}-
              {time.getDate().toString().padStart(2, "0")}
            </span>
            <span className="header-right-time-text">
              {`星期${"日一二三四五六"[time.getDay()]}`}
            </span>
          </div>
          <div className="header-right-time-separator"></div>
          <div className="header-right-weather"></div>
        </div>
      </div> */}
    </div>
  );
};

export default Index;
