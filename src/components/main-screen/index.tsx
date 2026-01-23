import "./index.less";
import { useEffect, useState } from "react";
import LeftSide from "@/components/left-side";
import RightSide from "@/components/right-side";
import Header from "@/components/header";

const Index = () => {
  const [scales, setScales] = useState({
    headerWidth: 1,
    contentScale: 1,
  });

  useEffect(() => {
    const calculateScales = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // 设计稿尺寸
      const designWidth = 4800;
      const designHeight = 3000;
      const headerHeight = 176;
      const headerDesignWidth = 4800;
      const headerMarginTop = 15;
      const contentMarginTop = 54;

      // ViewManager的基础缩放比例（等比例缩放）
      const baseScale = Math.min(
        windowWidth / designWidth,
        windowHeight / designHeight
      );

      // 经过ViewManager缩放后的实际尺寸
      const scaledHeaderHeight = headerHeight * baseScale;
      const scaledHeaderMarginTop = headerMarginTop * baseScale;
      const scaledContentMarginTop = contentMarginTop * baseScale;

      // 计算内容区域可用高度（减去header高度和margin，考虑ViewManager的缩放）
      const contentAvailableHeight =
        windowHeight -
        scaledHeaderHeight -
        scaledHeaderMarginTop -
        scaledContentMarginTop;

      // 实际内容宽度：leftside(1372px) 和 rightside(1372px) 分别缩放
      const leftSideWidth = 1372;
      const rightSideWidth = 1372;

      // 经过ViewManager缩放后的实际尺寸
      const scaledLeftSideWidth = leftSideWidth * baseScale;
      const scaledRightSideWidth = rightSideWidth * baseScale;

      // 计算内容区域可用高度
      const contentDesignHeight =
        (designHeight - headerHeight - headerMarginTop - contentMarginTop) *
        baseScale;

      // 计算内容区域的额外缩放（leftside和rightside使用）
      // 确保缩放后不会超出窗口宽度，每个侧边栏最多占窗口宽度的一半，减去间距
      const sideMargin = 60; // 左右各60px间距
      const maxAvailableWidthPerSide = windowWidth / 2 - sideMargin;
      const contentScaleXLeft = maxAvailableWidthPerSide / scaledLeftSideWidth;
      const contentScaleXRight =
        maxAvailableWidthPerSide / scaledRightSideWidth;
      const contentScaleX = Math.min(contentScaleXLeft, contentScaleXRight);
      const contentScaleY = contentAvailableHeight / contentDesignHeight;
      const contentScale = Math.min(contentScaleX, contentScaleY);

      // 计算header的宽度缩放（高度保持176px不变）
      // header宽度应该适应窗口宽度
      const scaledHeaderWidth = headerDesignWidth * baseScale;
      const headerWidthScale = Math.min(
        windowWidth / scaledHeaderWidth,
        0.98 // 稍微缩小一点，留出边距
      );

      setScales({
        headerWidth: headerWidthScale,
        contentScale: contentScale * 1.5, // 将leftside和rightside的缩放比例调整为1.5倍
      });
    };

    calculateScales();
    window.addEventListener("resize", calculateScales);
    return () => window.removeEventListener("resize", calculateScales);
  }, []);

  return (
    <div className="main-screen">
      <div
        className="main-screen-header-wrapper"
        style={{
          transform: `scaleX(${scales.headerWidth})`,
          transformOrigin: "center top",
        }}
      >
        <Header />
      </div>
      <div className="main-screen-content">
        <div
          style={{
            transform: `scale(${scales.contentScale})`,
            transformOrigin: "left top",
            marginLeft: "60px",
          }}
        >
          <LeftSide />
        </div>
        <div
          style={{
            transform: `scale(${scales.contentScale})`,
            transformOrigin: "right top",
            marginRight: "60px",
          }}
        >
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default Index;
