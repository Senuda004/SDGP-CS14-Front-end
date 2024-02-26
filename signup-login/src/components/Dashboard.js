import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const Dashboard = () => {
  const webcamRef = useRef(null);
  const [photoUrl, setPhotoUrl] = useState(null);

  const startWebcam = () => {
    // Access webcam by calling the startCapture method
    if (webcamRef.current) {
      webcamRef.current.startCapture();
    }
  };

  const takePhoto = () => {
    // Capture a photo using the Webcam component
    if (webcamRef.current) {
      const photoDataUrl = webcamRef.current.getScreenshot();
      setPhotoUrl(photoDataUrl);
    }
  };

  return (
    <div>
      <h1>Dashboard Page</h1>
      
      {/* Start webcam button */}
      <button onClick={startWebcam}>Start Webcam</button>

      {/* Webcam feed */}
      <Webcam ref={webcamRef} />

      {/* Take photo button */}
      <button onClick={takePhoto} className='border-2 border-amber-400'>Take Photo</button>

      {/* Display captured photo */}
      {photoUrl && (
        <div>
          <h2>Captured Photo</h2>
          <img src={photoUrl} alt="Captured" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
