import React, { useState, useEffect } from 'react';
import './circBar.css';
import CircularProgressBar from './CircularProgressBar';
import DetailsPage from './DetailsPage';
import FetchTips from './FetchTips';
import DataBackend from './DataBackend';
import axios from 'axios'; // Import Axios for making HTTP requests



export default function CircBar() {
  
  
  // circular bar functions
  const [goal, setGoal] = useState(5000);
  const [consumed, setConsumed] = useState(0);
  const [inputGoal, setInputGoal] = useState(''); // State to hold the input value
  const [uid, setUid] = useState(''); // State to hold the user ID, you need to set this value when the user logs in or is authenticated
  const [showCongrats, setShowCongrats] = useState(false);// State to manage congratulations message
  const [showTryAgain, setShowTryAgain] = useState(false);// State to manage try again message
  const [sparkling, setSparkling] = useState(false); // State to manage sparkling effect
  const [showProducts, setShowProducts] = useState(false);
  const [showTipProducts,setshowTipProducts] = useState(false);
  const [showHistory,setshowHistory] = useState(false);
  
  const handleConsumedChange = (newConsumed) => {
    const updatedConsumed = Math.max(0, Math.min(newConsumed, goal));
    setConsumed(updatedConsumed);
  };
  
  const scrollTogetTip = () => {
    const getTipSection = document.getElementById('getTip');
    if (getTipSection) {
      getTipSection.scrollIntoView({ behavior: 'smooth' });
    }
    setshowTipProducts(!showTipProducts);
  };
  
   
  const scrollToHistory = () => {
    const scrollToHistory = document.getElementById('disHistory');
    if (scrollToHistory) {
      scrollToHistory.scrollIntoView({ behavior: 'smooth' });
    }
    setshowHistory(!showHistory);
  };
    // Function to toggle the display of products
    const toggleProducts = () => {
   
      // Toggle the state to show/hide products
      setShowProducts(!showProducts);
      // Scroll to the section when the button is clicked
      const section = document.getElementById('displayProduct');
      if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
      }
        
    };

  
  useEffect(() => {
    // Fetch user's goal from the backend when the component mounts
    fetchGoalFromBackend();
}, []);

const fetchGoalFromBackend = () => {
    // Get the current date in a format suitable for the backend (e.g., YYYY-MM-DD)
    const currentDate = new Date().toISOString().split('T')[0]; // Extracting date portion
    
    // Make a GET request to the backend API endpoint to fetch the user's goal for the current date
    axios.get(`http://localhost:5000/api/goal?date=${currentDate}`)
        .then(response => {
            // Check if the response contains valid data and if the goal is defined in the response
            if (response.data && response.data.goal !== undefined) {
                // Update the component's state with the fetched goal value
                setGoal(response.data.goal);
            }
        })
        .catch(error => {
            // Log any errors that occur during the fetch operation
            console.error('Error fetching user goal:', error);
        });
};


  const handleInputChange = (event) => {
    setInputGoal(event.target.value);
  };
  useEffect(() => {
    if (showTryAgain) {
      setTimeout(() => setShowTryAgain(false), 5000);
    }
  }, [showTryAgain]);


  const handleSetGoal = () => {
    const newGoal = parseInt(inputGoal, 10) || 0;
    if (isNaN(newGoal) || newGoal <= 0) {
      alert('Please enter a valid positive number for your goal.');
      return;
    }
    
    setGoal(newGoal);
    const updatedConsumed = Math.max(0, Math.min(newGoal, goal));
    setConsumed(updatedConsumed);

// Define currentDate within this function if it's needed here
const currentDate = new Date().toISOString().split('T')[0]; // Extracting date portion

    
    // Create an object with the data to be saved
    const data = {
      uid: uid,
      goal: newGoal,
      consumed: updatedConsumed,
      date: currentDate
    };

    // Send a POST request to your backend API to save the data to MongoDB
    axios.post('http://localhost:5000/api/caldata', data)
      .then(response => {
        console.log('Data saved successfully:', response.data);
        alert('Daily goal added successfully ')
        setShowCongrats(true);
        setSparkling(true); // Activate sparkling effect
        setTimeout(() => {
          setShowCongrats(false);
          setSparkling(false); // Deactivate sparkling effect
        }, 5000);
       
      })
      .catch(error => {
        console.error('Error saving data:', error);
        // Handle error
      });
      setTimeout(() => {
        if (consumed < goal) {
          setShowTryAgain(true);
        }
      }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds
    };
  
   

  return (
    <div className='resposiveCon'>
       {showTryAgain && <div className='tryAgain'>You did not achieve your goal within 24 hours. Try again!</div>}
       {showCongrats && (
        <div className='congrats' style={{ color: sparkling ? 'yellow' : 'white' }}>Congratulations! You've completed your daily goal!</div>
      )}
      <div className='contar'>
        <div className='topHed'><span>Calorie Meter</span></div>
            <div className='welcome'>
              <p>Welcome to NutriMate Calorie Meter! Easily manage and optimize your daily Calorie intake for holistic health.</p>
            </div>
            <div className='Wpic'><img src='https://i.ibb.co/PtPwVg5/Free-Vector-Presentation-concept-illustration-removebg-preview.png' alt='pic' id='Wpic'/></div>
            <hr/>
      </div>  
       <div className='mainCal'>
          {/*<img src='https://i.ibb.co/n6czcSX/s7.png' alt='bgPic' id='bgPic'/>*/}
          <div className='setgoalContainer'>
            <div className='circBar'>
                  <CircularProgressBar id='circle' goal={goal} consumed={consumed} onConsumedChange={handleConsumedChange} />
            </div>
            <div className='userIndis'>
                  <h2>Set your Daily goal</h2>
                  <input className='userInput' type="number" value={inputGoal} onChange={handleInputChange} placeholder="Enter here" required />
                  <p>Kcal</p>
                  <button id='setGoalbtn' className='cbtn' onClick={handleSetGoal}>Set Goal</button>
            </div>  
            <div className='inputContr'>
                  <div className='history'>
                    <img src="https://i.ibb.co/8MD2SN7/picx-removebg-preview.png" alt="historyPic" />
                  <button onClick={toggleProducts} id='addBtn' className='hbtn' >Add product</button>
                  <button onClick={scrollToHistory} id='historyBtn' className='hbtn'>View history</button>  
                  <button  onClick={scrollTogetTip} id='tipsBtn' className='hbtn'>Get Tips</button>
                  </div>
            </div>
              <p>c</p>
              <p>u</p>
          </div>           
      </div> 
      <hr/>
      <div id='getTip' className='getTip'>
        {showTipProducts && (
            <div >
              <h1>Weight loss Tips</h1>
               <FetchTips/>
            </div>
        )}
      </div>
      
      <div className='displayProduct' id='displayProduct'>
        {showProducts && (
            <div >
                {/* Display products */}
                <DetailsPage/>
            </div>
        )}
        </div>
      <div className='disHistory'>
        {showHistory &&(
          <div>
            <DataBackend/>
            </div>
        )
          
        }
        
        </div>  
    </div>    
  );
}




