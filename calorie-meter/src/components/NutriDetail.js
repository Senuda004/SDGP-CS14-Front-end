import React, { useState } from 'react';

const CircularProgressBar = ({ goal, consumed, onConsumedChange }) => {
  const [size, setSize] = useState(200); // Size of the circle
  const [strokeWidth, setStrokeWidth] = useState(10); // Width of the progress bar
  const [radius, setRadius] = useState(size / 2 - strokeWidth / 2); // Radius of the circle
  const normalizedProgress = consumed > goal ? goal : consumed; // Adjust progress based on the goal
 

  const circumference = 2 * Math.PI * radius;
  const progressOffset = ((goal - normalizedProgress) / goal) * circumference;

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
          stroke="green"
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
        <button onClick={() => onConsumedChange(consumed - 100)}>Deduct 100 kcal</button>
        <div>{consumed}/{goal} kcal</div>
        <button onClick={() => onConsumedChange(consumed + 100)}>Add 100 kcal</button>
      </div>
    </div>
  );
};

const App = () => {
  const [goal, setGoal] = useState(2000);
  const [consumed, setConsumed] = useState(0);
  const [inputGoal, setInputGoal] = useState(''); // State to hold the input value

  const handleConsumedChange = (newConsumed) => {
    const updatedConsumed = Math.max(0, Math.min(newConsumed, goal));
    setConsumed(updatedConsumed);
  };

  const handleInputChange = (event) => {
    setInputGoal(event.target.value);
  };


  const handleSetGoal = () => {
    const newGoal = parseInt(inputGoal, 10) || 0; // Convert input to integer or default to 0
    setGoal(newGoal);
    const updatedConsumed = Math.max(0, Math.min(newGoal, goal));
    setConsumed(updatedConsumed);
  };

  return (
    <div>
      <input type="number" value={inputGoal} onChange={handleInputChange} placeholder="Set your goal" />
      <button onClick={handleSetGoal}>Set Goal</button>
      <CircularProgressBar goal={goal} consumed={consumed} onConsumedChange={handleConsumedChange} />
    </div>
  );
};

export default App;