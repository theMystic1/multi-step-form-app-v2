export function Nav({ isStep1, isStep2, isStep3, isStep4, isStep5 }) {
  return (
    <nav className="side-bar">
      <div className="nav-info">
        <img src="./bg-sidebar-desktop.svg" alt="" className="side-bar-img" />
        <div className="nav-details">
          <div className="step-det">
            {/* <!-- Step 1 Your info Step 2 Select plan Step 3 Add-ons Step 4 Summary --> */}
            <button
              className={`num_btn btn_num-1 ${isStep1 && "btn__active"} `}
              data-num="1"
            >
              1
            </button>

            <div className="step-info">
              <p className="step-num">Step 1</p>
              <h3 className="h3">YOUR INFO</h3>
            </div>
          </div>

          <div className="step-det">
            <button
              className={`num_btn btn_num-2 ${isStep2 && "btn__active"}`}
              data-num="2"
            >
              2
            </button>

            <div className="step-info">
              <p className="step-num">Step 2</p>
              <h3 className="h3">SELECT PLAN</h3>
            </div>
          </div>

          <div className="step-det">
            <button className={`num_btn btn_num-3 ${isStep3 && "btn__active"}`}>
              3
            </button>

            <div className="step-info">
              <p className="step-num">Step 3</p>
              <h3 className="h3">ADD-ONS</h3>
            </div>
          </div>

          <div className="step-det">
            <button
              className={`num_btn btn_num-4 ${
                isStep4 || (isStep5 && "btn__active")
              }`}
            >
              4
            </button>

            <div className="step-info">
              <p className="step-num">Step 4</p>
              <h3 className="h3">SUMMARY</h3>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
