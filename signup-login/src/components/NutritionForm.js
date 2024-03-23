import { Input } from "../components_shadcn/ui/input";



import { useState } from "react";


import { nutriScore } from "nutri-score";



function NutritionForm (props) {

    const [foodData,setFoodData] = useState(
        {
            energy:'',
            fibers:'',
            fruit_percentage:'',
            proteins:'',
            saturated_fats:'',
            sodium:'',
            sugar:''
    
    
        }
    

    );

 

    const foodDataInNumeric = {
        energy:Number(foodData.energy),
        fibers:Number(foodData.fibers),
        fruit_percentage:Number(foodData.fruit_percentage),
        proteins:Number(foodData.proteins),
        saturated_fats:Number(foodData.saturated_fats),
        sodium:Number(foodData.sodium),
        sugar:Number(foodData.sugar)


    }

 


    


    // Function to set the objects with user inputed values

    function handleChange(event){
        const name  = event.target.name;
        const value = event.target.value;


        
  
        setFoodData((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        }); 

    }



    // Function to submit the data  to  the calulate the nutritinal grade

    function submitFoodData(event){

        props.onAdd(foodDataInNumeric);
        

        // Prevent reloading the page, because this is a form 
        event.preventDefault();

    }


    return(
        <div >
        <form className="flex items-center flex-col">
        <div>
      <div className="form-group">
        <label htmlFor="energy">Energy (kJ)</label>
        <input name="energy" type="number" value={foodData.energy} className="form-control form-control-sm" id="energy" placeholder="Enter Energy in kJ" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="saturated_fats">Saturated fats (g)</label>
        <input name ="saturated_fats" type="number" value={foodData.saturated_fats} className="form-control form-control-sm" id="saturated_fats" placeholder="Enter Saturated fats in g"  onChange={handleChange}/>
      </div>
      <div className="form-group">
        <label htmlFor="sugar">Sugar (g) </label>
        <input name="sugar" type="number" value={foodData.sugar} className="form-control form-control-sm" id="sugar" placeholder="Enter Sugar in g" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="fibers">Fibers (g)</label>
        <input name="fibers" type="fibers" value={foodData.fibers} className="form-control form-control-sm" id="fibers" placeholder="Enter Fibers in g"  onChange={handleChange}/>
      </div>
      <div className="form-group">
        <label htmlFor="proteins">Proteins (g)</label>
        <input name="proteins" type="number" value={foodData.proteins} className="form-control form-control-sm" id="proteins" placeholder="Enter Proteins in g"  onChange={handleChange}/>
      </div>
      <div className="form-group">
        <label htmlFor="sodium">Sodium (mg)</label>
        <input name="sodium" type="number" value={foodData.sodium} className="form-control form-control-sm" id="sodium" placeholder="Enter Sodium in mg"  onChange={handleChange}/>
      </div>
      <div className="form-group">
        <label htmlFor="energy">% Vegitable and Fruits (%)</label>
        <input name="fruit_percentage" type="number" value={foodData.fruit_percentage} className="form-control form-control-sm" id="fruit_percentage" placeholder="Enter % Vegitable and Fruits (0 - 100)" onChange={handleChange} />
      </div>

      <button onClick={submitFoodData} type="button" className="btn btn-primary bg-amber-400 text-white w-32 rounded-md p-2 mb-3 mt-4 font-semibold" id="calculateNutriScore" >Proceed</button>
      </div>
    </form>


        </div>
    );

    
}

export default NutritionForm ;