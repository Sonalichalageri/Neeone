// ProgressBar.tsx

import React from "react";
import "./Pump.scss"; // Optional: You can style your progress bar

interface ProgressBarProps {
  progress: number; // Progress value (0-100)
  height: number; // Height of the progress bar
  bgcolor: string; // Background color of the progress bar
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  height,
  bgcolor,
}) => {
  // Calculate width based on progress percentage
  const width = `${progress}%`;

  return (
    <div className="progress-bar-container" style={{ height }}>
      <div
        className="progress-bar"
        style={{ width, backgroundColor: bgcolor }}
      >
        <span className="progress-text">{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
