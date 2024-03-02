import React, { useState } from 'react';
import './circBar.css';

import CircularProgressBar from './CircularProgressBar';


export default function CircBar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
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
      <div className='contar'>
        <div className='topHed'><span>Calorie Meter</span></div>
        <div className='intro'> 
          <div><button className='btn' id="cusmMargin1" onClick={() => scrollToSection('calMeter')}><span>Set your goal</span></button></div>
          <div><button className='btn' id="cusmMargin2" onClick={() => scrollToSection('trackInt')}><span>Track progress</span></button></div>
          <div><button className='btn' id="cusmMargin3" onClick={() => scrollToSection('VeiwSpro')}><span>View Scanned products</span></button></div>
          <div><button className='btn' id="cusmMargin4" onClick={() => scrollToSection('getTip')}><span>Get tips</span></button></div>
        </div>
      </div>    
      <div id='calMeter' className='calMeter'>
        Set your Goal
        
        
        
      </div>
      <div id='trackInt' className='trackInt'>
        Track your daily intake
        <div>
          <input type="number" value={inputGoal} onChange={handleInputChange} placeholder="Set your goal" />
          <button className='cbtn' onClick={handleSetGoal}>Set Goal</button>
          <CircularProgressBar goal={goal} consumed={consumed} onConsumedChange={handleConsumedChange} />
        </div>  
        
      </div>
      <div id='VeiwSpro' className='VeiwSpro'>
        View Scanned Products
       
      </div>
      <div id='getTip' className='getTip'>
        Get Tips
      </div>
    </div>    
  );
}
