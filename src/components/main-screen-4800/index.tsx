import "./index.less";

import LeftSide from "@/components/left-side";
import RightSide from "@/components/right-side";
import Middle from "@/components/middle";
import Header from "../header-beijing";

const Index = () => {
  return (
    <div className="main-screen">
      <Header />
      <div className="main-screen-content-4800">
        <LeftSide />
        <Middle />
        <RightSide />
      </div>
    </div>
  );
};

export default Index;
