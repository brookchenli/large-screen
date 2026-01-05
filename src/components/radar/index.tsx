import "./index.less";
import Sector from "./sector";
interface RadarProps {
  colors: string[];
  percentage: number;
}
export default function Radar({ colors, percentage }: RadarProps) {
  console.log(colors);
  return (
    <div className="radar">
      <Sector
        angle={percentage * 3.6}
        startAngle={-90}
        gradientId="sectorGradient"
        colors={[colors[0], colors[1]]}
      />
    </div>
  );
}
