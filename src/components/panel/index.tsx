import type { CSSProperties, ReactNode } from "react";
import "./index.less";
import storageIcon from "@/assets/header-bg-big.png";
import cx from "classnames";
interface PanelProps {
  children: ReactNode;
  title?: string;
  isBig?: boolean;
  style?: CSSProperties;
  classNames: string;
}

export default function Panel({
  children,
  title = "设置标题",
  classNames = "",
  style = {},
}: PanelProps) {
  return (
    <div
      className={cx("panel", classNames)}
      style={{
        ...style,
      }}
    >
      <div className="panel-header">
        <img src={storageIcon} alt="title" className="panel-header-icon" />
        <div className="panel-title">{title}</div>
      </div>
      <div className="panel-content">{children}</div>
    </div>
  );
}
