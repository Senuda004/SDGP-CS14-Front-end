import React from 'react';
import './Contact.css'; // Import corresponding CSS file

const Contact = () => {
  return (
    <div>
      <div className="upper-background">
        {/* Overlay content */}
        <div className="overlay-content">
          <h1 className="contact-us-heading">Contact us</h1>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-content">
          {/* Rest of your content */}
          <h2>Send us a message</h2>
          {/* Form */}
          <form className="contact-form" style={{ textAlign: "left" }}>
          
          
              <div className="input-box">
                
                <input
                  type="text"
                  placeholder='Name'
                  id="firstName"
                  name="firstName"
                  className="form-control"
                  required
                />
              </div>
           
            {/* Second row: Email and Phone Number */}
          
              <div className="input-box">

                <input
                  type="email"
                  placeholder='E-mail'
                  id="email"
                  name="email"
                  className="form-control"
                  required
                />
            
              
            </div>
            {/* Message */}
            <div className="input-box">

              <textarea
                id="message"
                placeholder='Message'
                name="message"
                className="form-control"
                rows="6"
                required
              ></textarea>
            </div>
            {/* Submit button */}
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>

      <div className='additional'>
      <h2 className='new-title'>Get In Touch</h2>
      <p>Feel free to reach out to us anytime! Whether you have questions or feedback, we're here to help. Our team is dedicated to providing you with the best support possible. Don't hesitate to contact us via email, phone, or by filling out the form next to this. We look forward to hearing from you!
        
      </p>
      {/* Add any additional content here */}
            </div>
    </div>
  );
};

export default Contact;
