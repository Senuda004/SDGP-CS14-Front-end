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
            {/* First row: First Name and Last Name */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="form-control"
                  required
                />
              </div>
            </div>
            {/* Second row: Email and Phone Number */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  required
                />
              </div>
            </div>
            {/* Message */}
            <div className="form-group">
              <label htmlFor="message">How can we help you?:</label>
              <textarea
                id="message"
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
    </div>
  );
};

export default Contact;
