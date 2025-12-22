import "./index.less";
import Sector from "./sector";

export default function Radar() {
  return (
    <div className="radar">
      <Sector
        angle={90}
        startAngle={-90}
        gradientId="sectorGradient"
        colors={["rgba(56, 119, 242, 1)", "rgba(0, 176, 93, 0.2)"]}
      />
    </div>
  );
}
