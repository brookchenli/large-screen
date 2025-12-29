import "./index.less";

import LeftSide from "@/components/left-side";
import RightSide from "@/components/right-side";
import Middle from "@/components/middle";
import Bar from "@/components/bar";
const Index = () => {
  return (
    <div className="main-screen">
      <div className="main-screen-header">
        <Bar />
      </div>
      <div className="main-screen-content">
        <LeftSide />
        {/* <Middle />
        <RightSide /> */}
      </div>
    </div>
  );
};

export default Index;
