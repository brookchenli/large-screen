import "./index.less";

import LeftSide from "@/components/left-side";
import RightSide from "@/components/right-side";
import Middle from "@/components/middle";
import Header from "@/components/header";
const Index = () => {
  return (
    <div className="main-screen">
      <Header />
      <div className="main-screen-content">
        <LeftSide />
        <Middle />
        <RightSide />
      </div>
    </div>
  );
};

export default Index;
