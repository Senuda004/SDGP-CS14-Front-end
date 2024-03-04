import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';
import Modal from 'react-modal';

const Dashboard = () => {
  const webcamRef = useRef(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [identifiedItem, setIdentifiedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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

            const detectedObject = predictResponse.data.detected_object;

            // Process the response and update the UI accordingly
            console.log('Identified object:', predictResponse.data.detected_object);

            // Update the state with the identified item name
            setIdentifiedItem(detectedObject);

            // Open the modal when an item is identified
            openModal();
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

  const retakePhoto = () => {
    // Clear the captured photo
    setCapturedPhoto(null);
    setIdentifiedItem(null);
  };

  return (
    <div>
      <h1>Dashboard Page</h1>

      {/* Open Modal Button */}
      <button onClick={openModal} className='bg-amber-400 text-white w-1/2 rounded-md p-2 mt-10'>Scan using camera</button>

      {/* Modal for displaying everything */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Identified Item Modal"
        style={{
          content: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100vh',
            height: '70vh',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '50px',
            background: 'white',
            borderRadius: '20px',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        {/* Display captured photo */}
        {capturedPhoto ? (
          <div className=' text-center'>
            <h2 className='font-semibold mb-3 text-center'>Captured Photo</h2>
            <img src={capturedPhoto} alt="Captured" style={{ maxWidth: '100%' }} className='rounded-xl m-auto'/>
            {/* Retake photo button */}
            <button onClick={retakePhoto} className='bg-amber-400 text-white w-32 rounded-md p-2 mb-3 mt-4 font-semibold'>Retake Photo</button>
          </div>
        ) : (
          <>
            <h1 className='font-semibold'>Webcam Feed</h1>
            {/* Webcam feed */}
            <Webcam ref={webcamRef} screenshotFormat="image/jpeg" className='rounded-xl w-2/3 m-auto' />

            {/* Take photo button */}
            <button onClick={takePhoto} className='bg-amber-400 text-white w-32 rounded-md p-2 mb-3 font-semibold'>
              Take Photo
            </button>
          </>
        )}

        {/* Display identified item */}
        {identifiedItem && (
          <div>
            <p>Identified item: {identifiedItem}</p>
          </div>
        )}

        {/* Close button for the modal */}
        <button onClick={closeModal} className='absolute top-2 right-8 bg-amber-400 text-white w-20 rounded-md p-2 mt-10 font-semibold'>Close</button>
      </Modal>

      {/* Display identified item
      {identifiedItem && (
          <div>
            <p>Identified item: {identifiedItem}</p>
          </div>
        )} */}
    </div>
  );
};

export default Dashboard;




