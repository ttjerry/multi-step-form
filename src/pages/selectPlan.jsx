import CustomButton from "../components/CustomButton";

const SelectPlan = ({
  monthly,
  setMonthly,
  selected,
  setSelected,
  updatedUser,
  setNum,
  setSummary,
  setPrice,
}) => {
  function handleEvent(e) {
    setSelected(e.id);
    setSummary(e.name);
    setPrice(e.price);
  }

  // handle toggle between monthly and yearly subscription
  const mutatedData = updatedUser.map((el) => {
    if (monthly) {
      return { ...el, price: el.price.toString().slice(0, -1) };
    } else {
      return { ...el };
    }
  });

  function handleToggle() {
    setMonthly(!monthly);
  }
  return (
    <div className="p-12 h-full flex flex-col justify-between">
      <div className="flex flex-col">
        <h3 className="mb-2 font-bold text-blue-950 text-3xl">
          Select your plan
        </h3>
        <h3 className="font-normal text-gray-400">
          You have the option of monthly or yearly billing
        </h3>
      </div>
      <div className="flex gap-4">
        {mutatedData.map((el, index) => {
          return (
            <div
              key={index}
              className={`${
                selected == el.id ? "bg-blue-100 border-blue-600" : "bg-white"
              } ${
                monthly ? "p-9" : "p-6"
              } h-48 border-[1px] rounded-md flex flex-col justify-between cursor-pointer`}
              onClick={() => handleEvent(el)}
            >
              <img src={el?.image} alt={index} className="w-fit" />
              <div className="flex flex-col">
                <span className="font-semiBold text-blue-950">{el.name}</span>
                <span className="text-gray-400">
                  ${el.price}
                  {monthly ? "/mo" : "/yr"}
                </span>
                {monthly ? (
                  ""
                ) : (
                  <span className="text-sm font-medium">
                    {el.duration} months free
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div>
        {/* bar */}
        <span className="flex justify-center gap-4 rounded-md bg-gray-200 py-3 flex-row items-center">
          <span
            className={`${
              monthly ? "text-blue-950" : "text-gray-400"
            } font-semibold`}
          >
            Monthly
          </span>
          <CustomButton
            className="w-14 h-6 rounded-full flex items-center relative bg-blue-950"
            handleClick={handleToggle}
          >
            <span
              className={`absolute ${
                monthly ? "left-0" : "right-0"
              } bg-white mx-1 w-4 h-4 rounded-full`}
            ></span>
          </CustomButton>
          <span
            className={`${
              monthly ? "text-gray-400" : "text-blue-950"
            } font-semibold`}
          >
            Yearly
          </span>
        </span>
      </div>
      <div>
        {/* navigation */}
        <div className="flex items-center justify-between w-full h-10">
          <CustomButton
            className="text-gray-400 font-medium"
            handleClick={() => setNum(1)}
          >
            Go Back
          </CustomButton>
          <CustomButton
            className="bg-blue-950 p-2 px-6 text-white rounded-md"
            handleClick={() => setNum(3)}
          >
            Next Step
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default SelectPlan;
