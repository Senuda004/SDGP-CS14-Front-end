import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DataBackend() {
  const [data, setData] = useState(null); // State to store the fetched data

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    axios.get('http://localhost:5000/api/caloriemeter')
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

  return (
    <div>
      {/* Display the fetched data */}
      {data && (
        <div>
          <h2>Data Fetched Successfully:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

