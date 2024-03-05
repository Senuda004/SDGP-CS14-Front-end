import './help.css'; // Import corresponding CSS file
import React from 'react';

const Help = () => {
  return (
    <div>
      <div className="background-cover"></div> {/* Add a div for the background cover */}

      <div className='additional'>
        <h1 className='new-title'>Help and support</h1>
        <h2>How can we help?</h2>
        <div class="intro">
          <p>Welcome to our Help and Support page! For more information, check out our Terms and Conditions and Privacy Policy. Have a question? 
            Visit our Q&A section or reach out to us directly. We're here to assist you!</p>
        </div>
        <div className="chat-bot">
        <a href="#" class="btn">Ai-chatbot</a>
        </div>
        <div className="card-row">
          <div className="card" onClick={() => window.location.href="/contact"}>
            <h4>Contact Us</h4>
            <p>Get in touch with us for assistance or inquiries.</p>
          </div>
          <div className="card" onClick={() => window.location.href="/terms"}>
            <h4>Terms and Conditions</h4>
            <p>Read our terms and conditions for using our services.</p>
          </div>
        </div>
        <div className="card-row">
          <div className="card" onClick={() => window.location.href="/privacy-policy"}>
            <h4>Privacy and Policy</h4>
            <p>Learn about our privacy and policy practices.</p>
          </div>
          <div className="card" onClick={() => window.location.href="/q-and-a"}>
            <h4>Q&A</h4>
            <p>Find answers to common questions in our Q&A section.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
