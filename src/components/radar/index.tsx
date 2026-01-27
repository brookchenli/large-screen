import "./index.less";
import NewRadar from "./radar";
interface RadarProps {
  color: string;
  percentage: number;
}
export default function Radar({ color, percentage }: RadarProps) {
  console.log(percentage);
  console.log(color);
  return (
    <div className="radar">
      {/* <Sector
        angle={percentage * 3.6}
        startAngle={-90}
        gradientId="sectorGradient"
        // colors={[colors[0], colors[1]]}
        colors={["rgba(28, 96, 254, 0)", "rgba(28, 96, 254, 1)"]}
      /> */}
      <div className="radar-content">
        <NewRadar
          angle={percentage * 3.6}
          color={color}
          size={88}
          showRadiusLines={false}
        />
      </div>
    </div>
  );
}
