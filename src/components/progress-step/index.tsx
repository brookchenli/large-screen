import "./index.less";
import StepProgressBar from "./step-progress-bar";

export default function ProgressStep() {
  return (
    <div className="progress-step">
      <StepProgressBar
        total={100}
        current={20}
        width={263}
        barHeight={6}
        containerHeight={14}
        gap={3}
      />
    </div>
  );
}
