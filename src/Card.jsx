import email from './Assets/email.png';
import phone from './Assets/phone.png';
import address from './Assets/address.png';

function Card(){
    return(
        <div className="contact-cards">
              <div className="contact-info">
                <img className="email-card" src ={email}alt="email"></img>
                <h2 className='title'>Email</h2>
                <p className='text'>nutrimate@gmail.com</p>
                </div>

                <div className="contact-info">
                <img className="phone-card" src ={phone}alt="phone"></img>
                <h2 className='title'>Phone</h2>
                <p className='text'>+9476 321 4072</p>
                </div>

                <div className="contact-info">
                <img className="address-card" src ={address}alt="address"></img>
                <h2 className='title'>Address</h2>
                <p className='text'>124/4,Main Street , Colombo, Srilanka</p>
                </div>

        </div>
    );

}

export default Card