import React, { useRef, useState, useEffect } from 'react'; // Add the missing import statement for useEffect
import Webcam from 'react-webcam';
import axios from 'axios';
import Modal from 'react-modal';
import { nutriScore } from 'nutri-score';
import NutritionForm from './NutritionForm';
import NutriCard from './NutriCard';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Dashboard = () => {
  const webcamRef = useRef(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [identifiedItem, setIdentifiedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [firstPhotoTaken, setFirstPhotoTaken] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
    });
    return () => unsubscribe();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [foodData, setFoodData] = useState([]);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    // Replace 'http://localhost:5000/api/fooddata' with the correct URL
    const apiUrl = 'http://localhost:5000/api/fooddata';

    // Fetch data from your backend API endpoint
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        console.log('API Response:', response.data);
        setFoodData(response.data);
      } catch (error) {
        console.error('Error fetching food data:', error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchData();
  }, []);

  const takePhoto = async () => {
    if (webcamRef.current) {
      // Capture a photo using the Webcam component
      const photoDataUrl = webcamRef.current.getScreenshot();
  
      // Display the captured photo
      setCapturedPhoto(photoDataUrl);
  
      // Send the captured photo to the Python backend for saving
      try {
        const saveResponse = await axios.post('http://127.0.0.1:8000/save_photo', {
          image: photoDataUrl.split(',')[1],  // Extract base64 data excluding "data:image/jpeg;base64,"
        });
  
        if (saveResponse.data.success) {
          console.log('Photo saved successfully:', saveResponse.data.file_path);
  
          // Send the saved photo to the Python backend for prediction
          try {
            const predictResponse = await axios.post('http://127.0.0.1:8000/predict', {
              image_path: saveResponse.data.file_path,
            });
  
            const detectedObject = predictResponse.data.detected_object;
  
            // Process the response and update the UI accordingly
            console.log('Identified object:', detectedObject);

          
            // Update the state with the identified item name
            setIdentifiedItem(detectedObject);

            //After successfull identified object we store value in database
             // Store the identified item in the database
          try {
            const saveScannedItemResponse = await axios.post('http://localhost:5000/api/saveScannedItem', {
              uid: user.uid, // Assuming user.uid is the UID of the current user
              scannedItem: detectedObject,
            });
            console.log('Scanned item saved:', saveScannedItemResponse.data);
          } catch (saveScannedItemError) {
            console.error('Error saving scanned item:', saveScannedItemError);
          }



  
            // Update first photo taken state
            setFirstPhotoTaken(true);
  
            // Open the modal when an item is identified
            openModal();
          } catch (predictError) {
            console.error('Error predicting with saved image:', predictError);

            // Update first photo taken state
            setFirstPhotoTaken(true);
  
            // If prediction fails, set identifiedItem to null
            setIdentifiedItem(null);
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

    // Set first photo taken back to false
    setFirstPhotoTaken(false);
  };

   // State to store reecenet scanned item TO GET NUTRITIONAL GRADE OF scanned item from camera
   const [recentScannedItem, setRecentScannedItem] = useState(null);

  //  Destricturing values in recent scanned item
   const {
    energy,
    saturated_fat,
    sugar,
    fibers,
    proteins,
    sodium,
    veg_fruit
    } = recentScannedItem;

   const[scannedItemData , setRecentScannedItemData] = useState({});
    

  const fetchRecentScannedItem = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/foodInformation/${user.uid}`);
      console.log('Recent Scanned Item:', response.data);
      setRecentScannedItem(response.data);
    } catch (error) {
      console.error('Error fetching recent scanned item:', error);
    }
  };
  
  useEffect(() => {
    if (user) {
      fetchRecentScannedItem();
    }
  }, [user]);

  console.log("scanned item: " + {recentScannedItem} );

  


  ///////////////// Nutritional Information section Logic/////////////////////////////
   

  const [FoodInfo,SetFoodInfo] = useState({});
  //managing current state of nutri grade
  const [grade,setGrade] = useState("");
  //Managing state for current score
  const [score,setScore] = useState(0);
  

    // Adding the user food data values to our food data array
    function addUserFoodData(userFoodData){
      console.log(userFoodData);
      
      SetFoodInfo( (prevValues)=>{
          return{...prevValues ,userFoodData }
      });

      const grade = calculateNutriGrade(userFoodData);
      const score = calculateNutriScore(userFoodData);

      setGrade(grade);
      // Gives error as type required is number
      setScore(score);
      
  }
  
    // Function to get the nutritional  Grade of the user inputed values
    function calculateNutriGrade(values){
      const nutriGrade = nutriScore.calculateClass(values);
      // console.log("The final grade is : " + nutriGrade);  
      return nutriGrade;     
     
  }

  // Function to get the Nutritional Score of the user inputed values
  function calculateNutriScore(values){
      const nutritionalScore = nutriScore.calculate(values)
      console.log("The grade is :" + nutritionalScore);
      return nutritionalScore;    
  }

  function NutritionalGradeImage(grade){
    switch (grade){
        case "A":
            return  "./Grade A.svg"
            break;

        case "B":
            return  "./Grade B.svg"
            break;

        case "C":
            return  "./Grade C.svg"
            break;   
            
        case "D":
            return  "./Grade D.svg"
            break; 

        case "E":
            return  "./Grade E.svg"
            break; 

        default:
            return "./Main.svg"
    }
    

}


   




  

  return (
    <div>
      <div className='flex justify-between'>
        <h1>Dashboard Page</h1>
        {user && user.photoURL && (
        <img
          src={user.photoURL}
          alt="Photo"
          style={{ width: '60px', height: '60px', borderRadius: '50%', marginLeft: '10px' }}
        />
        )}
      </div>
     

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
            height: '75vh',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '50px',
            background: 'white',
            borderRadius: '20px',
            border: `3px solid ${firstPhotoTaken && identifiedItem ? 'green' : 'red'}`, // Border color based on identification
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
            {/* Proceed photo button */}
            <button onClick={closeModal} className='bg-amber-400 text-white w-32 rounded-md p-2 mb-3 mt-4 ml-5 font-semibold'>Proceed</button>
          </div>
        ) : (
          <>
            <h1 className='font-semibold'>Webcam Feed</h1>
            {/* Webcam feed */}
            <Webcam ref={webcamRef} screenshotFormat="image/jpeg" className='rounded-xl w-2/3 m-auto ' />

            {/* Take photo button */}
            <button onClick={takePhoto} className='bg-amber-400 text-white w-32 rounded-md p-2 mb-3 font-semibold'>
              Take Photo
            </button>
          </>
        )}

        {/* Display identified item */}
        {firstPhotoTaken && (
          <div>
            {identifiedItem !== null ? (
              <p>Identified item: {identifiedItem}</p>
            ) : (
              <p>Object Not Identified. Please retake!</p>
            )}
          </div>
        )}

        {/* Close button for the modal */}
        <button onClick={closeModal} className='absolute top-2 right-8 bg-amber-400 text-white w-20 rounded-md p-2 mt-10 font-semibold'>Close</button>
      </Modal>

      {/* Display identified item */}
      {firstPhotoTaken && (
        <div>
          {identifiedItem ? (
            <p>Identified item: {identifiedItem}</p>
          ) : (
            <p>Object Not Identified. Please retake!</p>
          )}
        </div>
      )}

      {/* Display fetched food data or loading message */}
      {/* {loading ? (
        <p>Loading...</p>
      ) : ( */}
        {/* <div>
          <h2>Food Data:</h2>
          <ul>
            {foodData.map((foodItem) => (
              <li key={foodItem._id}>
                <p>Product Name: {foodItem['Name']}</p>
                <p>Brand: {foodItem.Brand}</p>
                {/* Add other fields as needed */}
              {/* </li>
            ))}
          </ul>
   
        </div> */}
      {/* )} */} 

      {/*  Displaying  NutriScore front end  */}

      <div>
      <NutritionForm
            onAdd = {addUserFoodData}
            />
       <NutriCard 
                image = {NutritionalGradeImage(grade)}
                score = {score}
           
            
            />

           


      </div>

    </div>
  );
};

export default Dashboard;




