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
 
    username: z.string().min(2, {
      message: "You must enter atleast 10 charahcters minimum for nutrimate to evaluate your health profile efficiently.",
    }),

    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
      }),
    
    health_conditions: z.string().min(10, {
        message: " You must enter atleast 10 characters.",
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
      // age_group:z
      // .string({
      //   required_error: "Please select an email to display.",
      // }),
      


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

        },
      });



        // 2. Define a submit handler.
    function onSubmit(values) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }


/*

MCQ TYPE
Dietary Restrictions: Options such as "None", "Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free", etc.
Chronic Health Conditions: Options like "None", "Diabetes", "High Blood Pressure", "Celiac Disease", "Food Allergies"

Health Goals: Choices including "Weight Loss", "Muscle Gain", "Energy Boost", "Digestive Health"
Dietary Preferences: Options like "Low-Carb", "High-Protein", "Plant-Based", "Whole Foods", etc.

Input type 
"Do you have any specific health conditions or medical diagnoses, or have  you have been diagnosed with illnesses before? If so, please provide details

Do you have any specific dietary preferences or restrictions? Please tell us about your dietary preferences

Are there any foods or ingredients that you prefer to avoid or limit in your diet? Please provide details
*/ 
    return ( 
    <div >
        <h1> Health quiz page</h1>
    <Form {...form}  >

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      
      {/* Selection box  */}
      <FormField
            control={form.control}
            name="age_group"
            render={({ field }) => (
              <FormItem>
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
          {/*   */}
      
      {/* Input question 1 */}
      <FormField
            control={form.control}
            name="health_conditions"
            render={({ field }) => (
              <FormItem>
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
              <FormItem>
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
              <FormItem>
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



        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            // First form
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />

           
            </FormItem>
          )}
        />

    <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
                // First form
                <FormItem>
                <FormLabel>password</FormLabel>
                <FormControl>
                    <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />

            
                </FormItem>
            )}
            />
        <Button type="submit">Submit</Button>
      </form>
    </Form>

    </div> );
}


export default HealthQuiz;