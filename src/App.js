import { useState, useRef } from "react";
import "./index.css";

import { Nav } from "./Nav";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Step4 } from "./Step4";
import { Step5 } from "./Step5";

export default function App() {
  const [isStep1, setIsStep1] = useState(true);
  const [isStep2, setIsStep2] = useState(false);
  const [isStep3, setIsStep3] = useState(false);
  const [isStep4, setIsStep4] = useState(false);
  const [isStep5, setIsStep5] = useState(false);
  const selectedPlan = useRef({});
  const selectedAddOns = useRef([]);

  function handleNextStep() {
    setIsStep1(false);
    setIsStep2(true);
    setIsStep3(false);
  }
  function handleNextStep2() {
    setIsStep2(true);
    setIsStep3(false);
    setIsStep1(false);
    setIsStep4(false);
  }
  function handleNextStep3() {
    setIsStep3(true);
    setIsStep1(false);
    setIsStep2(false);
    // console.log("ok");
  }

  function handlePrevStep() {
    setIsStep1(true);
    setIsStep2(false);
    setIsStep3(false);
  }
  function handlePrevStep2() {
    setIsStep1(false);
    setIsStep2(true);
    setIsStep3(false);
  }
  function handlePrevStep3() {
    setIsStep1(false);
    setIsStep2(false);
    setIsStep3(true);
    setIsStep4(false);
  }

  function handleNextStep4() {
    setIsStep1(false);
    setIsStep2(false);
    setIsStep3(false);
    setIsStep4(true);
  }
  function handleNextStep5() {
    setIsStep1(false);
    setIsStep2(false);
    setIsStep3(false);
    setIsStep4(false);
    setIsStep5(true);
  }

  return (
    <main className="main">
      <section className="section section_1" id="section__1">
        <div className="main-section">
          <Nav
            isStep1={isStep1}
            isStep2={isStep2}
            isStep3={isStep3}
            isStep4={isStep4}
            isStep5={isStep5}
          />

          {isStep1 && <Step1 isStep1={isStep1} onNextStep={handleNextStep} />}
          {isStep2 && (
            <Step2
              isStep2={isStep2}
              onPrevRender={handlePrevStep}
              onNextStep={handleNextStep3}
              selectedPlan={selectedPlan}
            />
          )}
          {isStep3 && (
            <Step3
              isStep3={isStep3}
              onNextStep={handleNextStep4}
              onPrevRender={handlePrevStep2}
              selectedPlan={selectedPlan}
              selectedAddOns={selectedAddOns}
            />
          )}

          {isStep4 && (
            <Step4
              // onNextStep={handleNextStep4}
              selectedAddOns={selectedAddOns}
              selectedPlan={selectedPlan}
              onPrevRender={handlePrevStep3}
              handleNextStep2={handleNextStep2}
              isStep4={isStep4}
              onNextRender={handleNextStep5}
            />
          )}

          {isStep5 && <Step5 />}
        </div>
      </section>
    </main>
  );
}
