import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

function ManualInputForm() {
  return (
    <div className="container">
        <h2>Enter the following:</h2>
      <form className="py-8">
        <div>
          <h3 className="pt-3"> Energy(kj)</h3>
          <Input className="mt-2" name="fullName" required />
        </div>

        <div>
          <h3 className="pt-3"> Saturated fats (g)</h3>
          <Input className="mt-2" name="fullName" required />
        </div>

        <div>
          <h3 className="pt-3">Sugar (g) </h3>
          <Input className="mt-2" name="fullName" required />
        </div>

        <div>
          <h3 className="pt-3">Fibers (g) </h3>
          <Input className="mt-2" name="fullName" required />
        </div>

        <div>
          <h3 className="pt-3">Proteins (g) </h3>
          <Input className="mt-2" name="fullName" required />
        </div>

        <div className="pt-3">
          <h3>Sodium (mg) </h3>
          <Input className="mt-2" name="fullName" required />
        </div>

        <div className="pt-3"> 
          <h3> Vegitable and Fruits (%) </h3>
          <Input className="mt-2" name="fullName" required />
        </div>

        



       
      </form>
    </div>
  );
}

export default ManualInputForm;
