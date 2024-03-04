import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';

const Dashboard = () => {
  const webcamRef = useRef(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);

  const takePhoto = async () => {
    if (webcamRef.current) {
      // Capture a photo using the Webcam component
      const photoDataUrl = webcamRef.current.getScreenshot();

      // Display the captured photo
      setCapturedPhoto(photoDataUrl);

      // Send the captured photo to the Python backend for saving
      try {
        const saveResponse = await axios.post('http://127.0.0.1:5000/save_photo', {
          image: photoDataUrl.split(',')[1],  // Extract base64 data excluding "data:image/jpeg;base64,"
        });

        if (saveResponse.data.success) {
          console.log('Photo saved successfully:', saveResponse.data.file_path);

          // Send the saved photo to the Python backend for prediction
          try {
            const predictResponse = await axios.post('http://127.0.0.1:5000/predict', {
              image_path: saveResponse.data.file_path,
            });

            // Process the response and update the UI accordingly
            console.log('Identified object:', predictResponse.data.detected_object);
          } catch (predictError) {
            console.error('Error predicting with saved image:', predictError);
          }
        } else {
          console.error('Error saving photo:', saveResponse.data.error);
        }
      } catch (error) {
        console.error('Error sending image to Python backend:', error);
      }
    }
  };

  return (
    <div>
      <h1>Dashboard Page</h1>

      {/* Webcam feed */}
      <Webcam ref={webcamRef} screenshotFormat="image/jpeg" />

      {/* Take photo button */}
      <button onClick={takePhoto} className='border-2 border-amber-400'>Take Photo</button>

      {/* Display captured photo */}
      {capturedPhoto && (
        <div>
          <h2>Captured Photo</h2>
          <img src={capturedPhoto} alt="Captured" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;




