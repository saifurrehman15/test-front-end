import React, { useState, useEffect } from "react";

const Timeline = () => {
  const [time, setTime] = useState(0);
  const totalDuration = 5; 
  const intervalSpeed = 50; 

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => (prev >= totalDuration ? 0 : prev + intervalSpeed / 1000));
    }, intervalSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="play-line-area">
      <div className="timeline-bar">
        {[...Array(totalDuration + 1)].map((_, i) => (
          <div key={i} className="tick" style={{ left: `${(i / totalDuration) * 100}%` }}>
            {i}s
          </div>
        ))}
        <div className="cursor" style={{ left: `${(time / totalDuration) * 100}%` }}>
          <span className="tooltip">{time.toFixed(2)}s</span>
        </div>
      </div>
    </div>
  );
};

export default Timeline;