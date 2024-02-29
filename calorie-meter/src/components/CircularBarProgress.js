import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressBar = () => {
  const [inputValue, setInputValue] = useState(() => {
    const savedInputValue = localStorage.getItem('savedInputValue');
    return savedInputValue || '';
  });

  const [progress, setProgress] = useState(() => {
    const savedProgress = localStorage.getItem('savedProgress');
    return savedProgress ? parseFloat(savedProgress) : 0;
  });

  const handleInputChange = (e) => {
    const value = e.target.value;

    // Check if the input is a valid number
    if (!isNaN(value) && isFinite(value)) {
      setInputValue(value);

      // Convert negative inputs to 0
      const sanitizedValue = Math.max(0, parseFloat(value));

      // If input is greater than 100, set circular progress to (inputValue / 1000) * 100
      setProgress(isNaN(sanitizedValue) ? 0 : sanitizedValue > 100 ? (sanitizedValue / 1000) * 100 : sanitizedValue);
    } else {
      // Display an alert for invalid input
      alert('Please enter a valid number.');
    }
  };

  const getColor = () => {
    if (progress >= 0 && progress < 33.33) {
      return { pathColor: ' rgb(165, 34, 7)', textColor: ' rgb(165, 34, 7)' };
    } else if (progress >= 33.33 && progress < 66.66) {
      return { pathColor: '#FFC533', textColor: '#FFC533' };
    } else {
      return { pathColor: 'rgb(17, 81, 17)', textColor: 'rgb(17, 81, 17)' };
    }
  };

  const resetProgress = () => {
    setProgress(0);
    setInputValue('');
    alert('Goal has been reset to 0');
  };

  useEffect(() => {
    localStorage.setItem('savedProgress', progress.toString());
  }, [progress]);

  useEffect(() => {
    localStorage.setItem('savedInputValue', inputValue);
  }, [inputValue]);

  const colorStyles = getColor();

  const handleSave = () => {
    alert('Goal has been set successfully!');
  };

  return (
    <div className="flex flex-col items-center md:flex-row md:items-start">
      <div className="circularBar md:mr-4">
        <div className="w-full max-w-screen-sm mx-auto md:w-1/2 lg:w-1/3 xl:w-4/5 md:mx-0">
          <CircularProgressbar
            value={progress}
            text={`${inputValue > 100 ? (inputValue / 1000) * 100 : inputValue}${inputValue > 100 ? '%' : ''}\nCals remaining`}
            styles={buildStyles({
              textSize: '8px',
              pathColor: colorStyles.pathColor,
              textColor: colorStyles.textColor,
            })}
            className="w-full"
          />
        </div>
      </div>
      <div className="mt-4 userInput md:ml-4 md:mt-0">
        <div className="text">Set your daily calorie goal</div>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          className="w-full h-10 mt-2 text-center bg-gray-300 rounded-lg md:w-64 md:mt-4"
        />
        <div className="mt-4 resaveBtn">
          <button onClick={resetProgress} className="px-4 py-2 mr-2 text-white bg-red-500 rounded-md">Reset</button>
          <button onClick={handleSave} className="px-4 py-2 text-white bg-blue-500 rounded-md">Save</button>
        </div>
      </div>
    </div>
  );
};

export default CircularProgressBar;
