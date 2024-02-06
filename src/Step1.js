import { useState } from "react";
import { Button } from "./Button";

// import { Button } from "./Button";

export function Step1({ currentStep, onNextStep, handleLoading }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [isOkayName, setIsOkayName] = useState(true);
  const [isOkayEmail, setIsOkayEmail] = useState(true);
  const [isOkayNum, setIsOkayNum] = useState(true);

  // function handleAuthentication() {
  //   // useEffect(function () {}, []);
  // }
  function handleNextRnder(e) {
    e.preventDefault();
    !name ? setIsOkayName(false) : setIsOkayName(true);
    if (!email) setIsOkayEmail(false);
    !isValidEmail || !email ? setIsOkayEmail(false) : setIsOkayEmail(true);

    if (!number) setIsOkayNum(false);

    if (name && email && isValidEmail(email) && number) {
      handleLoading(true);
      setTimeout(() => {
        handleLoading(false);
        onNextStep();
      }, 2000);
    }
  }
  function isValidEmail(email) {
    // Regular expression for validating email addresses
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function handleName(e) {
    setName(() => e.target.value);

    name.length > 2 ? setIsOkayName(true) : setIsOkayName(false);
  }
  function handleEmail(e) {
    setEmail(() => e.target.value);
    email.length < 4 ? setIsOkayEmail(false) : setIsOkayEmail(true);
  }
  function handleNumber(e) {
    setNumber(() => e.target.value);
    number.length < 8 ? setIsOkayNum(false) : setIsOkayNum(true);
  }

  return (
    <div className="container_info">
      <h2 className="p_info">Personal info</h2>

      <p className="p">
        Please provide your name, email address, and phone number.
      </p>

      <form className="form">
        <div className="name-input">
          <label name="name">
            <span className="spn">
              Name {!isOkayName ? <Error>This field is required</Error> : ""}
            </span>
          </label>
          <input
            type="text"
            value={name}
            className="name"
            onChange={handleName}
            placeholder="e.g Stephen King"
          />
        </div>

        <div className="name-input">
          <label name="email">
            <span className="spn">
              Email Address{" "}
              {!isOkayEmail || !isValidEmail(email) ? (
                <Error> Invalid Email </Error>
              ) : (
                ""
              )}
            </span>
          </label>
          <input
            type="email"
            className="email "
            placeholder="e.g stephenKing@lorem.com"
            value={email}
            onChange={handleEmail}
          />
        </div>

        <div className="name-input">
          <label name="number">
            <span className="spn">
              Phone Number
              {!isOkayNum ? <Error> Invalid Number </Error> : ""}
            </span>
          </label>
          <input
            type="number"
            value={number}
            onChange={handleNumber}
            className="phone"
            placeholder="+1 234 567 890"
          />
        </div>
      </form>
      <Button
        onRender={handleNextRnder}
        // isStep1={isStep1}
        currentStep={currentStep}
      />
    </div>
  );
}

export function Error({ children }) {
  return <p className="error-msg">{children} </p>;
}
