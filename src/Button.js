export function Button({ currentStep, onRender, onPrevRender }) {
  return (
    <div className="btn--">
      {currentStep === 1 ? "" : <BackBtn onPrevRender={onPrevRender} />}

      <BtnNext onRender={onRender} currentStep={currentStep} />
    </div>
  );
}

function BackBtn({ onPrevRender }) {
  return (
    <button onClick={onPrevRender} className="prev-btn btn ">
      Go Back
    </button>
  );
}

function BtnNext({ onRender, currentStep }) {
  return (
    <button
      className="next-btn btn "
      style={currentStep === 4 ? { backgroundColor: "#473dff" } : {}}
      onClick={onRender}
    >
      {currentStep === 4 ? "Confirm " : "Next Step"}
    </button>
  );
}
//
