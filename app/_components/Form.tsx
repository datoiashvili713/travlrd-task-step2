"use client";

import { Select, SelectItem } from "@nextui-org/select";
import { Slider } from "@nextui-org/slider";
import { Input } from "@nextui-org/input";

import { handleCalculation } from "../_lib/actions";

import { Button } from "@nextui-org/button";

const Form = () => {
  const industries = ["Information Technology", "Clothing & Fashion", "Sports"];

  return (
    <div className="flex justify-center items-center flex-col">
      <form action={handleCalculation} className="flex flex-col gap-2 mt-4">
        <Input
          isRequired
          className="max-w-xs"
          label="Name"
          name="name"
          placeholder="John Doe"
          type="text"
        />
        <Input
          isRequired
          className="max-w-xs"
          label="Email"
          name="email"
          placeholder="junior@nextui.org"
          type="email"
        />
        <Input
          isRequired
          className="max-w-xs"
          errorMessage="Please enter a valid email"
          label="Phone Number"
          name="phone"
          placeholder="+9955551234567"
          type="text"
        />
        <Input
          isRequired
          className="max-w-xs"
          label="Website"
          name="website"
          placeholder="Your Website"
          type="text"
        />

        <Select
          className="max-w-xs"
          label="Favorite Animal"
          name="industry"
          placeholder="Select an animal"
        >
          {industries.map((industry) => (
            <SelectItem key={industry} value={industry}>
              {industry}
            </SelectItem>
          ))}
        </Select>

        <Input
          className="max-w-xs"
          label="Website Visitors"
          name="visitors"
          placeholder="Monthly Website Visitors"
          type="text"
        />

        <Slider
          className="max-w-md"
          label="Conversion rate"
          maxValue={10}
          minValue={1}
          name="rate"
          step={0.5}
        />

        <Button color="primary" type="submit">
          Calculate my optimized conversion rate
        </Button>
      </form>
    </div>
  );
};

export default Form;
