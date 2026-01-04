import "./index.less";
import mock from "@/assets/mock.json";
import Panel from "../panel";
import { useState, useEffect } from "react";

import video1 from "@/assets/videos/video1.mp4";
import video2 from "@/assets/videos/video2.mp4";
import video3 from "@/assets/videos/video3.mp4";
import video4 from "@/assets/videos/video4.mp4";
import video5 from "@/assets/videos/video5.mp4";
import video6 from "@/assets/videos/video6.mp4";
import video7 from "@/assets/videos/video7.mp4";
import video8 from "@/assets/videos/video8.mp4";
import video9 from "@/assets/videos/video9.mp4";

import { captureFirstFrame } from "@/tools/ capture-frame";
import VideoCard from "./video-card";
interface ScenarioItem {
  title: string;
  time: string;
  color: string;
  status: string;
  video: string;
}
export default function Scenario() {
  const data = mock.data.right_side.row2.data as ScenarioItem[];
  const title = mock.data.right_side.row2.title;
  const [posterList, setPosterList] = useState<
    { name: string; poster: string }[]
  >([]);
  const videoList: { video: string; name: string }[] = [
    {
      video: video1,
      name: "video1",
    },
    {
      video: video2,
      name: "video2",
    },
    {
      video: video3,
      name: "video3",
    },
    {
      video: video4,
      name: "video4",
    },
    {
      video: video5,
      name: "video5",
    },
    {
      video: video6,
      name: "video6",
    },
    {
      video: video7,
      name: "video7",
    },
    {
      video: video8,
      name: "video8",
    },
    {
      video: video9,
      name: "video9",
    },
  ];

  useEffect(() => {
    videoList.forEach(async (item) => {
      const poster = await captureFirstFrame(item.video);
      setPosterList((prev) => [...prev, { name: item.name, poster: poster }]);
    });
  }, []);

  return (
    <Panel classNames="scenario" title={title} isBig={true}>
      <div className="scenario-content">
        {data.map((item, index) => (
          <VideoCard
            key={index}
            video={videoList.find((video) => video.name === item.video)?.video}
            title={item.title}
            time={item.time}
            color={item.color}
            status={item.status}
            poster={
              posterList.find((poster) => poster.name === item.video)?.poster
            }
          />
        ))}
      </div>
    </Panel>
  );
}
