import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './backend.css';

export default function DataBackend() {
 const [data, setData] = useState(null); // State to store the fetched data
 const [selectedDate, setSelectedDate] = useState(''); // State to store the selected date

 useEffect(() => {
    // Fetch data from the backend when the component mounts
    axios.get('http://localhost:5000/api/caldata')
      .then(response => {
        if (response.status === 200) {
          console.log('Data fetched successfully:', response.data);
          // Update state with the fetched data
          setData(response.data);
        } else {
          console.error('Unexpected status code:', response.status);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
 }, []); // Empty dependency array ensures this effect runs only once after initial render

// Filter data based on the selected date
const filteredData = data ? data.filter(item => {
  // Check if item.date is a valid date string
  const date = new Date(item.date);
  if (isNaN(date.getTime())) {
      console.error('Invalid date:', item.date);
      return false; // Skip this item if the date is invalid
  }

  // Extract the date part from the MongoDB date string
  const dbDate = date.toISOString().split('T')[0];
  console.log('Comparing:', selectedDate, 'with', dbDate); // Debugging statement
  return dbDate === selectedDate;
}) : [];

 // Handler for date input change
 const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
 };

 // Function to format the date and time
 const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return date.toLocaleDateString('en-US', options);
 };

 // Function to delete data item by ID
 const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/caldata/${id}`)
      .then(response => {
        if (response.status === 200) {
          console.log('Data deleted successfully');
          // Refetch data after deletion
          axios.get('http://localhost:5000/api/caldata')
            .then(response => {
              if (response.status === 200) {
                setData(response.data);
              } else {
                console.error('Unexpected status code:', response.status);
              }
            })
            .catch(error => {
              console.error('Error fetching data after deletion:', error);
            });
        } else {
          console.error('Unexpected status code:', response.status);
        }
      })
      .catch(error => {
        console.error('Error deleting data:', error);
      });
 };

 return (
    <div className='hisDiv'>
      <p>Filter History</p>
      
      {/* Display date input field */}
      <label htmlFor="dateInput" className='header'>Select a Date:</label>
      <input type="date" id="dateInput" value={selectedDate} onChange={handleDateChange} />

      {/* Display the fetched data */}
      {filteredData.length > 0 && (
        <div>
          <h2>Data Fetched Successfully:</h2>
          {filteredData.map((item, index) => (
            <div key={index}>
              <p>
                <strong>Date and Time:</strong> {formatDateTime(item.date)}
              </p>
              <p>
                <strong>Goal:</strong> {item.goal}
              </p>
              <button onClick={() => handleDelete(item._id)}>Delete</button>
            </div>
          ))}
        </div>
      )}

      {/* Display a message if no data found for selected date */}
      {filteredData.length === 0 && selectedDate && (
        <h1>No data found for the selected date.</h1>
      )}
    </div>
 );
}
