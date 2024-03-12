"use client"
// MAKING THIS A CLIENT SIDE COMPOENENT

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"



import { useForm } from "react-hook-form"

// Importing the buttons and UI compoenents from shadcn UI
import { Button } from "../components_shadcn/ui/button"
import { 
    Form ,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage, } from "../components_shadcn/ui/form"

import { Input } from "../components_shadcn/ui/input"

import { Textarea } from "../components_shadcn/ui/textarea"
import { Label } from "../components_shadcn/ui/label"

import { Select ,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,} from "../components_shadcn/ui/select"

// Creating a form schema, validating form on client side
const formSchema = z.object({
 
    
    health_conditions: z.string().min(10, {
        message: " You must enter atleast 10 characters minimum for nutrimate to evaluate your health profile efficiently.",
      }),
     dietary_preferences: z.string().min(10, {
        message: " You must enter atleast 10 characters.",
      }),
      food_avoidance: z.string().min(10, {
        message: " You must enter atleast 10 characters.",
      }),
      age_group: z.string().min(1, {
        message: " You must select an item",
      }),
      health_goal: z.string().min(1, {
        message: " You must select an item",
      }),
      
      


  });
// Using the react hook form and useForm to create a form



function HealthQuiz() {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          health_conditions:"",
          dietary_preferences:"",
          food_avoidance:"",
          username: "",
          password:"",
          age_group:"",
          health_goal:"",

        },
      });



        // 2. Define a submit handler.
    function onSubmit(values) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }


    return ( 
    <div  className="container max-w-2xl lg:px-0 mx-auto    ">
        {/* <section className="py-32 flex justify-center items-center rounded-xl shadow-sm shadow-gray-900 border-white hero">
      <div>
       
        <h1 className="pt-12 text-amber-400 text-center  text-xl"> Lets get started by setting up your health profile 🧑‍⚕️</h1>

        <h2 className="pt-6 text-amber-400 text-center ">To  do this please spare a few minutes answering the health quiz 🍃</h2>
      </div>
    </section>
        */}

        <div>
       
       <h1 className="pt-12 text-amber-400 text-center  text-xl"> Lets get started by setting up your health profile 🧑‍⚕️</h1>

       <h2 className="pt-6 text-amber-400 text-center ">To  do this please spare a few minutes answering the health quiz 🍃</h2>
     </div>
      
    <Form {...form}  >

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      
      {/* Selection box  */}
      <FormField
         
            control={form.control}
            name="age_group"

            render={({ field }) => (
              <FormItem className="pt-10" >
                <FormLabel>Select your Age group</FormLabel>
                <Select 
                     onValueChange={field.onChange}

                   >
                <FormControl>
                
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Select your age group" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent  >
                      <SelectItem value="Under 18"  >Under 18</SelectItem>
                      <SelectItem value="18-24">18-24</SelectItem>
                      <SelectItem value="35-44">35-44</SelectItem>
                      <SelectItem value="45-54">45-54</SelectItem>
                      <SelectItem value="55-64">55-64</SelectItem>
                      <SelectItem value="65 and over">65 and over</SelectItem>
                    
                    </SelectContent>
                  
               
                </Select>
                <FormDescription>
                  Select the appropriate age group you belong to
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          

          {/* Select option 2 */}
          <FormField
            control={form.control}
            name="health_goal"
            render={({ field }) => (
              <FormItem className="pt-10" >
                <FormLabel>Select you health goal</FormLabel>
                <Select 
                     onValueChange={field.onChange}

                   >
                <FormControl>
                
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Select a  health group" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent  >
                      <SelectItem value="None">None</SelectItem>
                      <SelectItem value="Weight Loss">Weight Loss</SelectItem>
                      <SelectItem value="Muscle Gain">Muscle Gain</SelectItem>
                      <SelectItem value="Energy Boost">Energy Boost</SelectItem>
                      <SelectItem value="Digestive Health">Digestive Health</SelectItem>
                     
                    
                    </SelectContent>
                  
               
                </Select>
                <FormDescription>
                  Select an appropriate health goal
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
      
      {/* Input question 1 */}
      <FormField
            control={form.control}
            name="health_conditions"
            render={({ field }) => (
              <FormItem className="pt-10">
                <FormLabel>Do you have any specific health conditions or medical diagnoses, or have  you have been diagnosed with illnesses before? If so, please provide details.</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Type your health conditions here."
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Describe any health conditions you have.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

            {/* Input question 2 */}

            <FormField
            control={form.control}
            name="dietary_preferences"
            render={({ field }) => (
              <FormItem className="pt-10">
                <FormLabel>Do you have any specific dietary preferences or restrictions? Please tell us about your dietary preferences.</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Type your dietary preferences or restrictions here."
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Describe any preferences or restrictions you have.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

         

          {/* Input question 3*/}

          <FormField
            control={form.control}
            name="food_avoidance"
            render={({ field }) => (
              <FormItem className="pt-10">
                <FormLabel>Are there any foods or ingredients that you prefer to avoid or limit in your diet? Please provide details</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Type your ingredients or food restrictions here."
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Describe any preferences or restrictions you have.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />




        <Button type="submit" className="bg-amber-400">Proceed</Button>
      </form>
    </Form>

    </div> );
}


export default HealthQuiz;