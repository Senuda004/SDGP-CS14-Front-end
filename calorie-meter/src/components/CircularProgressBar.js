import React, { useState } from 'react';

const CircularProgressBar = ({ goal, consumed, onConsumedChange }) => {

  
  console.log('Received consumed value:', consumed); // Debugging line
  console.log('Received onConsumedChange function:', onConsumedChange); // Debugging line
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [caloriesToAddOrDeduct, setCaloriesToAddOrDeduct] = useState(0); // State to hold user input
  const [size, setSize] = useState(380); // Size of the circle
  const [strokeWidth, setStrokeWidth] = useState(30); // Width of the progress bar
  const [radius, setRadius] = useState(size / 2 - strokeWidth / 2); // Radius of the circle
  const normalizedProgress = consumed > goal ? goal : consumed; // Adjust progress based on the goal
  const circumference = 2 * Math.PI * radius;
  const progressOffset = ((goal - normalizedProgress) / goal) * circumference;
  const progressPercentage = (consumed / goal) * 100;  // Calculate the percentage of progress
  
  const handleInputChange = (event) => {
    setCaloriesToAddOrDeduct(parseInt(event.target.value)); // Convert input to integer
  };
  /*
  const handleAddCalories = (caloriesToAdd) => {
    const newConsumed = consumed + caloriesToAdd;
    if (newConsumed > goal) {
      alert('Adding these calories will exceed your daily goal!');
      
    } else {
      onConsumedChange(newConsumed);
     
    }
  };*/

  
  const handleAddCalories = () => {
    // Check if goal is set
    if (!consumed) {
      alert('Please set a goal first.');
      return;
    }
  
    // Proceed with adding calories if goal is set
    const newConsumed = consumed + caloriesToAddOrDeduct;
    if (newConsumed > goal) {
      alert('Adding these calories will exceed your daily goal!Change the goal if you want');
    } else {
      onConsumedChange(newConsumed);
    }
  };
  
  const handleDeductCalories = () => {
    const newConsumed = consumed - caloriesToAddOrDeduct;
    if (newConsumed < 0) {
      alert('You cannot deduct more calories than you have consumed!');
    } else {
      onConsumedChange(newConsumed);
    }
  };


  
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
          stroke="#D9D9D9"
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
        <text x="50%" y="50%" textAnchor="middle" fontSize="25" fill='black'>
          <tspan x="50%" dy="-0.8em" fontWeight="bold">{goal} kcal</tspan>
          <tspan x="50%" dy="1.5em">Daily goal</tspan>
        </text>
      </svg>
      
      <div className='addDuctBtns' style={{ textAlign: 'center' }}>
        <p>Adjust your calories</p>
        <input type="number" value={caloriesToAddOrDeduct} onChange={handleInputChange} />
        <button className='cbtn1' onClick={handleDeductCalories}>Deduct Calories</button>
        <div id='count'>{consumed}/{goal} kcal</div>
        <button className='cbtn2' onClick={handleAddCalories}>Add Calories</button>
      </div>
    </div>
  );
};


export default CircularProgressBar;
