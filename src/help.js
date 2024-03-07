import './help.css'; // Import corresponding CSS file
import React from 'react';
import bgImage from './Assets/bg.svg'; // Import background image
import callCenterImage from './Assets/call-center.png'; // Import additional picture
import contact from './Assets/contact.svg';
import faq from './Assets/faq.svg';
import privacy from './Assets/privacy.svg';
import terms from './Assets/terms.svg';
import chat from './Assets/chatbot.svg';
import blog from './Assets/blog.svg';

const Help = () => {
  return (
    <div>
      <div className="background-cover">
        <img src={bgImage} alt="Call Center" />
      </div>
      {/* Dynamically add the additional picture */}
      <div className="additional-pic">
        <img src={callCenterImage} alt="Call Center" />
      </div>

      <div className='additional'>
        <h1 className='new-title'>Help Center</h1>
        <div className="intro">
          <p>Welcome to our Help and Support! For more information, check out our Terms and Conditions and Privacy Policy. Have a question? 
            Visit our Q&A section or reach out to us directly. We're here to assist you!</p>
        </div>


          <a href="mailto:nutrimate@gmail.com" className="btn">nutrimate@gmail.com</a>
       
        <div className='sub-heading'>
        <h2>Hi, how can we help?</h2>
        </div>
        <div className="card-row">
          <div className="card" onClick={() => window.location.href="/contact"}>
          <div className="card-title">
          <img className='icon' src={contact} alt="contact us"></img>
            <h4>Contact Us</h4>
            </div>
            <p>Get in touch with us for assistance or inquiries.</p>
          </div>

          <div className="card" onClick={() => window.location.href="/terms"}>
          <div className="card-title">
            <img className='icon'src={terms}alt="Terms and conditions"></img>
            <h4>Terms and Conditions</h4>
            </div>
            <p>Read our terms and conditions for using our services.</p>
          </div>

           <div className="card" onClick={() => window.location.href="/contact"}>
          <div className="card-title">
          <img className='icon' src={chat} alt="contact us"></img>
            <h4>Ai-chatbot</h4>
            </div>
            <p>Gain the knowledge about food ingredients</p>
          </div>
        </div>

        <div className="card-row">
          <div className="card" onClick={() => window.location.href="/privacy-policy"}>
          <div className="card-title">
            <img className='icon' src={privacy} alt="privacy"></img>
            <h4>Privacy and Policy</h4>
            </div>
            <p>Learn about our privacy and policy practices.</p>
          </div>

          <div className="card" onClick={() => window.location.href="/contact"}>
          <div className="card-title">
          <img className='icon' src={blog} alt="contact us"></img>
            <h4>Blog page</h4>
            </div>
            <p> Dive into informative guides, and inspiring narratives on our blog page. </p>
          </div>
                  
          <div className="card" onClick={() => window.location.href="/q-and-a"}>
          <div className="card-title">
          <img className='icon' src={faq} alt="Q&A"></img>
            <h4>Q&A</h4>
            </div>
            <p>Find answers to common questions in our Q&A section.</p>
          </div>
        </div>
      </div>
      <div className='submit-form'>
        <h3>Couldn't find what you're looking for?</h3>

        <a  className="submit" onClick={() => window.location.href="./contact"}>Submit a form</a>
      </div>
    </div>
  );
};

export default Help;
