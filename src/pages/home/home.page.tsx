import Form from "./components/Form/Form";
import { useState } from "react";

import { nutriScore } from "nutri-score";
import NutriScoreCard from "./components/NutritionalCard/NutritionalCard";


function HomePage() {

  

    const [foodData,setFoodData] = useState({});

    

    const [grade,setGrade] = useState("");

    const [score,setScore] = useState(0);
    




    // Adding the user food data values to our food data array
    function addUserFoodData(userFoodData :any){
        console.log(userFoodData);
        
        setFoodData( (prevValues)=>{
            return{...prevValues ,userFoodData }
        });

        const grade = calculateNutriGrade(userFoodData);
        const score = calculateNutriScore(userFoodData);

        setGrade(grade);
        // Gives error as type required is number
        setScore(score);
        
    }


    




    

    // Function to get the nutritional  Grade of the user inputed values
    function calculateNutriGrade(values:any){
        const nutriGrade = nutriScore.calculateClass(values);
        // console.log("The final grade is : " + nutriGrade);  
        return nutriGrade;     
       
    }

    // Function to get the Nutritional Score of the user inputed values
    function calculateNutriScore(values:any){
        const nutritionalScore = nutriScore.calculate(values)
        console.log("The grade is :" + nutritionalScore);
        return nutritionalScore;    
    }

     


    // Function thast going to return the appropriate inmage based on grade

    function NutritionalGradeImage(grade:any){
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
            <h1>This is the home page  page</h1>
            <Form
            onAdd = {addUserFoodData}
            />
           

            <NutriScoreCard 
                image = {NutritionalGradeImage(grade)}
                score = {score}
           
            
            />


        </div>
     );
}

export default HomePage;