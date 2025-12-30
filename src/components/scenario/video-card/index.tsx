import "./index.less";
import { useState, useRef, useEffect } from "react";
export default function VideoCard({
  video,
  title,
  time,
  color,
  status,
  poster,
}: {
  video: string | undefined;
  title: string;
  time: string;
  color: string;
  status: string;
  poster: string | undefined;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="video-card">
      <div className="video-content">
        <video
          src={video}
          //   controls
          poster={poster}
          playsInline
          ref={videoRef}
          onPlay={handlePlay}
          onPause={handlePause}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <div className="scenario-content-item-status">
        <div
          className="scenario-content-item-status-icon"
          style={{ backgroundColor: color }}
        ></div>
        <div className="scenario-content-item-status-text">{status}</div>
      </div>
      <div className="scenario-content-item-bottom">
        <div className="scenario-content-item-bottom-left">
          <div className="scenario-content-item-bottom-left-play"></div>
          <div className="scenario-content-item-bottom-left-title">{title}</div>
        </div>
        <div className="scenario-content-item-right">{time}</div>
      </div>
    </div>
  );
}
