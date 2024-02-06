import { useState } from "react";
import { Button } from "./Button";

const services = [
  {
    img: "./icon-checkmark.svg",
    serviceHead: "Online service",
    serviceDetail: "Access to multiplayer games",
    monthPlanPrice: 1,
    yearPlanPrice: 10,
  },

  {
    img: "./icon-checkmark.svg",
    serviceHead: "Larger storage",
    serviceDetail: "Extra 1TB of cloud save",
    monthPlanPrice: 2,
    yearPlanPrice: 20,
  },

  {
    img: "./icon-checkmark.svg",
    serviceHead: "Customizable Profile",
    serviceDetail: "Custom theme on your profile",
    monthPlanPrice: 2,
    yearPlanPrice: 20,
  },
];

export function Step3({
  onPrevRender,
  selectedPlan,
  selectedAddOns,
  onNextStep,
}) {
  const [activeItems, setActiveItems] = useState([]);

  function handleNextRender4() {
    if (selectedAddOns.current !== null) {
      onNextStep();
      // console.log("we cool");
    }
  }

  function handleActive(index) {
    const indexInActiveItems = activeItems.indexOf(index);
    if (indexInActiveItems !== -1) {
      // If active, remove it from activeItems
      setActiveItems(activeItems.filter((itemIndex) => itemIndex !== index));
      // selectedAddOns.current = [activeItems?.map((_, i) => services[i])];
      // console.log(index);
    } else {
      // If not active, add it to activeItems
      setActiveItems([...activeItems, index]);
      selectedAddOns.current = [...activeItems, index].map(
        (_, i) => services[i]
      );
      // console.log(selectedAddOns.current);
      // const selected = activeItems?.map((_, i) => services[i]);
    }
  }
  // console.log(selectedAddOns.current);
  // console.log(activeItems);
  return (
    <div className="container_info">
      <h2 className="p_info">Pick add-ons</h2>

      <p className="p">
        Add-ons help enhance your gaming experience. Online service
      </p>

      <ul className="services">
        {services.map((service, index) => (
          <ServicesList
            serviceHead={service.serviceHead}
            img={service.img}
            serviceDetail={service.serviceDetail}
            monthPlanPrice={service.monthPlanPrice}
            yearPlanPrice={service.yearPlanPrice}
            key={service.serviceHead}
            selectedPlan={selectedPlan}
            activeItems={activeItems}
            onActive={handleActive}
            index={index}
          />
        ))}
      </ul>

      <Button onPrevRender={onPrevRender} onRender={handleNextRender4} />
    </div>
  );
}

function ServicesList({
  selectedPlan,
  monthPlanPrice,
  yearPlanPrice,
  img,
  serviceHead,
  serviceDetail,
  activeItems,
  onActive,
  index,
}) {
  return (
    <li
      className={`art-service  ${
        activeItems?.includes(index) ? "active__service" : ""
      }`}
      onClick={() => onActive(index)}
    >
      <button
        className={`active__btn--btn ${
          activeItems?.includes(index) ? "active__btn__active" : ""
        } `}
      >
        <img className="active__btn " src={img} alt="check-img" />
      </button>

      <span className="onl-sp">
        <p className="service_head">{serviceHead}</p>
        <p className="service_det">{serviceDetail}</p>
      </span>
      <p className="pri-yr">
        {selectedPlan.current.planType === "Month"
          ? `+$${monthPlanPrice}/mo`
          : `+$${yearPlanPrice}/yr`}
      </p>
    </li>
  );
}
