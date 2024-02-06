import React from "react";
import { useState, useRef } from "react";
import "./index.css";
import { Nav } from "./Nav";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Step4 } from "./Step4";
import { Step5 } from "./Step5";
import Spinner from "./spinner";

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const selectedPlan = useRef({});
  const selectedAddOns = useRef({});

  const handleLoading = (loading) => {
    setIsLoading(loading);
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handlePrevStep2 = () => {
    setCurrentStep((prevStep) => prevStep - 2);
  };

  return (
    <main className="main">
      <section className="section section_1" id="section__1">
        <div className="main-section">
          <Nav currentStep={currentStep} />
          {currentStep === 1 && (
            <StepWrapper
              isLoading={isLoading}
              Component={Step1}
              componentProps={{
                onNextStep: handleNextStep,
                handleLoading,
                currentStep,
              }}
            />
          )}

          {currentStep === 2 && (
            <StepWrapper
              isLoading={isLoading}
              Component={Step2}
              componentProps={{
                onPrevRender: handlePrevStep,
                onNextStep: handleNextStep,
                selectedPlan,
                handleLoading,
              }}
            />
          )}
          {currentStep === 3 && (
            <StepWrapper
              isLoading={isLoading}
              Component={Step3}
              componentProps={{
                onPrevRender: handlePrevStep,
                onNextStep: handleNextStep,
                selectedPlan,
                selectedAddOns,
                handleLoading,
              }}
            />
          )}
          {currentStep === 4 && (
            <StepWrapper
              isLoading={isLoading}
              Component={Step4}
              componentProps={{
                onPrevRender: handlePrevStep,
                onNextStep: handleNextStep,
                selectedPlan,
                selectedAddOns,
                handleLoading,
                handlePrevStep2,
                currentStep,
              }}
            />
          )}
          {currentStep === 5 && (
            <StepWrapper
              isLoading={isLoading}
              Component={Step5}
              componentProps={{}}
            />
          )}
        </div>
      </section>
    </main>
  );
}

function StepWrapper({ isLoading, Component, componentProps }) {
  return isLoading ? <Spinner /> : <Component {...componentProps} />;
}
