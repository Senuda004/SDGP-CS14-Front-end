import React, { useRef, useState, useEffect } from 'react'; // Add the missing import statement for useEffect
import Webcam from 'react-webcam';
import axios from 'axios';
import Modal from 'react-modal';
import { nutriScore } from 'nutri-score';
import NutritionForm from './NutritionForm';
import NutriCard from './NutriCard';
import NutriCard2 from './NutriCard2';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';
// import BarcodeScannerComponent from 'react-webcam-barcode-scanner';
import Barcode from 'react-barcode';

import { useZxing } from 'react-zxing';

const Dashboard = () => {
  const webcamRef = useRef(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [identifiedItem, setIdentifiedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [firstPhotoTaken, setFirstPhotoTaken] = useState(false);
  const [user, setUser] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);



  // State to store reecenet scanned item TO GET NUTRITIONAL GRADE OF scanned item from camera
  const [recentScannedItem, setRecentScannedItem] = useState(null);
  const[scannedItemData , setRecentScannedItemData] = useState({});

  //State to store Ai recommnedation 
  const[NutriRecommendation , setNutriRecommendation] = useState();

  // State for the new modal
  const [isNutritionModalOpen, setIsNutritionModalOpen] = useState(false);

  // Function to open the new modal
  const openNutritionModal = () => setIsNutritionModalOpen(true);

  // Function to close the new modal
  const closeNutritionModal = () => setIsNutritionModalOpen(false);



  const [isPopupOpen, setPopupOpen] = useState(false);
  
  // Function to toggle the popup
  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };


  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user && user.photoURL) {
      // If user and user.photoURL exist, set the photoURL state
      setPhotoURL(user.photoURL);;
    }
  }, [user]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  //Implememntation of barcode sCAN
  const [foodData, setFoodData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productInfo, setProductInfo] = useState(null);

  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  
  // Function to open the new modal
  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  // Function to close the new modal
  const closeVideoModal = () => setIsVideoModalOpen(false);

  const [result, setResult] = useState("");

  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
  });

  const fetchBarcodeInfo = async (barcode) => {
    try {
      const apiUrl = `https://world.openfoodfacts.org/api/v2/product/${barcode}?fields=product_name,nutriscore_data,nutriments,nutrition_grades`;
      const response = await axios.get(apiUrl);
      console.log(response.data);
     
      const { product_name } = response.data.product;
      console.log("qr product " + 
      product_name
       );
       setIdentifiedItem(product_name);

       const { nutriments } = response.data.product;
    
  
        // get the recent score of the user and grade 
    const recentGrade = calculateNutriGrade({
      energy:  nutriments['energy-kj_serving'],
      fibers: nutriments.fiber_serving,
      fruit_percentage: nutriments["fruits-vegetables-legumes-estimate-from-ingredients_serving"],
      proteins: nutriments.proteins_serving ,
      saturated_fats:nutriments["saturated-fat_serving"],
      sodium:(nutriments.sodium_serving) * 1000,
      sugar:  nutriments.sugars_serving

    })



    const recentScore = calculateNutriScore({
      energy:  nutriments['energy-kj_serving'],
      fibers: nutriments.fiber_serving,
      fruit_percentage: nutriments["fruits-vegetables-legumes-estimate-from-ingredients_serving"],
      proteins: nutriments.proteins_serving ,
      saturated_fats:nutriments["saturated-fat_serving"],
      sodium:(nutriments.sodium_serving) * 1000,
      sugar:  nutriments.sugars_serving
    })

    setGrade(recentGrade);
    // Gives error as type required is number
    setScore(recentScore);

    const nutritionalContent = " , for your information  The nutritional content of " + product_name + "is " +
    " per serving energy in kj : " + nutriments['energy-kj_serving'] + " ,fibers in g: " + nutriments.fiber_serving + " ,fruit vegetable estimate " + nutriments["fruits-vegetables-legumes-estimate-from-ingredients_serving"]
    + " , proteins in g " + nutriments.proteins_serving  + " ,fats in g: " + nutriments["saturated-fat_serving"] + " ,sodium in mg: " + (nutriments.sodium_serving) * 1000 + 
    " ,sugars in g: " +  nutriments.sugars_serving

    console.log(nutritionalContent);
    
    
    

        // Save it to the database
      try {
        const saveScannedItemResponse = await axios.post('https://sdgp-cs14-back-end.onrender.com/api/saveScannedItem', {
          uid: user.uid, // Assuming user.uid is the UID of the current user
          scannedItem: product_name + nutritionalContent,
        });
        console.log('Scanned item saved:', saveScannedItemResponse.data);
        
        // Update Recommnedation from barcode in dataabse
        
        const updateRatingResponse = await axios.get(`https://sdgp-cs14-back-end.onrender.com/api/updateRatingAndGenerateRecommendation/${user.uid}`);
        console.log('Rating updated:', updateRatingResponse.data);

        setRecentScannedItem(product_name);
    

        const barcodeRating = updateRatingResponse.data.recommendation

      
        // setNutriRecommendation(recommendation);
          //Set the currentrecomnedation
    
          console.log("as of now rating " + barcodeRating)
          setNutriRecommendation(barcodeRating);
  
          

      } catch (saveScannedItemError) {
        console.error('Error saving scanned item:', saveScannedItemError);
      }

     

      


     


      
      
      // const {
      //   energy,
      //   saturated_fat,
      //   sugar,
      //   fiber,
      //   proteins,
      //   sodium,
      //   'fruits-vegetables-legumes-estimate-from-ingredients_100g': veg_fruit
      // } = nutriments;


      return response.data;

      
  
    } catch (error) {
      console.error('Error fetching product information:', error);
      return null;
    }


  };

  useEffect(() => {
    if (result) {
      fetchBarcodeInfo(result).then((data) => {
        setProductInfo(data);
      });
    }

    
  }, [result]);
  




  useEffect(() => {
    // Replace 'http://localhost:5000/api/fooddata' with the correct URL
    const apiUrl = 'https://sdgp-cs14-back-end.onrender.com/api/fooddata';

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

  // // Implementation of QR/Barcode Scaner
  // const [data, setData] = useState("Capture : ...");
  // const [show, setShow] = useState(false);

  // const onUpdateScreen = (err, result) => {
  //   if (result) {
  //     setData(result.text);
  //     setShow(false);
  //   } else {
  //     setData("Not Found");
  //   }
  // };





  const takePhoto = async () => {
    if (webcamRef.current) {
      // Capture a photo using the Webcam component
      const photoDataUrl = webcamRef.current.getScreenshot();
  
      // Display the captured photo
      setCapturedPhoto(photoDataUrl);
  
      // Send the captured photo to the Python backend for saving
      try {
        const saveResponse = await axios.post('https://pug-inspired-humpback.ngrok-free.app/save_photo', {
          image: photoDataUrl.split(',')[1],  // Extract base64 data excluding "data:image/jpeg;base64,"
        });
  
        if (saveResponse.data.success) {
          console.log('Photo saved successfully:', saveResponse.data.file_path);
  
          // Send the saved photo to the Python backend for prediction
          try {
            const predictResponse = await axios.post('https://pug-inspired-humpback.ngrok-free.app/predict', {
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
            const saveScannedItemResponse = await axios.post('https://sdgp-cs14-back-end.onrender.com/api/saveScannedItem', {
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

//   const fetchRecentScannedItem = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/foodInformation/${user.uid}`);
//       console.log('Recent Scanned Item:', response.data);
//       setRecentScannedItem(response.data);


//         //  Destricturing values in recent scanned item
   
//    if (response.data !== null){
   
//         const {
//     energy,
//     saturated_fat,
//     sugar,
//     fibers,
//     proteins,
//     sodium,
//     veg_fruit
//     } = response.data;

//     console.log("proteins " + proteins);

//     // get the recent score of the user
//     const recentGrade = calculateNutriGrade({
//       energy: energy,
//       fibers: fibers,
//       fruit_percentage: veg_fruit,
//       proteins: proteins,
//       saturated_fats:saturated_fat,
//       sodium:sodium,
//       sugar:  sugar

//     })

//     const recentScore = calculateNutriScore({
//       energy: energy,
//       fibers: fibers,
//       fruit_percentage: veg_fruit,
//       proteins: proteins,
//       saturated_fats:saturated_fat,
//       sodium:sodium,
//       sugar:  sugar

//     })




   
//   // Setting the scanned item in the format to be sent to the nutrition library class
//   //  setRecentScannedItemData({
//   //   energy: energy,
//   //   fibers: fibers,
//   //   fruit_percentage: veg_fruit,
//   //   proteins: proteins,
//   //   saturated_fats:saturated_fat,
//   //   sodium:sodium,
//   //   sugar:  sugar
//   // });
  
//   // // const recentGrade = calculateNutriGrade(scannedItemData);
//   // const recenetScore = calculateNutriScore(scannedItemData);
//   setGrade(recentGrade);
//   // Gives error as type required is number
//   setScore(recentScore);
// }
  



//     } catch (error) {
//       console.error('Error fetching recent scanned item:', error);
//     }


//   };
  
  useEffect(() => {
    if (user) {
      fetchRecentScannedItem();
    }
  }, [user]);

  

 

  // //  Destricturing values in recent scanned item
  //  const {
  //   energy,
  //   saturated_fat,
  //   sugar,
  //   fibers,
  //   proteins,
  //   sodium,
  //   veg_fruit
  //   } = recentScannedItem;

   
  // // Setting the scanned item in the format to be sent to the nutrition library class
  //  setRecentScannedItemData({
  //   energy: energy,
  //   fibers: fibers,
  //   fruit_percentage: veg_fruit,
  //   proteins: proteins,
  //   saturated_fats:saturated_fat,
  //   sodium:sodium,
  //   sugar:  sugar
  // });
  
  // calculateNutriGrade(scannedItemData);
  // calculateNutriScore(scannedItemData)


  // console.log("scanned item: " + {recentScannedItem} );

  const fetchRecentScannedItem = async () => {
    try {
      const response = await axios.get(`https://sdgp-cs14-back-end.onrender.com/api/foodInformation/${user.uid}`);
      //Destructure recommnedation along with scanned Item
      const { foodInformation, recommendation } = response.data;

      console.log('Recent Scanned Item:', foodInformation);
      console.log(recommendation);
      setRecentScannedItem(foodInformation);
      setNutriRecommendation(recommendation);

    
        //  Destricturing values in recent scanned item
   
   if (foodInformation!== null){
   
        const {
    energy,
    saturated_fat,
    sugar,
    fibers,
    proteins,
    sodium,
    veg_fruit
    } = foodInformation;

    console.log("proteins " + proteins);

    // get the recent score of the user
    const recentGrade = calculateNutriGrade({
      energy: energy,
      fibers: fibers,
      fruit_percentage: veg_fruit,
      proteins: proteins,
      saturated_fats:saturated_fat,
      sodium:sodium,
      sugar:  sugar

    })

    const recentScore = calculateNutriScore({
      energy: energy,
      fibers: fibers,
      fruit_percentage: veg_fruit,
      proteins: proteins,
      saturated_fats:saturated_fat,
      sodium:sodium,
      sugar:  sugar

    })




   
  // Setting the scanned item in the format to be sent to the nutrition library class
  //  setRecentScannedItemData({
  //   energy: energy,
  //   fibers: fibers,
  //   fruit_percentage: veg_fruit,
  //   proteins: proteins,
  //   saturated_fats:saturated_fat,
  //   sodium:sodium,
  //   sugar:  sugar
  // });
  
  // // const recentGrade = calculateNutriGrade(scannedItemData);
  // const recenetScore = calculateNutriScore(scannedItemData);
  setGrade(recentGrade);
  // Gives error as type required is number
  setScore(recentScore);
}
  



    } catch (error) {
      console.error('Error fetching recent scanned item:', error);
    }


  };
  
  useEffect(() => {
    if (user) {
      fetchRecentScannedItem();
    }
  }, [user]);


  console.log("the current recommendation is " + NutriRecommendation);



  

 

  // //  Destricturing values in recent scanned item
  //  const {
  //   energy,
  //   saturated_fat,
  //   sugar,
  //   fibers,
  //   proteins,
  //   sodium,
  //   veg_fruit
  //   } = recentScannedItem;

   
  // // Setting the scanned item in the format to be sent to the nutrition library class
  //  setRecentScannedItemData({
  //   energy: energy,
  //   fibers: fibers,
  //   fruit_percentage: veg_fruit,
  //   proteins: proteins,
  //   saturated_fats:saturated_fat,
  //   sodium:sodium,
  //   sugar:  sugar
  // });
  
  // calculateNutriGrade(scannedItemData);
  // calculateNutriScore(scannedItemData)


  // console.log("scanned item: " + {recentScannedItem} );

  
  

  ///////////////// Nutritional Information section Logic /////////////////////
   

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
      console.log("The  grade is : " + nutriGrade);  
      return nutriGrade;     
     
  }

  // Function to get the Nutritional Score of the user inputed values
  function calculateNutriScore(values){
      const nutritionalScore = nutriScore.calculate(values)
      console.log("The score is :" + nutritionalScore);
      return nutritionalScore;    
  }

  function NutritionalGradeImage(grade){
    switch (grade){
        case "A":
            return  "https://svgshare.com/i/14gF.svg"
            break;

        case "B":
            return  "https://svgshare.com/i/14fb.svg"
            break;

        case "C":
            return  "https://svgshare.com/i/14gb.svg"
            break;   
            
        case "D":
            return  "https://svgshare.com/i/14fc.svg"
            break; 

        case "E":
            return  "https://svgshare.com/i/14ft.svg"
            break; 

        default:
            return "https://svgshare.com/i/14fi.svg"
    }
    

}


   



  

  return (
    <div className=' h-[125vh]'>
      <div className='flex justify-between'>
        <h1>Dashboard Page</h1>
        {photoURL && (
        <img
          src={photoURL}
          alt="Photo"
          style={{ width: '60px', height: '60px', borderRadius: '50%', marginLeft: '10px' }}
        />
        )}
      </div>

      <div className="flex justify-between w-[800px] h-[154px] bg-amber-400 bg-opacity-20 rounded-[30px] border-2 border-amber-400 m-auto" >
        <div className='flex flex-col relative top-10 left-14 gap-3 align-middle'>
          <div className="text-center text-black text-opacity-75 text-xl font-semibold font-['Roboto'] leading-[21px]">Hello {user && user.displayName && (user.displayName)}</div>
          <div className="text-yellow-500 text-sm font-medium font-['Roboto'] leading-[21px]">Please scan a food item using your camera<br/>or enter the ingredients manually to see a score</div>
        </div>
        
        <img className="w-[238px] h-[260px] relative bottom-20 right-9" src="https://i.ibb.co/G3kYNBc/6357895-removebg-preview.png" />
      </div>
      

      <div className='flex flex-row mt-10 justify-center '>
        <img className="w-[203px] h-[255px]" src="https://i.ibb.co/7tSwKBq/removal-ai-8793b6e3-d8cc-4a38-985b-1c07d1850ee3-51aca451-26eb-4659-8b2e-f5e714fde315.png" alt='photo business'/>
        <div className="w-[685px] h-[221px] bg-white rounded-[30px] custom-shadow-home flex justify-around">
          <div className='flex flex-col gap-0 items-center'>
            {/* <img src="https://i.ibb.co/bXpVFtD/chocolate-bis-BG2.png" alt="chocolate-bis-BG" className=' w-[45vh]'/> */}
            {/* Display identified item */}
            {/* {firstPhotoTaken && ( */}
              <div className=' text-[13px] mt-9 mb-14 border-2 border-amber-400 rounded-xl p-4'>
                {identifiedItem !== null ? (
                  <p>{identifiedItem}</p>
                ) : (
                  <p>Scan to see a score and a recommendation!</p>
                )}
              </div>
            {/* )} */}
            <h2 className="text-[15px] font-semibold relative bottom-4">
              Nutri Recommendation:{' '}
              <span className={`text-gray-700 rounded-[30px] border-2 p-2 px-4 
                  ${NutriRecommendation === 'good' ? 'border-green-400' : 
                  NutriRecommendation === 'moderate' ? 'border-orange-400' : 'border-red-400'}`}>
                {NutriRecommendation ? (
                  NutriRecommendation + ' 😶‍🌫️'
                ) : (
                  '☹️'
                )}
              </span>
            </h2>
          </div>
          
          <NutriCard 
                  image = {NutritionalGradeImage(grade)}
                  score = {score}
            
              
              />
        </div>
      </div>
     


        <>
          {/* {show && (
            <BarcodeScannerComponent
              width={400}
              height={400}
              onUpdate={(err, result) => onUpdateScreen(err, result)}
            />
          )}
          <p>{data}</p> */}
    

          </>
  
        {/* <div>
          <button onClick={() => setShow(true)}> Capture </button>
        </div> */}





      {/* Open Modal Button */}
      {/* <button onClick={openModal} className='bg-amber-400 text-white w-1/2 rounded-md p-2 mt-10'>Scan using camera</button> */}
      <div className='flex justify-evenly m-auto relative top-12'>
        <div onClick={openModal} className="w-[320px] h-[300px] bg-white rounded-[30px] custom-shadow-home cursor-pointer flex justify-center items-center align-middle flex-col gap-10">
          <img className="w-[200px] h-[200px] relative" src="https://i.ibb.co/Q7Wzg2N/3484567-removebg-preview.png" />
          <h3 className='font-medium text-[18px] relative bottom-5'>Scan using camera</h3>
        </div>   

        <div onClick={openNutritionModal} className="w-[320px] h-[300px] bg-white rounded-[30px] custom-shadow-home cursor-pointer flex justify-center items-center align-middle flex-col gap-10">
          <img className="w-[215px] h-[215px] relative" src="https://i.ibb.co/74DPzs4/62356-removebg-preview.png" />
          <h3 className='font-medium text-[18px] relative bottom-7'>Enter ingredients manually</h3>
        </div>

        <div onClick={openVideoModal} className="w-[320px] h-[300px] bg-white rounded-[30px] custom-shadow-home cursor-pointer flex justify-center items-center align-middle flex-col gap-10">
          <img className="w-[200px] h-[200px] relative" src="https://i.ibb.co/nrhzMvh/5703566-removebg-preview.png" />
          <h3 className='font-medium text-[18px] relative bottom-7'>Scan using barcode</h3>
        </div>
      </div>
      

      {/* Modal for displaying take photo */}
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

      {/* Display identified item
      {firstPhotoTaken && (
        <div>
          {identifiedItem ? (
            <p>Identified item: {identifiedItem}</p>
          ) : (
            <p>Object Not Identified. Please retake!</p>
          )}
        </div>
      )} */}

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
      {/* <NutritionForm
            onAdd = {addUserFoodData}
            /> */}
       {/* <NutriCard 
                image = {NutritionalGradeImage(grade)}
                score = {score}
                className = "relative mt-10"
           
            
            /> */}
      </div>

      {/* Modal for displaying manual enter food score */}
      <Modal
        isOpen={isNutritionModalOpen}
        onRequestClose={closeNutritionModal}
        contentLabel="Nutrition Modal"
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
            border: '4px solid #FFC533', 
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        <div>
          <NutritionForm onAdd={addUserFoodData} />
          <NutriCard2 image={NutritionalGradeImage(grade)} score={score} />
        </div>
        <button onClick={closeNutritionModal} className='absolute top-2 right-8 bg-amber-400 text-white w-20 rounded-md p-2 mt-10 font-semibold'>Close</button>
      </Modal> 


      {/* Modal for displaying video and result */}
      <Modal
        isOpen={isVideoModalOpen}
        onRequestClose={closeVideoModal}
        contentLabel="Video Modal"
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
            border: '4px solid #FFC533', 
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        <div>
          <h2>Video Stream</h2>
          {/* <video ref={ref} /> */}
          <Webcam ref={ref} className='rounded-xl w-2/3 m-auto ' autoPlay/>

          {/* Display the last result */}
          <p>
            <span className='font-semibold mb-3 text-center'>Last result:</span>
            <span>{result}</span>
          </p>
        </div>
        {/* Button to close the modal */}
        <button onClick={closeVideoModal}>Close</button>
      </Modal>

      <div className='mt-[15vh] hidden justify-center flex-co items-center'>
        <div className=' w-[50vh] h-[20vh]'>
          <video ref={ref} className=' custom-shadow-home rounded-xl mb-5'/>

          <span className=''>Barcode result:</span>
          <span>{result}</span> 
        </div>
      </div>


    </div>
  );
};

export default Dashboard;




