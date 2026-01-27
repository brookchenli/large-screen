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

      // ��Ƹ�ߴ�
      const designWidth = 4800;
      const designHeight = 3000;
      const headerHeight = 176;
      const headerDesignWidth = 4800;
      const headerMarginTop = 15;
      const contentMarginTop = 54;

      // ViewManager�Ļ������ű������ȱ������ţ�
      const baseScale = Math.min(
        windowWidth / designWidth,
        windowHeight / designHeight
      );

      // ����ViewManager���ź��ʵ�ʳߴ�
      const scaledHeaderHeight = headerHeight * baseScale;
      const scaledHeaderMarginTop = headerMarginTop * baseScale;
      const scaledContentMarginTop = contentMarginTop * baseScale;

      // ��������������ø߶ȣ���ȥheader�߶Ⱥ�margin������ViewManager�����ţ�
      const contentAvailableHeight =
        windowHeight -
        scaledHeaderHeight -
        scaledHeaderMarginTop -
        scaledContentMarginTop;

      // ʵ�����ݿ��ȣ�leftside(1372px) �� rightside(1372px) �ֱ�����
      const leftSideWidth = 1372;
      const rightSideWidth = 1372;

      // ����ViewManager���ź��ʵ�ʳߴ�
      const scaledLeftSideWidth = leftSideWidth * baseScale;
      const scaledRightSideWidth = rightSideWidth * baseScale;

      // ��������������ø߶�
      const contentDesignHeight =
        (designHeight - headerHeight - headerMarginTop - contentMarginTop) *
        baseScale;

      // ������������Ķ������ţ�leftside��rightsideʹ�ã�
      // ȷ�����ź󲻻ᳬ�����ڿ��ȣ�ÿ����������ռ���ڿ��ȵ�һ�룬��ȥ���
      const sideMargin = 60; // ���Ҹ�60px���
      const maxAvailableWidthPerSide = windowWidth / 2 - sideMargin;
      const contentScaleXLeft = maxAvailableWidthPerSide / scaledLeftSideWidth;
      const contentScaleXRight =
        maxAvailableWidthPerSide / scaledRightSideWidth;
      const contentScaleX = Math.min(contentScaleXLeft, contentScaleXRight);
      const contentScaleY = contentAvailableHeight / contentDesignHeight;
      const contentScale = Math.min(contentScaleX, contentScaleY);

      // ����header�Ŀ������ţ��߶ȱ���176px���䣩
      // header����Ӧ����Ӧ���ڿ���
      const scaledHeaderWidth = headerDesignWidth * baseScale;
      const headerWidthScale = Math.min(
        windowWidth / scaledHeaderWidth,
        0.98 // ��΢��Сһ�㣬�����߾�
      );

      setScales({
        headerWidth: headerWidthScale,
        contentScale: contentScale * 1.5, // ��leftside��rightside�����ű�������Ϊ1.5��
      });
    };

    calculateScales();
    window.addEventListener("resize", calculateScales);
    return () => window.removeEventListener("resize", calculateScales);
  }, []);

  return (
    <div className="main-screen-1280">
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
