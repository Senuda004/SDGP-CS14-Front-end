import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'; // Import corresponding CSS file
import message from './Assets/msg.png';

const Contact = () => {
  const form= useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_csefvgp', 'template_w1rw65j', form.current, {
        publicKey: 'js1vwk2Nq1lvZFmoV',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };


  return (
    <div>
      <div className="background-cover"></div> {/* Add a div for the background cover */}
      <div className="contact-container">
        <div className="contact-content">
          <div className="message">
          <img className='msg' src={message}alt="message"></img>
          <h2>Get in touch</h2>
          </div>
          {/* Form */}
          <form ref={form} onSubmit={sendEmail} className="contact-form" style={{ textAlign: "left" }}>
            <div className="input-box">
              <input
                type="text"
                placeholder='Name'
                name="user_name"
                className="form-control"
                required
              />
            </div>
        
            <div className="input-box">
              <input
                type="email"
                placeholder='E-mail'
                id="email"
                name="user_email"
                className="form-control"
                required
              />
            </div>
            {/* Message */}
            <div className="input-box">
              <input
                type="text"
                placeholder='Subject'
                id="subject"
                name="subject"
                className="form-control"
                required
              />
            </div>
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
        <h2 className='new-title'>Contact our team</h2>
        <p>Feel free to reach out to us anytime! Whether you have questions or feedback, we're here to help. Our team is dedicated to providing you with the best support possible. Don't hesitate to contact us via email, phone, or by filling out the form. We look forward to hearing from you!</p>
      </div>
    </div>
  );
};

export default Contact;
