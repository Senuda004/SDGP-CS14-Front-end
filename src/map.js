import { Divide } from "lucide-react";
import "./Contact.css";

function Map(){
    return(
        <>
        <div class="map-title">
            <h2>Where to find us</h2>

        </div>
        <div className="map">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2095.312027028936!2d79.84436734597884!3d6.932550686202823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259245655bb85%3A0xa9d5eca7ccaba96e!2sWTC%20East%20Tower%2C%20Bank%20of%20Ceylon%20Mawatha%2C%20Colombo%2000100!5e0!3m2!1sen!2slk!4v1709102011534!5m2!1sen!2slk" 
            width="600" 
            height="450" 
            style={{border:"0"}}
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">

</iframe>
</div>
</>
    )
}

export default Map;