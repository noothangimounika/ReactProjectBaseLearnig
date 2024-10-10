import React from "react";
// import "./CheckoutSteps.css"; // You can style this component as needed

const CheckoutSteps = ({ currentStep }) => {
  const steps = ["Shipping", "Payment", "Summary"];

  return (
    <div className="checkout-steps">
      <ul className="steps-list">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`step ${currentStep === index + 1 ? "active" : ""} ${
              currentStep > index + 1 ? "completed" : ""
            }`}
          >
            {step}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckoutSteps;
