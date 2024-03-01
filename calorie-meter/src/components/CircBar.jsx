import React from 'react';
import './circBar.css';
import CircularProgressBar from './CircularBarProgress';
import NutriDetail from './NutriDetail';


export default function CircBar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
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
        <CircularProgressBar/>
        
        
      </div>
      <div id='trackInt' className='trackInt'>
        Track your daily intake
        <NutriDetail/>
        
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
