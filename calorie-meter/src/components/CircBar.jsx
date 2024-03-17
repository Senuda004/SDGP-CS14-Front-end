import React, { useState } from 'react';
import './circBar.css';
import CircularProgressBar from './CircularProgressBar';
import DetailsPage from './DetailsPage';
import FetchTips from './FetchTips';
import axios from 'axios';


export default function CircBar() {
  //welcome section
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
    axios.post('http://localhost:5000/api/caldata', {
      goal: newGoal
    })
    .then(response => {
      if (response.status === 201) {
        console.log('Goal set successfully:', response.data);
        // Optionally, update the UI or perform other actions upon successful storage of the goal
      } else {
        console.error('Unexpected status code:', response.status);
      }
    })
    .catch(error => {
      console.error('Error setting goal:', error);
    });
  
    setGoal(newGoal);
    const updatedConsumed = Math.max(0, Math.min(newGoal, goal));
    setConsumed(updatedConsumed);
    
  };
  

  return (
    <div className='resposiveCon'>
      <div className='contar'>
        <div className='topHed'><span>Calorie Meter</span></div>
            <div className='welcome'>
              <p>Welcome to NutriMate Calorie Meter! Easily manage and optimize your daily Calorie intake for holistic health.</p>
            </div>
            <div className='Wpic'><img src='https://i.ibb.co/PtPwVg5/Free-Vector-Presentation-concept-illustration-removebg-preview.png' alt='pic' id='Wpic'/></div>
      </div>  
      <div id='calMeter' className='calMeter'>
     
        <div className='setgoalContainer'>
            <div className='inputContr'>
            <h3 id=''>Set your daily calorie goal</h3>
              <input className='userInput' type="number" value={inputGoal} onChange={handleInputChange} placeholder="Enter here" required />
              <p>Kcal</p>
              <button id='setGoalbtn' className='cbtn' onClick={handleSetGoal}>Set Goal</button>
           </div>
         
          <div className='circBar'>
            <CircularProgressBar id='circle' goal={goal} consumed={consumed} onConsumedChange={handleConsumedChange} />
            <p>Remaining Calories: {consumed}</p>
            <p>Updated Consumed: {goal - consumed}</p>
          </div>
        </div>  
      </div> 
 
      
      <div id='VeiwSpro' className='VeiwSpro'>
      <h1>View Scanned Products</h1>
      </div>
      
      <div id='getTip' className='getTip'>
        <h1>Weight loss Tips</h1>
        <FetchTips/>
      </div>
      <div className='intro' id='scrollTobtn'> 
          <div className='setDiv'>
            <button className='btn' id="cusmMargin1" onClick={() => scrollToSection('calMeter')}><span>Set Goal & Track your Progress</span></button></div>
          <div className='veiwDiv'><button className='btn' id="cusmMargin3" onClick={() => scrollToSection('VeiwSpro')}><span>View Scanned products</span>
          </button></div>
          <div className='getDiv'><button className='btn' id="cusmMargin4" onClick={() => scrollToSection('getTip')}><span>Weight loss Tips</span>
          </button></div>
        </div>
      
    </div>    
  );
}
