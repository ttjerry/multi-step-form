import CustomInput from "../components/customInput";
import Button from "../components/button";

const FormPage = ({ className, setNum }) => {
  const handleEvent = (e) => {
    e.preventDefault();
    setNum(2);
  };
  return (
    <form action="" className={`${className}`}>
      <div>
        <h3 className="mb-2 font-bold text-blue-950 text-3xl">Personal Info</h3>
        <h4 className="font-normal text-gray-400 text-sm">
          Please provide your name, email address and phone number
        </h4>
      </div>
      <div className="flex flex-col gap-6">
        <CustomInput
          label="Name"
          placeholder="e.g Stephen King"
          className="border-[1px] text-sm w-full p-3 rounded-md"
        />
        <CustomInput
          label="Email Address"
          placeholder="e.g stephenKing@lorem.com"
          className="border-[1px] text-sm w-full p-3 rounded-md"
        />
        <CustomInput
          label="Phone Number"
          placeholder="e.g +234 543 232 43"
          className="border-[1px] text-sm w-full p-3 rounded-md"
        />
      </div>
      <div className="flex mt-6 justify-end">
        <Button
          className="text-white bg-blue-950 p-2 px-6 rounded-md"
          handleClick={handleEvent}
        >
          Next Step
        </Button>
      </div>
    </form>
  );
};

export default FormPage;
