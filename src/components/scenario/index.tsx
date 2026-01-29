import "./index.less";
import mock from "@/assets/mock.json";
import Panel from "../panel";
// import { useState, useEffect } from "react";

// import video1 from "@/assets/videos/video1.mp4";
// import video2 from "@/assets/videos/video2.mp4";
// import video3 from "@/assets/videos/video3.mp4";
// import video4 from "@/assets/videos/video4.mp4";
// import video5 from "@/assets/videos/video5.mp4";
// import video6 from "@/assets/videos/video6.mp4";
// import video7 from "@/assets/videos/video7.mp4";
// import video8 from "@/assets/videos/video8.mp4";
// import video9 from "@/assets/videos/video9.mp4";

import image1 from "@/assets/jiankong-huizong/1@2x.png";
import image2 from "@/assets/jiankong-huizong/2@2x.png";
import image3 from "@/assets/jiankong-huizong/3@2x.png";
import image4 from "@/assets/jiankong-huizong/4@2x.png";
import image5 from "@/assets/jiankong-huizong/5@2x.png";
import image6 from "@/assets/jiankong-huizong/6@2x.png";
import image7 from "@/assets/jiankong-huizong/7@2x.png";
import image8 from "@/assets/jiankong-huizong/8@2x.png";
import image9 from "@/assets/jiankong-huizong/9@2x.png";

// import { captureFirstFrame } from "@/tools/ capture-frame";
// import VideoCard from "./video-card";
import ImageCard from "./image-card";
// interface ScenarioItem {
//   title: string;
//   time: string;
//   color: string;
//   status: string;
//   video: string;
// }
export default function Scenario() {
  // const data = mock.data.rightSide.row2.data as ScenarioItem[];
  const title = mock.data.rightSide.row2.title;
  // const [posterList, setPosterList] = useState<
  //   { name: string; poster: string }[]
  // >([]);

  const imageList = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

  // useEffect(() => {
  //   videoList.forEach(async (item) => {
  //     const poster = await captureFirstFrame(item.video);
  //     setPosterList((prev) => [...prev, { name: item.name, poster: poster }]);
  //   });
  // }, []);

  return (
    <Panel classNames="scenario" title={title} isBig={true}>
      <div className="scenario-content">
        {imageList.map((item, index) => (
          <ImageCard key={index} image={item} />
          // <div className="scenario-content-item" key={index}>
          //   <img src={item} alt={`scenario-${index}`} />
          // </div>
          // <VideoCard
          //   key={index}
          //   video={videoList.find((video) => video.name === item.video)?.video}
          //   title={item.title}
          //   time={item.time}
          //   color={item.color}
          //   status={item.status}
          //   poster={
          //     posterList.find((poster) => poster.name === item.video)?.poster
          //   }
          // />
        ))}
      </div>
    </Panel>
  );
}
