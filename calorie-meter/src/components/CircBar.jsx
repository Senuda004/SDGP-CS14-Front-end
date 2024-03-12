import React, { useState } from 'react';
import './circBar.css';
import CircularProgressBar from './CircularProgressBar';
import DetailsPage from './DetailsPage';
import FetchTips from './FetchTips';


export default function CircBar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // circular bar functions
  
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
    if (isNaN(newGoal) || newGoal <= 0) {
      // Display error alert if the input is not a positive number
      alert('Please enter a valid positive number for your goal.');
      return;
    }
    setGoal(newGoal);
    const updatedConsumed = Math.max(0, Math.min(newGoal, goal));
    setConsumed(updatedConsumed);
    
  };

 

  return (
    <div>
      <div className='contar'>
        <div className='topHed'><span>Calorie Meter</span></div>
          <div className='displayFlex'>
            <img src='https://i.ibb.co/9WBV9MV/piccc-removebg.png'alt='bgpic' ></img>
            <div className='intro'> 
              <div><button className='btn' id="cusmMargin1" onClick={() => scrollToSection('calMeter')}><span>Set Goal & Track your Progress</span></button></div>
              <div><button className='btn' id="cusmMargin3" onClick={() => scrollToSection('VeiwSpro')}><span>View Scanned products</span></button></div>
              <div><button className='btn' id="cusmMargin4" onClick={() => scrollToSection('getTip')}><span>Weight loss Tips</span></button></div>
            </div>
            
          </div> 
      </div>    
      <div id='calMeter' className='calMeter'>
        <h1>Set your Goal</h1>
        <div className='setgoalContainer'>
            <div className='inputContr'>
            <h3 id=''>Set your daily calorie goal</h3>
              <input className='userInput' type="number" value={inputGoal} onChange={handleInputChange} placeholder="Enter here" required />
              <p>Kcal</p>
              <button id='setGoalbtn' className='cbtn' onClick={handleSetGoal}>Set Goal</button>
           </div>
         
          <div className='circBar'>
            <CircularProgressBar id='circle' goal={goal} consumed={consumed} onConsumedChange={handleConsumedChange} />
          </div>
        </div>  
        
        
      </div>
      
      <div id='VeiwSpro' className='VeiwSpro'>
      <h1>View Scanned Products</h1>
        <div className='prduct-list-display'>
         
        </div>
         
       
      </div>
      <div id='getTip' className='getTip'>
        <h1>Weight loss Tips</h1>
        <FetchTips/>
      </div>
    </div>    
  );
}
