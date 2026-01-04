import type { CSSProperties, ReactNode } from "react";
import "./index.less";
import itemHeaderIcon from "@/assets/item-header-430x52.png";
import itemHeaderIconBig from "@/assets/4800/item-header-1372x78.png";
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
  isBig = false,
}: PanelProps) {
  return (
    <div
      className={cx("panel", classNames)}
      style={{
        ...style,
      }}
    >
      <div className="panel-header">
        <img
          src={isBig ? itemHeaderIconBig : itemHeaderIcon}
          alt="title"
          className="panel-header-icon"
        />
        <div className="panel-title">{title}</div>
      </div>
      <div className="panel-content">{children}</div>
    </div>
  );
}
