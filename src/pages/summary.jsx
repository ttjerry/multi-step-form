import Button from "../components/button";

const Summary = ({ setNum, summary, price, monthly }) => {
  return (
    <div>
      <div className="p-11 flex flex-col gap-10">
        <div className="flex flex-col">
          <h3 className="mb-2 font-bold text-blue-950 text-3xl">
            Fininshing up
          </h3>
          <h3 className="font-normal text-gray-400">
            Double-check everything looks OK before confirming.
          </h3>
        </div>
        <div className=" p-4 bg-gray-100 h-44 rounded-md w-full">
          <div className="pb-4">
            <div className="flex justify-between">
              {/* plan type */}
              <div className="flex flex-col">
                <span>
                  {summary}({monthly ? "monthly" : "yearly"})
                </span>
                <Button className="underline w-fit" children="Change" />
              </div>
              {/* plan price */}
              <span>
                {price} / {monthly ? "mo" : "yr"}
              </span>
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-2 pt-4">
            <div className="flex justify-between">
              <span>Online service</span>
              <span>1$/o</span>
            </div>
            <div className="flex justify-between">
              <span>Online service</span>
              <span>1$/o</span>
            </div>
          </div>
        </div>
        <div>
          <span>Total(per month)</span>
          <span>12$/mo</span>
        </div>
        {/* navigation */}
        <div className="flex items-center justify-between w-full h-10">
          <Button
            className="text-gray-400 font-medium"
            handleClick={() => setNum(3)}
          >
            Go Back
          </Button>
          <Button
            className="bg-blue-700 p-2 px-6 text-white rounded-md"
            handleClick={() => setNum(1)}
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
