import "./index.less";
import storageIcon from "@/assets/storage_header.png";
export default function Panel({
  children,
  title = "设置标题",
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="panel">
      <div className="panel-header">
        <img src={storageIcon} alt="title" className="panel-header-icon" />
      </div>
      <div className="panel-content">{children}</div>
    </div>
  );
}
