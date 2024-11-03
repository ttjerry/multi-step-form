/* eslint-disable react/prop-types */
import CustomButton from "../components/CustomButton";

const Summary = ({ setNum, summary, plans, price, monthly }) => {
  console.log(plans);

  return (
    <div className="p-12 h-full flex flex-col justify-between">
      <div className="flex flex-col">
        <h3 className="mb-2 font-bold text-blue-950 text-3xl">Fininshing up</h3>
        <h3 className="font-normal text-gray-400">
          Double-check everything looks OK before confirming.
        </h3>
      </div>
      <div className=" p-4 bg-gray-100 h-48 rounded-md w-full">
        <div className="pb-4 flex flex-col justify-between">
          <div className="flex justify-between">
            {/* plan type */}
            <div className="flex flex-col">
              <span className="font-bold text-blue-950">
                {summary}({monthly ? "monthly" : "yearly"})
              </span>
              <CustomButton className="underline w-fit text-gray-400 text-sm">
                Change
              </CustomButton>
            </div>
            {/* plan price */}
            <span className=" font-semibold text-blue-950">
              {price}/{monthly ? "mo" : "yr"}
            </span>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-2 pt-4">
          {plans.map((element, index) => {
            return (
              <div className="flex justify-between" key={index}>
                <span className="text-gray-400">{element.tag}</span>
                <span className="text-blue-950 text-sm font-medium">
                  {element.pricing}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">Total(per month)</span>
        <span className="font-bold text-xl text-blue-800">12$/mo</span>
      </div>
      {/* navigation */}
      <div className="flex items-center justify-between w-full h-10">
        <CustomButton
          className="text-gray-400 font-medium"
          handleClick={() => setNum(3)}
        >
          Go Back
        </CustomButton>
        <CustomButton
          className="bg-blue-700 p-2 px-7 text-white rounded-md"
          handleClick={() => setNum(1)}
        >
          Confirm
        </CustomButton>
      </div>
    </div>
  );
};

export default Summary;
