import React, {useRef } from "react";
import type { ReactNode } from "react";
interface ViewScaleManagerProps {
  children: ReactNode;
  designWidth?: number; // 设计稿宽度
  designHeight?: number; // 设计稿高度
  
  containerWidth?: number;
  containerHeight?: number;
}

const ViewScaleManager: React.FC<ViewScaleManagerProps> = ({
  children,
  designWidth = 0,
  designHeight = 0,
  
  containerWidth = 0,
  containerHeight = 0,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div
      style={{
        width:  `${containerWidth}px`,
        height: `${containerHeight}px`,
        backgroundColor: "#000",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        ref={wrapperRef}
        style={{
          width: `${designWidth}px`,
          height: `${designHeight}px`,
          transform: `scale(${Math.min(containerWidth / designWidth, containerHeight / designHeight)})`,
          transformOrigin: "center center", // 从中心缩放
          transition: "transform 0.2s ease", // 增加平滑过渡
          flexShrink: 0,
          position: "relative",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ViewScaleManager;
