import React from 'react';
import insta from './Assets/instagram.png';
import fb from './Assets/facebook.png';
import x from './Assets/twitter.png';

function Social() {
  return (
    <>
     <div className='socials'>
      <h3 className='new-title'>Our socials</h3>

      {/* Add any additional content here */}
            </div>
    <div class="wrapper">
        <div class="button">
            <div class="icon">
            <img className="facebook" src ={fb}alt="facebook"></img>
            </div>
            <span>Facebook</span>
        </div>

        <div class="button">
            <div class="icon">
            <img className="Instagram" src ={insta}alt="insta"></img>
            </div>
            <span>Instagram</span>
        </div>

        <div class="button">
            <div class="icon">
            <img className="twitter" src ={x}alt="twitter"></img>
            </div>
            <span>Twitter</span>
        </div>
    </div>
    </>
  );
}

export default Social;
