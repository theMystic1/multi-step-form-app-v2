import { useState } from "react";
import { Button } from "./Button";

const plans = [
  {
    planName: "Arcade",
    // planType: 'yr'
    monthPrice: 9,
    yearPrice: 90,
    promoMsg: "2 months free",
    planImg: "./icon-arcade.svg",
    // planType: "",
  },
  {
    planName: "Advanced",
    // planType: 'yr'
    monthPrice: 12,
    yearPrice: 120,
    promoMsg: "2 months free",
    planImg: "./icon-advanced.svg",
    // planType: "",
  },
  {
    planName: "Pro",
    // planType: 'yr'
    monthPrice: 15,
    yearPrice: 150,
    promoMsg: "2 months free",
    planImg: "./icon-pro.svg",
    // planType: "",
  },
];

export function Step2({ onPrevRender, onNextStep, selectedPlan }) {
  const [isMonth, setIsMonth] = useState(true);
  const [planIsSelected, setPlanIsSelected] = useState(null);

  // if ()

  function handlePlSelected(index) {
    setPlanIsSelected(index);

    selectedPlan.current = {
      ...plans[index],
      planType: isMonth ? "Month" : "Year",
    };
  }

  function handleTogglePlan() {
    setIsMonth((ism) => !ism);
  }

  function handleStep3() {
    // planIsSelected !== null ? onNextStep() : "";

    if (planIsSelected !== null) {
      onNextStep();
      // selectedPlan.current = { ...plans[planIsSelected] };
      // console.log(selectedPlan);
      // console.log("selected");
    } else return;
  }

  return (
    <div className="container_info">
      <h2 className="p_info">Select your plan</h2>

      <p className="p">You have the option of monthly or yearly billing.</p>

      <ul className="plans">
        {plans.map((plan, index) => (
          <PlanList
            planName={plan.planName}
            monthPrice={plan.monthPrice}
            promoMsg={plan.promoMsg}
            yearPrice={plan.yearPrice}
            isMonth={isMonth}
            planImg={plan.planImg}
            key={plan.planName}
            planIsSelected={planIsSelected}
            onSelectedPlan={handlePlSelected}
            index={index}
            // plan={plan}
          />
        ))}
      </ul>
      <div className="plan_type">
        <div className="types">
          <p className={`month type ${isMonth ? "active--plan" : ""} `}>
            Monthly
          </p>
          <span className="type_btn " onClick={handleTogglePlan}>
            <div className={`bnn ${!isMonth ? "toggle_plan" : ""}`}></div>
          </span>
          <p className={`year type ${!isMonth ? "active--plan" : ""}`}>
            Yearly
          </p>
        </div>
      </div>
      <Button onPrevRender={onPrevRender} onRender={handleStep3} />
    </div>
  );
}

function PlanList({
  planName,
  promoMsg,
  yearPrice,
  monthPrice,
  isMonth,
  planImg,
  planIsSelected,
  onSelectedPlan,
  index,
}) {
  return (
    <li
      className={`plan ${index === planIsSelected ? "plan-active" : ""} `}
      onClick={() => onSelectedPlan(index)}
    >
      <img src={planImg} alt="" />

      <span>
        <p className="plan-name">{planName}</p>

        {isMonth && <p className="price">${monthPrice}/mo</p>}
        {!isMonth && <p className="price">${yearPrice}/yr</p>}

        {!isMonth && <p className="promo">{promoMsg}</p>}
      </span>
    </li>
  );
}
