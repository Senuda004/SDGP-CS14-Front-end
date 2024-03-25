import React, { useState } from 'react';

const CalorieMeter = () => {

  return (
    <div className="overflow-x-hidden relative right-[20vh]">
      <iframe
        title='calorie meter feature'
        src="https://calorie-meter-nutrimate.vercel.app/"
        width="135%"
        height="1500"
        className='pt-10 overflow-x-hidden'
        ></iframe>
    </div>
  );
};

export default CalorieMeter;

