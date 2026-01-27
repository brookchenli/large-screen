import "./index.less";
// import logo from "@/assets/title-icon.png";
// import logo1 from "@/assets/tashan_log1.jpg";
// import logo2 from "@/assets/tashan_log2.jpg";

import Bar from "@/components/bar";
export default function Header() {
  return (
    <div className="main-screen-header">
      <div className="main-screen-header-center">
        {/* <img src={logo2} className="main-screen-header-center-logo" /> */}
        <div className="main-screen-header-center-text">
          湖北他山数采统计中心
        </div>
      </div>
      <Bar />
    </div>
  );
}
