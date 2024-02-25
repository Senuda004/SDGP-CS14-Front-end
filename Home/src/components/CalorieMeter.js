import React, { useState } from 'react';

const CalorieMeter = () => {
  const [calories, setCalories] = useState(0);

  const increaseCalories = () => {
    setCalories(calories + 100);
  };

  const decreaseCalories = () => {
    setCalories(calories - 100 > 0 ? calories - 100 : 0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-amber-400 p-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Calorie Meter</h1>

        <div className="mb-4">
          <p className="text-lg font-semibold mb-2">Current Calories:</p>
          <p className="text-2xl">{calories} kcal</p>
        </div>

        <div className="flex justify-between gap-3">
          <button
            className="bg-white text-amber-500 hover:text-white hover:bg-amber-500 py-2 px-4 rounded"
            onClick={decreaseCalories}
          >
            Decrease
          </button>

          <button
            className="bg-white text-amber-500 hover:text-white hover:bg-amber-500 py-2 px-4 rounded"
            onClick={increaseCalories}
          >
            Increase
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalorieMeter;

