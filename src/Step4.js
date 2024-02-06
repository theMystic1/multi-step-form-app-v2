import { Button } from "./Button";

export function Step4({
  onPrevRender,
  selectedAddOns,
  selectedPlan,
  handleNextStep2,
  isStep4,
  onNextRender,
}) {
  // function handleNextStep5(){
  //   onNextStep()
  // }

  const totalMonthly =
    selectedPlan.current.monthPrice +
    selectedAddOns.current
      .map((addns) => addns.monthPlanPrice)
      .reduce((acc, cur) => acc + cur, 0);
  const totalYearly =
    selectedPlan.current.yearPrice +
    selectedAddOns.current
      .map((addns) => addns.yearPlanPrice)
      .reduce((acc, cur) => acc + cur, 0);

  return (
    <div className="container_info">
      <h2 className="p_info">Finishing up</h2>

      <p className="p">Double-check everything looks OK before confirming.</p>

      <div className="finish">
        <div className="finish-det">
          <div className="selected_plan">
            <div className="plans__plan">
              <p className="plan-p">
                <span style={{ marginRight: "5px" }}>
                  {selectedPlan.current.planName}
                </span>

                <span>({`${selectedPlan.current.planType}ly`})</span>
              </p>

              <button
                className="change-plan"
                style={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={handleNextStep2}
              >
                Change
              </button>
            </div>

            <p className="plan__price">
              {selectedPlan.current.planType === "Month"
                ? `$${selectedPlan.current.monthPrice}/mo`
                : `$${selectedPlan.current.yearPrice}/yr`}
            </p>
          </div>

          <ul className="selected__services">
            {selectedAddOns.current.map((addon, i) => (
              <SelectedServicesList
                key={i}
                serviceHead={addon.serviceHead}
                monthPrice={addon.monthPlanPrice}
                yearPrice={addon.yearPlanPrice}
                selectedPlan={selectedPlan}
              />
            ))}
          </ul>
        </div>

        <div className="total__det">
          <p className="total--type">Total (per month)</p>

          <p className="tot-price">
            +$
            {selectedPlan.current.planType === "Month"
              ? `${totalMonthly}/mo`
              : `${totalYearly}/yr`}
          </p>
        </div>
      </div>

      <Button
        onPrevRender={onPrevRender}
        isStep4={isStep4}
        onRender={onNextRender}
      />
    </div>
  );
}

function SelectedServicesList({
  monthPrice,
  yearPrice,
  serviceHead,
  selectedPlan,
}) {
  return (
    <li className="service__selected">
      <p className="serv--selected">{serviceHead}</p>

      <p className="sel--price">
        {selectedPlan.current.planType === "Month"
          ? `+$${monthPrice}/mo`
          : `+$${yearPrice}/yr`}
      </p>
    </li>
  );
}
