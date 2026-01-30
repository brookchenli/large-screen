
import "./index.less";
import LeftSide from "../left-side";
import RightSide from "../right-side";
import ViewManager from "../view-manager";
import { useWindowSize } from "@/hooks/useWindowSize";
import Header from "../header-x";
import Middle from "../middle";

const MainScreenX = () => {
  const { width, height } = useWindowSize();
  let headerHeight = 176;
  let contentPaddingTop = 54;
  let contentPaddingBottom = 66;
  let contentPaddingLeft = 72;
  let contentPaddingRight = 72;
  
  if(width < 4800){
    headerHeight = 47;
    contentPaddingTop = 15;
    contentPaddingBottom = 15;
    contentPaddingLeft = 15;
    contentPaddingRight = 15;
  }

  const contentHeight = height - headerHeight - contentPaddingTop - contentPaddingBottom;
  const contentWidth = width - contentPaddingLeft - contentPaddingRight;


  //设计的宽高时1372x1835，屏幕宽高是width和realHeight，所以需要计算出缩放比例
  const scale = Math.min(contentWidth / 1372, contentHeight / 1835);
  const cardWith = 1372*scale;
  const cardHeight = 1835*scale;
  
  console.log("headerHeight", headerHeight);
  console.log("contentWidth", contentWidth);
  console.log("contentHeight", contentHeight);
  console.log("cardWith", cardWith);
  console.log("cardHeight", cardHeight);
  console.log("scale", scale);
  console.log("width", width);
  console.log("height", height);

  return (
    <div className="main-screen-x" >
        <div className="main-screen-x-header" style={{width: `100%`,height: `${headerHeight}px`}}>
           <ViewManager designWidth={4800} designHeight={176} containerWidth={width} containerHeight={headerHeight}>
            <Header />
          </ViewManager>
        </div>

        <div className="main-screen-x-content" style={{padding: `${contentPaddingTop}px ${contentPaddingRight}px ${contentPaddingBottom}px ${contentPaddingLeft}px`}}
        >
          <ViewManager designWidth={1372} designHeight={1835} containerWidth={cardWith} containerHeight={cardHeight}>
            <LeftSide />
          </ViewManager>

          

          <ViewManager designWidth={1372} designHeight={1835} containerWidth={cardWith} containerHeight={cardHeight}>
            <RightSide />
          </ViewManager>
        </div>
    </div>
  );
};

export default MainScreenX; 