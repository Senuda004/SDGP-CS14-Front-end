import React,{useEffect} from 'react';
import insta from './Assets/instagram.png';
import fb from './Assets/facebook.png';
import x from './Assets/twitter.png';

function Social() {
  useEffect(() => {
    function revealOnScroll() {
      const elements = document.querySelectorAll('.socials, .chat, .middle');
      elements.forEach((element) => {
        const bounding = element.getBoundingClientRect();
        const threshold = window.innerHeight * 0.8; // Adjust threshold as needed (e.g., 80% of the viewport height)
        if (bounding.top < threshold) {
          element.classList.add('reveal');
        } else {
          element.classList.remove('reveal');
        }
      });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Call the function initially to reveal elements on mount

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);
  return (
    <>
    <section>
      <div className='socials'>
      <h3 className='new-title'>Our socials</h3>

      {/* Add any additional content here */}
            </div>
    <div class="wrapper">
        <div class="button">
            <div class="icon">
            <img className="facebook" src ={fb}alt="facebook"></img>
            </div>
           
        </div>

        <div class="button">
            <div class="icon">
            <img className="Instagram" src ={insta}alt="insta"></img>
            </div>
           
        </div>

        <div class="button">
            <div class="icon">
            <img className="twitter" src ={x}alt="twitter"></img>
            </div>
        </div>
    </div>
    </section>
    <section>

    <div class='chat'>
      <h3 className='new-title'>Looking for a chat?</h3>
      <p>Engage with our AI-powered chatbot for quick assistance and answers to your queries.     
      </p>
      </div>
      <div className="middle">
        <a href="#" class="btn">Ai-chatbot</a>
        </div>
        </section>
    </>
  );
}

export default Social;
