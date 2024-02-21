import React from 'react';
import './Contact.css';
import Contact from './Contact.js'; // Import the Contact component
import Card from './Card.jsx';
import Social from './Social.jsx';

function App() {
  return (
    <div className="App">
        <Contact /> {/* Render the Contact component */}
        <Card/>
        <Social></Social>
    
    </div>
  );
}

export default App;
