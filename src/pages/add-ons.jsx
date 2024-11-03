/* eslint-disable react/prop-types */
import CustomInput from "../components/customInput";
import CustomButton from "../components/CustomButton";
import { useState } from "react";

//dummy data for add-ons page
const addOns = [
  {
    id: 1,
    tag: "Online service",
    tagDetails: "Access to multiplayer games",
    pricing: 1,
  },
  {
    id: 2,
    tag: "Larger storage",
    tagDetails: "Extra 1TB of cloud save",
    pricing: 2,
  },
  {
    id: 3,
    tag: "Customizable profile",
    tagDetails: "Custom theme on your profile",
    pricing: 2,
  },
];

const AddOns = ({
  monthly,
  plans,
  handleNewPlans,
  isChecked,
  setIsChecked,
  num,
  setNum,
}) => {
  const followUp = addOns.map((element) => {
    if (monthly === true) {
      return { ...element };
    } else {
      return { ...element, pricing: element.pricing.toString().concat("0") };
    }
  });
  const [isActive, setActive] = useState("");
  // const [num, setNumber] = useState(0);
  return (
    <div className="p-12 flex flex-col justify-between h-full">
      <div className="flex flex-col">
        <h3 className="mb-2 font-bold text-blue-950 text-3xl">Pick add-ons</h3>
        <h3 className="font-normal text-gray-400">
          Add-ons help enhance your gaming experience.
        </h3>
      </div>
      <div className="flex flex-col gap-4">
        {followUp.map((el, index) => {
          return (
            <CustomAddOns
              tag={el?.tag}
              tagDetails={el?.tagDetails}
              pricing={el?.pricing}
              id={el.id}
              key={index}
              monthly={monthly}
              handleNewPlans={handleNewPlans}
              plans={plans}
              num={num}
              setNum={setNum}
              setActive={setActive}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
            />
          );
        })}
      </div>
      {/* navigation */}
      <div className="flex items-center justify-between w-full h-10">
        <CustomButton
          className="text-gray-400 font-medium"
          handleClick={() => setNum(2)}
        >
          Go Back
        </CustomButton>
        <CustomButton
          className="bg-blue-950 p-2 px-6 text-white rounded-md"
          handleClick={() => setNum(4)}
        >
          Next Step
        </CustomButton>
      </div>
    </div>
  );
};

export default AddOns;

const CustomAddOns = ({
  tag,
  tagDetails,
  handleNewPlans,
  id,
  setActive,
  pricing,
  monthly,
  isChecked,
  setIsChecked,
}) => {
  //function to hanldle check event

  const handleValueChange = () => {
    handleNewPlans(tag, pricing, isChecked);
    // setNum(id);
    setIsChecked(!isChecked);
    alert(tag);
  };

  return (
    <div
      className={`${
        isChecked && " bg-blue-100 border-blue-600"
      } flex justify-between items-center w-full p-5 rounded-md border-[1px]`}
      key={id}
    >
      <div className="flex gap-6 items-center">
        <CustomInput
          type="checkbox"
          checked={isChecked}
          onValueChange={handleValueChange}
        />
        <div className="flex flex-col">
          {/* Add-ons details */}
          <span className={`${isChecked && "text-blue-950"} font-semibold`}>
            {tag}
          </span>
          <span className="text-sm text-gray-400">{tagDetails}</span>
        </div>
      </div>

      <div>
        {/* Pricing */}
        <span className="text-sm font-medium text-blue-900">
          +${pricing}/{monthly ? "mo" : "yr"}
        </span>
      </div>
    </div>
  );
};
