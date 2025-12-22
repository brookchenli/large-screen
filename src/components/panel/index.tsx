import type { ReactNode } from "react";
import "./index.less";
import storageIcon from "@/assets/header-bg-big.png";

interface PanelProps {
  children: ReactNode;
  title?: string;
}

export default function Panel({ children, title = "设置标题" }: PanelProps) {
  return (
    <div className="panel">
      <div className="panel-header">
        <img src={storageIcon} alt="title" className="panel-header-icon" />
      </div>
      <div className="panel-content">{children}</div>
      <div className="panel-footer">{title}</div>
    </div>
  );
}
