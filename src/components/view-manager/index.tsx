import React, { useLayoutEffect, useState, useRef, useCallback } from "react";
import type { ReactNode } from "react";
interface ViewScaleManagerProps {
  children: ReactNode;
  width?: number; // 设计稿宽度
  height?: number; // 设计稿高度
}

const ViewScaleManager: React.FC<ViewScaleManagerProps> = ({
  children,
  width = 1920,
  height = 1080,
}) => {
  const [scale, setScale] = useState({ x: 1, y: 1 });
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleResize = useCallback(() => {
    if (!wrapperRef.current) return;

    // 获取当前窗口的宽高
    const clientWidth = window.innerWidth;
    const clientHeight = window.innerHeight;

    // 计算等比例缩放，保持宽高比避免失真
    const scaleFactor = Math.min(clientWidth / width, clientHeight / height);

    setScale({ x: scaleFactor, y: scaleFactor });
  }, [width, height]);

  useLayoutEffect(() => {
    // 使用 requestAnimationFrame 延迟执行，避免在 effect 中直接调用 setState
    const rafId = requestAnimationFrame(() => {
      handleResize();
    });
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
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
          width: `${width}px`,
          height: `${height}px`,
          transform: `scale(${scale.x})`,
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
