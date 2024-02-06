export function Button({ isStep1, onRender, onPrevRender, isStep4, isStep5 }) {
  return (
    <div className="btn--">
      {!isStep1 ? <BackBtn onPrevRender={onPrevRender} /> : ""}

      <BtnNext onRender={onRender} isStep4={isStep4} />
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

function BtnNext({ onRender, isStep4 }) {
  return (
    <button
      className="next-btn btn "
      style={isStep4 ? { backgroundColor: "#473dff" } : {}}
      onClick={onRender}
    >
      {isStep4 ? "Confirm " : "Next Step"}
    </button>
  );
}
//
