import "./index.less";
import logo from "@/assets/title-icon.png";
import Bar from "@/components/bar";
export default function Header() {
  return (
    <div className="main-screen-header">
      <div className="main-screen-header-center">
        <img src={logo} className="main-screen-header-center-logo" />
        <div className="main-screen-header-center-text">数采场统计中心</div>
      </div>
      <Bar />
    </div>
  );
}
