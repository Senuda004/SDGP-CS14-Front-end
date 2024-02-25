import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './circBar.css';


export default function CircBar() {
  return (
    <div>
     
      <div className='acocordion' id='bordRa'>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
        <Accordion.Header className='custom-header'>Personalized Calorie Goals<div><button className='btn' id="cusmMargin"><span>Set your goal</span></button></div></Accordion.Header>
          <Accordion.Body className='custom-body'>
          <p>Customize your daily calorie goals to align precisely with your individual health and fitness aspirations. Whether you're 
            aiming for weight management, improved energy levels,or specific fitness milestones, NutriMate's calorie meter empowers you 
            to set objectives that cater to your unique well-being journey.</p>
            
            
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className='custom-header'>Instant Nutrition Insights <div><button className='btn' id="cusmMargin1"><span>Scan product</span></button></div></Accordion.Header>
          <Accordion.Body>
          <p>Simply scan packaged food product with NutriMate's scanner and get the complete lowdown on nutrition, including exact calorie counts from calorie mete.
             It's an easy way to understand what you're eating and make healthier choices.</p>
          
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header className='custom-header'>Real-Time Tracking <div><button className='btn' id="cusmMargin2"><span>Track progress</span></button></div></Accordion.Header>
          <Accordion.Body>
          <p>Watch your progress in real-time as the calorie meter deducts consumed calories, keeping you on track throughout the day.</p>
          
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header className='custom-header'>Smart Suggestions <div><button className='btn'id="cusmMargin2"><span>Get tips</span></button></div></Accordion.Header>
          <Accordion.Body>
          <p>Receive some general tips on burning calories and staying active, integrated seamlessly into your daily routine.</p>
          
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </div>
    </div>  

  )
}
