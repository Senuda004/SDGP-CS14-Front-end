import React from 'react';
import './Contact.css';
import Contact from './Contact.js'; // Import the Contact component
import Card from './Card.jsx';
import Social from './Social.jsx';
import Map from "./map.js";

function App() {
  return (
    <div className="App">
        <Contact /> {/* Render the Contact component */}
        <Card/>
        <Social></Social>
        <Map></Map>
    
    </div>
  );
}

export default App;
