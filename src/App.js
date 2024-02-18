import React from 'react';
import './Contact.css';
import Contact from './Contact.js'; // Import the Contact component
import Card from './Card.jsx';

function App() {
  return (
    <div className="App">
        <Contact /> {/* Render the Contact component */}
        <Card/>
    
    </div>
  );
}

export default App;
