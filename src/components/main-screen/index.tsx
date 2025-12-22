import "./index.less";

import LeftSide from "@/components/left-side";
import RightSide from "@/components/right-side";
import Middle from "@/components/middle";
import Bar from "@/components/bar";
import ProgressRectangle from "@/components/progress-rectangle";
const Index = () => {
  return (
    <div style={{ width: "430px", height: "20px" }}>
      <ProgressRectangle
        values={[
          { percentage: 50, color: "#3877F2" },
          { percentage: 30, color: "rgba(0, 176, 93, 0.2)" },
        ]}
        total={100}
      />
    </div>
    // <div className="main-screen">
    //   <div className="main-screen-header">
    //     <Bar />
    //   </div>
    //   <div className="main-screen-content">
    //     <LeftSide />
    //     <Middle />
    //     <RightSide />
    //   </div>
    // </div>
  );
};

export default Index;
