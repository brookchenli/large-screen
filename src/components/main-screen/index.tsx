import "./index.less";

import LeftSide from "@/components/left-side";
import RightSide from "@/components/right-side";
import Middle from "@/components/middle";
import Bar from "@/components/bar";
import logo from "@/assets/title-icon.png";
const Index = () => {
  return (
    <div className="main-screen">
      <div className="main-screen-header">
        <div className="main-screen-header-center">
          <img src={logo} className="main-screen-header-center-logo" />
          <div className="main-screen-header-center-text">数采场统计中心</div>
        </div>
        <Bar />
      </div>
      <div className="main-screen-content">
        <LeftSide />
        <Middle />
        <RightSide />
      </div>
    </div>
  );
};

export default Index;
