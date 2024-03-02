import React, { useState } from 'react';

const CircularProgressBar = ({ goal, consumed, onConsumedChange }) => {
  const [size, setSize] = useState(200); // Size of the circle
  const [strokeWidth, setStrokeWidth] = useState(10); // Width of the progress bar
  const [radius, setRadius] = useState(size / 2 - strokeWidth / 2); // Radius of the circle
  const normalizedProgress = consumed > goal ? goal : consumed; // Adjust progress based on the goal
 

  const circumference = 2 * Math.PI * radius;
  const progressOffset = ((goal - normalizedProgress) / goal) * circumference;
  
  // Calculate the percentage of progress
  const progressPercentage = (consumed / goal) * 100;

  // Determine stroke color based on progress percentage
  let strokeColor;
  if (progressPercentage < 33) {
    strokeColor = 'red';
  } else if (progressPercentage < 66) {
    strokeColor = 'blue';
  } else {
    strokeColor = 'green';
  }

  return (
    <div>
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#ddd"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        <text x="50%" y="50%" textAnchor="middle" fontSize="20">
          <tspan x="50%" dy="-0.8em" fontWeight="bold">{goal} kcal</tspan>
          <tspan x="50%" dy="1.5em">is remaining</tspan>
        </text>

      </svg>
      <div style={{ textAlign: 'center' }}>
        <button className='cbtn' style={{width:'250px'}}onClick={() => onConsumedChange(consumed - 100)}>Deduct 100 kcal</button>
        <div>{consumed}/{goal} kcal</div>
        <button  className='cbtn' style={{width:'250px'}} onClick={() => onConsumedChange(consumed + 100)}>Add 100 kcal</button>
      </div>
    </div>
  );
};


export default CircularProgressBar;