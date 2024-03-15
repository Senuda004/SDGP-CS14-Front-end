
// Import open Ai module
import OpenAI from "openai";
import { Await } from "react-router-dom";

// require and read env file
require("dotenv").config();


// Creating a openAi instance
const client = new OpenAI( {apiKey : process.env.OPENAI_API_KEY} );


export async function generateRecommendation(){

    const content = `Role: {Muhce cream cracker } , User Description : {}`

    const completion = await client.chat.completions.create(
        
        {
            messages:[{role:"user", content}],
            // Our custom fine tuned model
            model:""


        }

    );
}