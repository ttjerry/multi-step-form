import Sidebar from "./components/sideBar";
import { useState } from "react";
import First from "./pages/first";
import SelectPlan from "./pages/selectPlan";
import AddOns from "./pages/add-ons";

const data = [
  { number: 1, step: "STEP 1", details: "YOUR INFO", isSelected: true },
  { number: 2, step: "STEP 2", details: "SELECT PLAN", isSelected: false },
  { number: 3, step: "STEP 3", details: "ADD-ONS", isSelected: false },
  { number: 4, step: "STEP 4", details: "SUMMARY", isSelected: false },
];
const Layout = () => {
  const [num, setNum] = useState(1);
  const [cards] = useState([
    {
      id: 1,
      name: "Arcade",
      image: "../public/icon-arcade.svg",
      price: 30,
      duration: 2,
    },
    {
      id: 2,
      name: "Advanced",
      image: "../public/icon-advanced.svg",
      price: 120,
      duration: 2,
    },
    {
      id: 3,
      name: "Pro",
      image: "../public/icon-pro.svg",
      price: 150,
      duration: 2,
    },
  ]);
  const [selected, setSelected] = useState(1);
  const [monthly, setMonthly] = useState(false);

  cards.map((el) => {
    if (monthly == true) {
      return { ...el, price: el.price.toString().slice(0, -1) };
    } else {
      return { ...el };
    }
  });

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="flex justify-between bg-white p-2 pr-5 rounded-xl w-7/12">
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
        <div className="w-[65%]">
          {num == 1 ? (
            <First
              num={num}
              setNum={setNum}
              className="p-12 flex flex-col gap-10"
            >
              {/* children */}
              {/* after proper validation and onclick of the button setNum as 2 */}
            </First>
          ) : (
            false
          )}
          {num == 2 ? (
            <SelectPlan
              monthly={monthly}
              setMonthly={setMonthly}
              selected={selected}
              setSelected={setSelected}
              setNum={setNum}
              updatedUser={cards}
            />
          ) : (
            false
          )}
          {num == 3 ? <AddOns /> : false}
          {num == 4 ? (
            <First
              num={num}
              setNum={setNum}
              className="p-12 flex flex-col gap-10"
            >
              {/* children */}
            </First>
          ) : (
            false
          )}
        </div>
      </div>
    </div>
  );
};
export default Layout;
