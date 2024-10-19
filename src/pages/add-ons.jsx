import { useState } from "react";
import CustomInput from "../components/customInput";
import Button from "../components/button";

const AddOns = ({ monthly, setNum }) => {
  return (
    <div>
      <div className="p-9 flex flex-col gap-10">
        <div className="flex flex-col">
          <h3 className="mb-2 font-bold text-blue-950 text-3xl">
            Pick add-ons
          </h3>
          <h3 className="font-normal text-gray-400">
            Add-ons help enhance your gaming experience.
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          <CustomAddOns
            tag="Online service"
            tagDetails="Access to multiplayer games"
            pricing={monthly ? 1 : 10}
            monthly={monthly}
          />
          <CustomAddOns
            tag="Larger storage"
            tagDetails="Extra 1TB of cloud save"
            pricing={monthly ? 2 : 20}
            monthly={monthly}
          />
          <CustomAddOns
            tag="Customizable profile"
            tagDetails="Custom theme on your profile"
            pricing={monthly ? 2 : 20}
            monthly={monthly}
          />
        </div>
        {/* navigation */}
        <div className="flex items-center justify-between w-full h-10">
          <Button
            className="text-gray-400 font-medium"
            handleClick={() => setNum(2)}
          >
            Go Back
          </Button>
          <Button
            className="bg-blue-950 p-2 px-6 text-white rounded-md"
            handleClick={() => setNum(4)}
          >
            Next Step
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddOns;

const CustomAddOns = ({ tag, tagDetails, pricing, monthly }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div
      className={`${
        isChecked && " bg-blue-100 border-blue-600"
      } flex justify-between items-center w-full p-5 rounded-md border-[1px]`}
    >
      <div className="flex gap-6 items-center">
        <CustomInput
          type="checkbox"
          checked={isChecked}
          onValueChange={() => {
            setIsChecked(!isChecked);
          }}
        />
        <div className="flex flex-col">
          {/* add ons details */}
          <span className={`${isChecked && "text-blue-950"} font-semibold`}>
            {tag}
          </span>
          <span className="text-sm text-gray-400">{tagDetails}</span>
        </div>
      </div>

      <div>
        {/* pricing */}
        <span className="text-sm font-medium text-blue-900">
          +${pricing}/{monthly ? "mo" : "yr"}
        </span>
      </div>
    </div>
  );
};
