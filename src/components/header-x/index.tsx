import "./index.less";
import Bar from "@/components/bar";
import { APP_CONFIG } from "@/config";
import titleIcon from "@/assets/title-icon.png";

export default function Header() {
  return (
    <div className="main-screen-header">
      <div className="main-screen-header-center">
        {APP_CONFIG.showHeaderIcon && (
          <img src={titleIcon} alt="icon" className="main-screen-header-center-icon" />
        )}
        <div className="main-screen-header-center-text">
          {APP_CONFIG.headerTitle}
        </div>
      </div>
      <Bar />
    </div>
  );
}
