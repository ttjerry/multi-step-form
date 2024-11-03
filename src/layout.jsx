import Sidebar from "./components/sideBar";
import { useState } from "react";
import FormPage from "./pages/formPage";
import SelectPlan from "./pages/selectPlan";
import AddOns from "./pages/add-ons";
import Summary from "./pages/summary";

// dummy data for sidebar
const data = [
  { number: 1, step: "STEP 1", details: "YOUR INFO", isSelected: true },
  { number: 2, step: "STEP 2", details: "SELECT PLAN", isSelected: false },
  { number: 3, step: "STEP 3", details: "ADD-ONS", isSelected: false },
  { number: 4, step: "STEP 4", details: "SUMMARY", isSelected: false },
];

//data for select plan cards
const cards = [
  {
    id: 1,
    name: "Arcade",
    image: "/icon-arcade.svg",
    price: 90,
    duration: 2,
  },
  {
    id: 2,
    name: "Advanced",
    image: "/icon-advanced.svg",
    price: 120,
    duration: 2,
  },
  {
    id: 3,
    name: "Pro",
    image: "/icon-pro.svg",
    price: 150,
    duration: 2,
  },
];
const Layout = () => {
  //state to handle which page to display
  const [num, setNum] = useState(1);
  //handle selected card in step 2
  const [selected, setSelected] = useState(1);
  //handle selected subscription plan in step 2
  const [monthly, setMonthly] = useState(false);
  //handle selected add-ons in step 3
  const [plans, setPlans] = useState([]);
  //selected add-ons summary on step 4
  const [summary, setSummary] = useState("Arcade");
  //selected price on summary page
  const [price, setPrice] = useState(90);
  //checked state for add-ons component
  const [isChecked, setIsChecked] = useState(false);

  //function to update plans array
  function handleNewPlans(a, b, c) {
    const selectedAddOns = {
      tag: a,
      pricing: b,
    };
    console.log(plans);
    // setCheckedValue(b);
    if (!c) {
      // plans.push(selectedAddOns);
      setPlans([...plans, selectedAddOns]);
    } else {
      setPlans([]);
    }
  }

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="flex justify-between bg-white rounded-xl p-3 w-8/12 h-auto">
        <Sidebar>
          {data.map((el, index) => {
            return (
              <div key={index} className="flex items-center gap-3 p-6 flex-row">
                <span
                  className={`${
                    el.number == num
                      ? "text-blue-950 bg-blue-200 border-none w-10"
                      : "text-white"
                  } flex justify-center font-semibold border-2 w-11 p-2 rounded-full`}
                >
                  {el.number}
                </span>
                <div className="flex flex-col">
                  <span className="text-gray-400 font-medium">{el.step}</span>
                  <span className="text-white font-semibold">{el.details}</span>
                </div>
              </div>
            );
          })}
        </Sidebar>
        <div className="w-[80%]">
          {/* dynamic content for form page */}
          {num == 1 && (
            <FormPage
              num={num}
              setNum={setNum}
              className="p-12 flex flex-col justify-between h-full"
            />
          )}
          {/* dynamic content for select plan page */}
          {num == 2 && (
            <SelectPlan
              monthly={monthly}
              setMonthly={setMonthly}
              selected={selected}
              setSelected={setSelected}
              setNum={setNum}
              updatedUser={cards}
              setSummary={setSummary}
              setPrice={setPrice}
            />
          )}
          {/* dynamic content for add-ons page */}
          {num == 3 && (
            <AddOns
              monthly={monthly}
              plans={plans}
              handleNewPlans={handleNewPlans}
              setNum={setNum}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
            />
          )}
          {/* dynamic content for summary page */}
          {num == 4 && (
            <Summary
              monthly={monthly}
              setNum={setNum}
              price={price}
              plans={plans}
              summary={summary}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Layout;
